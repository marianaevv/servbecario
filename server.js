const express = require('express');
const { PORT } = require('./src/config');
const rutas = require('./src/routes/routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {CONNECTION_URL} = require('./src/config');
const mongoose = require('mongoose');
const jsonParser = bodyParser.json();

// Init
const app = express();
app.use(express.static("public"));

// Middlewares
app.use(morgan('dev'));


// Routes
app.use('/', rutas );




// Starting server
app.listen(PORT,() =>
{
    new Promise( (resolve,reject) =>{

        const settings = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        };

        mongoose.connect(CONNECTION_URL,settings,(err) =>{
            if (err){
                reject(err);
            }
            else{
                console.log("Database connected");
                return resolve();
            }
        });
    })
    .catch(err =>{
        mongoose.disconnect();
        console.log(err);
    })
    console.log("This server is using port "+PORT);
});
