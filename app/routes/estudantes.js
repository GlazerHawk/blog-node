module.exports = function(app){
	app.get('/insere-notas',function(req,res){
		res.render('../app//views/admin/insere_notas');
	})
}
