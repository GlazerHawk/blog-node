module.exports.authenticate = function(app, req,res){
	let user = req.body;

	let connection = app.config.dbConnection();
	let userDAO = new app.app.models.DAO.UsuarioDAO(connection);
	userDAO.autenticar(user, function (error, result) {

        if (error) {
            console.log("Erro");
            console.log(error);
            console.error("usuário não autenticado");
        }
        if(result.length > 0){
            console.log("Usuário logado");
            console.log("Resultado da query",result);
            req.session.autorizado = true;
            let userID = result[0].ID;
            req.session.userID = userID;
            console.log("USER ID UsuarioController:"+req.session.userID);

            if(userID == 1)
                res.redirect('/blog/homeAdmin');
            else
                res.redirect('/blog/homeUser');
            return;
        } else{
            console.log("Usuário ou password inexistente");
            res.redirect('/');
            return;
        }
        res.redirect('/');
    })
};

module.exports.createUser = function(app, req,res){
	let user = req.body;

	let connection = app.config.dbConnection();
	let userDAO = new app.app.models.DAO.UsuarioDAO(connection);
	userDAO.createUser(user,function(error, result){

        if(error){
            console.log("Erro");
            console.log(error);
            console.log("Não foi possível realizar cadastro de usuário");
        }
		res.redirect('/');
	})
}; 