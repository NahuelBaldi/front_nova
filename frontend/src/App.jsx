import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import { Nav } from './componentes/nav.jsx';
import { Home } from './componentes/home.jsx'

import { FormularioContacto } from './componentes/formularioContacto.jsx';
import { Footer } from './componentes/footer.jsx';
import { FormInicio } from './componentes/forms/formInicio.jsx';
import { FormRegistro } from './componentes/forms/formRegistro.jsx';
import { FormEdit } from './componentes/forms/formEdit.jsx';
import { Buscador } from './componentes/buscador.jsx';

function App() {

  return (
    <>


      <BrowserRouter>
        <Nav></Nav>
        <Buscador></Buscador>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iniciar-sesion" element={<FormInicio />} />
          <Route path="/registrar-usuario" element={<FormRegistro />} />
          <Route path="/editar-curso" element={<FormEdit />} />

        </Routes>
        <Home></Home>


        <FormularioContacto></FormularioContacto>
        <Footer></Footer>
      </BrowserRouter>

      <a href="index.js"></a>

    </>
  );
}

export default App;