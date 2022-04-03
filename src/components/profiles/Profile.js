import React from 'react'
import { Button, Card, Nav } from 'react-bootstrap'
import { Birthday, CardProfile, ContHomeRoad, Rout, RoutCont } from '../../styles/styles'
import Footer from '../Footer'
import Naveg from '../Naveg'
import profile8 from '../../images/Profile8.jpg'
import profile from '../../images/futurama-leela.png'
import birthday from '../../images/icons8-fecha-de-nacimiento-50.png'

const Profile8 = () => {

    return (

        <div>
            <Naveg />
            <ContHomeRoad>
                <Card className="text-center" width='40%' >
                    <Card.Header>Mi Perfil</Card.Header>
                    <CardProfile>
            <img src={profile8} width="50%"  alt="epa"></img>
            <hr></hr>
            <img src={profile} width="4%" alt="epa"></img>
            <h2>MONICA MONTES</h2>
            <Birthday src={birthday} width="3%" alt="epa"></Birthday>
            <h4  style={{display: 'inline-block' ,margin:'5px'}}>Fecha de Nacimiento</h4>
            <p>04 Marzo 2022</p>
            <p>Soy de Bogotá y recorro sus alrededores cada dia <br>
            </br>exigiendome mas y conociendo
                lugares y personas increibles.
            </p>
            <Rout variant="warning"> Rutas Realizadas</Rout>
            <Nav.Link href="/routes/1">Bogota Alto de Patios</Nav.Link>
            <Nav.Link href="/routes/0">Bogota La Vega Bogota</Nav.Link>
            <Nav.Link href="/routes/4"> Bogota Embalse Sumapaz Bogota</Nav.Link>
            <hr></hr>        
            <RoutCont variant="warning">Contactar</RoutCont>
          </CardProfile>
                    <Card.Footer className="text-muted">MTB y Ruta</Card.Footer>
                </Card>
            </ContHomeRoad>
            <Footer />
        </div>
    )
}

export default Profile8