import React from "react";
import {
  Container,
  Header,
  Segment,
  Image,
  Icon,
  Input,
  Button,
  Label,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
      <Container text textAlign="center" style={{ paddingTop: "4em", paddingBottom: "6em" }}>
        <Image
          src="https://avatars.githubusercontent.com/u/9919?v=4"
          size="small"
          circular
          centered
          style={{ marginBottom: "1em" }}
        />
        <Header as="h1" style={{ fontWeight: "bold" }}>
          Viet Phung
        </Header>
        <Header.Subheader style={{ color: "gray", marginBottom: "2em" }}>
          AI Consultant • Data Engineer • Softwareentwickler
        </Header.Subheader>
        <p>
          Hey 👋 I'm Viet, a developer specializing in AI, currently learning at Alfatraining.
          I’m passionate about AI, NLP, and SaaS product building.
        </p>
        <div style={{ marginTop: "1.5em" }}>
          {["AI", "Developer", "React", "42 Style", "SaaS Builder"].map((tag) => (
            <Label key={tag} basic color="blue" style={{ margin: "0.3em" }}>
              {tag}
            </Label>
          ))}
        </div>
        <p style={{ color: "#777", marginTop: "2em" }}>
          Before diving into tech, I worked as a software engineer and explored AI solutions
          with Python, ML, and cloud tools. I love exploring product ideas and building real-world solutions.
        </p>
      </Container>

        <Segment
            style={{
                backgroundColor: "#ffffff",
                padding: "2.5em 2em",
                marginTop: "6em",
                borderRadius: "32px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                maxWidth: "780px",
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto"
            }}
        >
            <Container textAlign="center">
                <div
                    style={{
                        marginBottom: "1.5em",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.75em"
                    }}
                >
                    <Button icon labelPosition="left" basic circular color="teal">
                        <Icon name="smile outline" /> Me
                    </Button>
                    <Button icon labelPosition="left" basic circular color="green">
                        <Icon name="briefcase" /> Projects
                    </Button>
                    <Button icon labelPosition="left" basic circular color="violet">
                        <Icon name="layer group" /> Skills
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

                <div
                    style={{
                        position: "relative",
                        backgroundColor: "#f1f3f5",
                        borderRadius: "999px",
                        maxWidth: "600px",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "52px"
                    }}
                >
                    <input
                        type="text"
                        placeholder="Ask me anything"
                        style={{
                            flex: 1,
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            padding: "0.75em 1.25em",
                            borderRadius: "999px",
                            fontSize: "1em",
                            width: "100%"
                        }}
                    />
                    <Button
                        icon
                        circular
                        color="blue"
                        style={{
                            position: "absolute",
                            right: "6px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "36px",
                            height: "36px",
                            minWidth: "36px",
                            boxShadow: "none"
                        }}
                    >
                        <Icon name="arrow up" style={{ margin: 0 }} />
                    </Button>
                </div>
            </Container>
        </Segment>
    </div>
  );
};

export default App;
