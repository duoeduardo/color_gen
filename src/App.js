import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Salu2");
  };

  return (
    <>
      <section className="container">
        <h3>Generador de colores</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          />
          <button className="btn" type="submit">
            Buscar
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>Lista aqui</h4>
      </section>
    </>
  );
}

export default App;
