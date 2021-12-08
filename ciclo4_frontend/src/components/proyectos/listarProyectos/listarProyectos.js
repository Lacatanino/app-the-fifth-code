
  import React, { Component } from "react"
  import Row from 'react-bootstrap/Row';
  import Container from 'react-bootstrap/Container';
  import Button from 'react-bootstrap/Button';
  import { Link } from 'react-router-dom'; 
  import Table from 'react-bootstrap/Table'
  // import Tabla from './Tabla';
  import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
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
  
  const Proyectos =()=>{
    const {loading,error,data} = useQuery(gql`
        {
            proyectos{
                name
                generalObjective
                specificObjectives
                budget
                startDate
                endDate
                leader_id
                status
            }
        }
    `)
    if(loading) return "<h1>Cargando</h1>"
      const datosTabla = data.proyectos.map(({name,generalObjective,specificObjectives,budget,startDate,endDate,leader_id,status})=>(
        <tr>
            <td>{name}</td>
            <td>{generalObjective}</td>
            <td>{budget}</td>
            {/* <td>{startDate}</td> */}
            {/* <td>{endDate}</td> */}
            <td>{leader_id}</td>
            <td>{status}</td>
        </tr>
      ));
      return (
        // <table class="table table-success">
        //   <thead>
        //     <th>Nombre</th>
        //     <th>Objetivo General</th>
        //     <th>Presupuesto</th>
        //     {/* <th>Fecha inicial</th>
        //     <th>Fecha Final</th> */}
        //     <th>Lider</th>
        //     <th>Status</th>
        //   </thead>
        //   {datosTabla}
        // </table>
        <Table striped bordered hover >
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Objetivo General</th>
                <th>Presupuesto</th>
                <th>Lider</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {datosTabla}
            </tbody>
        </Table>
          
          )
  }

class ListaProductos extends Component {
    render () {
        return (
            <Container>
                <Row  className="d-flex justify-content-center align-items-center mt-5"> 
                    <h1>Lista Productos</h1>
                    <ButtonToolbar
                        className="justify-content-between mb-4"
                        aria-label="Toolbar with Button groups"
                        >
                        <Link to="/Nproyecto">
                            <Button variant="primary">Nuevo Proyecto</Button>
                        </Link>
                    </ButtonToolbar>
                    <ApolloProvider client={client}>
                        <Proyectos/>
                    </ApolloProvider>
                    
                </Row> 
            </Container>
            
        );
    }
}
export default ListaProductos;