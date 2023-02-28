import { Routes, Route } from "react-router-dom";

import Header from "./common/header";
import Home from "./pages/home";
import Events from "./pages/events";
import Checkout from "./pages/checkout";
import "./App.scss";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    );
}

export default App;
