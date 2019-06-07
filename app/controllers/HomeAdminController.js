module.exports.getHomeAdmin = function(app){

	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);
	postDAO.getAllPosts(function(error,result){
		res.render('home/homeAdmin',{posts:result});
	});
}