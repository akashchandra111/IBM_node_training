const service = require('seneca')({log: 'silent'})
const _ = require('lodash') ;  // npm install lodash.

service.use('basic')
    .use('jsonfile-store')
    .use('entity') ;
 

let itemsList = [
  {name: 'pen', price: 200, qty: 40},
  {name: 'pencil', price: 10, qty: 33},
  {name: 'eraser', price: 3, qty: 20},
  {name: 'notebook', price: 80, qty: 50}
] ;

let inventory = service.make$("inventory") ;

function inv_save(myInv) {
  myInv.save$(itemsList, function (err, inv) {
    if (err) console.error(err) ;
    console.log('all records saved in mem.') ; 
	_.each(inv, (rec) => console.log(rec));
    process.exit(0);
  });

}

inv_save(inventory) ;
