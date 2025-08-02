import React, { Suspense, lazy } from "react";
import { Segment, Container, Label } from "semantic-ui-react";

const Typewriter = lazy(() =>
    import("react-simple-typewriter").then(mod => ({ default: mod.Typewriter }))
);

const SectionDisplay = ({ section }) => {
    if (!section) return null;
    return (
        <Segment basic style={{ padding: "2em 1em", marginTop: "1.5em", background: "transparent" }}>
            <Container text textAlign="center">
                {section.lines.map((line, idx) => {
                    if (line === "TAGS" && section.tags) {
                        return (
                            <div key={idx} style={{ marginTop: "1.5em" }}>
                                {section.tags.map(tag => (
                                    <Label key={tag} basic color="blue" style={{ margin: "0.3em" }}>
                                        {tag}
                                    </Label>
                                ))}
                            </div>
                        );
                    }
                    return (
                        <Suspense key={idx} fallback={<p style={{ color: "#777" }}>{line}</p>}>
                            <p style={{
                                fontWeight: idx === 0 ? 600 : "normal",
                                marginTop: idx === 0 ? "0.5em" : "1.2em",
                                color: idx === 0 ? undefined : "#555"
                            }}>
                                <Typewriter words={[line]} loop={1} typeSpeed={35} cursor cursorStyle="|" />
                            </p>
                        </Suspense>
                    );
                })}
            </Container>
        </Segment>
    );
};

export default SectionDisplay;
