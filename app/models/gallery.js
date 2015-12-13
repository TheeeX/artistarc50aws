var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	local: {
		author_username: String,
        author_name: String
	},
    directory: [{ 
        name: String,
        cname: String,
        
        media: [{ 
            name: String,
            cname: String,
            
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
            time: { type: Date, default: Date.now }
        }],
        time: { type: Date, default: Date.now }
    }],
    tags: { type: String, default: '0' },
    target: { type: String, default: 'public'},
    privacy: { type: String, default: 'public'},
	
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: '' }
});

//module.exports = mongoose.model('User', userSchema);

var Gallery = mongoose.model('gallery', userSchema);
module.exports = Gallery;