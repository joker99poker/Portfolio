import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      to: "youssefelkhouly.programmer@gmail.com"
    };
    // Use the Fetch API to send a POST request to a server-side script that will handle sending the email
    fetch('/send-email', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', response);
        alert("Your message has been sent successfully")
      })
      .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while sending the message, please try again later")
      });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">About Me</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <NavDropdown title="Contact" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Email</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">LinkedIn</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <section id="about">
            <h2>About Me</h2>
            <p>I am a web developer with experience in HTML, CSS, JavaScript, and React.js.</p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <div className="card-columns">
              <div className="card">
                <img className="card-img-top" src="project1.jpg" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Project 1</h5>
                  <p className="card-text">This is a project that I built using React.js and Bootstrap.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="project2.jpg" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title">Project 2</h5>
                  <p className="card-text">This is a project that I built using React.js and Bootstrap.</p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="project3.jpg" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Project 3</h5>
                  <p className="card-text">This is a project that I built using React.js and Bootstrap.</p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e) => this.setState({ name: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => this.setState({ email: e.target.value })} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" id="message" rows="3" onChange={(e) => this.setState({ message: e.target.value })}></textarea>
              </div>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </form>
          </section>
          <footer>
            <p>Copyright © 2021 My Portfolio</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Portfolio;