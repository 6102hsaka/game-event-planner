import { Routes, Route } from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";
import Events from "./pages/events";
import "./App.scss";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </>
    );
}

export default App;
