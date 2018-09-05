const express = require('express');
const port = 3000;


 var app = express();

 app.get('/', function(req, res) {
   res.send('If you can watch this, the page is working DanFreeman!!');
 });

 app.listen(port, function() {
   console.log('listening local host on localhost:3000!');
 });
