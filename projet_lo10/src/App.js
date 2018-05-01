import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {MenuItem, Nav, NavItem, Navbar, NavDropdown} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MyNav/>

        <p className="App-intro">
          début de notre site
        </p>
        <Footer/>
      </div>
    );
  }
}



const Header = () => (
	<div>
		<meta charSet="utf-8"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
	</div>
)

class MyNav extends React.Component{
	render(){
		return (
			<main>
				<h1 className = "text-center">Clubons</h1>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Navigation bar</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Evènement</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
			</main>
		);
	}
}

const Footer = () => (
	<footer>
		<div className="footer navbar-fixed-bottom">
			<p>
				<i className="icon-user"></i> Admin
				<i className="icon-calendar"></i> Jan 23th, 2017 at 2:20 pm
			</p>
		</div>
	</footer>
)

export default App;
