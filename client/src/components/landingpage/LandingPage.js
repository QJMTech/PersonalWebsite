import React from "react";

// COMPONENTS
import NameCard from "./NameCard";
import CustomParticles from "./CustomParticles";

const LandingPage = () => {
        return (
            <div>
                <CustomParticles shape = "circle"/>
                <NameCard />
            </div>
        );
}
export default LandingPage;