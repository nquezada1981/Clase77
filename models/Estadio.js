import { Sequelize, DataTypes } from "sequelize";
export const sequelize = new Sequelize("postgres://susanamunoz:@localhost:5432/ercompleto");
//postgres://user:pass@example.com:5432/dbname

export const estadio = sequelize.define('Estadio',{
    nombre:{type:DataTypes.STRING},
    localidad:{type:DataTypes.STRING},
    capacidad:{type:DataTypes.INTEGER}
});

export function crearEstadio( nombre, localidad, capacidad){ 
    estadio.create({nombre, localidad, capacidad});
}

export async function listarEstadios( ){
  //console.log(await estadio.findAll())
    return await estadio.findAll();
}

export async function eliminarEstadio(id ){
    //console.log(await estadio.findAll())
    const aux =  await estadio.findByPk(id);
    return await aux.destroy(id);
}
export async function buscarEstadio(id){
    return await estadio.findByPk(id);
}

export async function editarEstadio(id, nombre,localidad, capacidad){
    const aux = await estadio.findByPk(id);
    aux.nombre = nombre;
    aux.localidad = localidad;
    aux.capacidad = capacidad;
    return aux.save();
    //aux.update({nombre, localidad, capacidad})
}