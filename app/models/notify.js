var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String,
        author_id: String
	},
	notifications: [{ 
        title: String,
        pic: String,
        body: String,
        time: { type: Date, default: Date.now }
    }]
});

//module.exports = mongoose.model('User', userSchema);

var Notify = mongoose.model('notify', userSchema);
module.exports = Notify;