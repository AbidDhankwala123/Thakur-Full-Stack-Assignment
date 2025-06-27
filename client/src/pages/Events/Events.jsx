import React, { useEffect, useState } from 'react'
import styles from "./Events.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Events = () => {

    const [events, setEvents] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL_FOR_EVENT}/events`)
            .then(res => {
                console.log(res);
                setEvents(res.data.events);

            })
            .catch(error => console.error(error))
    }, [])

    const formattedDate = event => new Date(event.event_date).toLocaleString("default", {
        day: "2-digit",
        month: "long"
    });

    if (!events) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Upcoming Events</h1>
            <div className={styles.list_events}>

                {events.map((event, idx) => {
                    return (
                        <div className={styles.event} key={idx}>
                            <div>
                                <p><b>Event Title</b></p>
                                <p>{event.title}</p>
                            </div>
                            <div>
                                <p><b>Date of Event</b></p>
                                <p>{formattedDate(event)}</p>
                            </div>
                            <div className={styles.viewdetails}>
                                <button className={styles.viewdetails_btn} onClick={() => navigate(`/event/${event._id}`)}>View Details</button>
                            </div>
                        </div>
                    )
                })}



            </div>

        </div>
    )
}
export default Events