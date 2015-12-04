var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
    tname: { type: String, default: 'Posted' },
    tusername: { type: String, default: 'Posted' },
	tmembers: { type: String, default: '0' },    
	trank: { type: String, default: '0' },
    ttags: { type: String, default: '0' },
    tpriv: { type: String, default: 'public'},
    tposts: { type: String, default: '0' },
	meta: {
		likes: String,
	    followers: { type: String, default: '0' },
        share: { type: String, default: '0' },
		comment: {
            username: type: String,
            message: type: String,
            time: type: String
        }
	},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: '' }
});

//module.exports = mongoose.model('User', userSchema);

var Troupes = mongoose.model('troupes', userSchema);
module.exports = Troupes;