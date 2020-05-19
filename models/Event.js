const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    title :{
        type : String,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
   
    imageEvent : {
        type : String,
        required : true
    },
    organizerName : {
        type : String,
        required : true
    },
    responsibleName :{
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    date :{
        type : Date,
        required : true
    },
    limitPeople :{
        type : String,
        required : true
    },
    detail : {
        type : String,
        required : true
    }
},{timestamps:true})

module.exports = mongoose.model("Event", eventSchema )