const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    event_date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    speakers: [
        {
            name: {
                type: String,
                required: true
            },
            designation: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            }
        }
    ]
})

const Event = mongoose.model("Event", eventSchema);

module.exports = Event