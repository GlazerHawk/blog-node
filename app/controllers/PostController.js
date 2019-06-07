
module.exports.viewPost = function (app, req, res) {
	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);
	let url  = require("url");
	let params = url.parse(req.url, true);
	let id = params.query.id;
	postDAO.getPostById(id, function(error,result){
		res.render('post/post',{post:result});
	});
};

module.exports.createPost = function(app, req,res){
	let post = req.body;

	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);
	postDAO.createPost(post,function(error, result){
		res.redirect('/blog/homeAdmin');
	})
};

module.exports.deletePost = function(app, req,res){
	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);
	let url  = require("url");
	let params = url.parse(req.url, true);
	let id = params.query.id;
	postDAO.deletePost(id,function(error, result){
		res.redirect('/blog/homeAdmin');
	})
};

module.exports.editPost = function(app, req,res){
	let post = req.body;
	let url  = require("url");
	let params = url.parse(req.url, true);
	let id = params.query.id;

	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);

	postDAO.getPostById(id,function(error, result){
		console.log('****************ERRO********************');
		console.log(error);
		res.render('post/editPost',{post:result});
	})
};

module.exports.updatePost = function(app, req,res){
	let post = req.body;

	let connection = app.config.dbConnection();
	let postDAO = new app.app.models.DAO.PostDAO(connection);

	postDAO.updatePost(post,function(error, result){
		console.log('****************ERRO********************');
		console.log(error);
		res.redirect('/');
	})
};
