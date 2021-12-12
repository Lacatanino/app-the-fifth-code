import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Link } from 'react-router-dom';


const FormAvances =()=>{
    return(
       <Form>
           <div className ="container">
            <Form.Group className="mb-3 mt-4" controlId="formGridID">
                <Form.Label>ID Proyecto</Form.Label>
                <Form.Control placeholder="Digite el ID del proyecto"/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFecha">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control placeholder="Ingrese la descripción del avance"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridObservations">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control placeholder="Ingrese las observaciones del avance"/>
                </Form.Group>
            </div>
            <div className ="col text-center">
            <Link to="">
                <Button className="col-sm-6" variant="primary" type="submit">
                    Ingresar Avance
                </Button>
            </Link>
            </div>

       </Form> 

    )
}

export default FormAvances;