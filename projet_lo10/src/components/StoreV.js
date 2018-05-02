import React from 'react';
import { connect } from 'react-redux';


class StoreV extends React.Component{
	render(){
		return(
			<div>
				<h4>Mon store:</h4>
				<ul>
					<li>Todos: {JSON.stringify(this.props.MaListe)}</li>
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
		    MaListe: state.todos
    };
};

export default connect(mapStateToProps)(StoreV)
