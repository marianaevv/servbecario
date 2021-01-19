
let API_TOKEN = 'TokenAdmi'
function enviarPreferencia (nombre, correo, nomina,alumno1, matricula1,alumno2, matricula2,
    alumno3, matricula3,alumno4, matricula4,alumno5, matricula5,alumno6, matricula6,
    alumno7, matricula7,alumno8, matricula8){
    let urlCreate = '/api/newMaestro';
    let solicitud = {
        nombre:nombre,
        nomina:nomina,
         correo:correo,
        alumno1:alumno1,
        matricula1:matricula1,
        alumno2:alumno2,
        matricula2:matricula2,
        alumno3:alumno3,
        matricula3:matricula3,
        alumno4:alumno4,
        matricula4:matricula4,
        alumno5:alumno5,
        matricula5:matricula5,
        alumno6:alumno6,
        matricula6:matricula6,
        alumno7:alumno7,
        matricula7:matricula7,
        alumno8:alumno8,
        matricula8:matricula8,
    }
    let settings = {
        method:'POST',
        headers : {
            Authorization : `Bearer ${API_TOKEN}`,
			'Content-Type' : 'application/json'
        },
        body : JSON.stringify( solicitud )
    }
    console.log(solicitud);
    fetch(urlCreate, settings)
    .then(response=>{
        if(response.ok){
         
            return response.json();
        }
        return response.statusText;
    })
    .catch(err=>{
        throw new Error (response.statusText);
    })
}

function watchUsersRegisterForm(){
let btnEnviar = document.querySelector('.btnEnviar');
btnEnviar.addEventListener('click', (event)=>{
    console.log("click");
    let inputNombre = document.querySelector('#nombre');
    let inputNomina = document.querySelector('#nomina');
    let inputCorreo = document.querySelector('#correo');
    let inputAlumno1 = document.querySelector('#alumno1');
    let inputMatricula1 = document.querySelector('#matricula1');
    let inputAlumno2 = document.querySelector('#alumno2');
    let inputMatricula2 = document.querySelector('#matricula2');
    let inputAlumno3 = document.querySelector('#alumno3');
    let inputMatricula3 = document.querySelector('#matricula3');
    let inputAlumno4 = document.querySelector('#alumno4');
    let inputMatricula4 = document.querySelector('#matricula4');
    let inputAlumno5 = document.querySelector('#alumno5');
    let inputMatricula5 = document.querySelector('#matricula5');
    let inputAlumno6 = document.querySelector('#alumno6');
    let inputMatricula6 = document.querySelector('#matricula6');
    let inputAlumno7 = document.querySelector('#alumno7');
    let inputMatricula7 = document.querySelector('#matricula7');
    let inputAlumno8 = document.querySelector('#alumno8');
    let inputMatricula8 = document.querySelector('#matricula8');
    event.preventDefault();
    enviarPreferencia(inputNombre.value, inputNomina.value,inputCorreo.value,
        inputAlumno1.value, inputMatricula1.value,inputAlumno2.value, inputMatricula2.value,
        inputAlumno3.value, inputMatricula3.value,inputAlumno4.value, inputMatricula4.value,
        inputAlumno5.value, inputMatricula5.value,inputAlumno6.value, inputMatricula6.value,
        inputAlumno7.value, inputMatricula7.value,inputAlumno8.value, inputMatricula8.value
        );
        nombre ="";
        nomina ="";
        correo="";
    
});

}

function init(){
watchUsersRegisterForm();
}

init();