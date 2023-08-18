const nombre = document.getElementById("txtNombre");
const localidad = document.getElementById("txtLocalidad");
const capacidad = document.getElementById("nbrCapacidad");
const identificador = document.getElementById("txtId");
const titulo = document.getElementById("titulo");


async  function listado(){
    
     const resultado = await fetch("/getEstadios");
     const estadios = await resultado.json();
     const tabla =  document.getElementById("estadios");
     console.log(resultado);
     console.log(estadios);
     tabla.innerHTML ='';
     
     estadios.forEach((element)=>{
        tabla.innerHTML += `<tr>
        <td>${element.id}</td>
        <td>${element.nombre}</td>
        <td>${element.localidad}</td>
        <td>${element.capacidad}</td>
        <td><button onclick="eliminar(${element.id})"><span class="material-symbols-outlined">
         delete
        </span></button>
        <button onclick="editar(${element.id})"><span class="material-symbols-outlined">
         edit
        </span></button></td> 
        </tr>`;
     })
 }

async function eliminar(id){
   //alert(id);
   const resultado = await fetch(`/deleteEstadio/${id}`,{method:'DELETE'});
   listado();
}

async function editar(id){
  // alert(id);
   const respuesta=await fetch('/getEstadio/'+ id, { method: 'GET' });
   const data = await respuesta.json();
   console.log(data.nombre);

   nombre.value = data.nombre;
   localidad.value = data.localidad;
   console.dir(capacidad)
   capacidad.value = data.capacidad;
   identificador.value = data.id;
   titulo.innerHTML = `Editar Estadio ${data.id}`
}

 listado();