import express, { urlencoded } from 'express';
import hbs from 'hbs';
import { crearEstadio, listarEstadios, eliminarEstadio, buscarEstadio, editarEstadio} from './models/Estadio.js';
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
    if(req.body.txtId){
        editarEstadio(req.body.txtId, req.body.txtNombre, req.body.txtLocalidad, req.body.nbrCapacidad);
    }else{
        crearEstadio(req.body.txtNombre, req.body.txtLocalidad, req.body.nbrCapacidad);
    }
    //res.send("Estadio Creado");
    res.render("index");
})

app.get("/getEstadios", async(req, res)=>{
    //console.log()
    res.send(await listarEstadios())
})

app.delete("/deleteEstadio/:id", async(req, res)=>{
    console.log(req.params.id);
    await eliminarEstadio(req.params.id);
    res.sendStatus(200);
})

app.get("/getEstadio/:id", async(req, res)=>{
    res.send(await buscarEstadio(req.params.id))
})

app.listen(3000, ()=>{
    console.log("Servicio levantado")
   
})