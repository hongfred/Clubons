import React from 'react';
import {Button, Grid} from 'react-bootstrap';

import { connect } from 'react-redux';
import { addTodo } from '../reduxStore/actions/actions'
import { Marker } from './Marker';
import Map from './Map';
import LocationSearchInput from './LocationSearchInput';

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
										<LocationSearchInput/>
										<Button
											bsStyle="primary"
											onClick={this.testStore}
										>
											Ajouter le marker
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
				<Map/>
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