import React from "react";

// a láblác ahol a professzinális oldalakhoz hasonlóan helyben formázva így átláthatóbb
export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "15px 0",
      backgroundColor: "#f2f2f2",
      borderTop: "2px solid #00aa00",
      marginTop: "20px"
    }}>
      © 2025 Recept App. Minden jog fenntartva.
    </footer>
  );
}
