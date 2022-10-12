const express = require('express');
const universities = require('./routesUniversidade.js')

const routes = (app)=>{
    app.use(
        express.json(),
      universities
      )
}

module.exports = routes;