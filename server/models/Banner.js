/**
 * Created by alpha on 2018/1/4.
 */
var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Info Model
 * ==========
 */

var Banner = new keystone.List('Banner', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Banner.add({
	name: { type: String, required: true },
	goods: { type: Types.Relationship, label: '商品', ref: 'Goods', require: true },
});

Banner.register();
