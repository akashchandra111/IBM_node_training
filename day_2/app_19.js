var siege = require('siege');
siege()
       .on(3000)
    .for(100000).times
    .get('/contact')

    .get('/about').for(30000).times
    .get('/').for(2).seconds
    .attack();
