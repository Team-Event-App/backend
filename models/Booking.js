const mogoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema ({
    name : {
        type : Schema.Types.ObjectId,
        ref : 'user'
    },
    title :{
        type : Schema.Types.ObjectId,
        ref : 'Event'
    },
    date :{
        type : Schema.Types.ObjectId,
        ref : 'Event'
    }
})
module.exports = mongoose.model('Booking', bookingSchema)