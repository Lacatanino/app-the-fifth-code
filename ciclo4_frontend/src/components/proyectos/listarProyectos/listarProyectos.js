
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
  const MUTATION_PROYECTO_EDITAR=gql`
  mutation crearProyecto($name: String){
        activeProyecto(name:$name)
       }
`;
  
  const Proyectos =()=>{
    
    const [count, setCount] = useState(" ");
    let nombre="";
    const[activadorDeProyectos] = useMutation(MUTATION_PROYECTO_EDITAR);
    
    let Activarproyecto ={
      name: " "
    }
    function handleSubmit(e) {
        e.preventDefault();
        activadorDeProyectos({variables:{
                    name: count
                }})
        console.log('You clicked submit.'+count);
        window.location.reload(true);
      }
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
        <tr key={name}>
            <td>{name}</td>
            <td>{generalObjective}</td>
            <td>{budget}</td>
            <td>{startDate}</td> 
            <td>{endDate}</td>
            <td>{leader_id}</td>
            <td>{status}</td>
            <td>
            <form onSubmit={handleSubmit}>
                <Button type="submit"onClick={() => setCount(name)} variant="warning">Activar Proyecto</Button>
            </form>   
            </td>
        </tr> 
      )
      );

    // if(name){
    //     activadorDeProyectos({variables:{
    //         name: name 
    //     }})
    //     console.log(name+"esta adentro");
    // }
    
      
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
                <th>Fecha Inicio</th>
                <th>Fecha Final</th>
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
                    <h1 >Proyectos</h1>
                    <ButtonToolbar
                        className="justify-content-between mb-4"
                        aria-label="Toolbar with Button groups"
                        >
                        <Link to="/Nproyecto">
                            <Button variant="primary">Nuevo Proyecto</Button>
                        </Link>
                    </ButtonToolbar>
                    
                    <Proyectos/>
                    
                    
                </Row> 
            </Container>
            
        );
    }
}
export default ListaProductos;