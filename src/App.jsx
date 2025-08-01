import React, { useState, useEffect } from "react";
import {
    Container,
    Header,
    Segment,
    Image,
    Icon,
    Button,
    Label
} from "semantic-ui-react";
import { Typewriter } from "react-simple-typewriter";
import "semantic-ui-css/semantic.min.css";

const introLines = [
    "You: Who are you?",
    "Hey 👋 I'm Viet, a developer specializing in AI, currently learning at Alfatraining. I’m passionate about AI, NLP, and SaaS product building.",
    "TAGS",  // sẽ render label
    "Before diving into tech, I worked as a software engineer and explored AI solutions with Python, ML, and cloud tools. I love exploring product ideas and building real-world solutions."
];

const tagList = ["AI", "Developer", "React", "42 Style", "SaaS Builder"];

const App = () => {
    const [step, setStep] = useState(-1);

    // Khi click Me ➜ bắt đầu hiển thị từng dòng
    const startIntro = () => {
        if (step !== -1) return;
        setStep(0);
    };

    // Hiện từng dòng 1, sau khi gõ xong thì show dòng tiếp theo sau delay 1s
    useEffect(() => {
        if (step === -1 || step === introLines.length - 1) return;
        // Thời gian đợi: mỗi dòng sẽ có typewriter (2s), sau đó đợi 1s mới show dòng tiếp theo
        const timer = setTimeout(() => setStep(step + 1), 2000 + (step === 1 ? 800 : 0));
        return () => clearTimeout(timer);
    }, [step]);

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
            {/* HEADER */}
            <Container text textAlign="center" style={{ paddingTop: "4em", paddingBottom: "6em" }}>
                <Image
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    size="small"
                    circular
                    centered
                    style={{ marginBottom: "1em" }}
                />
                <Header as="h1" style={{ fontWeight: "800", letterSpacing: 1 }}>
                    Viet Phung
                </Header>
                <Header.Subheader style={{ color: "#5f6368", marginBottom: "1.2em" }}>
                    AI Consultant • Data Engineer • Softwareentwickler
                </Header.Subheader>

                {/* Từng dòng hiện ra như typewriter */}
                <div style={{ minHeight: 280 }}>
                    {step >= 0 &&
                        <p style={{ fontWeight: 600, marginTop: "0.5em", minHeight: 32 }}>
                            <Typewriter words={[introLines[0]]} loop={1} typeSpeed={40} cursor cursorStyle="|" />
                        </p>
                    }
                    {step >= 1 &&
                        <p style={{ marginTop: "1.2em", minHeight: 48 }}>
                            <Typewriter words={[introLines[1]]} loop={1} typeSpeed={30} cursor cursorStyle="|" />
                        </p>
                    }
                    {step >= 2 &&
                        <div style={{ marginTop: "1.5em" }}>
                            {tagList.map((tag) => (
                                <Label key={tag} basic color="blue" style={{ margin: "0.3em" }}>
                                    {tag}
                                </Label>
                            ))}
                        </div>
                    }
                    {step >= 3 &&
                        <p style={{ color: "#777", marginTop: "2em", minHeight: 48 }}>
                            <Typewriter words={[introLines[3]]} loop={1} typeSpeed={28} cursor cursorStyle="|" />
                        </p>
                    }
                </div>
            </Container>

            {/* CONTROL SEGMENT */}
            <Segment
                style={{
                    backgroundColor: "#ffffff",
                    padding: "2.5em 2em",
                    marginTop: "6em",
                    borderRadius: "32px",
                    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
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
                        <Button icon labelPosition="left" basic circular color="teal" onClick={startIntro}>
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
                            value={step >= 0 ? "Who are you?" : ""}
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
