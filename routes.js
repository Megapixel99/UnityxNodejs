
var express = require("express");
var mongoose = require("mongoose");
var Info = require("./models/Info");

var router = express.Router();

router.get("/",function(request,response){
	response.sendFile(__dirname + "/public/views/index.html");
});


const myDatabase = require('./myDatabase');

let db = new myDatabase();

router.get('/read', function(req, res){


Info.find({},function(error,info) {
	if (error) {
		return res.json(null);
	} else {
		let objs = [];
		for (let i=0;i<info.length;i++) {
		  objs.push({ident:info[i].ident,name:info[i].name});
		}
		return res.json(objs);
	}
});
});

});
router.post('/create', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}
});


});
router.put('/update', function(req, res){
	if (req.body.name == "") {
		res.json(null);
		return;
	}

Info.findOneAndUpdate({ident:req.body.ident},{name:req.body.name},function(error,info) {
          if (error) {
              return res.json(null);
          }
          else if (info == null) {
              return res.json(null);
          }
          return res.json(req.body);
      });

});

module.exports = router;
