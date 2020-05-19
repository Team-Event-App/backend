const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = require('./User')
const Event = require('./Event')
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