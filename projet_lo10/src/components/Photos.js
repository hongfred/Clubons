import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
	itemsFetchData
} from '../reduxStore/actions/actions';

export class Photos extends Component{
	componentWillMount() {
		this.props.fetchData( "https://api.instagram.com/v1/users/self/media/recent/?access_token=7948788050.196ebc1.52871b03b5fe491090357b82eadb9a23");
	}
	render(){
		return (
			<div>
				<h2 className = "text-center">Photos des évènements</h2>
				<div id="affichagePhotos">
	        {this.props.MesResultats.map(function(image){
	          return(
								<a href={image.link}>
								  <img src={image.url} alt={image.id} width="20%" height="20%" style={{margin:"10px"}}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
				fetchData: (url) => dispatch(itemsFetchData(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
