import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Nproyecto from './components/proyectos/proyecto_nuevo/nuevoProyecto'
import Home from './components/Home/home'
import NavBar from './components/nav/nav'
import ListaProductos from './components/proyectos/listarProyectos/listarProyectos'
import EditarProyecto from './components/proyectos/proyecto_nuevo/editarProyecto'
import AñadirIntegrantes from './components/proyectos/proyecto_nuevo/añadirIntegrantes'
import ListaProductoFiltro from'./components/proyectos/listarProyectos/listarUno'
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
      <Route path="/proyectos/:name" exact>
        <NavBar pagina={"/proyectos"}/>
        <ApolloProvider client={client}>
           <ListaProductoFiltro/>
        </ApolloProvider>  
      </Route>
      <Route path="/Nproyecto" exact>
        <NavBar pagina={"/Nproyecto"}/>
        <ApolloProvider client={client}>
          <Nproyecto/>
        </ApolloProvider> 
      </Route>
      <Route path="/editarProyecto/:_id" exact>
        <NavBar pagina={"/editarProyecto"}/>
        <ApolloProvider client={client}>
            <EditarProyecto/>
        </ApolloProvider> 
      </Route>
      <Route path="/añadir/:_id" exact>
        <NavBar pagina={"/añadir"}/>
        <ApolloProvider client={client}>
            <AñadirIntegrantes/>
        </ApolloProvider> 
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
