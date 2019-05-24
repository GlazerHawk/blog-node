module.exports = function(){
	this.getAllPosts = function(connection, callback){
		let sql = 'SELECT * FROM POST';
		connection.query(sql,callback);
	}

	this.getPostById = function(connection,id,callback){
		let sql = 'SELECT * FROM POST WHERE ID='+id;
		connection.query(sql,callback);
	}

	return this;
}