import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'
import Geocode from "react-geocode";
import { connect } from 'react-redux';
import { addTodo } from '../reduxStore/actions/actions'

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.testStore = this.testStore.bind(this)
    this.state = { address: ''}
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  testStore(address){
    this.props.add(address)
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.props.add("Latitude :" + lat + " Longitude :" + lng);
      },
      error => {
        console.error(error);
      }
    );
  }

  handleSelect = (address) => {
    this.setState({ address })
    this.testStore()
}

  render() {
    return (  
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.testStore}
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