const EventSchema = require('../models/Event');

module.exports = {
    createData: (req,res) => {
        EventSchema.create ({
            title : req.body.title,
            category : req.body.category,
            description : req.body.description,
            imageEvent : req.file && req.file.path,
            organizerName : req.body.organizerName,
            responsibleName : req.body.responsibleName,
            typeEvent : req.body.typeEvent,
            location : req.body.location,
            date : req.body.date,
            limitPeople : req.body.limitPeople,
            detail : req.body.detail

        })
        .then((result)=> res.json(result))
        .catch((err)=> {
            throw err;
        })
    },
    getAllData : (req,res)=>{
        EventSchema.find({})
        .then((result) => res.json(result))
        .catch((err)=> {
            throw err;
        })
    }
}