import React, { Component } from 'react';
import '../css/App.css';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './Home';
import Events from './Events';
import {Photos} from './Photos';
import {Help} from './Help';
import StoreV from './StoreV'


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
            <Route path='/Photos' component={Photos}/>
            <Route path='/Help' component={Help}/>
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"/>
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
              <NavItem eventKey={3}><Link to='/Photos'>Picture</Link></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Connect</NavItem>
              <NavItem eventKey={2}><Link to='/Help'>Help</Link></NavItem>
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
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJmTnwARjZ6VBAyY8DsPFURJQt6JS26zI&libraries=places"></script>
		</div>
	</footer>
)

export default App;
