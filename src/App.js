import { useEffect } from "react";
import { Header, Footer} from "./components/All/index";
import { Rotas } from "./components/Rotas";
import AOS from "aos";
import "aos/dist/aos.css";
import {Toaster} from "react-hot-toast"

function App() {
  
 
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    
  }, []);

  return (
    <>
      <Header />
      <Rotas />
      <Footer />
      <Toaster position="bottom-right"/>
    </>
  );
}

export default App;
