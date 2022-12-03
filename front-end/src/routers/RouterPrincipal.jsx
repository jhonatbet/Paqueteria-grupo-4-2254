import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { CrearOrden } from '../components/CrearOrden';
import { ActualizarOrden } from '../components/ActualizarOrden';
import Login from '../components/Login';
import { Ordenes } from '../components/Ordenes';
import { Registro } from '../components/Registro';


export const RouterPrincipal = () => {


  return (

    <BrowserRouter>

      <ul className="nav justify-content-end black mb-4">
        <li className="nav-item">
          <NavLink to="/login"
          className="nav-link active" aria-current="page" >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/ordenes"
          className="nav-link active" aria-current="page" >Ordenes</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/crearorden"
          className="nav-link active" aria-current="page" >Crear Orden</NavLink>
        </li> */}
        {/* <li className="nav-item">
          <NavLink to="/actualizarorden"
          className="nav-link active" aria-current="page" >Actualizar Orden</NavLink>
        </li> */}
      </ul>



      <section className = "contenido-principal">
        {/* cargar componentes */}
        {/* Aqui se carga el componente que coincide con el Path */}
          <Routes>
              <Route path='/' element={<Login/>}/> 
              <Route path='/login' element={<Login/>}/>
              <Route path='/registro' element={< Registro/>}/>
              <Route path='/ordenes' element={< Ordenes/>}/>
              <Route path='/ordenes/:id/edit' element={< ActualizarOrden/>}/>
              <Route path='/ordenes/new' element={< CrearOrden/>}/>
              {/* <Route path='/crearorden' element={< CrearOrden/>}/> */}
              {/* <Route path='/actualizarorden' element={< ActualizarOrden/>}/> */}
              {/* <Route path='/actualizarorden/:id' element={< ActualizarOrden/>}/> */}

          </Routes>
        </section>
        
    </BrowserRouter>
  )
}


{/* <BrowserRouter>
<Navbar />
<div className="App">
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/books" element={<BooksHome />} />
    <Route path="/books/:id" element={<Book />} />
    <Route path="/books/:id/edit" element={<BookEdit />} />
    <Route path="/books/new" element={<BookNew />} />
    <Route path="/contenedor" element={<Contenedor />} />
  </Routes>
</div>
</BrowserRouter> */}