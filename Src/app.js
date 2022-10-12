const express = require("express");
const db = require("./config/dbconnect.js")
const routes = require('./routers/index.js')

db.on("error",console.log.bind(console,'Erro de conexão'))
db.once("open",()=>{
  console.log("Conexão concluida!!!")
})

const app = express();

routes(app);


  module.exports = app;