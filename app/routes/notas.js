
let dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	app.get('/notas', function (req, res) {
		let connection = dbConnection();
		let sql = 'select * from estudantes';
		connection.query(sql, function (error, result) {
			res.render('notas/notas',{notas:result});
		});
	});
}
