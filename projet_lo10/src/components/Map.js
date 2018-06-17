import React, { Component } from 'react';
import { Marker } from './Marker';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component{
    //Centrer la Map sur Troyes
    static defaultProps = {
        center: {
          lat: 48.2924582,
          lng: 4.041101
        },
        zoom: 10
      };

    render(){
		return (
			<div id="mapEvent">
        			<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyAJmTnwARjZ6VBAyY8DsPFURJQt6JS26zI'}}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}
					hoverDistance={28}
					>
					<Marker
						lat={48.269162}
						lng={4.0667761}
					/>	
					{this.props.MesEvents.map(event => 
					<Marker
					lat={event.lat}
					lng={event.long}
					/>)}
					</GoogleMapReact>
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

export default connect(mapStateToProps)(Map)
