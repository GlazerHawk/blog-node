
let dbConnection = require('../../config/dbConnection');

module.exports = function(app){
	app.get('/post', function (req, res) {
		let connection = dbConnection();
		let sql = 'select * from POST';
		connection.query(sql, function (error, result) {
			res.render('home/index',{posts:result});
		});
	});
}