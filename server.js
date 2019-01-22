const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient;
var checker;


var db;
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

MongoClient.connect('mongodb://user:mongodb123@ds013599.mlab.com:13599/examen', { useNewUrlParser : true} , (err, client) => {
	
  if (err) return console.log(err)
  db = client.db('examen')
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
});

app.get('/', (req, res) => {
	var cursor =  db.collection('inhaal').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
})
}) ;
    
app.post('/inhaal', (req, res) => {

 // if(db.collection('inhaal').getItem(req) = req)
 // {
 //  console.log('Deze aanvraag is al in verwerking.');
 // }
 // else
 // {
    db.collection('inhaal').insertOne(req.body, (err, result) => {
              if (err) return console.log(err)
                    console.log('Verzoek opgeslagen')
                          res.redirect('/')
                            }) 
 // }

});
 