	function PostDAO(connection) {
		this.connection = connection;
	}

	PostDAO.prototype.getAllPosts = function(callback){
		let sql = 'SELECT * FROM POST';
		this.connection.query(sql,callback);
	}

	PostDAO.prototype.getPostById = function(id,callback){
		let sql = 'SELECT * FROM POST WHERE ID='+id;
		this.connection.query(sql,callback);
	}

	PostDAO.prototype.createPost = function(post,callback){
		let sql = 'INSERT INTO POST SET ?';
		this.connection.query(sql,post,callback);
	}

	PostDAO.prototype.deletePost = function(id,callback){
		let sql = 'DELETE FROM POST WHERE ID='+id;
		this.connection.query(sql,callback);
	}

	PostDAO.prototype.updatePost = function(post,callback){
		console.log(post);
		console.log("************ID******************");
		console.log(post.ID);
		let sql = "UPDATE POST SET TITULO = '"+post.TITULO+"', POST = '"+post.POST+"' WHERE ID = "+post.ID;
		console.log(sql);
		this.connection.query(sql,callback);
	}

	module.exports = function(){ 
		return PostDAO;
	}	