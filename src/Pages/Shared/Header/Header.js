import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (
        <Navbar className='navbar-bg p-0' sticky='top' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className='text-white' to="/features">Features</Nav.Link>
                        <Nav.Link className='text-white' as={Link} to="/pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/action">Action</NavDropdown.Item>
                            <NavDropdown.Item href="/action/2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="/something">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/separated">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                        {
                            user ? <button onClick={logout}>Log Out</button> : <Nav.Link className='text-white' as={Link} to="/login">
                                Login
                            </Nav.Link>
                        }
                        <Nav.Link className='text-white' as={Link} to="/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;