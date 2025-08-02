import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

/**
 * Particle background đẹp & chuyên nghiệp.
 * Nền gradient, nhiều màu pastel, hiệu ứng glow.
 */
const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: { value: "transparent" }, // Cho phép overlay gradient custom
            },
            fpsLimit: 60,
            particles: {
                number: { value: 60, density: { enable: true, area: 1200 } },
                color: {
                    value: [
                        "#a78bfa", // violet-400
                        "#38bdf8", // sky-400
                        "#f472b6", // pink-400
                        "#facc15", // yellow-400
                        "#34d399"  // emerald-400
                    ]
                },
                shape: { type: "circle" },
                size: {
                    value: 4,
                    random: { enable: true, minimumValue: 1 }
                },
                opacity: { value: 0.35 },
                move: {
                    enable: true,
                    speed: 1.2,
                    direction: "none",
                    outModes: { default: "out" }
                },
                links: {
                    enable: true,
                    color: "#fde68a",  // vàng pastel sáng
                    distance: 110,
                    opacity: 0.18,
                    width: 1.2
                },
                shadow: {
                    enable: true,
                    color: "#fff",
                    blur: 8
                }
            },
            detectRetina: true,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    onClick: { enable: true, mode: "push" }
                },
                modes: {
                    grab: {
                        distance: 160,
                        links: { opacity: 0.35 }
                    },
                    push: { quantity: 5 }
                }
            }
        }),
        [],
    );

    if (!init) return null;

    return (
        <div style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none"
        }}>
            {/* Nền gradient phủ phía sau particles */}
            <div style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                background: "linear-gradient(120deg,#1e293b 0%,#7c3aed 70%,#38bdf8 100%)",
                opacity: 0.96
            }} />
            {/* Hiệu ứng particles */}
            <Particles
                id="tsparticles-background"
                options={options}
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: "none"
                }}
            />
        </div>
    );
};

export default ParticlesBackground;
