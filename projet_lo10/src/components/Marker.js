import React, { Component } from 'react';

export class Marker extends Component{
	render(){
		return (
			<div style={{position: 'absolute',
			width: 56,
			height: 56,
			left: -28,
			top: -28}}>
				<img src="https://image.ibb.co/ewGdYT/marqueur.png"></img>
			</div>
		);
	}
}
