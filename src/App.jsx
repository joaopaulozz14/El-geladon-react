import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
        <Toaster position="bottom-center" />
        <Header/>
        <Home />
        <Footer />
    </div>
  );
}

export default App;
