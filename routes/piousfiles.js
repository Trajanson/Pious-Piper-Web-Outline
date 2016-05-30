var express = require('express');
var router = express.Router();
var path = require('path');



router.get('/getPious', function(req, res) {
  var root = __dirname + '/../piousFiles';
  var filename = 'random.txt';
  var options =   {
      root: root,
      headers: {
          "content": "text/html;charset=utf-8",
          "Content-Type": "application/octet-stream",
          "Expires":"0",
          "Cache-Control": "must-revalidate, post-check=0, pre-check=0",
          "content-disposition": "attachment;filename=" + filename
      }
  };

  res.sendFile( filename ,options);
});


module.exports = router;
