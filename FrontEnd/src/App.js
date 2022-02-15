import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Autores from "./views/autores";
import Create from "./views/autores/Create";
import Detail from "./views/autores/Detail";
import Update from "./views/autores/Update";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Autores" element={<Autores/>} />
        <Route path="/Create" element={<Create/>} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/Update" element={<Update/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
