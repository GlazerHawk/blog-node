module.exports = function(app){
	app.get('/', function (req, res) {
		let connection = app.config.dbConnection();
		let postDAO = app.app.models.DAO.postDAO;

		postDAO.getAllPosts(connection, function(error,result){
			res.render('home/index',{posts:result});
		});
	});
}
