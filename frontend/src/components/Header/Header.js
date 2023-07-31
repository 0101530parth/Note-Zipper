import { Form,FormControl,Navbar,Nav,NavDropdown,Container

} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <Navbar bg ="primary"expand="lg" varient ="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
          Notebook
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className ="m-auto">
             <Form inline>
            <FormControl type = "text" placeholder = "Search" className ="mr-sm-2"/>
            
          </Form></Nav>
          <Nav >
            <Nav.Link href="/mynotes">
              {/* <Link to="/mynotes">My Notes</Link> */}
              My Notes
              </Nav.Link>
            
            <NavDropdown title="Parth Jaiswal" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
