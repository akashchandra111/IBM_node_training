  console.log("process.arch: ", process.arch) ;
  console.log("process.mem: ", process.memoryUsage()) ;
  console.log("pid: ", process.pid) ;


function memUsage(){
	console.log("process.mem: ", process.memoryUsage()) ;
}

var timer = setInterval(memUsage, 1000);

setTimeout(function(){
	clearInterval(timer);
}, 5100);
