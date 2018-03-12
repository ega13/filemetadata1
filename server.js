var express = require('express');
var app = module.exports = express();
var bodyParse = require('body-parser');
var cors = require('cors');
var mukter = require('multer');

app.use(bodyParse.json());
app.use(cors());








var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
