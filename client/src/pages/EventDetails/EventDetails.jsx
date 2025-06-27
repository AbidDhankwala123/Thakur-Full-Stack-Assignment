import React, { useEffect, useState } from 'react'
import styles from "./EventDetails.module.css"
import axios from "axios"
import { useParams } from 'react-router-dom'

const EventDetails = () => {

    const { eventId } = useParams();
    const [event, setEvent] = useState("");

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL_FOR_EVENT}/event/${eventId}`)
            .then(res => {
                console.log(res);
                setEvent(res.data);
            })
            .catch(error => console.error(error))
    }, [eventId])

    if (!event) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.container}>
            <div className={styles.event_header}>
                <h1 className={styles.header}>Event Details</h1>
            </div>

            <div className={styles.event_details}>
                <p><b>Event Title : </b><span>{event.title}</span></p>
                <p><b>Event Date : </b><span>{event.event_date}</span></p>
                <p><b>Event Location : </b><span>{event.location}</span></p>
                <p><b>Speakers:</b></p>
                <div>
                    {event.speakers.map((speaker, idx) => {
                        return (
                            <ul key={idx}>
                                <li><b>Name</b> : {speaker.name} <b>Designation</b> : {speaker.designation} <b>Company</b> : {speaker.company}</li>
                            </ul>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default EventDetails