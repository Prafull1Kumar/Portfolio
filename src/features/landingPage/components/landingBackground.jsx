"use client";
import {useEffect, useState} from "react";
import {loadSlim} from "@tsparticles/slim";
import Particles, {initParticlesEngine} from "@tsparticles/react";

const ParticlesBackground = ({is404 = false}) => {
    const [state, setState] = useState({
        isLoaded: false, options: {
            detectRetina: true,
            pauseOnOutsideViewport: true,
            fullScreen: {
                enable: is404,
                zIndex: -1,
            },
            style: {
                // Usa position absolute per controllo preciso
                position: 'absolute',
                top: 0,
                left: 0
            },
            particles: {
                number: {value: 75},
                shape: {type: "triangle"},
                size: {
                    value: {min: 6, max: 30} // Range di dimensioni
                },
                collisions: {
                    enable: true,
                    mode: "bounce",
                },
                rotate: {
                    value: {min: 0, max: 360}, // Rotazione casuale da 0 a 360 gradi
                    direction: "random", // Direzione casuale
                    animation: {
                        enable: true,
                        speed: 10, // Velocità di rotazione
                        sync: false, // Rotazione indipendente per ogni particella
                    }
                },
                move: {
                    enable: true,
                    speed: 1.5
                },
                stroke: {
                    width: 5, // Spessore del bordo
                    color: "#10b981" // Colore del bordo
                },
                color: {
                    value: "#faf9f6" // Colore di riempimento (in questo caso rosso-arancione)
                }
            },
            responsive: [
                {
                    maxWidth: 768, // Mobile
                    options: {
                        background: {
                            size: "100% 93%"
                        },
                        particles: {
                            number: {
                                value: 75 // Ancora meno particelle su mobile
                            },
                            size: {
                                value: {min: 6, max: 18} // Particelle più piccole
                            }
                        }
                    }
                },
                {
                    maxWidth: 640, // Tablet
                    options: {
                        background: {
                            size: "100% 93%"
                        },
                        particles: {
                            number: {
                                value: 75// Meno particelle su tablet
                            },
                            size: {
                                value: {min: 6, max: 12} // Particelle più piccole
                            },
                        }
                    }
                },

            ]
        }
    })

    useEffect(() => {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const bgColor = isDarkMode ? "#111827" : "#faf9f6"
        const strokeColor = isDarkMode ? "#14b8a6" : "#10b981"
        const width = window.innerWidth
        const height = window.innerHeight
        console.log(`${width}x${height}`)
        console.log(`isDarkMode ${isDarkMode}`)
        initParticlesEngine(async (engine) => {

            await loadSlim(engine)
        }).then(() => {
            setState((prevState) => ({
                ...prevState, // Crea un nuovo oggetto
                isLoaded: true,
                options: {
                    ...prevState.options,
                    particles: {
                        ...prevState.options.particles,
                        stroke: {
                            width: 5,
                            color: strokeColor
                        },
                        color: {
                            value: bgColor
                        }
                    }
                }
            }));
        })
    }, []);

    const particlesLoaded = (container) => {
        console.log(container)
    }

    return state.isLoaded &&
        <div className="w-full h-1/2">
            <Particles id="particlesBackground"
                       particlesLoaded={particlesLoaded}
                       options={state.options}>
            </Particles>
        </div>
}

export default ParticlesBackground