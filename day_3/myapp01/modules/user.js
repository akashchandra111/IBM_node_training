const mongoose = require('mongoose');
// Mongoose Schema definition
var Schema = mongoose.Schema;

mongoose.connect('mongodb://ted:ted@ds061797.mongolab.com:61797/theenlighteneddeveloper', {useMongoClient: true}, function (error) {
    if (error) {
		console.log("Error Occured");
        console.log(error);
    }
});

var UserSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String
});

// Mongoose Model definition
var Users = mongoose.model('users', UserSchema);

module.exports = Users;
