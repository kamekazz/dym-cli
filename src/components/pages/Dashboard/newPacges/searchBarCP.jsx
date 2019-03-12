import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import PlacesAutocomplete from 'react-places-autocomplete';


import {
  geocodeByAddress,

  getLatLng,
} from 'react-places-autocomplete';




class SearchAddBarCP extends Component {

  static propTypes = {
    prop: PropTypes
  }

    constructor(props) {
      super(props);
      this.state = { address: '' };
    }
     
      handleChange = address => {
        this.setState({ address });
      };

  
 
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => {
            getLatLng(results[0])
            this.props.getAutoAddress(results[0].formatted_address)
          })
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };
     
      render() {

        return (
          <PlacesAutocomplete
            value={this.state.address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div style={{width:'100%'}}>
                <TextField 
                   label="Address Finder"
                    {...getInputProps({})}
                    placeholder="address "
                    // helperText="Full width!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: '#ffffff', cursor: 'pointer',padding:'10px',color:'#4D658D',fontWeight:700}
                      : { backgroundColor: '#fafafa', cursor: 'pointer',padding:'6px',transition:' all ease-out .5s' };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span onClick={this.props.disabledInput}  >{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        );
      }
    }




const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAddBarCP)


