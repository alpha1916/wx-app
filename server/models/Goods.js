/**
 * Created by alpha on 2018/1/4.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Goods Model
 * ==========
 */

var Goods = new keystone.List('Goods', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

var storage = new keystone.Storage({
	adapter: keystone.Storage.Adapters.FS,
	fs: {
		path: keystone.expandPath('./public/uploads/goods_images'), // required; path where the files should be stored
		publicPath: '/public/uploads/goods_images', // path where files will be served
	},
});

Goods.add({
	title: { type: String, required: true },
	// state: { type: Types.Select, label: '状态', options: 'draft, published, archived', default: 'draft', index: true },
	// author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, label: '发布日期', index: true }, // , dependsOn: { state: 'published' } },
	editDate: { type: Types.Date, label: '最后编辑时间', default: Date.now },
	content: {
		// brief: { type: Types.Text, wysiwyg: true, height: 150 },
		brief: { type: Types.Text, label: '简介' },
		// extended: { type: Types.Textarea, wysiwyg: true, height: 400 },
		extended: { type: Types.Textarea, label: '描述' },
	},
	// cover: { type: Types.File, label: '封面', storage: storage },
	// photos: { type: Types.Files, storage: storage },
	cover: { type: Types.CloudinaryImage, autoCleanup: true, label: '封面' },
	photos: { type: Types.CloudinaryImages, autoCleanup: true, label: '图片' },
	video: { type: Types.File, label: '视频', storage: storage },
});

// Goods.schema.virtual('content.full').get(function () {
// 	return this.content.extended || this.content.brief;
// });

// Goods.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';

Goods.relationship({ ref: 'Banner' }); // , path: 'posts', refPath: 'author' });
Goods.defaultSort = '-publishedDate';
Goods.register();
