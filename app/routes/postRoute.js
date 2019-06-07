module.exports = function(app){
	app.get('/viewPost', function (req, res) {
		app.app.controllers.PostController.viewPost(app,req,res);
	});

	app.post('/post/create',function(req,res){
		app.app.controllers.PostController.createPost(app,req,res);
	});

	app.get('/post/delete',function(req,res){
		app.app.controllers.PostController.deletePost(app,req,res);
	});

	app.get('/post/edit',function(req,res){
		app.app.controllers.PostController.editPost(app,req,res);
	});

	app.post('/post/update',function(req,res){
		app.app.controllers.PostController.updatePost(app,req,res);
	});
}