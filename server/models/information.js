/**
 * Created by alpha on 2018/1/4.
 */
var keystone = require('keystone');
// var Types = keystone.Field.Types;

/**
 * Info Model
 * ==========
 */

var Information = new keystone.List('Information', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Information.add({
	name: { type: String, label: '公司名称', require: true },
	address: { type: String, label: '地址' },
	working_hours: { type: String, label: '营业时间' },
	phone: { type: String, label: '联系电话' },
});

Information.register();
