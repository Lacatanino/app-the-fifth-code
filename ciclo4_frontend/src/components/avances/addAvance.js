import Container from 'react-bootstrap/Container';   
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormAvance from './formAvances';
function NAvances(){
    return(
        <div>
        <header>
          <Container >
            <Row className="titulo d-flex justify-content-center mt-1 mb-5">
              <Col xs={8}>
                <div className="text-center mt-8">
                  <h1 >Agregar Avance</h1>
                </div>
              </Col>
            </Row>  
          </Container>
        </header>
        <Container >
          <Row className="d-flex justify-content-center mt-6">
            <Col md={8} xs={10} className="border border-dark rounded d-flex justify-content-center ">{/* bg-info */}
            <FormAvance/>
            </Col>
          </Row>  
        </Container>
      </div>
    )
}
export default NAvances;