import Button from "../../common/button";
import "./index.scss";

const Home = () => {
    const navigateToEvents = () => {
        console.log("navigating");
    };

    return (
        <div className="container home-container">
            <div className="row">
                <div className="col-12 col-md-6 ">
                    <div className="home-text-content">
                        <p className="fw-bold">Welcome to</p>
                        <p className="fw-bold">Event Planner</p>
                        <p className="fw-bold">
                            Bring event planning to life with ease
                        </p>
                    </div>
                    <Button text="Show Events" onClick={navigateToEvents} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="home-images">
                        <img
                            src="images/schedule.avif"
                            alt="home-poster"
                            id="poster-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
