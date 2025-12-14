const Event = require("../models/events");
const mongoose = require("mongoose");
const eventsData = require("../data/eventsData");
const AppError = require("../utils/AppError")

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
        next(error);
    }
}

const getEventById = async (req, res, next) => {
    try {
        const { eventId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(eventId)) {
            return next(new AppError("Invalid ID format", 400));
        }

        const event = await Event.findById(eventId);

        if (!event) {
            return next(new AppError("Event not found", 404));
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
        next(error);
    }
}



module.exports = { getAllEvents, getEventById }