import { EventType, Location } from "./model";

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

const locationList: Location[] = [
    {
        id: 1,
        name: "Baghajatin, Kolkata, WB",
        distance: 10,
    },
    {
        id: 2,
        name: "Garia, Kolkata, WB",
        distance: 20,
    },
    {
        id: 3,
        name: "Sealdah, Kolkata, WB",
        distance: 15,
    },
    {
        id: 4,
        name: "Jadavpur, Kolkata, WB",
        distance: 25,
    },
];

const paymentMethodList: string[] = ["UPI", "Cash", "Online", "Cheque"];

export const getAllEvents = () => eventList;

export const getEventById = (eventId: string) =>
    eventList.find(({ id }) => id === eventId);

export const getAllLocation = () => locationList;

export const getAllPaymentMethod = () => paymentMethodList;
