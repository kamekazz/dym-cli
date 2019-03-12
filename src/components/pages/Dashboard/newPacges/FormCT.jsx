import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import SearchAddBarCP from './searchBarCP';
import styled from 'styled-components';

 class FormCT extends Component {

  state = {
    fName: '',
    lName: '',
    orderID: '',
    apt: '',
    telephone:'',
    disabledApt:false,
    count:'',
    address:
    `

    
    `
  
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  getAutoAddress =(pmAddr) =>{
    this.setState({address:
    `
      ${pmAddr} 
      Apt: ${this.state.apt}
    `})
    console.log(pmAddr)
  }

  disabledInput =()=>{
    this.setState({disabledApt:true})
  }


  render() {

    // const focusUsernameInputField = input => {
    //   input.focus();
    // };


    return (
      <FormCTsty>
        <FullName>
        <TextField
          style={{marginRight:'12px'}}
          label="Name"
          value={this.state.fName}
          onChange={this.handleChange('fName')}
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Last Name"
          value={this.state.lName}
          onChange={this.handleChange('lName')}
          margin="normal"
          variant="filled"
        />
        </FullName>

        <FullName>
        <TextField
          style={{marginRight:'6px'}}
          label="Order ID"
          value={this.state.orderID}
          onChange={this.handleChange('orderID')}
          margin="normal"
          variant="filled"
        />
        <TextField
          disabled={this.state.disabledApt}
          error={this.state.disabledApt}
          label="Apartments"
          value={this.state.apt}
          onChange={this.handleChange('apt')}
          margin="normal"
          variant="filled"
          style={{marginRight:'6px'}}

        />
          <TextField
          label="Count"
          value={this.state.count}
          onChange={this.handleChange('count')}
          margin="normal"
          variant="filled"
        />
        </FullName>
        <TextField
          label="Telephone"
          value={this.state.telephone}
          onChange={this.handleChange('telephone')}
          margin="normal"
          variant="filled"
          type="number"
        />
        <SearchAddBarCP  disabledInput={this.disabledInput} getAutoAddress={this.getAutoAddress} />
        <TextField
          onClick={this.disabledInput}
          label="Edit Address"
          // placeholder="Placeholder"
          multiline
          margin="normal"
          variant="filled"
          value={this.state.address}
          onChange={this.handleChange('address')}
        />
      </FormCTsty>
    )
  }
}


const FormCTsty = styled.div`
  display:flex;
  flex-direction:column;
`

const FullName = styled.div`
  display:flex;
  justify-content:space-between;
`

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCT)
