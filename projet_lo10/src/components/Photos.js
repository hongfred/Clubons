import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Photos extends Component{
	render(){
		return (
			<div id="divG">
				<h1 className = "text-center">Photos des évènements</h1>
				<div id="affichagePhotos">
	        {this.props.MesResultats.map(function(image){
	          return(
								<a href={image.link}>
								  <img src={image.url} alt={image.id} width="23.4%" height="23.4%" style={{margin:"10px"}}/>
								</a>
						);
	        })}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
    return {
			MesResultats: state.results
    };
};

export default connect(mapStateToProps)(Photos);
