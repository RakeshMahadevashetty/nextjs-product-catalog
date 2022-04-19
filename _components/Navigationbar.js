import { Container, Navbar, Nav } from "react-bootstrap"

const Navigationbar = () => {
  return <Navbar expand='lg' bg='dark'>
    <Container>
      <Navbar.Brand className='text-light'>
        <span className="h1 text-primary">E</span><span className="h2">commerce</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end">
          {/* <Nav.Link className='text-light' eventKey={1}>Categories</Nav.Link>
          <Nav.Link eventKey={2} className='text-light' href="#memes">Users</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Navigationbar;