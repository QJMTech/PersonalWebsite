import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage/LandingPage";
import MomsPage from "./components/teetimebot/MomsPage";
import Portfolio from "./components/portfolio/Portfolio"

const RoutingConfig = () => (
    <HashRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/momspage" element={<MomsPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </HashRouter>
);

export default class App extends React.Component {
    render() {
        return <RoutingConfig />;
    }
}
