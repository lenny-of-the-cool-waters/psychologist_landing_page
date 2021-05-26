import React from 'react'
import './Navigation.css'
import { 
    Navbar,
    Form, 
    FormControl,
    Button,
    Nav
} from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar className="justify-content-between navigation" expand="md" fixed="top">
            <Form inline className="col-4">
                <FormControl type="text" placeholder="Search" className="col-sm-4 d-none d-sm-block"/>
                <Button type="submit" className="mw-30"><i class="fas fa-search"></i></Button> 
                
            </Form>
            
            <Navbar.Brand href="#" className="justify-self-center">Leo Git</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="col-4">
                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
