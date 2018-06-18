import React from 'react';
import { Grid} from 'react-bootstrap';
import { connect } from 'react-redux';
import { addTodo } from '../reduxStore/actions/actions'
import Map from './Map';

import FormEvent from './FormEvent';

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
			<div id="divG">
				<h1 className = "text-center">Page test add</h1>
				<section className="jumbotron">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="container">
								<section>
									<Grid>
										<FormEvent className="formEvent"/>
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
