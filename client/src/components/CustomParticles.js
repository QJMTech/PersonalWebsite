import {React} from "react";
import Particles from "react-tsparticles";


const CustomParticles = (props) => {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 160,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: [
                                "FFFFFF"
                            ],
                        },
                        links: {
                            color: "#ffffff",
                            distance: 400,
                            enable: true,
                            opacity: 0.8,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 500,
                            },
                            value: 4,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: props.shape,
                            "polygon": {
                                "nb_sides": 6}
                        },
                        
                        size: {
                            random: true,
                            value: 10,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default CustomParticles;
