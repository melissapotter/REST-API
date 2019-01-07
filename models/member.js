const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create member Schema and model
const MemberSchema = new Schema({
    name: {
    type: String,
    required: [true, 'Name field is required']
    },
    
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location 
});

const Member = mongoose.model('member', MemberSchema);

module.exports = Member;