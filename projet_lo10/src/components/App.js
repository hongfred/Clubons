import React, { Component } from 'react';
import '../css/App.css';
import {Nav, NavItem, Navbar} from 'react-bootstrap';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import {Events} from './Events';
import Photos from './Photos';
import {Help} from './Help';
import StoreV from './StoreV'

import {
	itemsFetchDataInstagram,
	itemsFetchEvents
} from '../reduxStore/actions/actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchData("https://api.instagram.com/v1/users/self/media/recent/?access_token=7948788050.196ebc1.52871b03b5fe491090357b82eadb9a23");
    this.props.fetchEvents("http://localhost:1337/fetchEvents");
  }
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
        <Navbar className="navbar navbar-fixed-top" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Clubons</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
              <NavItem eventKey={2}><Link to='/Events'>Events</Link></NavItem>
              <NavItem eventKey={3}><Link to='/Photos'>Picture</Link></NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1}><Link to='/Help'>Help</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
			</main>
		)
	}
}

const Footer = () => (
	<footer>
	<div className="footer navbar-fixed-bottom" style={{color:"grey"}}>
			Clubons, Admin: Frédéic Hong, Nicolas Cadot
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJmTnwARjZ6VBAyY8DsPFURJQt6JS26zI&libraries=places"></script>
		</div>
	</footer>
)

const mapStateToProps = (state) => {
    return {
			MesResultats: state.results,
			MesEvents: state.events
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
				fetchData: (url) => dispatch(itemsFetchDataInstagram(url)),
				fetchEvents: (url) => dispatch(itemsFetchEvents(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
