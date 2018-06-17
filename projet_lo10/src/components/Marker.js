import React, { Component } from 'react';

export class Marker extends Component{

	render(){
		const image = this.props.$hover ? "https://thumb.ibb.co/kTybaJ/marqueur_Hover.png" : "https://image.ibb.co/ewGdYT/marqueur.png"

		return (
			<div style={{position: 'absolute',
			width: 56,
			height: 56,
			left: -28,
			top: -28}}>
				<img src={image} alt="marqueur"></img>
			</div>
		);
	}
}
