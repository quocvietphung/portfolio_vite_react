import React from "react";
import { Segment, Label, Header } from "semantic-ui-react";
const tags = ["More", "Update", "Soon"];
const SectionOther = () => (
    <Segment
        style={{
            background: "linear-gradient(120deg,#ececec,#faf7e7 80%)",
            borderRadius: "2.2em",
            marginTop: "2em",
            boxShadow: "0 0 40px rgba(0,0,0,0.08)",
            padding: "2.5em 1em"
        }}
        raised
    >
        <Header as="h3" color="grey">More</Header>
        <p style={{ fontWeight: 600, marginTop: "0.5em" }}>
            You: What else can you do?
        </p>
        <p style={{ marginTop: "1.2em" }}>
            Explore more cool stuff soon!
        </p>
        <div style={{ marginTop: "1.5em" }}>
            {tags.map(tag => (
                <Label key={tag} basic color="grey" style={{ margin: "0.3em" }}>
                    {tag}
                </Label>
            ))}
        </div>
        <p style={{ color: "#555", marginTop: "2em" }}>
            Coming soon...
        </p>
    </Segment>
);

export default SectionOther;
