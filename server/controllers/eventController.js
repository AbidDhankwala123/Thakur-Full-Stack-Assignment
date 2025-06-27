const Event = require("../models/events");
const mongoose = require("mongoose");
const eventsData = require("../data/eventsData");


const getAllEvents = async (req, res, next) => {
    try {

        let events = await Event.find({});

        if (events.length === 0) {
            const formattedEvents = eventsData.map(event => ({ ...event, event_date: new Date(event.event_date) }))
            events = await Event.insertMany(formattedEvents);
        }

        res.status(200).json({
            status: "success",
            events
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }
}

const getEventById = async (req, res, next) => {
    try {
        const { eventId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return res.status(400).json({
                status: "error",
                message: "Invalid event ID format",
            });

        }

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                status: "error",
                message: "Event not found",
            });

        }

        const formattedEventDate = strDate => {
            const date = new Date(strDate);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = String(date.getFullYear());

            return `${day}-${month}-${year}`
        }

        res.status(200).json({
            status: "SUCCESS",
            title: event.title,
            location: event.location,
            event_date: formattedEventDate(event.event_date),
            speakers: event.speakers
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })

    }
}



module.exports = { getAllEvents, getEventById }