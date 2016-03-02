var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET hello world page
router.get('/helloworld', function(req,res){
  res.render('helloworld', { title: 'Hello, World!'});
})

// GET gallery list page
router.get('/gallerylist', function(req,res){
    var db = req.db;
    var collection = db.get('gallerycollection');
    collection.find({},{}, function(e,docs){
        res.render('gallerylist', {
            "gallerylist" : docs
        })
    });
});


module.exports = router;