import { useState } from "react";
import toast from "react-hot-toast";
import "./style.css";

const ModalNewPalette = ({closeModal, getPalettes}) => {
  const [sabor, setSabor] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foto, setFoto] = useState("");


  const handleCreatePalette = async () => {
    const newPalette = {
      sabor,
      preco,
      descricao,
      foto,
      //sabor: flavour, preco: price
    };

    const response = await fetch(
      "http://localhost:8080/paletas/create-paleta",
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(newPalette),
      }
    );
    
    if(response.status !== 201){
      return toast.error("Falha na criação");
    }
    console.log(response);
    const palette = await response.json();

    //Verificação pelo id
    //!== undefined
    
    setSabor("");
    setPreco("");
    setDescricao("");
    setFoto("");
    closeModal();
    getPalettes();
    toast.success("Paleta adicionada ao cardapio");
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Adicionar cardápio</h3>
          <button onClick={closeModal}>X</button>
        </div>
        {/**
         * A função de callback recebe o event e chama o set para passar o novo valor;
         * O target do event é o input */}
        {/**O value é para fazer a relação quando for apagar os valores */}
        <input
          value={sabor}
          placeholder="Digite o sabor"
          onChange={(event) => setSabor(event.target.value)}
          name="sabor"
          type="text"
        />
        <input
          value={preco}
          placeholder="Digite o preço"
          onChange={(event) => setPreco(event.target.value)}
          name="preco"
          type="number"
        />
        <input
          value={descricao}
          placeholder="Digite a descrição"
          onChange={(event) => setDescricao(event.target.value)}
          name="descricao "
          type="text"
        />
        <input
          value={foto}
          placeholder="Digite o caminho da foto"
          onChange={(event) => setFoto(event.target.value)}
          name="foto"
          type="text"
        />
        <button onClick={handleCreatePalette}>Adicionar</button>
      </div>
    </div>
  );
};

export default ModalNewPalette;
