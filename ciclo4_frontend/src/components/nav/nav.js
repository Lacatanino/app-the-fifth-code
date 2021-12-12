import Nav from 'react-bootstrap/Nav'
const NavBar = ({ pagina}) => {
    return(
        <Nav justify variant="pills" defaultActiveKey={pagina} className="explorer">
        <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>

        <Nav.Item>
            <Nav.Link href="/proyectos" eventKey="/proyectos">PROYECTOS</Nav.Link>
        </Nav.Item>
        </Nav>

        <Nav.Item>
            <Nav.Link href="/Listaavances" eventKey="/Listaavances">AVANCES</Nav.Link>
        </Nav.Item>
        </Nav>

    );
}

export default NavBar;
