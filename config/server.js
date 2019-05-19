let express = require('express');

let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.set('assets', './app/assets');
app.use('/assets', express.static('./app/assets'));

app.listen(port,function(){
	console.log('Servidor rodando com express na porta',port);
})

module.exports = app;