module.exports.getLandPage = function(app, req, res){
	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);
	postDAO.getAllPosts(function(error,result){
		res.render('home/index',{posts:result});
	});
}
