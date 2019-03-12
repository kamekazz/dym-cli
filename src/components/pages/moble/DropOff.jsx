import React, { Component } from 'react'
import { styThem } from '../../../style/varble'
import styled from 'styled-components';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import SignatureCanvas from 'react-signature-canvas'

 class DropOff extends Component {

  state={
    name:''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <ManeCtEL>
        <TopCtEL>
          <h2>Print Name</h2>
        <TextField
          id="filled-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          fullWidth
          variant="filled"
        />
        </TopCtEL>
        <BotCtEL>
          <h2>Sign Here</h2>
          <SignatureCtEL>

          <SignatureCanvas 
            penColor='green'
            canvasProps={{height:160, className: 'sigCanvas'}} 
          />
          </SignatureCtEL>
        </BotCtEL>
      </ManeCtEL>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const ManeCtEL =styled.div`
  width:100%;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.75);
  padding:6px;
  margin-bottom: 18px;
  background:${styThem.color.whiteD2};
`

const TopCtEL = styled.div`
  width: 100%;
  background:${styThem.color.white};
  border-radius:3px;
  margin-bottom:12px;
  padding:6px;
`
const BotCtEL = styled.div`
  width: 100%;
  background:${styThem.color.white};
  border-radius:3px;
  padding:6px;
`

const SignatureCtEL = styled.div`
  background:${styThem.color.listeBlue};
`

export default connect(mapStateToProps, mapDispatchToProps)(DropOff)
