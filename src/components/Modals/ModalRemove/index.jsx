import "./style.css";
import { toast } from "react-hot-toast";
const ModalRemovePalette = ({ closeModal, palette, getPalettes }) => {
  const handleRemovePalette = async () => {
    const response = await fetch(
      `http://localhost:8080/paletas/delete-paleta/${palette._id}`,
      {
        method: "DELETE",
        mode: "cors",
      }
    );
    if (response.status !== 200) {
      return toast.error("Erro na exclusão da paleta");
    }
    closeModal();
    getPalettes();
    toast.success("Paleta deletada com sucesso");
  };

  return (
    <div className="modal-overlay">
      <div className="modalRemove-container">
        <div className="modalRemove-header">
          <h3>Deseja excluir a paleta {palette.sabor}?</h3>
        </div>
        <div className="modalRemove-actions">
          <button className="successButton" onClick={handleRemovePalette}>
            Sim
          </button>
          <button className="cancelButton" onClick={closeModal}>
            Não
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRemovePalette;
