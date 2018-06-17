import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';


import {
	itemsFetchData
} from '../reduxStore/actions/actions';


class Home extends Component{
	componentWillMount() {
		this.props.fetchData( "https://api.instagram.com/v1/users/self/media/recent/?access_token=7948788050.196ebc1.52871b03b5fe491090357b82eadb9a23");
	}

	render(){
		return (
			<div>
				<section className="jumbotron" id="jumbotronHome">
								<div className="text-center"><h1 id="titleHome">Home page</h1></div>
				</section>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Actualités:</h3>
					</div>
					<div className="panel-body">
						<div className="modal-body row">
						<ul>
		          {this.props.MesResultats.map(function(image){
		            return(
									<a href={image.link}>
									  <img src={image.url} alt="HTML tutorial" width="25%" height="25%"/>
									</a>
								);
		          })}
		        </ul>
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
