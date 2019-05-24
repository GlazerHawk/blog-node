let express = require('express');
let app = express();
let consign = require('consign');

let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('assets', './app/assets');
app.use('/assets', express.static('./app/assets'));
app.use('/dbImages', express.static('./app/assets/dbImages'));

consign().include('app/routes').include('app/models').then('config/dbConnection.js').into(app);



app.listen(port,function(){
	console.log('Servidor rodando com express na porta',port);
});

module.exports = app;