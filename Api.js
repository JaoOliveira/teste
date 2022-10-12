const axios = require("axios");
require(".//Src/config/dbconnect.js")
const universidades = require('./Src/models/universidade.js');


    axios.get("http://universities.hipolabs.com/search?country=brazil").then(async function(response){
        await universidades.create(response.data);
      })
