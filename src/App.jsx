import React, { useState, useEffect, lazy, Suspense, memo, createContext, useReducer } from "react";
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

// Lazy‑load typewriter to keep initial bundle small
const Typewriter = lazy(() => import("react-simple-typewriter").then(mod => ({ default: mod.Typewriter })));

/* ----------------------------- Chat Context ----------------------------- */
const ChatContext = createContext();
const initialState = { messages: [], step: -1 };
function chatReducer(state, action) {
    switch (action.type) {
        case "START":
            return { ...state, step: 0, messages: [{ role: "user", text: "Who are you?" }] };
        case "NEXT_STEP":
            return { ...state, step: state.step + 1 };
        default:
            return state;
    }
}

/* --------------------------- Static data --------------------------- */
const introLines = [
    "You: Who are you?",
    "Hey 👋 I'm Viet, a developer specializing in AI, currently learning at Alfatraining. I’m passionate about AI, NLP, and SaaS product building.",
    "TAGS", // placeholder – labels
    "Before diving into tech, I worked as a software engineer and explored AI solutions with Python, ML, and cloud tools. I love exploring product ideas and building real-world solutions."
];
const tagList = ["AI", "Developer", "React", "42 Style", "SaaS Builder"];

/* -------------------------- Reusable components -------------------------- */
const AvatarHeader = memo(() => (
    <>
        <Image src="https://avatars.githubusercontent.com/u/9919?v=4" size="small" circular centered style={{ marginBottom: "1em" }} />
        <Header as="h1" style={{ fontWeight: 800, letterSpacing: 1 }}>Viet Phung</Header>
        <Header.Subheader style={{ color: "#5f6368", marginBottom: "1.2em" }}>
            AI Consultant • Data Engineer • Softwareentwickler
        </Header.Subheader>
    </>
));

function IntroSection() {
    const { state, dispatch } = React.useContext(ChatContext);

    // auto advance steps
    useEffect(() => {
        if (state.step === -1 || state.step >= introLines.length - 1) return;
        const timer = setTimeout(() => dispatch({ type: "NEXT_STEP" }), 2200);
        return () => clearTimeout(timer);
    }, [state.step, dispatch]);

    return (
        <div style={{ minHeight: 280 }}>
            {state.step >= 0 && (
                <Suspense fallback={<p style={{ fontWeight: 600 }}>You: Who are you?</p>}>
                    <p style={{ fontWeight: 600, marginTop: "0.5em", minHeight: 32 }}>
                        <Typewriter words={[introLines[0]]} loop={1} typeSpeed={45} cursor cursorStyle="|" />
                    </p>
                </Suspense>
            )}

            {state.step >= 1 && (
                <Suspense fallback={<p style={{ marginTop: "1.2em" }}>{introLines[1]}</p>}>
                    <p style={{ marginTop: "1.2em", minHeight: 48 }}>
                        <Typewriter words={[introLines[1]]} loop={1} typeSpeed={35} cursor cursorStyle="|" />
                    </p>
                </Suspense>
            )}

            {state.step >= 2 && (
                <div style={{ marginTop: "1.5em" }}>
                    {tagList.map(tag => (
                        <Label key={tag} basic color="blue" style={{ margin: "0.3em" }}>
                            {tag}
                        </Label>
                    ))}
                </div>
            )}

            {state.step >= 3 && (
                <Suspense fallback={<p style={{ color: "#777" }}>{introLines[3]}</p>}>
                    <p style={{ color: "#777", marginTop: "2em", minHeight: 48 }}>
                        <Typewriter words={[introLines[3]]} loop={1} typeSpeed={30} cursor cursorStyle="|" />
                    </p>
                </Suspense>
            )}
        </div>
    );
}

function ControlSegment() {
    const { state, dispatch } = React.useContext(ChatContext);
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
                <div
                    style={{
                        marginBottom: "1.5em",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "0.75em"
                    }}
                >
                    <Button icon labelPosition="left" basic circular color="teal" onClick={() => dispatch({ type: "START" })}>
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

                {/* Input readonly to mirror user question */}
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
                        style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: "1.05em" }}
                        value={state.step >= 0 ? "Who are you?" : ""}
                        readOnly
                    />
                    <Button
                        icon
                        circular
                        color="blue"
                        style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 44,
                            height: 44,
                            minWidth: 44,
                            boxShadow: "none"
                        }}
                    >
                        <Icon name="arrow up" style={{ margin: 0 }} />
                    </Button>
                </div>
            </Container>
        </Segment>
    );
}

/* ------------------------------ Main App ------------------------------ */
export default function App() {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
                <Container text textAlign="center" style={{ paddingTop: "4em", paddingBottom: "6em" }}>
                    <AvatarHeader />
                    <IntroSection />
                </Container>
                <ControlSegment />
            </div>
        </ChatContext.Provider>
    );
}
