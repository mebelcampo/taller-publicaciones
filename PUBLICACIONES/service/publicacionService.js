const {Publicaciones}=require('../models')
let listarPublicacionService = async() => {
    try{
        
        let resp= await Publicaciones.findAll();
        return resp;
    }
    catch(e){   

    }
}
module.exports={listarPublicacionService}