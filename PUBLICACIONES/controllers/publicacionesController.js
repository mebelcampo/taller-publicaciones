const {listarPublicacionService}= require('../service/publicacionService')
let listarPublicacion = async(req,res) => {
    try{
        
        let respuesta= await listarPublicacionService();
        res.json(respuesta);

    }
    catch(e){

    }
}
module.exports={listarPublicacion}