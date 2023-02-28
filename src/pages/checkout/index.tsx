import { useContext, useState, useEffect, useRef, SyntheticEvent } from "react";
import { Calendar } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

import Button from "../../common/button";
import { CartContext } from "../../context/CartContext";
import { EventType, Location } from "../../utils/model";
import {
    getEventById,
    getAllLocation,
    getAllPaymentMethod,
} from "../../utils/service";
import "./index.scss";

const Checkout = () => {
    const { eventId } = useContext(CartContext);
    const toastRef = useRef<any>(null);

    const [selectedEvent, setSelectedEvent] = useState<
        EventType | undefined | null
    >(null);
    const [locationList, setLocationList] = useState<Location[]>([]);
    const [paymentMethodList, setPaymentMethodList] = useState<string[]>([]);
    const [setupDate, setSetupDate] = useState<any>("");
    const [startDate, setStartDate] = useState<any>("");
    const [endDate, setEndDate] = useState<any>("");
    const [location, setLocation] = useState<Location | null>(null);
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [transportCharge, setTransportCharge] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);

    useEffect(() => {
        setLocationList(getAllLocation());
        setPaymentMethodList(getAllPaymentMethod());
    }, []);

    useEffect(() => {
        if (!!eventId) {
            setSelectedEvent(getEventById(eventId));
        }
    }, [eventId]);

    const calculateTransportCharge = (distance: number) => {
        let charge = 1500;
        distance -= 30;
        if (distance > 0) {
            charge += distance * 50;
        }
        return charge;
    };

    const handleLocationChange = (e: DropdownChangeEvent) => {
        setLocation(e.value);
        const _location = locationList.find(({ name }) => name === e.value);
        if (!!_location?.distance) {
            const distance = _location?.distance * 2;
            setDistance(distance);
            setTransportCharge(calculateTransportCharge(distance));
        }
    };

    const showToast = (isError: boolean, message: string) => {
        if (toastRef.current != null) {
            if (isError) {
                toastRef.current.show({
                    severity: "error",
                    summary: "Error",
                    detail: message,
                });
            } else {
                toastRef.current.show({
                    severity: "success",
                    summary: "Success",
                    detail: message,
                });
            }
        }
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (setupDate === "") {
            showToast(true, "Setup date cannot be empty");
        } else if (startDate === "") {
            showToast(true, "Start date cannot be empty");
        } else if (endDate === "") {
            showToast(true, "End date cannot be empty");
        } else if (!location) {
            showToast(true, "Location cannot be empty");
        } else if (!paymentMethod) {
            showToast(true, "Payment Method cannot be empty");
        } else if (startDate - setupDate <= 1000) {
            showToast(true, "Setup date should be before Start Date");
        } else if (endDate - startDate <= 1000) {
            showToast(true, "Start date should be before End Date");
        } else if (startDate - setupDate >= 86411100) {
            showToast(true, "Setup should not be done 1 day before Start date");
        } else {
            const diff = (endDate - startDate) / 3600000;

            showToast(
                false,
                `Request submitted Successfully for ${diff} hours`
            );
        }
    };

    return (
        <form className="container checkout-container" onSubmit={handleSubmit}>
            <Toast ref={toastRef} position="bottom-center" />
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Event Name</label>
                </div>
                <div className="col-12 col-md-4">
                    <InputText
                        value={selectedEvent?.name || ""}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Setup Date</label>
                </div>
                <div className="col-12 col-md-4">
                    <Calendar
                        value={setupDate}
                        onChange={(e) => setSetupDate(e.value)}
                        showTime
                        hourFormat="12"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Start Date</label>
                </div>
                <div className="col-12 col-md-4">
                    <Calendar
                        value={startDate}
                        onChange={(e) => setStartDate(e.value)}
                        showTime
                        hourFormat="12"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>End Date</label>
                </div>
                <div className="col-12 col-md-4">
                    <Calendar
                        value={endDate}
                        onChange={(e) => setEndDate(e.value)}
                        showTime
                        hourFormat="12"
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Location</label>
                </div>
                <div className="col-12 col-md-4">
                    <Dropdown
                        options={locationList}
                        value={location}
                        optionLabel="name"
                        optionValue="name"
                        onChange={handleLocationChange}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Payment Method</label>
                </div>
                <div className="col-12 col-md-4">
                    <Dropdown
                        options={paymentMethodList}
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.value)}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Transport Charge</label>
                </div>
                <div className="col-12 col-md-4">
                    <InputText
                        value={transportCharge.toString()}
                        disabled={true}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12 col-md-3">
                    <label>Distance</label>
                </div>
                <div className="col-12 col-md-4">
                    <InputText
                        value={distance?.toString() || ""}
                        disabled={true}
                    />
                </div>
            </div>
            <Button text="Submit" />
        </form>
    );
};

export default Checkout;
