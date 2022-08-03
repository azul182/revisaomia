/* configurações do servidor */
//carregar o módulo express 
const express = require('express')
//executar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local 
app.listen(666,()=>{
    console.log("servidor local em http://localhost:666")
})
/* configurações do servidor - fim */

/* configuração do bando de cados - início*/
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o script de conexão 
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:thi020206@cluster0.s3hds.mongodb.net/revisao?retryWrites=true&w=majority')
}
//configurar o modelo para a coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
//definir o modelo para a coleção alunos
const alunos = mongoose.model('alunos',modelo)
/*configuração do banco de dados -fim */

/* rota para a requisição / */
app.get('/',async(req,res)=>{
    conexao()
    //pesquisar os documentos na collection alunos 
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('Funcionando')
    res.render('index.ejs',{resultado})
})