const express=require('express');
const bodyParser=require('bodyParser');


var app=express();
app.listen(3000);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended:false;
}));


app.use('');
