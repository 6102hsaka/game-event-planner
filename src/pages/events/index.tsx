import { useState, useEffect } from "react";

import EventCard from "../../common/event-card";
import { EventType } from "../../utils/model";
import { getAllEvents } from "../../utils/service";
import "./index.scss";

const Events = () => {
    const [eventList, setEventList] = useState<EventType[]>([]);

    useEffect(() => {
        setEventList(getAllEvents());
    }, []);

    return (
        <div className="container events-container">
            {eventList.map(({ id, name, imageUrl }) => (
                <EventCard key={id} id={id} name={name} imageUrl={imageUrl} />
            ))}
        </div>
    );
};

export default Events;
