const db = require("./db");
async function registrarUsuario(nick) {
    return await db.insertOne("usuario", {"nick":nick});
}

let pesquisarUsuario = async(iduser)=>{
    let user= await db.findOne("usuarios",iduser);
    return user;
}
let modificarUsuario = async (user)=>{
    return await db.updateOne("usuarios",user,{_id:user._id});
}

module.exports = {registrarUsuario, pesquisarUsuario,modificarUsuario}