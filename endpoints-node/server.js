import express from 'express'

const app = express(); 
const PORT = 3000; 
app.use(express.json());
/*haciendo el primer endpoint*/

app.get ('/', (req, res) => {
    res.send ('Este es un endpoint hecho con express')
}); 

//endpoint
app.get('/api/user/:id', (req,res) => {
    //destructuracion
    const {id} = req.params
    res.json({message: `El usuario con id ${id} es Pepito`});
});

//query params
app.get('/api/search', (req,res) => {
    const {name, lastname} = req.query
    res.json({
        firtsName: name, 
        lastname,  
    });
    //http://localhost:PUERTO/api/search?name=Mary&lastname=Llusco 
});

//endpoint POST
app.post('/api/user', (req,res)=>{
    const {name, email} = req.body
    res.json ({message: "Usuario CReado", data: {name, email}});
});

//inicia el servidor
app.listen (PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`); 
}); 