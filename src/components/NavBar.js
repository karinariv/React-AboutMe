import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Interests from '../pages/Interests';
import Hobbies from '../pages/Hobbies';
import Funfacts from '../pages/FunFacts';
import {Navbar, Container, Nav} from 'react-bootstrap';

function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">About Me: Karina</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link><Link className="menu" to="/" exact="true">Main</Link></Nav.Link>
                <Nav.Link><Link className="menu" to="/interests">Interests</Link></Nav.Link>
                <Nav.Link><Link className="menu" to="/hobbies">Hobbies</Link></Nav.Link>
                <Nav.Link><Link className="menu" to="/funfacts">Fun Facts</Link></Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        <Switch>
            <Route path="/" exact={true} component= { Main }></Route>
            <Route path="/interests" component= { Interests }></Route>
            <Route path="/hobbies" component= { Hobbies }></Route>
            <Route path="/funfacts" component= { Funfacts }></Route>
        </Switch>
        </div>
    );
}

export default NavBar;