import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export class Home extends Component{
	render(){
		return (
			<div>
				<h2 className = "text-center">Home page</h2>
				<section className="jumbotron" id="jumbotronHome">

				</section>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Informations:</h3>
					</div>
					<div className="panel-body">
						<div className="modal-body row">
							<li>blabla</li>
							<li>Just writing random things. Must be changed later on.</li>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
