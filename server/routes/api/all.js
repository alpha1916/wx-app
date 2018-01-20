var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var data = {};
	var qc = 0;
	var end = function () {
		++qc;
		if (qc === 3)
		{
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(data));
		}
	};

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

		// res.writeHead(200, { 'Content-Type': 'application/json' });
		// res.end(JSON.stringify(results));
		data.goods = results;
		end();
	});
	q = keystone.list('Information').model.findOne();
	q.exec(function (err, results) {
		data.info = results;
		end();
	});

	q = keystone.list('Banner').model.find();
	q.exec(function (err, results) {
		data.banner = results;
		end();
	});
};
