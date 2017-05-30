let express = require("express"),
    bodyParser = require('body-parser'),
    app = express(),
    ejs = require('ejs'),
    urlencodedParser = bodyParser.urlencoded({ extended: false });

let server = app.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Adresse du serveur : http://localhost:3000", port);
});

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, '/public')));
app.engine('html', require('ejs').renderFile);

app.get('/home', function(req, res) { 
    res.render('index.html');
})

app.get('/header', function(req, res) {
      res.render('header.html');
    });