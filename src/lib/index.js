/* ci.cm short url service module */

var debug = require('nor-debug');

module.exports = function(url, opts) {
	opts = opts || {};

	debug.assert(url).is('string');
	debug.assert(opts).is('object');

	
};

/* EOF */
