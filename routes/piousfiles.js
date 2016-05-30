var express = require('express');
var router = express.Router();
var path = require('path');
var multer = require('multer');
var upload = multer({ dest: 'public/uploads/textfiles'});


router.get('/getPiousSample', function(req, res) {
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

router.post('/uploadText',[ upload.any(), function(req, res, next) {
  var fileInfo = req.files[0],
      fileName = fileInfo['filename'];
  console.log(req.files);
  console.log(fileInfo);

  var root = __dirname + '/../piousFiles';
  var filename = 'random.txt';
  var options =   {
      root: root,
      headers: {
          // "content": "text/html;charset=utf-8",
          "Content-Type": "application/octet-stream",
          "Expires":"0",
          "Cache-Control": "must-revalidate, post-check=0, pre-check=0",
          "content-disposition": "attachment;filename=" + filename
      }
  };





  // res.attachment("uploads/textfiles" + fileName);
  // res.status(200).end();  
  res.sendFile( filename ,options);
  // res.status(200).end();

  // res.status(400).send("req.files");


// [ { fieldname: 'piousFile',
//     originalname: 'randomtext_lorem_p.txt',
//     encoding: '7bit',
//     mimetype: 'text/plain',
//     destination: 'public/uploads/textfiles',
//     filename: '0a803dde5f918979554f9f7d406c69c7',
//     path: 'public/uploads/textfiles/0a803dde5f918979554f9f7d406c69c7',
//     size: 978 } ]


}]);

module.exports = router;
