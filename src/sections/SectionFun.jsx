import React from "react";
import { Segment, Label, Header } from "semantic-ui-react";
const tags = ["Fun", "Fact", "Joke", "Meme"];
const SectionFun = () => (
    <Segment
        style={{
            background: "linear-gradient(120deg,#fff1fa,#e4f9ee 80%)",
            borderRadius: "2.2em",
            marginTop: "2em",
            boxShadow: "0 0 40px rgba(0,0,0,0.08)",
            padding: "2.5em 1em"
        }}
        raised
    >
        <Header as="h3" color="pink">Fun</Header>
        <p style={{ fontWeight: 600, marginTop: "0.5em" }}>
            You: Tell me something fun.
        </p>
        <p style={{ marginTop: "1.2em" }}>
            Sure! Did you know that the first computer bug was an actual moth?
        </p>
        <div style={{ marginTop: "1.5em" }}>
            {tags.map(tag => (
                <Label key={tag} basic color="pink" style={{ margin: "0.3em" }}>
                    {tag}
                </Label>
            ))}
        </div>
        <p style={{ color: "#555", marginTop: "2em" }}>
            Random facts, Tech jokes, Fun projects
        </p>
    </Segment>
);

export default SectionFun;
