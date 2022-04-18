import {Routes, Route} from "react-router-dom";
import {Home} from "../Pages/Home"
import {Projetos} from "../Pages/Portifolio"
import {Sobre} from "../Pages/Sobre"
import {Tecnologias} from "../Pages/Tecnologias"
import { Contato } from "../Pages/Contatos";
import { Notfound } from "../Pages/Notfound";




export const Rotas = () =>{

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Sobre/>}/>
            <Route path="/tecnologias" element={<Tecnologias/>}/>
            <Route path="/portfolio" element={<Projetos/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="*" element={<Notfound/>}/>
        </Routes>
    )
}