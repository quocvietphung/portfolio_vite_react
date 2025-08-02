import React, { useEffect, lazy, Suspense } from "react";
import { Container, Segment, Label } from "semantic-ui-react";

const Typewriter = lazy(() =>
    import("react-simple-typewriter").then(mod => ({ default: mod.Typewriter }))
);

const introLines = [
    "You: Who are you?",
    "Hey 👋 I'm Viet, a developer specializing in AI, currently learning at Alfatraining. I’m passionate about AI, NLP, and SaaS product building.",
    "TAGS",
    "Before diving into tech, I worked as a software engineer and explored AI solutions with Python, ML, and cloud tools. I love exploring product ideas and building real-world solutions."
];

const tagList = ["AI", "Developer", "React", "42 Style", "SaaS Builder"];

const IntroSection = ({ state, dispatch }) => {
    useEffect(() => {
        if (state.step === -1 || state.step >= introLines.length - 1) return;
        const timer = setTimeout(() => dispatch({ type: "NEXT_STEP" }), 2400);
        return () => clearTimeout(timer);
    }, [state.step, dispatch]);

    return (
        <Segment basic style={{ padding: "2em 1em", marginTop: "1.5em", background: "transparent" }}>
            <Container text textAlign="center">
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
                            <Label key={tag} basic color="blue" style={{ margin: "0.3em" }}>{tag}</Label>
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
            </Container>
        </Segment>
    );
};

export default IntroSection;
