// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'app-server',
	'brand': '小程序后台',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': '.hbs',

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new (require('./templates/views/helpers'))(),
		extname: '.hbs',
	}).engine,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));


// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	goods: 'goods',
	// test: 'tests',
	information: 'information',
	banner: 'banners',
	// posts: ['posts', 'post-categories'],
	// galleries: 'galleries',
	// enquiries: 'enquiries',
	users: 'users',
});

// keystone.set('cloudinary config', { cloud_name: 'alpha1916', api_key: '763187875437998', api_secret: 'PdYWAf9DuiNYUEfuz0f6PauU30s' });
keystone.set('cloudinary config', 'cloudinary://763187875437998:PdYWAf9DuiNYUEfuz0f6PauU30s@alpha1916');
// 可选，会用'keystone_'作为所有内置标签的前缀
keystone.set('cloudinary prefix', 'keystone');
// 可选，会用[{prefix}]/{list.path}/{field.path}/ 作为每个图片的public_id的前缀
keystone.set('cloudinary folders', true);
// 可选, 将强制cloudinary服务通过HTTPS传输
keystone.set('cloudinary secure', true);

console.log('env', keystone.get('env'));
var cooketSecret = '8f1bbe8c0a2e1fc6f54da09060c0a7e775fd3f7bb05b33ab58a4438901f11bd75b7673fe1dbf93bd240705d5e049fc8c57c219abf357ce4b93edc845f882e4de';
keystone.set('cookie secret', cooketSecret);
if (keystone.get('env') === 'production') {
	// keystone.set('cloudinary config', process.env.CLOUDINARY_URL);
	keystone.set('cookie secret', process.env.COOKIE_SECRET);
	// keystone.set('mandrill api key', process.env.MANDRILL_API_KEY);
}
// keystone.set('cloudinary upload_preset', 'd8uq1scc');

// Start Keystone to connect to your database and initialise the web server


keystone.start();
