const { send } = require('express/lib/response');
const Url = require('../models/Url')
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 6 });

const leerUrls =  async (req,res) => {

    try {
        const urls = await Url.find().lean();
        res.render('home',{urls})    

    } catch (error) {
        res.send('Error al cargar')
        console.log(error)
    }
}

const agregarUrl = async(req,res)=>{
    const {origin} = req.body

    try {
        const url = new Url({origin: origin, shortUrl: uid()});
        await url.save();
        res.redirect('/')

    } catch (error) {
        console.log(error)
        res.send('error al insertar')
    }

}

const eliminarUrl = async (req,res)=>{
    const {id} = req.params

    try {
        await Url.findByIdAndDelete(id)
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.send('error al eliminar')
    }
}

const editarUrlForm = async (req,res)=> {
    const {id} = req.params

    try {
        const url = await Url.findById(id).lean();
        res.render('home', {url})
        
    } catch (error) {
        console.log(error)
        res.send('error al editar')
    }
}

const editarUrl = async (req,res)=> {
    const {id} = req.params
    const {origin} = req.body
    try {
        await Url.findByIdAndUpdate(id,{origin: origin}).lean();
        
        res.redirect('/')
        
    } catch (error) {
        console.log(error)
        res.send('error al editar')
    }
}

const redireccionamiento = async (req,res) =>{
    const {shortUrl} = req.params
    try {
        const urlDB = await Url.findOne({shortUrl: shortUrl})
        res.redirect( urlDB.origin)
    } catch (error) {
        
    }
}

module.exports = {
    leerUrls,
    agregarUrl,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamiento
} 