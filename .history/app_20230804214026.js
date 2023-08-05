const express = require('express');

const app = express();

app.use((req,res)=>{

    res.json({message:'Votre reponse a bien ete recu'})

})

module.exports = app;