var express = require('express');
var assert = require('assert');
var router = express.Router();
var restify = require('restify-clients')

var client = restify.createJSONClient({
  url:'http://localhost:4000'
  // endereco do nosso servidor de cliente
});
//aqui esta declarando onde está nosso  serviço

/* GET users listing. */
router.get('/', function(req, res, next) {
     
   client.get('/users', function (err , request , response , obj)
   {
     assert.ifError(err);

      res.end(JSON.stringify(obj,null,2));
   });
   //chamada do nosso cliente

});

module.exports = router;
