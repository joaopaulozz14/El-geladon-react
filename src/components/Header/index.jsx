import "./style.css";
import logo from "../../assets/icons/logo.svg";
import checkoutIcon from "../../assets/icons/sacola.svg";
import newPaletteIcon from "../../assets/icons/paleta.svg";
import ModalNewPalette from "../Modals/ModalNewPalette";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = ({ getPalettes }) => {
  //Renderização condicional do modal/imagem de sacola de compras
  const [showIcon, setShowIcon] = useState(true);
  /*
    const handleShowIcon = () => {
        //Quando chamar essa função, ele troca o valor do useState para true;
        //!false == true; !true == false;
        //Transforma o valor para o contrário do que era;
        setShowIcon(!showIcon);
    }*/
  const handleShowIcon = () => {
    setShowIcon(!showIcon);
  };

  const [showModalCreate, setShowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setShowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div className="headerTitle-container">
          <img src={logo} alt="El Geladon Logo" />
          <h2>El geladon</h2>
        </div>
        <div className="headerOptions-container">
          <abbr title="Criar Paleta">
            <img
              src={newPaletteIcon}
              alt="Ícone de criar nova paleta"
              className="headerOptions-newPaletteIcon"
              onClick={handleShowModalCreate}
            />
          </abbr>
          {/*Se o showIcon for true a imagem é renderizada, senão for a imagem não é renderizada*/}
          {showIcon && (
            <abbr title="Sacola de compras">
              <img
                src={checkoutIcon}
                alt="Sacola de Checkout"
                className="headerOptions-checkoutIcon"
              />
            </abbr>
          )}
        </div>
      </div>
      {/**Aqui está escondido o modal, quando o onClick dispara o handleShowModalCreate, então o showModalCreate fica como true, e o modal importado da pasta Modals é exibido na tela
       *No closeModal está sendo passado a função de troca de estado, quando disparado no Modals é mudado o estado, então o showModalCreate fica como false novamente.
       */}
      {/**O App está passando para o Header que está passando para o modal
       *Para renderizar a página quando o modal estiver aberto
       */}
      {showModalCreate && (
        <ModalNewPalette
          closeModal={handleShowModalCreate}
          getPalettes={getPalettes}
        />
      )}
    </>
  );
};

export default Header;
