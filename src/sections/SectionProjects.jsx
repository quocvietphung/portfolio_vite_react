import React from "react";
import { Segment, Label, Header } from "semantic-ui-react";
const tags = ["React", "Python", "AI", "ML"];
const SectionProjects = () => (
    <Segment
        style={{
            background: "linear-gradient(120deg,#eaf4fb,#fff8e7 90%)",
            borderRadius: "2.2em",
            marginTop: "2em",
            boxShadow: "0 0 40px rgba(0,0,0,0.08)",
            padding: "2.5em 1em"
        }}
        raised
    >
        <Header as="h3" color="green">Projects</Header>
        <p style={{ fontWeight: 600, marginTop: "0.5em" }}>
            You: Show me your projects.
        </p>
        <p style={{ marginTop: "1.2em" }}>
            Here are some featured projects:
        </p>
        <div style={{ marginTop: "1.5em" }}>
            {tags.map(tag => (
                <Label key={tag} basic color="green" style={{ margin: "0.3em" }}>
                    {tag}
                </Label>
            ))}
        </div>
        <p style={{ color: "#555", marginTop: "2em", whiteSpace: "pre-line" }}>
            1. AI Chatbot Portfolio – React, NLP{'\n'}
            2. Credit Card Fraud Detection – Python, ML{'\n'}
            3. Diamond Price Prediction – XGBoost, PyTorch
        </p>
    </Segment>
);

export default SectionProjects;
