import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Nproyecto from './components/proyectos/proyecto_nuevo/nuevoProyecto'
import Home from './components/Home/home'
import NavBar from './components/nav/nav'
import ListaProductos from './components/proyectos/listarProyectos/listarProyectos'
import ActivarProyecto from './components/proyectos/proyecto_nuevo/editarProyecto'
import ListarAvances from './components/avances/verAvances'
import NAvance from './components/avances/nuevoAvance'
import CreateAvance from './components/avances/avanceCreado'
import FormAvances from './components/avances/formAvances';
import EditAvance from './components/avances/editarAvances';

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
      
      <Route path="/ListarAvances" exact>
        <NavBar pagina={"/ListarAvances"}/>
        <ApolloProvider client={client}>
          <ListarAvances/>
        </ApolloProvider>
      </Route>

      <Route path="/NuevoAvance" exact>
        <NavBar pagina={"/NuevoAvance"}/>
        <ApolloProvider client={client}>
          <NAvance/>
        </ApolloProvider>
      </Route>

      <Route path="/formAvances" exact>
        <NavBar pagina={"/formAvances"}/>
        <ApolloProvider client={client}>
          <FormAvances/>
        </ApolloProvider>
      </Route>

      <Route path="/AvanceCreado" exact>
        <NavBar pagina={"/AvanceCreado"}/>
        <ApolloProvider client={client}>
            <CreateAvance/>
        </ApolloProvider> 
      </Route>       

      <Route path="/EditarAvances/:project_id" exact>
        <NavBar pagina={"/EditarAvances/"}/>
        <ApolloProvider client={client}>
            <EditAvance/>
        </ApolloProvider>
      </Route>                                                                                                                                    

      </Switch>
    </Router>
    
  );
}

export default App;
