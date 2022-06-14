import "./style.css";
import Card from "../Card";
import { useState } from "react";

//No react cada vez que o State é atualizado, ele renderiza o componente novamente(Home);
//Em cada renderização ele chama o getPalletes que faz o State ser atualizado novamente, criando um looping de funções
const Home = ({ palettes, getPalettes }) => {
  //Está passando como props o objeto, e no card manipula o objeto, ao invés de passar separadamente cada objeto;

  const [filterInput, setFilterInput] = useState("");

  return (
    <div className="home-container">
      <h2>Lista de Paletas</h2>
      <input
        value={filterInput}
        onChange={(event) => setFilterInput(event.target.value)}
        placeholder="Filtrar por nome"
      />
      {/**O .filter retorna um array*/}
      <div>
        {filterInput !== ""
          ? palettes
              .filter((element) =>
                element.sabor.toLowerCase().includes(filterInput.toLowerCase())
              )
              .map((element) => {
                return (
                  <Card
                    key={element._id}
                    palette={element}
                    getPalettes={getPalettes}
                  />
                );
              })
          : palettes.map((element) => {
              return (
                <Card
                  key={element._id}
                  palette={element}
                  getPalettes={getPalettes}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Home;
