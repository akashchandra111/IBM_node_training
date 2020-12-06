// product-service.js

const productList = require('./data-service') ;

const productService = function() {

	this.add('role: products, cmd: getProductById', (args, callback) => {
		let productId = args.req$.params.id;
		let product = productList.find(prod => {
			return prod.id == productId;
		});

		callback(null, product);
	});

	this.add('role: products, cmd: search', (args, callback) => {
		let pattern = new RegExp(args.query);
		let results = productList.filter(prod => {
			return (pattern.test(prod.name) || pattern.test(prod.description));
		});

		callback(null, results);
	});

	// ......................................

	this.act('role: web', {
		use: {
			prefix: '',
			pin: 	'role: products, cmd: *',
			map: {
				getProductById: { alias: '/products/:id' },
				search: { POST: true, alias: '/products' }

			}
		}
	});
};

module.exports = productService;
