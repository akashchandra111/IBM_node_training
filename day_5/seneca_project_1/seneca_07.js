// client seneca_06.js

const service = require ("seneca")({log: 'silent'});

const host = 'localhost' ;
const port = 3000 ;
const user_id = 5 ;

service.client({host, port })
       .act({"role":"users", "cmd":"get", "id": user_id}, function (err,resp) {
            if (err) return console.log (err.msg);
            console.log ("response @ first name: ", resp.user.first_name);
})
