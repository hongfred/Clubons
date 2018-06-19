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
				top: -28}}
			>
				<img src={image} alt="marqueur"></img>
				<div className="infoPopup" style={{
					display: disp
				}}>
					<div><p className="labelPopup">Nom évènement :</p> {this.props.MesEvents[this.props.myId].name}<br/>
						<p className="labelPopup">Adresse :</p> {this.props.MesEvents[this.props.myId].address}<br/>
						<p className="labelPopup">Date :</p> {this.props.MesEvents[this.props.myId].date.substring(0,10)}<br/>
						<p className="labelPopup">Heure :</p> {this.props.MesEvents[this.props.myId].heure.substring(0,5)}<br/>
						<p className="labelPopup">Description :</p> {this.props.MesEvents[this.props.myId].description}
					</div>
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
