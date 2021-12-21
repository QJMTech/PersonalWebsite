import React from "react";
import axios from "axios";
import CustomParticles from "./components/landingpage/CustomParticles"
import NameCard from "./components/landingpage/NameCard"

export default class App extends React.Component {
    state = {
        users: [],
    };
    componentDidMount() {
        axios.get("/users.json").then((response) => {
            this.setState({ users: response.data });
        });
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <CustomParticles />
                <NameCard />
            </div>
        );
    }
}
