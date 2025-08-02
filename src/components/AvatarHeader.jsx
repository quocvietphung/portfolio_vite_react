import React, { memo } from "react";
import { Image, Header } from "semantic-ui-react";

const AvatarHeader = memo(() => (
    <div style={{ position: "relative", marginBottom: "1.5em" }}>
        <div
            style={{
                position: "absolute",
                top: "22px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 260,
                height: 120,
                background: "radial-gradient(circle at 65% 35%, #ffd6fa90 0%, #aee7f799 70%, #ffffff00 100%)",
                filter: "blur(30px)",
                zIndex: 0,
            }}
        />
        <Image
            src="/assets/avatar-memoji.png"
            size="small"
            circular
            centered
            style={{ position: "relative", zIndex: 1, marginBottom: "1em", background: "#fff" }}
        />
        <Header as="h1" style={{ fontWeight: 800, letterSpacing: 1, zIndex: 2, position: "relative" }}>Viet Phung</Header>
        <Header.Subheader style={{ color: "#5f6368", marginBottom: "1.2em", position: "relative", zIndex: 2 }}>
            AI Consultant • Data Engineer • Softwareentwickler
        </Header.Subheader>
    </div>
));

export default AvatarHeader;
