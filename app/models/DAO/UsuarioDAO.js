	function UsuariODAO(connection) {
		this.connection = connection;
	}

	UsuariODAO.prototype.autenticar = function (usuario, callback) {
		console.log("CHeguei no usuárioDAO autenticar");
		console.log(usuario);
		let sql = "select * from USERS where EMAIL = '"+usuario.EMAIL+"' and password = '"+usuario.PASSWORD + "'";
		console.log(sql);
		this.connection.query(sql, callback);
	}

	UsuariODAO.prototype.createUser = function(post,callback){
		let sql = 'INSERT INTO USERS SET ?';
		this.connection.query(sql,post,callback);
	}

	module.exports = function(){ 
		return UsuariODAO;
	}	 