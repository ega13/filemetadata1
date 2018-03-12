var express = require('express');
var app = module.exports = express();
var bodyParse = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var upload = multer({dest:'uploads/'});

app.use(bodyParse.json());
app.use(cors());

app.get('/', function(req,res,next){
res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + '/public'));

app.post('/upload',upload.single('file'), function(req,res,next){
return res.json(req.file);
});






var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
