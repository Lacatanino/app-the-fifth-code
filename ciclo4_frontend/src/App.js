import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Nproyecto from './components/proyectos/proyecto_nuevo/nuevoProyecto'
import Home from './components/Home/home'
import NavBar from './components/nav/nav'
import ListaProductos from './components/proyectos/listarProyectos/listarProyectos'
import ListaUsuarios from './components/usuarios/listarUsuarios/listarUsuarios'
import NuevoUsuario from './components/usuarios/nuevoUsuario/nuevoUsuario'
import EditarUsuario from './components/usuarios/editarUsuario/editarUsuario'
import Login from './components/login/login'
import RegistrarUsuario from './components/usuarios/nuevoUsuario/registrarUsuario'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
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
          <Home />
        </Route>
        <Route path="/proyectos" exact>
          <NavBar pagina={"/proyectos"} />
          <ListaProductos />
        </Route>
        <Route path="/Nproyecto" exact>
          <NavBar pagina={"/Nproyecto"} />
          <Nproyecto />
        </Route>
        <Route path="/usuarios" exact>
          <NavBar pagina={"/usuarios"} />
          <ListaUsuarios />
        </Route>
        <Route path="/crearUsuario" exact>
          <NavBar pagina={"/crearUsuario"} />
          <ApolloProvider client={client}>
            <NuevoUsuario />
          </ApolloProvider>
        </Route>
        <Route path="/editarUsuario/:_id" exact>
          <NavBar pagina={"/editarUsuario"} />
          <ApolloProvider client={client}>
            <EditarUsuario />
          </ApolloProvider>
        </Route>
        <Route path="/login" exact>
          <ApolloProvider client={client}>
            <Login />
          </ApolloProvider>
        </Route>
        <Route path="/registrarUsuario" exact>
          <ApolloProvider client={client}>
            <RegistrarUsuario />
          </ApolloProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
