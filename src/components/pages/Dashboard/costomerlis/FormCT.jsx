import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import styled from 'styled-components';



import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

 class FormCT extends Component {

  state = {
    dyG: '',
    name: 'hai',
    labelWidth: 0,
    note:
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




    return (
      <FormCTsty>

        <FormControl variant="filled" >
          <InputLabel htmlFor="filled-age-simple">Delivery p.</InputLabel>
          <Select
            value={this.state.dyG}
            onChange={this.handleChange('dyG')}
            input={<FilledInput name="age" id="filled-age-simple" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'olive'}>olive</MenuItem>
            <MenuItem value={'mohaaben'}>mohaaben</MenuItem>
            <MenuItem value={'jack'}>jack</MenuItem>
          </Select>
        </FormControl>



        <TextField
          onClick={this.disabledInput}
          label="Note"
          // placeholder="Placeholder"
          multiline
          margin="normal"
          variant="filled"
          value={this.state.note}
          onChange={this.handleChange('note')}
        />
      </FormCTsty>
    )
  }
}


const FormCTsty = styled.div`
  display:flex;
  flex-direction:column;
  min-width:325px;
`



const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCT)
