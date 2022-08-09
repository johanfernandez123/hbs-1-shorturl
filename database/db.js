const mongoose = require('mongoose')


mongoose
    .connect(process.env.URI)
    .then(()=> console.log('db conectada 👍'))
    .catch(error => console.log(`fallo la conexion error ${error}`))