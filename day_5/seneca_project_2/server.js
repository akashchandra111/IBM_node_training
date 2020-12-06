const seneca = require('seneca')({log: 'quiet'})
      .use('./product-service');

const port = 3000 ;      

const app = require('express')()
      .use(require('body-parser').json())
      .use(seneca.export('web'))
      .listen(port);

console.log('Express_seneca server on port: ', port) ; 
