var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var q = keystone.list('Goods').model.find().sort('-publishedDate');
	q.exec(function (err, results) {
		// console.log('--------');
		// results.forEach(function (data) {
		// 	// console.log(data.title);
		// 	// console.log(data.content.brief);
		// 	// console.log(data.content.extended);
		// 	// console.log(data.cover);
		// 	// console.log(data.photos);
		// 	// console.log(data.video);
		//
		// 	console.log(data.toJSON());
		// 	// data
		// });

		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(results));
	});
};
