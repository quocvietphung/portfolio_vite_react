import React from 'react'

export default function App() {
  return (
    <main
      style={{
        fontFamily: "'Fira Code', monospace",
        background: "linear-gradient(to right, #f8fbff, #eef3f8)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "4rem 1rem",
        transition: "all 0.5s ease-in-out"
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "900",
            marginBottom: "0.5rem",
            color: "#212121",
            animation: "fadeIn 1s ease-out"
          }}
        >
          Hello! 👋
        </h1>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#1e88e5",
            animation: "fadeInUp 1.2s ease-out"
          }}
        >
          I'm Viet Phung
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginTop: "1rem",
            color: "#455a64",
            animation: "fadeIn 1.5s ease-in-out"
          }}
        >
          AI Engineer · Deep Learning · Data Science · Cloud ML · Python
        </p>
      </section>

      <nav
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "3rem",
          fontSize: "1rem",
          fontWeight: "500",
          animation: "fadeIn 2s ease-in-out"
        }}
      >
        <a href="#about" style={{ textDecoration: "none", color: "#1976d2" }}>
          About
        </a>
        <a href="#projects" style={{ textDecoration: "none", color: "#1976d2" }}>
          Projects
        </a>
        <a href="#experience" style={{ textDecoration: "none", color: "#1976d2" }}>
          Experience
        </a>
        <a href="#education" style={{ textDecoration: "none", color: "#1976d2" }}>
          Education
        </a>
      </nav>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          gap: "1.5rem",
          justifyContent: "center"
        }}
      >
        <a href="mailto:quocvietphung1993@gmail.com" style={{ color: "#424242" }}>
          📧
        </a>
        <a href="https://linkedin.com/in/vietphung" target="_blank" style={{ color: "#0e76a8" }}>
          in
        </a>
        <a href="https://github.com/vietphung" target="_blank" style={{ color: "#000000" }}>
          🐙
        </a>
      </div>
    </main>
  )
}
