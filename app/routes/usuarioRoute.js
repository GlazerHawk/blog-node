module.exports = function(app){
	app.get('/cadastro/usuario',function(req,res){
		res.render('usuario/cadastroNovoUsuario');
	})
}