var express = require('express');
var app = express();

app.get('/notes', function(req, res){
  res.json([
    {
      title: 'blah note1',
      body_html: 'this is a hard coded note1.'},
    {
      title: 'blah note2',
      body_html: 'this is a hard coded note2.'
    }
  ]);
});

app.listen(3000, function(){
  console.log('Listening on http://localhost:3000');
});
