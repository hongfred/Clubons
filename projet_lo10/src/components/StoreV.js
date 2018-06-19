import React from 'react';
import { connect } from 'react-redux';


class StoreV extends React.Component{
	render(){
		return(
			<div>
				<h4>Mon store:</h4>
				<ul style={{marginTop:50}}>
					<li>Photos: {JSON.stringify(this.props.MesResultats)}</li>
					<li>Events: {JSON.stringify(this.props.MesEvents)}</li>
					<li>add: {JSON.stringify(this.props.MaListe)}</li>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
		    MaListe: state.todos,
				MesResultats: state.results,
				MesEvents: state.events
    };
};

export default connect(mapStateToProps)(StoreV)
