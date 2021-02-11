

function getAllCustomers() {

	let url = '/api/maestros';
	let settings = {
		method : 'GET',
	}

	let results = document.querySelector('.results');

	fetch( url, settings )
		.then( response => {
			if( response.ok){
				return response.json();
			}
			else{
				throw new Error( response.statusText);
			}
        })
        
		.then (responseJSON => {console.log(responseJSON);
			results.innerHTML = "";
			for(let i = 0; i < responseJSON.length; i++){
                results.innerHTML += `
                <tr>
                <td>${i}</td>
                    <td>${responseJSON[i].nombre}</td>
                    <td>${responseJSON[i].nomina}</td>
                    <td>${responseJSON[i].correo}</td>
                    <table>
                    <tr>
                        <td>${responseJSON[i].alumnos.alumno1}</td>
                    </tr>
                    <tr>
                        <td>${responseJSON[i].alumnos.alumno2}</td>
                    </tr>
                    <tr>
                    <td>${responseJSON[i].alumnos.alumno3}</td>
                </tr>
                <tr>
                <td>${responseJSON[i].alumnos.alumno4}</td>
            </tr>
            <tr>
            <td>${responseJSON[i].alumnos.alumno5}</td>
        </tr>
        <tr>
        <td>${responseJSON[i].alumnos.alumno6}</td>
    </tr>
    <tr>
    <td>${responseJSON[i].alumnos.alumno7}</td>
</tr>
<tr>
<td>${responseJSON[i].alumnos.alumno8}</td>
</tr>
                 </table>
                 </td>
                 <td> 
                <table>
                    <tr>
                        <td>${responseJSON[i].alumnos.matricula1}</td>
                    </tr>
                    <tr>
                        <td>${responseJSON[i].alumnos.matricula2}</td>
                    </tr>
                    <tr>
                    <td>${responseJSON[i].alumnos.matricula3}</td>
                </tr>
                <tr>
                <td>${responseJSON[i].alumnos.matricula4}</td>
            </tr>
            <tr>
            <td>${responseJSON[i].alumnos.matricula5}</td>
        </tr>
        <tr>
        <td>${responseJSON[i].alumnos.matricula6}</td>
    </tr>
    <tr>
    <td>${responseJSON[i].alumnos.matricula7}</td>
</tr>
<tr>
<td>${responseJSON[i].alumnos.matricula8}</td>
</tr>

                 </table>
                    <td>${responseJSON[i].comentarios}</td>
                </tr>
				`
			}
		})
		.catch( err => {
			results.innerHTML = err.message;
		});
}

function watchDeleteUserForm(){

let btnActualizar = document.querySelector('.btnActualizar');
btnActualizar.addEventListener('click',(event)=>{
event.preventDefault();
getAllCustomers();
});
}

function init(){
watchDeleteUserForm();
}

init();

/*<td>
                        <tr>${responseJSON[i].alumnos.alumno1}</tr>
                        <tr>${responseJSON[i].alumnos.alumno2}</tr>
                        <tr>${responseJSON[i].alumnos.alumno3}</tr>
                        <tr>${responseJSON[i].alumnos.alumno4}</tr>
                        <tr>${responseJSON[i].alumnos.alumno5}</tr>
                        <tr>${responseJSON[i].alumnos.alumno6}</tr>
                        <tr>${responseJSON[i].alumnos.alumno7}</tr>
                        <tr>${responseJSON[i].alumnos.alumno8}</tr>
                    </td>
                     <td>
                    <tr>${responseJSON[i].alumnos.matricula1}</tr>
                        <tr>${responseJSON[i].alumnos.matricula2}</tr>
                        <tr>${responseJSON[i].alumnos.matricula3}</tr>
                        <tr>${responseJSON[i].alumnos.matricula4}</tr>
                        <tr>${responseJSON[i].alumnos.matricula5}</tr>
                        <tr>${responseJSON[i].alumnos.matricula6}</tr>
                        <tr>${responseJSON[i].alumnos.matricula7}</tr>
                        <tr>${responseJSON[i].alumnos.matricula8}</tr>

                    </td>
                    <td>
                        ${responseJSON[i].comentarios}
                    </td> */

       /*             <table>
                    <tr>
                        <td>${responseJSON[i].alumnos.alumno1}</td>
                    </tr>
                    <tr>
                        <td>${responseJSON[i].alumnos.alumno2}</td>
                    </tr>
                    <tr>
                    <td>${responseJSON[i].alumnos.alumno3}</td>
                </tr>
                <tr>
                <td>${responseJSON[i].alumnos.alumno4}</td>
            </tr>
            <tr>
            <td>${responseJSON[i].alumnos.alumno5}</td>
        </tr>
        <tr>
        <td>${responseJSON[i].alumnos.alumno6}</td>
    </tr>
    <tr>
    <td>${responseJSON[i].alumnos.alumno7}</td>
</tr>
<tr>
<td>${responseJSON[i].alumnos.alumno8}</td>
</tr>
                 </table>
                 </td>
                 <td> 
                <table>
                    <tr>
                        <td>${responseJSON[i].alumnos.matricula1}</td>
                    </tr>
                    <tr>
                        <td>${responseJSON[i].alumnos.matricula2}</td>
                    </tr>
                    <tr>
                    <td>${responseJSON[i].alumnos.matricula3}</td>
                </tr>
                <tr>
                <td>${responseJSON[i].alumnos.matricula4}</td>
            </tr>
            <tr>
            <td>${responseJSON[i].alumnos.matricula5}</td>
        </tr>
        <tr>
        <td>${responseJSON[i].alumnos.matricula6}</td>
    </tr>
    <tr>
    <td>${responseJSON[i].alumnos.matricula7}</td>
</tr>
<tr>
<td>${responseJSON[i].alumnos.matricula8}</td>
</tr>

                 </table>*/