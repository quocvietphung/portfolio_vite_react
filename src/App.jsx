import React, { useState } from "react";
import {
    Container,
    Header,
    Segment,
    Image,
    Icon,
    Button,
    Label
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => {
    const [showIntro, setShowIntro] = useState(false);

    const handleButtonClick = () => {
        setShowIntro(true);
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
            {/* PHẦN GIỚI THIỆU */}
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

                <Header.Subheader style={{ color: "gray", marginBottom: "1em" }}>
                    AI Consultant • Data Engineer • Softwareentwickler
                </Header.Subheader>

                {showIntro && (
                    <>
                        <p style={{ fontWeight: "bold", marginTop: "0.5em" }}>You: Who are you?</p>

                        <p style={{ marginTop: "1em" }}>
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
                    </>
                )}
            </Container>

            {/* PHẦN SEGMENT GỐC BẠN YÊU CẦU */}
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
                        <Button icon labelPosition="left" basic circular color="teal" onClick={handleButtonClick}>
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
                            maxWidth: "720px",
                            height: "64px",
                            margin: "0 auto",
                            display: "flex",
                            alignItems: "center",
                            paddingRight: "60px",
                            paddingLeft: "24px"
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
                                fontSize: "1.05em",
                                padding: 0,
                                height: "100%",
                                lineHeight: "64px",
                            }}
                            value={showIntro ? "Who are you?" : ""}
                            readOnly
                        />
                        <Button
                            icon
                            circular
                            color="blue"
                            style={{
                                position: "absolute",
                                right: "12px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "44px",
                                height: "44px",
                                minWidth: "44px",
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
