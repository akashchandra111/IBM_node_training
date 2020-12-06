const dns = require("dns");

dns.lookup("yahoo.com", function (err, addresses, family) {
    console.log("address lookup: ", addresses);
});


dns.resolve4("yahoo.com", function (err, addresses)  {
    if (err) throw err;
    console.log("addresses resolved: ", JSON.stringify(addresses));
});
