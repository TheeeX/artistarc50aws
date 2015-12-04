var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String,
        author_id: String
	},
	contacts: [{ 
        username: String,
        userpic: String,
        userid: String,
        time: { type: Date, default: Date.now }
    }],
    privacy: { type: String, default: 'public'},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: '' }
});

//module.exports = mongoose.model('User', userSchema);

var Addrsbook = mongoose.model('addrsbook', userSchema);
module.exports = Addrsbook;