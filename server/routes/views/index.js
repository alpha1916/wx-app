// var keystone = require('keystone');

exports = module.exports = function (req, res) {
	//
	// var view = new keystone.View(req, res);
	// var locals = res.locals;
	//
	// // locals.section is used to set the currently selected
	// // item in the header navigation.
	// locals.section = 'home';
	//
	// // Render the view
	// view.render('index');

	// 修改缺省页为登陆页
	res.redirect('/keystone');
};
