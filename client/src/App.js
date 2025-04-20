import { useEffect, useState } from "react";
import api from "./services/api";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [metas, setMetas] = useState([]);

  useEffect(() => {
    api
      .get("/metas")
      .then((response) => {
        setMetas(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar metas:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Metas dos membros:</p>
        <ul>
          {metas.map((meta, index) => (
            <li key={index}>{meta.nome}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
