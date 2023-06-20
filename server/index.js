const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express()

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "belleescrita",
  });
  
  app.use(express.json());
  app.use(cors());

//Rota de Login
app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

  db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, password], (err, result) => {
    if (err){
      res.send(err)
    }

    if (result.length > 0){
      res.send({resultado: result})
    }
    else{
      res.send({msg: 'Usuário não encontrado'})
    }
  })
})

//Rota de registro
app.post("/register", (req, res) => {
  const nome = req.body.nome
  const apelido = req.body.apelido
  const email = req.body.email
  const senha = req.body.password

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err){
      res.send(err)
    }

    if (result.length == 0){
      db.query("INSERT INTO usuarios (nome, apelido, email, senha) VALUES (?, ?, ?, ?)", [nome, apelido, email, senha], (error, response) => {
        if (error){
          res.send(error)
        }
        res.send({msg: 'Usuário Cadastrado!'})
      })
    }

    else{
      res.send({msg: 'Esse e-mail já está registrado, falha no cadastro!'})
    }
  })
})

app.post("/enviarredacao", (req, res) => {
  const emailUser = req.body.email
  const idUser = req.body.idAutor
  const tema = req.body.tema
  const introducao = req.body.introducao
  const desenv1 = req.body.desenvolvimento1
  const desenv2 = req.body.desenvolvimento2
  const conclusao = req.body.conclusao

  db.query("INSERT INTO redacoes (tema, introducao, desenvolvimento1, desenvolvimento2, conclusao, idAutorRedacao, statusRed, emailAutor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [tema, introducao, desenv1, desenv2, conclusao, idUser, 'Não corrigida', emailUser], (err, response) => {
    if (err){
      res.send({statusEnvio: 'Erro'})
    }
    res.send({statusEnvio: "Redação enviada com sucesso! Aguarde alguns dias pela correção!"})
  })
})

app.post("/turma", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, result) => {
    if (err){
      res.send(err)
    }
    res.send({resultado: result})
  })
})

app.listen(8081, () => {
    console.log("Rodando na porta 8081")
})
