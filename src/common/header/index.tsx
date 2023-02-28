import { Link } from "react-router-dom";

import "./index.scss";

const Header = () => {
    return (
        <header className="container app-header">
            <Link className="app-header-brand" to="/">
                <p className="fs-4 fw-semibold ">Event Planner</p>
            </Link>
        </header>
    );
};

export default Header;
