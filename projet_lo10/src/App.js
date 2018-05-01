import React, { Component } from 'react';
import './App.css';
import {MenuItem, Nav, NavItem, Navbar, NavDropdown} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import {Home} from './components/Home';
import {Events} from './components/Events';

class App extends Component {
  render() {
    return (
      <Router>
  			<div>
  				<Header/>
  				<MyNav/>
  				<Switch>
  					<Route exact path='/' component={Home}/>
            <Route path='/Events' component={Events}/>
  				</Switch>
  				<Footer/>
  			</div>
  		</Router>
    );
  }
}



const Header = () => (
	<div>
		<meta charSet="utf-8"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
	</div>
)

class MyNav extends Component{
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
              <NavItem eventKey={1}><Link to='/'><span className="glyphicon glyphicon-home"></span>Home</Link></NavItem>
              <NavItem eventKey={2}><Link to='/Events'>Events</Link></NavItem>
              <NavDropdown eventKey={3} title="Photos" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Connect</NavItem>
              <NavItem eventKey={2} href="#">Help</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
			</main>
		)
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
