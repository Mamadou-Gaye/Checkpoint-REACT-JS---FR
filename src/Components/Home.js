import React from 'react'
import { Navbar, Container, Nav, Card, CardGroup, NavDropdown } from 'react-bootstrap';


function Home() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">React Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="mt-4">
                <h1>My React Bootstrap App</h1>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaaKbXY3dRZRQ_vni5nKQBnEIjHz4ZLsKAybDI8bCGMv2MjwfM8pUuI-se_2zY" />
                        <Card.Body>
                            <Card.Title>Card 1</Card.Title>
                            <Card.Text>
                                This is a sample card using React Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZO2RG1PxDU1YD-mKqMrFvjSB7ol91revH5lMg8-13JbkToghRcqyTz2Z0xYy" />
                        <Card.Body>
                            <Card.Title>Card 2</Card.Title>
                            <Card.Text>
                                This is another sample card using React Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaaKbXY3dRZRQ_vni5nKQBnEIjHz4ZLsKAybDI8bCGMv2MjwfM8pUuI-se_2zY" />
                        <Card.Body>
                            <Card.Title>Card 3</Card.Title>
                            <Card.Text>
                                This is yet another sample card using React Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZO2RG1PxDU1YD-mKqMrFvjSB7ol91revH5lMg8-13JbkToghRcqyTz2Z0xYy" />
                        <Card.Body>
                            <Card.Title>Card 4</Card.Title>
                            <Card.Text>
                                This is yet another sample card using React Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRaaKbXY3dRZRQ_vni5nKQBnEIjHz4ZLsKAybDI8bCGMv2MjwfM8pUuI-se_2zY" />
                        <Card.Body>
                            <Card.Title>Card 5</Card.Title>
                            <Card.Text>
                                This is yet another sample card using React Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZO2RG1PxDU1YD-mKqMrFvjSB7ol91revH5lMg8-13JbkToghRcqyTz2Z0xYy" />
                        <Card.Body>
                            <Card.Title>Card 6</Card.Title>
                            <Card.Text>
                                This is yet another sample card using React Bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}

export default Home