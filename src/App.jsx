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
          backgroundColor: "#fff",
          padding: "2.5em 2em",
          marginTop: "4em",
          borderRadius: "24px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          maxWidth: "800px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Container textAlign="center">
          <div style={{ marginBottom: "1em", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5em" }}>
            {["Me", "Projects", "Skills", "Fun", "Contact", "?"].map((item) => (
              <Button
                basic
                circular
                key={item}
                content={item}
                icon
                labelPosition="left"
              >
                {item}
              </Button>
            ))}
          </div>

          <Input
            iconPosition="right"
            placeholder="Ask me anything..."
            style={{
              borderRadius: "999px",
              padding: "0.75em 1.25em",
              maxWidth: "600px",
              width: "100%",
              background: "#f1f3f5"
            }}
          >
            <input style={{ borderRadius: "999px", backgroundColor: "#f1f3f5" }} />
            <Icon name="send" circular color="blue" />
          </Input>
        </Container>
      </Segment>
    </div>
  );
};

export default App;
