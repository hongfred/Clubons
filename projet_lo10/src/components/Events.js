import React from 'react';
import {DropdownButton, MenuItem, Button, Modal, ButtonGroup, Carousel, Nav, NavItem, Tab, Row,Col, Navbar, NavDropdown, Grid, Panel, Tabs, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

import { connect } from 'react-redux';
import {addTodo} from '../reduxStore/actions/actions'

class Events extends React.Component{
	constructor(props) {
        super(props);
		this.testStore = this.testStore.bind(this)
    }
	testStore(){
		this.props.add('ça marche')
	}
	render(){
		return (
			<div>
				<h2 className = "text-center">Page test add</h2>
				<section className="jumbotron">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="container">
								<section>
									<Grid>
										<Button
											bsStyle="primary"
											onClick={this.testStore}
										>
											add in store
										</Button>
										<div>
											<ul>
												{JSON.stringify(this.props.todos)}
											</ul>
										</div>
									</Grid>
								</section>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (text) => dispatch(addTodo(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
