module.exports = function(app){
	app.get('/cadastro/usuario',function(req,res){
		res.render('usuario/cadastroNovoUsuario');
	})

	app.post('/user/authenticate',function(req,res){
		app.app.controllers.UsuarioController.authenticate(app,req,res);
	});

	app.post('/user/create',function(req,res){
		app.app.controllers.UsuarioController.createUser(app,req,res);
	});
	app.get('/minhaHome',function(req,res){
		res.redirect('/');
	});
} 