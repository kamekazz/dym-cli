import React, { Component } from 'react'
import { connect } from 'react-redux'
import { styThem } from '../../../style/varble'
import styled from 'styled-components';
 class Received extends Component {


  render() {
    const {recipient,phoneN,cop,address,pcs,note} = this.props.data

    return (
      <CardEL>
        <HeaderTopEL>
           <h1>Received</h1>
           <hr/>
          <InfoRecipientEL>{recipient}</InfoRecipientEL>
          <InfoTelCtEL>
            <InfoCopEL>Cop: {cop}</InfoCopEL>
          </InfoTelCtEL>
          <InfoTelCtEL>
            <InfoTelEL>Tel: {phoneN}</InfoTelEL>
          </InfoTelCtEL>
          <InfoTelCtEL>
            <InfoTelEL>{address}</InfoTelEL>
          </InfoTelCtEL>
          <PcsCtEL>
            <PcsEL>{pcs}</PcsEL>
          </PcsCtEL>
          <NodeCtEL>{note}</NodeCtEL>
        </HeaderTopEL>
      </CardEL>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const CardEL = styled.div`
  width:100%;
  box-shadow: 0px 0px 7px 1px rgba(0,0,0,0.75);
  padding:6px;
  margin-bottom: 18px;
  background:${styThem.color.whiteD2};
`

const HeaderTopEL = styled.div`
 width:100%;
 height: 100%;
  padding:12px;
  margin-bottom: 12px;
  border-radius:3px;
  background:${styThem.color.white};

  h1{
    color:${styThem.secondary.main};
  }
`

const InfoRecipientEL = styled.h3`
 font-size:24px;
 text-transform:uppercase;

`
const InfoCopEL = styled.p`
 font-size:18px;
 text-transform:uppercase;
`

const InfoTelCtEL = styled.div`
  display:flex;
`

const InfoTelEL = styled.p`
  font-weight:700;
  margin-left:6px;
`

const PcsCtEL = styled.div`
  background:${styThem.color.listeBlue};
  padding:12px;
  border-radius:6px;
  border:solid 3px ${styThem.secondary.dark};
  margin-bottom:12px;
`

const PcsEL = styled.h2`
  font-size:44px;
  color:${styThem.primary.main};
`

const NodeCtEL = styled.div`
  background:yellow;
  padding:6px;
  border-radius:6px;
  border:solid 3px ${styThem.secondary.dark};

`







export default connect(mapStateToProps, mapDispatchToProps)(Received)
