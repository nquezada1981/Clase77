async  function listado(){
    
     const resultado = await fetch("/getEstadios");
     const estadios = await resultado.json();
     const tabla =  document.getElementById("estadios");
     console.log(resultado);
     console.log(estadios);
     tabla.innerHTML += `<tr><th>NOMBRE</th><th>LOCALIDAD</th><th>CAPACIDAD</th></tr>`;
     
     estadios.forEach((element)=>{
        tabla.innerHTML += `<tr><td>${element.nombre}</td>
        <td>${element.localidad}</td>
        <td>${element.capacidad}</td>
        </tr>`;
     })
 }

 listado();