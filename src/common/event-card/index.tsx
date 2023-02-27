import { memo, useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { EventType } from "../../utils/model";
import "./index.scss";

const EventCard = ({ id, name, imageUrl }: EventType) => {
    const { setEventId } = useContext(CartContext);

    const addToCart = () => {
        if (setEventId) {
            setEventId(id);
        }
    };

    return (
        <div className="card event-card-container" onClick={addToCart}>
            <img className="card-img-top" src={imageUrl} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Add to Cart</p>
            </div>
        </div>
    );
};

export default memo(EventCard);
