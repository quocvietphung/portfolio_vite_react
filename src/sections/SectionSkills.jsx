import React from "react";
import { Segment, Label, Header } from "semantic-ui-react";
const tags = ["AI", "ML", "React", "Python", "Azure", "Cloud"];
const SectionSkills = () => (
    <Segment
        style={{
            background: "linear-gradient(120deg,#f7ecfa,#f6fde5 80%)",
            borderRadius: "2.2em",
            marginTop: "2em",
            boxShadow: "0 0 40px rgba(0,0,0,0.08)",
            padding: "2.5em 1em"
        }}
        raised
    >
        <Header as="h3" color="violet">Skills</Header>
        <p style={{ fontWeight: 600, marginTop: "0.5em" }}>
            You: What are your skills?
        </p>
        <p style={{ marginTop: "1.2em" }}>
            Here's a quick overview of my skillset:
        </p>
        <div style={{ marginTop: "1.5em" }}>
            {tags.map(tag => (
                <Label key={tag} basic color="violet" style={{ margin: "0.3em" }}>
                    {tag}
                </Label>
            ))}
        </div>
        <p style={{ color: "#555", marginTop: "2em" }}>
            AI, Machine Learning, Deep Learning, React, Python, SQL, Azure, Cloud
        </p>
    </Segment>
);

export default SectionSkills;
