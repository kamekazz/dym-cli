import React, { Component } from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components';
// import {styThem} from '../../../style/varble';

const data={id:1,name:'manny',img:'https://lh3.googleusercontent.com/-9L7ShEbH1q4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdyaPCPs2dN_VznyIDKRfYOiPm2Vw/s32-c-mo/photo.jpg'}

class WorkID extends Component {


  render() {
    return (
      <WorkIDsty>
        <img src={data.img} alt="fa;jlkfdsa;lfdsa;jfdsla"/>
        <h3>{data.name}</h3>
      </WorkIDsty>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}


const WorkIDsty = styled.div`
    display:flex;
    img{
        border-radius:50%;
        margin-right:12px;
    }
`




export default connect(mapStateToProps, mapDispatchToProps)(WorkID)
