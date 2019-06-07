let express = require('express');
let app = express();
let consign = require('consign');
let body_parser = require('body-parser');
let expressValidator = require('express-validator');
let port = 5000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('assets', './app/assets');
app.use('/assets', express.static('./app/assets'));
app.use('/dbImages', express.static('./app/assets/dbImages'));
app.use(expressValidator());
app.use(body_parser.urlencoded({extended:true}));

consign().include('app/routes').include('app/models').include('app/controllers').then('config/dbConnection.js').into(app);



app.listen(port,function(){
	console.log('Servidor rodando com express na porta',port);
});

module.exports = app;