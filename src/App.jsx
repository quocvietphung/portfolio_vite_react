import React, { useReducer } from "react";
import "semantic-ui-css/semantic.min.css";
import ParticlesBackground from "./components/ParticlesBackground";
import AvatarHeader from "./components/AvatarHeader";
import IntroSection from "./components/IntroSection";
import ControlSegment from "./components/ControlSegment";
import { Container } from "semantic-ui-react";

// State + reducer trực tiếp trong App
const initialState = { messages: [], step: -1 };
const chatReducer = (state, action) => {
    switch (action.type) {
        case "START":
            return { ...state, step: 0, messages: [{ role: "user", text: "Who are you?" }] };
        case "NEXT_STEP":
            return { ...state, step: state.step + 1 };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = useReducer(chatReducer, initialState);

    return (
        <>
            <ParticlesBackground />
            <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", display: "flex", flexDirection: "column" }}>
                <Container text textAlign="center" style={{ paddingTop: "4em", paddingBottom: "6em" }}>
                    <AvatarHeader />
                    <IntroSection state={state} dispatch={dispatch} />
                </Container>
                <ControlSegment state={state} dispatch={dispatch} />
            </div>
        </>
    );
};

export default App;
