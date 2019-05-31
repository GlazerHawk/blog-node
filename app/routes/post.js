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

	app.post('/post/create',function(req,res){
		let post = req.body;
		
		let connection = app.config.dbConnection();
		let postDAO = app.app.models.DAO.postDAO;

		postDAO.createPost(post,connection,function(error, result){
			console.log('****************ERRO********************');
			console.log(error);
			res.redirect('/blog/homeAdmin');
		})
	});

	app.get('/post/edit',function(req,res){
		let post = req.body;
		let url  = require("url");
		let params = url.parse(req.url, true);
		let id = params.query.id;
		
		let connection = app.config.dbConnection();
		let postDAO = app.app.models.DAO.postDAO;

		postDAO.getPostById(connection,id,function(error, result){
			console.log('****************ERRO********************');
			console.log(error);
			res.render('post/editPost',{post:result});
		})
	});

	app.post('/post/update',function(req,res){
		let post = req.body;
				
		let connection = app.config.dbConnection();
		let postDAO = app.app.models.DAO.postDAO;

		postDAO.updatePost(post,connection,function(error, result){
			console.log('****************ERRO********************');
			console.log(error);
			res.redirect('/');
		})
	});
}