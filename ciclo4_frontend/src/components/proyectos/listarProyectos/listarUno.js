
  import React, { Component,Fragment, useState} from "react"
  import Row from 'react-bootstrap/Row';
  import Container from 'react-bootstrap/Container';
  import Button from 'react-bootstrap/Button';
  import { Link } from 'react-router-dom'; 
  import Table from 'react-bootstrap/Table'
  // import Tabla from './Tabla';
  import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
  import { useParams } from "react-router-dom";

import {
    useQuery,
    gql,useMutation
  } from "@apollo/client";
  
  const Proyectos =()=>{
    const {name}=useParams();
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
    let proyectos2 = data.proyectos.filter(function (proyecto) {
        return proyecto.name === name;
    }).map(({name,generalObjective,specificObjectives,budget,startDate,endDate,leader_id,status})=>(
      
        <tr key={name}>
            <td>{name}</td>
            <td>{generalObjective}</td>
            <td>{budget}</td>
            <td>{startDate}</td> 
            <td>{endDate}</td>
            <td>{leader_id}</td>
            <td>{status}</td>
            <td>
            </td>
        </tr> 
       
      )
      );

      
      return (

        <Table striped bordered hover >
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Objetivo General</th>
                <th>Presupuesto</th>
                <th>Fecha Inicio</th>
                <th>Fecha Final</th>
                <th>Lider</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {proyectos2}
            </tbody>
        </Table>
        
          )
  }

class ListaProductoFiltro extends Component {
    render () {
        return (
            <Container>
                <Row  className="d-flex justify-content-center align-items-center mt-5"> 
                    <h1 >Proyectos</h1>
                    <ButtonToolbar
                        className="justify-content-between mb-4"
                        aria-label="Toolbar with Button groups"
                        >
                        <Link to="/Nproyecto">
                            <Button variant="primary">Nuevo ccc</Button>
                        </Link>
                    </ButtonToolbar>
                    
                    <Proyectos/>
                    
                    
                </Row> 
            </Container>
            
        );
    }
}
export default ListaProductoFiltro;