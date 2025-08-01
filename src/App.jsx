import React from "react";

const App = () => {
  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        background: "linear-gradient(135deg, #f4f7fe 0%, #ffffff 100%)",
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Avatar + Name + Title */}
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="Avatar"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "16px",
          objectFit: "cover",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          marginBottom: "24px",
        }}
      />
      <h1
        style={{
          fontSize: "36px",
          color: "#1a1a1a",
          marginBottom: "10px",
        }}
      >
        Viet Phung
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#555",
          marginBottom: "24px",
        }}
      >
        AI Consultant • Data Engineer • Softwareentwickler
      </p>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {["Über mich", "Projekte", "Skills", "Kontakt"].map((label, idx) => (
          <button
            key={idx}
            style={{
              padding: "12px 20px",
              fontSize: "15px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              backgroundColor: "#fff",
              color: "#333",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#e9ecef";
              e.target.style.borderColor = "#999";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.borderColor = "#ccc";
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Introduction Section */}
      <div
        style={{
          maxWidth: "850px",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
          color: "#333",
          lineHeight: "1.6",
        }}
      >
        <h2 style={{ marginBottom: "16px", fontSize: "24px", color: "#222" }}>
          👨‍💻 Über mich
        </h2>
        <p style={{ marginBottom: "12px" }}>
          Mein Name ist Viet Phung. Ich bin ein leidenschaftlicher Entwickler mit einem besonderen Fokus auf
          <strong> Künstliche Intelligenz, Datenanalyse</strong> und moderne Webtechnologien.
        </p>
        <p style={{ marginBottom: "12px" }}>
          Nach meinem Abschluss in Informatik an der FH Münster und mehreren Jahren Erfahrung als Softwareentwickler
          (Spring Boot, Flutter, REST APIs) habe ich Anfang 2025 beschlossen, mich vollständig dem Bereich
          <strong> AI/ML </strong> zu widmen.
        </p>
        <p>
          Derzeit absolviere ich eine praxisnahe Weiterbildung zum AI Consultant bei Alfatraining,
          um meine Fähigkeiten in <strong>Deep Learning, NLP, Data Science</strong> und Cloud (Azure) weiter auszubauen.
        </p>
      </div>
    </div>
  );
};

export default App;
