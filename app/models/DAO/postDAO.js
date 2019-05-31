module.exports = function(){
	this.getAllPosts = function(connection, callback){
		let sql = 'SELECT * FROM POST';
		connection.query(sql,callback);
	}

	this.getPostById = function(connection,id,callback){
		let sql = 'SELECT * FROM POST WHERE ID='+id;
		connection.query(sql,callback);
	}

	this.createPost = function(post,connection,callback){
		console.log(post);
		let sql = 'INSERT INTO POST SET ?';
		connection.query(sql,post,callback);
	}

	this.updatePost = function(post,connection,callback){
		console.log(post);
		console.log("************ID******************");
		console.log(post.ID);
		let sql = "UPDATE POST SET TITULO = '"+post.TITULO+"', POST = '"+post.POST+"' WHERE ID = "+post.ID;
		console.log(sql);
		connection.query(sql,callback);
	}


	return this;
}