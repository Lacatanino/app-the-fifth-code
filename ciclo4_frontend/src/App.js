import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Nproyecto from './components/proyectos/proyecto_nuevo/nuevoProyecto'
import Home from './components/Home/home'
import NavBar from './components/nav/nav'
import ListaProductos from './components/proyectos/listarProyectos/listarProyectos'
import ActivarProyecto from './components/proyectos/proyecto_nuevo/editarProyecto'
import ListaAvances from './components/avances/listaAvances'
import Avances from './components/avances/formAvances'
import NAvances from './components/avances/addAvance'

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
      <Route path="/editarProyecto" exact>
        <NavBar pagina={"/editarProyecto"}/>
        <ApolloProvider client={client}>
            <ActivarProyecto/>
        </ApolloProvider> 
      </Route>
      <Route path="/NAvances" exact>
        <NavBar pagina={"/NAvances"}/>
        <NAvances/>
      </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
