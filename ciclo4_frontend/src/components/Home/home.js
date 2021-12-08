//import { Link } from 'react-router-dom';

import NavBar from '../nav/nav';
// import Cards from "./components/Cards";

import React, { useState } from "react";
const Home = () => {
  
  return (
    <div>
      <NavBar pagina={"/home"}/>
      {/* <Logout/> */}
      <h1 className="text-center mt-5 mb-5">Pagina de Inicio</h1>
    </div>
  );
};

export default Home;