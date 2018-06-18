import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import Geocode from "react-geocode";
import { connect } from 'react-redux';
import { addTodo, eventPostData} from '../reduxStore/actions/actions'
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

  testStore(){
    Geocode.fromAddress(this.state.address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({latitude : lat,
        longitude : lng});
        this.props.add(
          "Area=" + this.state.address
        + " Latitude=" + this.state.latitude
        + " Longitude=" + this.state.longitude
        + " Nom=" + document.getElementById('nom').value
        + " Date=" + document.getElementById('date').value
        + " Heure=" + document.getElementById('time').value
        + " Description=" + document.getElementById('description').value
        );
        this.props.postEvent("http://localhost:1337/insertEvents",('{ "name":"'+document.getElementById('nom').value+'", "lat":'+this.state.latitude+', "long":'+this.state.longitude+', "description":"'+document.getElementById('description').value+'","address":"'+this.state.address+'", "date":"'+document.getElementById('date').value+'", "heure":"'+document.getElementById('time').value+'" }'));
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
      <div class="formEvent">
      {Geocode.setApiKey("AIzaSyAJmTnwARjZ6VBAyY8DsPFURJQt6JS26zI")}
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <label>Titre :</label>
            <input class="eventInput" type="text" name="nom" id="nom"/><br/>
            <label>Adresse :</label>
            <input class="eventInput"
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
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
      <label class="labelTime">Date de l’event :</label>
      <input class="timeInput dateInput" type="date" name="date" id="date"/>
      <label class="labelTime">Heure de l’event :</label>
      <input class="timeInput hourInput" type="time" name="time" id="time"/><br/>
      <label>Description :</label>
      <input class="eventInput" type="text" name="description" id="description"/><br/>
      <Button class="createEvent"
				bsStyle="primary"
				onClick={this.testStore}
			>
				Créer l’event
			</Button>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (text) => dispatch(addTodo(text)),
        postEvent: (url, data) => dispatch(eventPostData(url, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEvent)
