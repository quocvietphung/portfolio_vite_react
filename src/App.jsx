import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import ParticlesBackground from "./components/ParticlesBackground";
import AvatarHeader from "./components/AvatarHeader";
import SectionDisplay from "./components/SectionDisplay";
import ControlSegment from "./components/ControlSegment";
import sectionData from "./components/sectionData";

const App = () => {
    const [section, setSection] = useState("me");
    const currentSection = sectionData[section];

    return (
        <>
            <ParticlesBackground />
            <div style={{
                minHeight: "100vh",
                backgroundColor: "#f9fafb",
                display: "flex",
                flexDirection: "column"
            }}>
                <Container text textAlign="center" style={{ paddingTop: "4em", paddingBottom: "6em" }}>
                    <AvatarHeader />
                    <SectionDisplay section={currentSection} />
                </Container>
                <ControlSegment onSelect={setSection} />
            </div>
        </>
    );
};

export default App;
