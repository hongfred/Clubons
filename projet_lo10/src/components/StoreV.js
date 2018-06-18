import React from 'react';
import { connect } from 'react-redux';


class StoreV extends React.Component{
	render(){
		return(
			<div>
				<h4>Mon store:</h4>
				<ul>
					<li>Todos: {JSON.stringify(this.props.MaListe)}</li>
					<li>Resultat: {JSON.stringify(this.props.MesResultats)}</li>
					<li>Events: {JSON.stringify(this.props.MesEvents)}</li>
					<li>PostEvents: {JSON.stringify(this.props.PostEvents)}</li>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
		    MaListe: state.todos,
				MesResultats: state.results,
				MesEvents: state.events,
				PostEvents: state.postEvents
    };
};

export default connect(mapStateToProps)(StoreV)
