const db = require("./db");
function listarSalas() {
    return db.findAll("salas")
}

let buscarSalas = async(idsala)=>{
    return db.findOne("salas",idsala);
}
let pegarMensagens=async(sala)=>{
    return await db.updateOne("salas",sala,{_id:sala._id});
}

let buscarMensagens = async (idsala,timestamp)=>{
    let sala = await buscarSalas(idsala);
    if(sala.mensagens){
        let mensagens=[];
        sala.msgs.forEach((mensagem)=>{
            if(mensagem.timestamp >= timestamp){
                mensagens.push(mensagem);
            }
        });
        return mensagens;
    }
    return [];
}

function listarSalas(){
    return[
        {
            "_id": {
                "$oid": "64ece43ea11e6e5b0421f10"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "publica"
        }, {
            "_id": {
                "$oid": "64ece43ea11e6e5b0421f12"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "at8q4haw"
        }, {
            "_id": {
                "$oid": "64ece43ea11e6e5b0421f18"
            },
            "nome": "Guerreiros da INFO",
            "tipo": "publica"
        }
    ];
}


module.exports = {listarSalas,buscarSalas,pegarMensagens,buscarMensagens}