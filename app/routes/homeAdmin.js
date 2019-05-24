module.exports = function(app){
	app.get('/blog/homeAdmin', function (req, res) {
		let connection = app.config.dbConnection();
		let sql = 'select * from POST';
		connection.query(sql, function (error, result) {
			res.render('home/home',{posts:result,qtdPosts:3});
		});
	});
}