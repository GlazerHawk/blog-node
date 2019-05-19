
let dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	app.get('/professores', function (req, res) {
		let connection = dbConnection();
		let sql = 'select * from professores';
		connection.query(sql, function (error, result) {
			res.render('professores/professores',{professores:result});
		});
	});
}
