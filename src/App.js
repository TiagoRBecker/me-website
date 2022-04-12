import { useEffect } from "react";
import { Header,Footer } from "./components/All/index";
import {Rotas} from "./components/Rotas"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  
  return (
    <>
      <Header />
      <Rotas/>
      <Footer/>
      
    </>
  );
}

export default App;
