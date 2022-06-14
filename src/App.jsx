import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import api from "./api";
//Fragment <> </>
//Toaster é uma função do react para mostrar mensagens prontas na tela(erro, sucesso);
function App() {
  // Declaração dos states
  const [palettes, setPalettes] = useState([]);

  // Declaração das funções
  const getPalettes = async () => {
    const response = await api.get("/paletas/all-paletas");
    //const palettesList = await response.json();

    setPalettes(response.data);
  };

  // Declaração dos ciclos de vida
  // Ciclo de vida de montagem (array vazio)
  useEffect(() => {
    getPalettes();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      {/**O primeiro é o nome o segundo o valor*/}
      <Header getPalettes={getPalettes} />
      <Home palettes={palettes} getPalettes={getPalettes} />
      <Footer />
    </>
  );
}

export default App;
