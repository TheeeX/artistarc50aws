var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
    name: String,
    username: String,
	members: [{ 
        username: String,
        userpic: String,
        userid: String,
        time: { type: Date, default: Date.now }
    }],    
	rank: { type: String, default: '0' },
    tags: { type: String, default: '0' },
    target: { type: String, default: 'public'},
    privacy: { type: String, default: 'public'},
    posts: { type: String, default: '0' },
	meta: {
		likes: String,
	    followers: { type: String, default: '0' },
        share: { type: String, default: '0' },
		comment: [{
            username: String,
            message: String,
            time: String
        }]
	},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: '' }
});

//module.exports = mongoose.model('User', userSchema);

var Troupe = mongoose.model('troupe', userSchema);
module.exports = Troupe;