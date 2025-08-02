import React from "react";
import { Segment, Label, Header } from "semantic-ui-react";

const tags = ["AI", "Developer", "React", "42 Style", "SaaS Builder"];

const SectionMe = () => (
    <Segment
        style={{
            background: "transparent",
            borderRadius: "2.2em",
            marginTop: "2em",
            boxShadow: "none",
            padding: "2.5em 1em",
            border: "none"
        }}
        basic
    >
        <Header as="h3" color="teal">About Me</Header>
        <p style={{ fontWeight: 600, marginTop: "0.5em" }}>
            You: Who are you?
        </p>
        <p style={{ marginTop: "1.2em" }}>
            Hey 👋 I'm Viet, a developer specializing in AI, currently learning at Alfatraining.
        </p>
        <div style={{ marginTop: "1.5em" }}>
            {tags.map(tag => (
                <Label key={tag} basic color="blue" style={{ margin: "0.3em" }}>
                    {tag}
                </Label>
            ))}
        </div>
        <p style={{ color: "#555", marginTop: "2em" }}>
            Before diving into tech, I worked as a software engineer and explored AI solutions with Python, ML, and cloud tools.
        </p>
    </Segment>
);

export default SectionMe;
