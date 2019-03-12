import React, { Component } from 'react'

import { connect } from 'react-redux'
import styled from 'styled-components';

import ListConpt from './costomerlis/ListConpt';
// import { styThem } from '../../../style/varble';
import MapContainer from './map/MapContainer';
import CustomizedDialogDemo from './newPacges/CustomizedDialogDemo'
import DeliveryCP from './DeliveryList/DeliveryCP';

// import {styThem} from '../../../style/varble';

 class Dashboard extends Component {

  state={
    addModuler: false
  }

  openModuler =()=>{
    console.log('good')
  }

  // delivery person on duty
  render() {
    return (
      <DashboardSty>
        <TopContanerSTY>
          <MapSty>
            <MapContainer />
          </MapSty>
          <DeliveryCP />
        </TopContanerSTY>
        <ListCard >
          <ListConpt  openModuler={()=> this.openModuler()} />
        </ListCard>
        <CustomizedDialogDemo>
    
        </CustomizedDialogDemo>
      </DashboardSty>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const DashboardSty = styled.div`
  
`

const TopContanerSTY = styled.div`
  display:flex;
`

const MapSty = styled.div`
  flex-grow:1;
  margin-right:12px;
`


const ListCard = styled.div`
  min-width:400pX;
  padding:  12px 12px;

`

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
