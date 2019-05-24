module.exports = function(app){
	app.get('/viewPost', function (req, res) {
		let connection = app.config.dbConnection();
		let postDAO = app.app.models.DAO.postDAO;

		let url  = require("url");
		let params = url.parse(req.url, true);
		let id = params.query.id;


		postDAO.getPostById(connection,id, function(error,result){
			res.render('post/post',{post:result});
		});
	});
}