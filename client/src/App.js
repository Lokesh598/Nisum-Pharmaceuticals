import './App.css';
import AssignRoles from './AssignRoles';
import Home from './Home';
import AddMed from './AddMed';
import Supply from './Supply'
import Track from './Track'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function App() {
  return (
    <div className="App">
      <Navbar bg={window?.location?.pathname === "/" ?"transparent" : "primary"} variant="dark">
        <Container>
          <Navbar.Brand href="/">WEB3.0</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link href="/addmed">Order Medicines</Nav.Link>
            <Nav.Link href="/supply">Control Supply Chain</Nav.Link>
            <Nav.Link href="/track">Track Medicines</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={AssignRoles} />
          <Route path="/addmed" component={AddMed} />
          <Route path="/supply" component={Supply} />
          <Route path="/track" component={Track} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
