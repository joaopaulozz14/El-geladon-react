import "./style.css";
import { useState } from "react";
import { toast } from "react-hot-toast";
const ModalEditPalette = ({ closeModal, palette, getPalettes }) => {
  const [sabor, setSabor] = useState(palette.sabor);
  const [preco, setPreco] = useState(palette.preco);
  const [descricao, setDescricao] = useState(palette.descricao);
  const [foto, setFoto] = useState(palette.foto);

  const handleEditPalette = async () => {
    const editedPalette = {
      sabor,
      preco,
      descricao,
      foto,
    };

    const response = await fetch(
      `http://localhost:8080/paletas/update-paleta/${palette._id}`,
      {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(editedPalette),
      }
    );

    if(response.status !== 200){
        return toast.error("Falha na atualização");
    }

    closeModal();
    getPalettes();
    toast.success("Paleta atualizada com sucesso");
  };
  //O input já inicia com o valor passado no useState;
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div>
          <h3>Editar Paleta</h3>
          <button onClick={closeModal}>X</button>
          </div>
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
            name="descricao"
            type="text"
          />
          <input
            value={foto}
            placeholder="Digite o caminho da foto"
            onChange={(event) => setFoto(event.target.value)}
            name="foto"
            type="text"
          />
          <button onClick={handleEditPalette}>Editar</button>
        
      </div>
    </div>
  );
};

export default ModalEditPalette;
