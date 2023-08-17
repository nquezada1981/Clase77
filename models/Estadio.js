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