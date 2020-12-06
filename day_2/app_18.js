var siege = require("siege") ;

// ====  test #1 ==============

siege()
    .host()
    .on(3000)
    .for(100000).times
    .get('/')
    .attack();
