const mogoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema ({
    name : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
    
})