import React from "react";

const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    background: "linear-gradient(135deg, #f4f7fe 0%, #ffffff 100%)",
    minHeight: "100vh",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    width: "180px",
    height: "180px",
    borderRadius: "16px",
    objectFit: "cover",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
    marginBottom: "24px"
  },
  name: {
    fontSize: "36px",
    color: "#1a1a1a",
    marginBottom: "10px"
  },
  title: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "24px"
  },
  nav: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "40px"
  },
  button: {
    padding: "12px 20px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  introBox: {
    maxWidth: "850px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    color: "#333",
    lineHeight: "1.6"
  },
  introHeading: {
    marginBottom: "16px",
    fontSize: "24px",
    color: "#222"
  },
  paragraph: {
    marginBottom: "12px"
  }
};

const App = () => {
  return (
    <div style={styles.container}>
      {/* Avatar + Name + Title */}
      <img
        src="https://avatars.githubusercontent.com/u/9919?v=4"
        alt="Avatar"
        style={styles.avatar}
      />
      <h1 style={styles.name}>
        Viet Phung
      </h1>
      <p style={styles.title}>
        AI Consultant • Data Engineer • Softwareentwickler
      </p>

      <div style={styles.introBox}>
        <h2 style={styles.introHeading}>
          👨‍💻 Über mich
        </h2>
        <p style={styles.paragraph}>
          Mein Name ist Viet Phung. Ich bin ein leidenschaftlicher Entwickler mit einem besonderen Fokus auf
          <strong> Künstliche Intelligenz, Datenanalyse</strong> und moderne Webtechnologien.
        </p>
        <p style={styles.paragraph}>
          Nach meinem Abschluss in Informatik an der FH Münster und mehreren Jahren Erfahrung als Softwareentwickler
          (Spring Boot, Flutter, REST APIs) habe ich Anfang 2025 beschlossen, mich vollständig dem Bereich
          <strong> AI/ML </strong> zu widmen.
        </p>
        <p style={styles.paragraph}>
          Derzeit absolviere ich eine praxisnahe Weiterbildung zum AI Consultant bei Alfatraining,
          um meine Fähigkeiten in <strong>Deep Learning, NLP, Data Science</strong> und Cloud (Azure) weiter auszubauen.
        </p>
      </div>
      {/* Quick Questions + Chat Input */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.05)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 100
      }}>
        <div style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "12px"
        }}>
          {["👤 Me", "📁 Projects", "🛠️ Skills", "🎮 Fun", "📞 Contact", "❓"].map((item, idx) => (
            <button
              key={idx}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                backgroundColor: "#f9f9f9",
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#f1f3f5",
          borderRadius: "999px",
          padding: "8px 16px"
        }}>
          <input
            type="text"
            placeholder="Ask me anything"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "15px"
            }}
          />
          <button style={{
            backgroundColor: "#4c8bf5",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            cursor: "pointer"
          }}>
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
