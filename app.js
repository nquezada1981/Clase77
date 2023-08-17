import express, { urlencoded } from 'express';
import hbs from 'hbs';
import { sequelize, estadio, crearEstadio, listarEstadios} from './models/Estadio.js';
//import { crear }  from './controller/EstadioController.js'

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine','hbs')
//sequelize.sync({force:true});

app.get("/", (req, res)=>{
    res.render("index");
});

app.post("/Estadios", (req, res)=>{
    console.log(req.body);
    crearEstadio(req.body.txtNombre, req.body.txtLocalidad, req.body.nbrCapacidad);
    //res.send("Estadio Creado");
    res.render("index");
})

app.get("/getEstadios", async(req, res)=>{
    //console.log()
    res.send(await listarEstadios())
})

app.listen(3000, ()=>{
    console.log("Servicio levantado")
})