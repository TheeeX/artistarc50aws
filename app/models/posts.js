var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
	target_type: { type: String, default: 'Everyone' },
	genre: { type: String, default: 'Art' },
    privacy: { type: String, default: 'public'},
    
    type: { type: String, default: 'Posted' },
	body: { type: String, default: '' },
    media:{
        pics: [String],
        video: [String]
    },
    tags: [String],
    
	meta: {
		likes: [String],
	    followers: [String],
        share: [String],
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

var Posts = mongoose.model('posts', userSchema);
module.exports = Posts;

    //comment: {
    //     username: type: String,
    //     message: type: String,
    //     time: type: String
    // },