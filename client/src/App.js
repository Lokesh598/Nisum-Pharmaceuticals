import './App.css';
import Register from './Register';
import LandingPage from './LandingPage';
import OrderMedicine from './OrderMedicine';
import Supply from './Supply'
import Track from './Track'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function App() {
  return (
    <div className="App">
      <Navbar bg={window?.location?.pathname === "/" ? "transparent" : "primary"} variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://lever-client-logos.s3.us-west-2.amazonaws.com/d4ee0bc6-7ccb-4762-86e1-07d7a007314b-1645085353318.png"
              height="36"
              className="d-inline-block align-top"
            /> WEB3.0
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/register" className={window?.location?.pathname === "/register" ? "active-link" : ""}>Register</Nav.Link>
            <Nav.Link href="/order-medicine" className={window?.location?.pathname === "/order-medicine" ? "active-link" : ""}>Order Medicines</Nav.Link>
            <Nav.Link href="/control-supply-chain" className={window?.location?.pathname === "/control-supply-chain" ? "active-link" : ""}>Control Supply Chain</Nav.Link>
            <Nav.Link href="/track-medicine" className={window?.location?.pathname === "/track-medicine" ? "active-link" : ""}>Track Medicines</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/order-medicine" component={OrderMedicine} />
          <Route path="/control-supply-chain" component={Supply} />
          <Route path="/track-medicine" component={Track} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
