import React, { Component } from 'react';
import { connect } from 'react-redux';

class Marker extends Component{

	render(){
		const image = this.props.$hover ? "https://thumb.ibb.co/kTybaJ/marqueur_Hover.png" : "https://image.ibb.co/ewGdYT/marqueur.png"
		const disp = this.props.$hover ? "block" : "none"
		
		return (
			<div style={{position: 'absolute',
			width: 56,
			height: 56,
			left: -28,
			top: -28}}>
				<img src={image} alt="marqueur"></img>
			<div class="infoPopup" style={{
				display: disp
			}}>
			{this.props.MesEvents.map(function(event){
            return(
				<p><p class="labelPopup">Nom évènement :</p> {event.name}<br/>
				<p class="labelPopup">Adresse :</p> {event.address}<br/>
				<p class="labelPopup">Date :</p> {event.date.substring(0,10)}<br/>
				<p class="labelPopup">Heure :</p> {event.heure.substring(0,5)}<br/>
				<p class="labelPopup">Description :</p> {event.description}</p>
            	);
          	})}
			</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
		    MaListe: state.todos,
        MesEvents: state.events
    };
};

export default connect(mapStateToProps)(Marker)