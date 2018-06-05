import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

import {
	itemsFetchData
} from '../reduxStore/actions/actions';

class Home extends Component{
	componentWillMount() {
		this.props.fetchData("https://graph.facebook.com/facebook/picture?redirect=false");
	}
	render(){
		return (
			<div>
				<section className="jumbotron" id="jumbotronHome">
								<div className="text-center"><h1 id="titleHome">Home page</h1></div>
				</section>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Events:</h3>
					</div>
					<div className="panel-body">
						<div className="modal-body row">
							<li>Resultat: {JSON.stringify(this.props.MesResultats)}</li>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
			MesResultats: state.results
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
				fetchData: (url) => dispatch(itemsFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
