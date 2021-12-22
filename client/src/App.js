import React from "react";
import axios from "axios";
import CustomParticles from "./components/landingpage/CustomParticles"
import NameCard from "./components/landingpage/NameCard"

export default class App extends React.Component {

    render() {
        return (
            <div>
                <CustomParticles />
                <NameCard />
            </div>
        );
    }
}
