import React, { Component, useState } from "react"
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    useMutation,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:9091/consulta',
    cache: new InMemoryCache()
});

const MUTATION_AVANCE_EDITAR = gql`
    mutation updateAvance($project_id:ID, $addDate:Date, $description:String, $observations:String){
        updateAvance(project_id:$project_id, addDate:$addDate, description:$description, observations:$observations)
    }
`;

const Avances = () => {

    const {project_id} = useParams();
    console.log(project_id);

    const [actualizarAvance] = useMutation(MUTATION_AVANCE_EDITAR);
    let avance = {
        project_id: "",
        addDate: "",
        description: "",
        observations: ""
    }

    const { loading, error, data } = useQuery(gql`
        {
            avances{
                project_id
                addDate
                description
                observations
            }
        }
    `)

    console.log(data);

    if (loading) return "<h1>Cargando</h1>"
    let avances = data.avances.filter(function (u) { return u.project_id === project_id}).map(({ project_id, addDate, description, observations }) => (
        <form onSubmit={e => {
            e.preventDefault();
            actualizarAvance({
                variables: {
                    project_id: avance.project_id.value,
                    addDate: avance.addDate.value,
                    description: avance.description.value,
                    observations: avance.observations.value
                }
            })
            window.location.href = '/avances';
        }} >
            <div className="text-center justify-content-center align-items-center">
                <div>
                    <label>Nombre del Proyecto:</label>
                    <input style={{ backgroundColor: "#c9c9c9" }} defaultValue={project_id} type="text" ref={project_id => avances.project_id = project_id} placeholder="Nombre del proyecto" />
                </div>
                &nbsp;
                <div>
                    <label class="p-3">Fecha:</label>
                    <input defaultValue={Date} type="date" ref={addDate => avances.addDate = addDate} placeholder="Fecha" />
                </div>
                &nbsp;
                <div>
                    <label>Descripción:</label>
                    <input style={{width: "250px"}} defaultValue={description} type="text" ref={description => avances.description = description} placeholder="Descripción" />
                </div>
                &nbsp;
                <div>
                    <label>Observaciones:</label>
                    <input style={{width: "250px"}} defaultValue={observations} type="text" ref={observations => avances.observations = observations} placeholder="Observaciones" />
                </div>
                </div>
                <div className="text-center justify-content-center align-items-center">
                &nbsp;
                <div>
                    <button className="bg-primary ml-4" type="submit">Actualizar</button>
                </div>
                </div>
            
        </form>
    ));

    return (
        <div>{avances}</div>
    )
}

class EditAvance extends Component {
    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-center align-items-center mt-5">
                    <h1 className="d-flex justify-content-center align-items-center mt-5">Editar Avance</h1>
                    &nbsp;
                    <ButtonToolbar
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                        aria-label="Toolbar with Button groups"
                    >
                        <Link to="/nuevoAvance">
                            <Button variant="primary">Nuevo Avance</Button>
                        </Link>
                    </ButtonToolbar>
                    &nbsp;
                    <Avances />
                </Row>

            
            </Container>
        );
    }
}

export default EditAvance;