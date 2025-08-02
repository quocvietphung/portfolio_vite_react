import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import ParticlesBackground from "./components/ParticlesBackground";
import AvatarHeader from "./components/AvatarHeader";
import ControlSegment from "./components/ControlSegment";
import SectionMe from "./sections/SectionMe";
import SectionProjects from "./sections/SectionProjects";
import SectionSkills from "./sections/SectionSkills";
import SectionFun from "./sections/SectionFun";
import SectionContact from "./sections/SectionContact";
import SectionOther from "./sections/SectionOther";

const App = () => {
    const [section, setSection] = useState("");

    let SectionComponent = null;
    switch (section) {
        case "me":
            SectionComponent = <SectionMe />;
            break;
        case "projects":
            SectionComponent = <SectionProjects />;
            break;
        case "skills":
            SectionComponent = <SectionSkills />;
            break;
        case "fun":
            SectionComponent = <SectionFun />;
            break;
        case "contact":
            SectionComponent = <SectionContact />;
            break;
        case "other":
            SectionComponent = <SectionOther />;
            break;
        default:
            SectionComponent = null;
    }

    return (
        <>
            <ParticlesBackground />
            <div
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f9fafb",
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <Container text textAlign="center" style={{ paddingTop: "4em", paddingBottom: 0 }}>
                    <AvatarHeader />
                </Container>
                <Container text textAlign="center" style={{ paddingTop: 0, paddingBottom: "6em" }}>
                    {SectionComponent}
                </Container>
                <ControlSegment onSelect={setSection} />
            </div>
        </>
    );
};

export default App;
