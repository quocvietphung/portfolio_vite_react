import React, { useState, useRef } from 'react';

function Typewriter({ text, speed = 50 }) {
  const [displayed, setDisplayed] = React.useState("");
  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span>{displayed}</span>;
}

export default function App() {
  const [input, setInput] = useState("");
  const [showAboutMe, setShowAboutMe] = useState(false);
  const aboutRef = useRef(null);

  const handleAsk = () => {
    const normalized = input.trim().toLowerCase();
    if (normalized === "about me" || normalized === "who are you") {
      setInput("Who are you");
      setShowAboutMe(true);
      setTimeout(() => {
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <main
      style={{
        fontFamily: "'Fira Code', monospace",
        background: "linear-gradient(to right, #f8fbff, #eef3f8)",
        minHeight: "100vh",
        padding: "4rem 1rem",
        transition: "all 0.5s ease-in-out",
        textAlign: "center"
      }}
    >
      <header>
        <h1 style={{ fontSize: "3.5rem", fontWeight: "900", color: "#212121" }}>
          Hello! 👋
        </h1>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1e88e5" }}>
          I'm Viet Phung
        </h2>
        <p style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#455a64" }}>
          AI Engineer · Deep Learning · Data Science · Cloud ML · Python
        </p>
      </header>

      <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2.5rem" }}>
        <a
          href="#about"
          style={{ textDecoration: "none", color: "#1976d2" }}
          onClick={(e) => {
            e.preventDefault();
            setInput("Who are you");
            setShowAboutMe(true);
            setTimeout(() => {
              if (aboutRef.current) {
                aboutRef.current.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
        >
          About
        </a>
        <a href="#projects" style={{ textDecoration: "none", color: "#1976d2" }}>Projects</a>
        <a href="#experience" style={{ textDecoration: "none", color: "#1976d2" }}>Experience</a>
        <a href="#education" style={{ textDecoration: "none", color: "#1976d2" }}>Education</a>
      </nav>

      {showAboutMe && (
        <section
          ref={aboutRef}
          style={{
            marginTop: "3rem",
            backgroundColor: "#f1f8e9",
            padding: "2rem",
            borderRadius: "16px",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
          }}
        >
          <h2 style={{ color: "#33691e", marginBottom: "1rem" }}>👤 About Me</h2>
          <p>
            <strong>Who are you?</strong> —{" "}
            <Typewriter text="I'm Viet Phung, an AI Engineer driven by curiosity and a love for solving complex problems with scalable ML solutions." />
          </p>
          <p>👇 You can ask me more below!</p>
        </section>
      )}

      <div style={{ marginTop: "3rem" }}>
        <input
          type="text"
          placeholder="Ask me something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          style={{
            padding: "0.6rem 1rem",
            fontSize: "1rem",
            width: "60%",
            maxWidth: "480px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            marginRight: "0.5rem"
          }}
        />
        <button
          onClick={handleAsk}
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            border: "none",
            padding: "0.6rem 1.2rem",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Ask
        </button>
      </div>

      <footer style={{ marginTop: "4rem", display: "flex", gap: "1.5rem", justifyContent: "center" }}>
        <a href="mailto:quocvietphung1993@gmail.com" style={{ color: "#424242" }}>📧</a>
        <a href="https://linkedin.com/in/vietphung" target="_blank" style={{ color: "#0e76a8" }}>in</a>
        <a href="https://github.com/vietphung" target="_blank" style={{ color: "#000000" }}>🐙</a>
      </footer>
    </main>
  );
}
