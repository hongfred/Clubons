import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import Geocode from "react-geocode";
import { connect } from 'react-redux';
import { addTodo } from '../reduxStore/actions/actions'
import {Button } from 'react-bootstrap';

class LocationSearchInput extends React.Component {
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
        longitude : lng})
        this.props.add("Area=" + this.state.address 
        + " Latitude=" + this.state.latitude 
        + " Longitude=" + this.state.longitude 
        + " Heure=" + document.getElementById('time').value
        + " Description=" + document.getElementById('description').value
        );
      },
      error => {
        console.error(error);
      }
    );
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
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className="autocomplete-dropdown-container">
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
      <label>
          Heure de l'évènement :
      </label>
      <input type="time" name="time" id="time"/><br/>
      <label>
          Description :
      </label>
      <input type="text" name="description" id="description"/><br/>
      <Button
				bsStyle="primary"
				onClick={this.testStore}
			>
				Créer l'évènement
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
        add: (text) => dispatch(addTodo(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearchInput)