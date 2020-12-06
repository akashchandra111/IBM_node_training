var cluster = require('cluster');

if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length ;
    console.log("cpuCount: ", cpuCount)

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    Object.keys(cluster.workers).forEach(function(id) {
        console.log( "id: ",  id, " -- pid: ", cluster.workers[id].process.pid);
    });
    // Listen for dying workers
    cluster.on('exit', function (worker) {
        console.log('Worker %d died :(', worker.id);
        cluster.fork();

    });

// Code to run if  in a worker process
} else {
    var express = require('express');
    var app = express();

    app.get('/', function (request, response) {
        console.log('home request to worker %d', cluster.worker.id);
        response.send('home: Msg from Worker ' + cluster.worker.id);
    });

    app.get('/about', function (request, response) {
        console.log('About request to worker %d', cluster.worker.id);
        response.send('about: Msg from Worker ' + cluster.worker.id);
    });

    app.get('/contact', function (request, response) {
        console.log('Contact request to worker %d', cluster.worker.id);
        response.send('contact: Msg from Worker ' + cluster.worker.id);
    });

    app.listen(3000);
    console.log("port 3000");
    console.log('Worker %d is up!', cluster.worker.id);

}
