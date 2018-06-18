import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

class Home extends Component{
	render(){
		return (
			<div>
				<section className="jumbotron" id="jumbotronHome">
								<div className="text-center"><h1 id="titleHome">Welcome to Clubons!</h1></div>
				</section>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h2 className="panel-title">Actualités:</h2>
					</div>
					<div className="panel-body">
						<div className="modal-body row">
						<ul>
							{this.props.MesEvents.map(function(event){
		            return(
									<div key={event.idevent} id="divSep">
										<li className="li">Nom: {event.name}</li>
										<li className="li">Description: {event.description}</li>
										<li className="li">Addresse: {event.address}</li>
										<li className="li">Date: {event.date}</li>
										<li className="li">Horaire: {event.heure}</li>
									</div>
								);
		          })}
						</ul>
						<ul id="ulSep">
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
			MesResultats: state.results,
			MesEvents: state.events
    };
};

export default connect(mapStateToProps)(Home);
