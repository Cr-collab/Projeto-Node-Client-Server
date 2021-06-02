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

     res.json(obj);
   });
   //chamada do nosso cliente

});



/* GET users listing. */
router.get('/:id', function(req, res, next) {
     
  client.get(`/users/${req.params.id}`, function (err , request , response , obj)
  {
    assert.ifError(err);

     res.json(obj);
  });
  //chamada do nosso cliente

});

/* GET users listing. */
router.put('/:id', function(req, res, next) {
     
  client.put(`/users/${req.params.id}`,req.body, function (err , request , response , obj)
  {
    assert.ifError(err);

     res.json(obj);
  });
  //chamada do nosso cliente

});

/* GET users listing. */
router.delete('/:id', function(req, res, next) {
     
  client.del(`/users/${req.params.id}`, function (err , request , response , obj)
  {
    assert.ifError(err);

     res.json(obj);
  });
  //chamada do nosso cliente

});


/* GET users listing. */
router.post('/', function(req, res, next) {
     
  client.post(`/users`,req.body, function (err , request , response , obj)
  {
    assert.ifError(err);

     res.json(obj);
  });
  //chamada do nosso cliente

});


module.exports = router;
