import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Link } from 'react-router-dom';

const FormProyecto =()=>{
    return(
      <Form>

        <Form.Group className="mb-3 mt-4" controlId="formGridName">
          <Form.Label>Nombre del proyecto</Form.Label>
          <Form.Control placeholder="Proyecto #" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFechaInicial">
            <Form.Label>Fecha Inicial</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFechaFinal">
            <Form.Label>Fecha Final</Form.Label>
            <Form.Control type="date"/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridOgenerales">
          <Form.Label>Objetivo general</Form.Label>
          <Form.Control placeholder="Construir algo" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formGridOespecificos">
          <Form.Label>Objetivos especificos</Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="...">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Presupuesto</Form.Label>
            <Form.Control type="number"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Lider del proyecto</Form.Label>
            <Form.Control type="email" placeholder="juan@gmail.com"/>
          </Form.Group>
        </Row>
        <Link to="/proyectos">
          <Button className="mb-4 mt-4 offset-md-4" variant="primary" type="submit">
            Crear Proyecto
          </Button>
        </Link>
    </Form>
    )
}
export default FormProyecto;