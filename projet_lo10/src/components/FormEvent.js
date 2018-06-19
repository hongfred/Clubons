import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import Geocode from "react-geocode";
import { connect } from 'react-redux';
import { eventPostData, itemsFetchEvents} from '../reduxStore/actions/actions'
import {Button } from 'react-bootstrap';

class FormEvent extends React.Component {
  constructor(props) {
    super(props);
    this.testStore = this.testStore.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { address: '',
  latitude : 0,
  longitude: 0}
  }

  handleSubmit = () => {
    this.testStore()
  }

  resetFields(){
    document.getElementById("nom").value = "";
    document.getElementById("adresse").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("description").value = "";
    this.setState({ address: '',
      latitude : 0,
      longitude: 0
    })
  }

  testStore(){
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.props.postEvent("http://localhost:1337/insertEvents",('{ "name":"'+document.getElementById('nom').value+'", "lat":'+lat+', "long":'+lng+', "description":"'+document.getElementById('description').value+'","address":"'+this.state.address+'", "date":"'+document.getElementById('date').value+'", "heure":"'+document.getElementById('time').value+'" }'))
        this.resetFields()
      },
      error => {
        console.error(error);
      }
    );
    //this.props.postEvent("http://localhost:1337/insertEvents",('{ "name":"'+document.getElementById('nom').value+'", "lat":'+this.state.latitude+', "long":'+this.state.longitude+', "description":"'+document.getElementById('description').value+'","address":"'+this.state.address+'", "date":"'+document.getElementById('date').value+'", "heure":"'+document.getElementById('time').value+'" }'));
  }

  handleSelect = (address) => {
    this.setState({ address })
}

  handleChange = (address) => {
  this.setState({ address })
}

  render() {
    return (
      <div className="formEvent">
      {Geocode.setApiKey("AIzaSyAJmTnwARjZ6VBAyY8DsPFURJQt6JS26zI")}
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <label>Titre :</label>
            <input className="eventInput" type="text" name="nom" id="nom"/><br/>
            <label>Adresse :</label>
            <input className="eventInput" id="adresse"
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'eventInput location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container" >
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div {...getSuggestionItemProps(suggestion, { className, style })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <label className="labelTime">Date de l’event :</label>
      <input className="timeInput dateInput" type="date" name="date" id="date"/>
      <label className="labelTime">Heure de l’event :</label>
      <input className="timeInput hourInput" type="time" name="time" id="time"/><br/>
      <label>Description :</label>
      <input className="eventInput" type="text" name="description" id="description"/><br/>
      <Button className="createEvent"
				bsStyle="primary"
        onClick={this.testStore}
			>
				Créer l’event
			</Button>
      <Button className="createEvent"
				bsStyle="primary"
        onClick={this.resetFields}
			>
				Reset Fields
			</Button>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        postEvent: (url, data) => dispatch(eventPostData(url, data)),
        fetchEvents: (url) => dispatch(itemsFetchEvents(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent)
