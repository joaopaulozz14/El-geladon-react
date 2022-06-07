import './style.css';
import logo from '../../assets/icons/logo.svg';
import checkoutIcon from '../../assets/icons/sacola.svg';

const  Header = () => {
    return(
        <div className='header-container'>
            <div>
                <img src={logo} alt="El Geladon Logo" />
                <h1>El geladon</h1>
            </div>
            <img src={checkoutIcon} alt="Sacola de Checkout" />
        </div>
    )
}

export default Header;