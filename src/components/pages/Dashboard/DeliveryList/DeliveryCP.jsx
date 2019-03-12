import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'
import styled from 'styled-components';
import ListCP from './ListCP';


 class DeliveryCP extends Component {


  render() {
    return (
      <Paper style={{minWidth:'325px'}}>
        <HederSTY>
            <h2>Delivery Person on Duty</h2>
        </HederSTY>
        <hr />
        <BottomSTY>
            <ListCP />
        </BottomSTY>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const HederSTY = styled.div`
   display:flex;
   justify-content:center;
`
const BottomSTY = styled.div`
    padding:12px;
`

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryCP)
