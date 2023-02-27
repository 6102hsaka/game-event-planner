import { EventType } from "./model";

const eventList: EventType[] = [
    {
        id: "e01",
        name: "Hi Striker",
        imageUrl: "/images/hi-striker.jpg",
    },
    {
        id: "e02",
        name: "Punch Challenge",
        imageUrl: "/images/punch-challenge.jpg",
    },
    {
        id: "e03",
        name: "Bow & Arrow",
        imageUrl: "/images/bow-and-arrow.jpg",
    },
    {
        id: "e04",
        name: "Catch Fish",
        imageUrl: "/images/fishing.jpg",
    },
];

export const getAllEvents = () => eventList;

export const getEventById = (eventId: string) =>
    eventList.find(({ id }) => id === eventId);
