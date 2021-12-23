import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";

const RoutingConfig = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/portfolio" element={<Portfolio />}/>
        </Routes>
    </Router>
);

export default class App extends React.Component {
    render() {
        return <RoutingConfig />;
    }
}
