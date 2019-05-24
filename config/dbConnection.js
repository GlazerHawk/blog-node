let mysql = require('mysql');

let connMySQL = function(){
	console.log('Conexão com o banco');
	return connection = mysql.createConnection({
		host: 'localhost',
		user: 'admin',
		password: 'admin',
		database: 'BLOGNODE'
	});
}

module.exports = function(){
	return connMySQL;
}