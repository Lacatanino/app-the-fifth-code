import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Nproyecto from './components/proyectos/proyecto_nuevo/nuevoProyecto'
import Home from './components/Home/home'
import NavBar from './components/nav/nav'
import ListaProductos from './components/proyectos/listarProyectos/listarProyectos'
import IngresoIncricion from './components/inscripciones/IngresoInscripcion/ingreso'
import ConsultaEstudiante from './components/inscripciones/estudiantes/consultaEstudiantes'
import Ninscripcion from './components/inscripciones/IngresoInscripcion/formularioinsc'
import ActualizaEstado from './components/inscripciones/estudiantes/actualizaEstado'
import Actinicial from './components/inscripciones/IngresoInscripcion/formIncripcion'
import BusquedaI from './components/inscripciones/IngresoInscripcion/busquedaItems'

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'http://localhost:9091/consulta',
  cache: new InMemoryCache()
}); 


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
          <Home />
      </Route>
      <Route path="/home" exact>
          <Home/>
      </Route>
      <Route path="/proyectos" exact>
        <NavBar pagina={"/proyectos"}/>
        <ApolloProvider client={client}>
           <ListaProductos/>
        </ApolloProvider>  
      </Route>
      <Route path="/Nproyecto" exact>
        <NavBar pagina={"/Nproyecto"}/>
        <ApolloProvider client={client}>
          <Nproyecto/>
        </ApolloProvider> 
      </Route>


      <Route path="/IngresoIncricion" exact>
        <NavBar pagina={"/IngresoIncricion"}/>
        <IngresoIncricion/>
      </Route>

      <Route path="/ConsultaEstudiante" exact>
        <NavBar pagina={"/ConsultaEstudiante"}/>
        <ConsultaEstudiante/>
      </Route>


      <Route path="/Ninscripcion" exact>
        <NavBar pagina={"/Ninscripcion"}/>
        <ApolloProvider client={client}>
          <Ninscripcion/>
        </ApolloProvider> 
      </Route>

     
      <Route path="/ActualizaEstado" exact>
        <NavBar pagina={"/ActualizaEstado"}/>
        <ApolloProvider client={client}>
          <ActualizaEstado/>
        </ApolloProvider> 
      </Route>

      <Route path="/Actinicial" exact>
        <NavBar pagina={"/Actinicial"}/>
        <ApolloProvider client={client}>
          <Actinicial/>
        </ApolloProvider> 
      </Route>
      <Route path="/BusquedaI" exact>
        <NavBar pagina={"/BusquedaI"}/>
        <ApolloProvider client={client}>
          <BusquedaI/>
        </ApolloProvider> 
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
