import React from 'react';
import { Grid} from 'react-bootstrap';
import Map from './Map';

import FormEvent from './FormEvent';

export class Events extends React.Component{
	render(){
		return (
			<div>
					<div className="panel panel-default" id="panelEvent">
						<Grid>
						<h1 className = "text-center" id="textAddEvent">Ajouter un évènement</h1>
							<FormEvent className="formEvent"/>
						</Grid>
					</div>
				<h1 className = "text-center">Map des evènements</h1>
				<Map/>
				</div>
		);
	}
}
