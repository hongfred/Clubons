import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';

import {
	itemsFetchData
} from '../reduxStore/actions/actions';

class Home extends Component{
	componentDidMount(){
		window.fbAsyncInit = function() {
			window.FB.init({
				appId            : '571356446580906',
				autoLogAppEvents : true,
				xfbml            : true,
				version          : 'v3.0'
			});

			window.FB.Event.subscribe('auth.statusChange', (response)=>{
				if(response.authResponse){
					this.updateLoggedInState(response)
				} else{
					this.updateLoggedOutState()
				}
			});
		}.bind(this);

		(function(d, s, id){
			 var js, fjs = d.getElementsByTagName(s)[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement(s); js.id = id;
			 js.src = "https://connect.facebook.net/en_US/sdk.js";
			 fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

	componentWillMount() {
		this.props.fetchData( "https://graph.facebook.com/v3.0/me/groups?access_token=EAACEdEose0cBAL3dhPe4ikS25mQIQIcPUZBeZBdjlIYhzZByvdZAZCDxddT0aMUxCIl0lNDIjwdhyEEDuqWRyHc7qCTesavnHstfeWR00zpGMZBbdAXgYaOR8XsM2z9gSTPPdTN5Ny8TAgR6cIT8HIUuRi1zMnbBoCJlfVorbBjQrSdbiIjjNdbPLPWU1vF385V6fvHisgiwZDZD"
);
		//this.props.fetchData( "https://graph.facebook.com/v3.0/me?EAACEdEose0cBAP5HzGVoQoMNenmOdIo3zxfvtvrsMh1EkfEFpulQZB6BL5mvZBIirYb6gQQ8wtRUrj1V3ICQ1psPn2uxZAYfA2cm08VjkaKU3o5OoDNEZAkUUVSajZC0Wyr1J9Ql4vUZCbhTJxX9MAm0yEK4spUlDBKCZBry1huNVZAyi4EVgJTufZBwTpwm8rGWJAA3ozSr3DQZDZD&access_token=EAACEdEose0cBAP5HzGVoQoMNenmOdIo3zxfvtvrsMh1EkfEFpulQZB6BL5mvZBIirYb6gQQ8wtRUrj1V3ICQ1psPn2uxZAYfA2cm08VjkaKU3o5OoDNEZAkUUVSajZC0Wyr1J9Ql4vUZCbhTJxX9MAm0yEK4spUlDBKCZBry1huNVZAyi4EVgJTufZBwTpwm8rGWJAA3ozSr3DQZDZD");
		//this.props.fetchData("https://graph.facebook.com/v3.0/434375290357905/events");
	}
	render(){
		return (
			<div>
				<section className="jumbotron" id="jumbotronHome">
								<div className="text-center"><h1 id="titleHome">Home page</h1></div>
				</section>

				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Events:</h3>
					</div>
					<div className="panel-body">
						<div className="modal-body row">
							<li>Resultat: {JSON.stringify(this.props.MesResultats)}</li>
						</div>
					</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
