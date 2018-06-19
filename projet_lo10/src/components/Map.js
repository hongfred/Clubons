import React, { Component } from 'react';
import  Marker  from './Marker';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

class Map extends Component{
    //Centrer la Map sur Troyes
    static defaultProps = {
        center: {
          lat: 48.2924582,
          lng: 4.041101
        },
        zoom: 8
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
					{this.props.MesEvents.map(function(event){
            return(
              <Marker key={event.idtest}
    					lat={event.lat}
    					lng={event.long}
              myId={event.idtest}
    					/>
            );
          })}

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
