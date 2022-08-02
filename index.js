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
    mongoose.connect('mongodb+srv://userRevisao:thi020206@cluster0.s3hds.mongodb.net/?retryWrites=true&w=majority')
}

/*configuração do banco de dados -fim */

/* rota para a requisição / */
app.get('/',(req,res)=>{
    conexao()
    //res.send('Funcionando')
    res.render('index.ejs',{nome:"Alunos Feiosos", turma:"2EMIA", disciplina:"LP2"})
})