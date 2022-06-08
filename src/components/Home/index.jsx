import "./style.css";
import { useState, useEffect } from "react";
import Card from "../Card";
import paleta from "../../mock/paleta";

const Home = () => {
  // Declaração dos states
  const [palettes, setPalettes] = useState(paleta);

  // Declaração das funções
  const getPalettes = async () => {
    const response = await fetch("http://localhost:8080/paletas/listar-todas");
    const palettesList = await response.json();

    console.log("Fez requisição");
    setPalettes(palettesList);
  };

  // Declaração dos ciclos de vida

  // Ciclo de vida de montagem (array vazio)
  useEffect(() => {
    getPalettes();
  }, []);

  //Está passando como props o objeto, e no card manipula o objeto, ao invés de passar separadamente cada objeto;
  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <div>
        {palettes.map((element) => {
          return <Card key={element._id} palette={element} />;
        })}
      </div>
    </div>
  );
};

export default Home;