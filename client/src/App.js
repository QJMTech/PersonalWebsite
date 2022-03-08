import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import MomsPage from "./components/teetimebot/MomsPage";

const RoutingConfig = () => (
    <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/momspage" element={<MomsPage />} />
            </Routes>
    </Router>
);

export default class App extends React.Component {
    render() {
        return <RoutingConfig />;
    }
}
