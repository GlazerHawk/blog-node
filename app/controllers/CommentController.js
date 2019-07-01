module.exports.createComment = function(app, req,res){
	let comment = req.body;

	let userID = req.session.userID;
	let postID = req.session.postID;

	let connection = app.config.dbConnection();
	let commentDAO = new app.app.models.DAO.CommentDAO(connection);
	console.log("COMENTÁRIO: "+comment.COMMENT);
	commentDAO.createComment(comment.COMMENT,postID,userID,function(error, result){

		console.log("USER ID CommentController:"+req.session.userID);
		console.log("POST ID CommentController:"+req.session.postID);

		res.redirect('/viewPost?id='+postID);
	});
};

module.exports.deleteComment = function(app, req,res){
	let connection = app.config.dbConnection();
	
	let commentDAO = new app.app.models.DAO.CommentDAO(connection);
	let postID = req.session.postID;

	let url  = require("url");
	let params = url.parse(req.url, true);
	let id = params.query.id;
	commentDAO.deleteComment(id, function(error,resultComments){
		res.redirect('/viewPost?id='+postID);
	})
};

