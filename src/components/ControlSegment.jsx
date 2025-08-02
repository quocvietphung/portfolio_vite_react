import React from "react";
import { Segment, Container, Button, Icon } from "semantic-ui-react";

const ControlSegment = ({ state, dispatch }) => {
    return (
        <Segment
            style={{
                backgroundColor: "#ffffff",
                padding: "2.5em 2em",
                marginTop: "6em",
                borderRadius: "32px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                maxWidth: "780px",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto"
            }}
        >
            <Container textAlign="center">
                <div style={{ marginBottom: "1.5em", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75em" }}>
                    <Button icon labelPosition="left" basic circular color="teal" onClick={() => dispatch({ type: "START" })}>
                        <Icon name="smile outline" /> Me
                    </Button>
                    <Button icon labelPosition="left" basic circular color="green">
                        <Icon name="briefcase" /> Projects
                    </Button>
                    <Button icon labelPosition="left" basic circular color="violet">
                        <Icon name="group" /> Skills
                    </Button>
                    <Button icon labelPosition="left" basic circular color="pink">
                        <Icon name="magic" /> Fun
                    </Button>
                    <Button icon labelPosition="left" basic circular color="orange">
                        <Icon name="address book outline" /> Contact
                    </Button>
                    <Button icon labelPosition="left" basic circular color="grey">
                        <Icon name="ellipsis horizontal" />
                    </Button>
                </div>
                <div style={{ position: "relative", backgroundColor: "#f1f3f5", borderRadius: "999px", maxWidth: "720px", height: "64px", margin: "0 auto", display: "flex", alignItems: "center", paddingRight: "60px", paddingLeft: "24px" }}>
                    <input
                        type="text"
                        placeholder="Ask me anything"
                        style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "1.05em" }}
                        value={state.step >= 0 ? "Who are you?" : ""}
                        readOnly
                    />
                    <Button
                        icon
                        circular
                        color="blue"
                        style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 44, height: 44, minWidth: 44, boxShadow: "none" }}
                    >
                        <Icon name="arrow up" style={{ margin: 0 }} />
                    </Button>
                </div>
            </Container>
        </Segment>
    );
};

export default ControlSegment;
