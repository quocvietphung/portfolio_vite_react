import React from "react";
import { Segment, Label, Header } from "semantic-ui-react";
const tags = ["Email", "LinkedIn", "Contact"];
const SectionContact = () => (
    <Segment
        style={{
            background: "linear-gradient(120deg,#fffbe8,#eaf4fb 80%)",
            borderRadius: "2.2em",
            marginTop: "2em",
            boxShadow: "0 0 40px rgba(0,0,0,0.08)",
            padding: "2.5em 1em"
        }}
        raised
    >
        <Header as="h3" color="orange">Contact</Header>
        <p style={{ fontWeight: 600, marginTop: "0.5em" }}>
            You: How can I contact you?
        </p>
        <p style={{ marginTop: "1.2em" }}>
            Feel free to reach out via email or LinkedIn!
        </p>
        <div style={{ marginTop: "1.5em" }}>
            {tags.map(tag => (
                <Label key={tag} basic color="orange" style={{ margin: "0.3em" }}>
                    {tag}
                </Label>
            ))}
        </div>
        <p style={{ color: "#555", marginTop: "2em", whiteSpace: "pre-line" }}>
            Email: viet@example.com{'\n'}
            LinkedIn: /in/viet-ai
        </p>
    </Segment>
);

export default SectionContact;
