import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync, listRouteAsync } from '../actions/actionRoutes'
import { ContHomeRoad ,Logos, Carrera} from '../styles/styles'
import Naveg from './Naveg'
import logo from "../images/cicla.png";
import Footer from './Footer'

const MyRoutes = () => {

    const dispatch = useDispatch()
    const { routes } = useSelector(store => store.routes)
    const [loading] = useState(false)

    useEffect(() => {
        dispatch(listRouteAsync())
    }, [dispatch])

    const Loading = () =>  <Logos src={logo} alt="Logo" />

    const ShowMyRoutes = () => {
        return (
            <div>
                <Naveg />
                <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">   
                            <Nav.Link  style={{fontWeight:'900', margin:'10px'}}  href="/addRoute">Agregar Nueva ruta</Nav.Link>                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <ContHomeRoad>
                    <Row xs={1} md={3} className="g-4">
                        {routes.map((e, i) => (
                            <Col key={i} >
                                <Carrera>
                                    <Card.Img variant="top" src={e.imagen}  style={{display:'inline-block'}} />
                                    <Card.Body style={{display:'inline-block'}} >
                                  
                                        <h4>{e.nombre}</h4>
                                        <Card.Text>
                                            <h6>Distancia:</h6> <h5> {e.distancia}</h5>
                                             <h6>Desnivel positivo:</h6> <h5> {e.desnivel}</h5>
                                             <h6>Tiempo promedio:</h6> <h5> {e.tiempo}</h5>
                                        </Card.Text>
                                        <Button variant='outline-danger' onClick={() => dispatch(deleteAsync(e.nombre))} >Quitar</Button>
                                        <Button variant='warning' href='/location' >Empezar</Button>
                                    </Card.Body>
                                </Carrera>
                            </Col>
                        ))}
                    </Row>
                </ContHomeRoad>
                <Footer/>
            </div>
        )
    }

    return (
        <div>
            {
                loading ? <Loading /> : <ShowMyRoutes />
            }
        </div>
    )
}

export default MyRoutes