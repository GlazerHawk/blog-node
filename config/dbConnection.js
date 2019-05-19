let mysql = require('mysql');

module.exports = function(app){
	return connection = mysql.createConnection({
		host: 'localhost',
		user: 'admin',
		password: 'admin',
		database: 'BLOGNODE'
	});
}