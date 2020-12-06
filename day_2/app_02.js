// npm install q

var q = require('q');

function doAsyncOps() {
  var deferred = q.defer();
  setTimeout(function() {
  	console.log("timer fired.") ;
    deferred.resolve('node looks promising.');
  }, 500);

  return deferred.promise;
}

doAsyncOps().then(function(val) {
  console.log('Promise Resolved!\n', val);
});
