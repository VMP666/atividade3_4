const express = require("express");
const app = express();

app.get("/:nome/:idade", (req, res)=>{
    const {nome, idade} = req.params;
    res.status(200).json({
        mensagem:`Seu nome: ${nome}, Sua idade é: ${idade}`
    //res.send("vmp da zl")
    })
})

app.get("/666", (req, res)=>{
    res.send("easter egg dos adm, se precisar to aqui")
})

app.listen(3001, ()=>{
    console.log("VICTOR, seu servidor está ligado!")
})