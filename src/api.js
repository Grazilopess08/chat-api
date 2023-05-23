var express = require("express");
var app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const router = express.Router();
app.use('/', router.get('/', (req, res)=>{
    res.status(200).send("<h1>API - CHAT</h1>")
}));

app.use("/",router.get("/sobre", (req, res, next) => {
    res.status(200).send({
        "nome": "API - CHAT",
        "versão": "0.1.0",
        "autor": "Grazielly Lopes Terres"
    })
}));

app.use("/",router.get("/salas", (req, res, next) => {
    const salaController = require("./controllers/salaController");
    let resp = salaController.get();
    res.status(200).send(resp);
}));

app.use("/",router.post("/entrar", async(req, res, next) => {
    const usuarioController = require("./controllers/usuarioController");
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}));

app.use("/",router.put("/salas/entrar",async(req,res)=>{
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick))
    return false;
    let resp= await salaController.entrar(req.headers.iduser,req.query.idsala);
    res.status(200).send(resp);
}));

app.use("/",router.post("/salas/mensagem",async(req,res)=>{
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick))return false;
    let resp= await salaController.enviarMensagem(req.headers.nick,req.body.msg,req.query.idsala);
    res.status(200).send(resp);
}));

app.use("/",router.get("/salas/mensagens",async(req,res)=>{
    if(!token.checktoken(req.headers.token,req.headers.iduser,req.headers.nick))return false;
    let resp= await salaController.buscarMensagens(req.query.idsala,req.query.timestamp);
    res.status(200).send(resp);
}));

module.exports=app;
