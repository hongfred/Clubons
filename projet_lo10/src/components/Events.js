import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export class Events extends Component{
	render(){
		return (
			<div className = "contenu">
				<h2 className = "text-center">Events</h2>
				<section className="jumbotron">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Liste des évènements:</h3>
						</div>
						<div className="panel-body">
							<div className="modal-body row">
								<li>blabla</li>
								<li>Just writing random things. Must be changed later on.</li>
							</div>
						</div>
					</div>
			</section>
			</div>
		);
	}
}
