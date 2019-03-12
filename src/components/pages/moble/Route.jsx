import React, { Component } from 'react'

import styled from 'styled-components';
import { connect } from 'react-redux'
import Received from './Received';
import Switch from '@material-ui/core/Switch';
import MapRoute from './MapRoute';



class Route extends Component {


  render() {
    return (
      <ManeCtEL>
        <MapCtEL>
          <MapRoute />
        </MapCtEL>
        <Received  data={this.props.data} />
        <DoormanCtEL>
          <h3>Doorman Or Receiving Room</h3> <Switch />
        </DoormanCtEL>
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
`


const MapCtEL = styled.div`
  height: 40vh;
  width:100%;
  margin-bottom:12px;
`

const DoormanCtEL = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.75);
  margin-bottom:12px;
`

export default connect(mapStateToProps, mapDispatchToProps)(Route)
