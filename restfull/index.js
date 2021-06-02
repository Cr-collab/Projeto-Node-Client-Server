const express = require('express');
const consign = require("consign");
const expressValidator = require("express-validator");



let app = express();


app.use(express.urlencoded({ extended: true,limit:'50mb' }));
app.use(express.json({limit:'50mb'}));
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(4000,'127.0.0.1',()=>
{
       console.log('Servidor Rodamdo!');
});
