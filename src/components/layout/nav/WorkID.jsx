import React, { Component } from 'react'

import { connect } from 'react-redux'

import styled from 'styled-components';
// import {styThem} from '../../../style/varble';

const data={id:1,name:'manny',img:'https://lh3.googleusercontent.com/-9L7ShEbH1q4/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdyaPCPs2dN_VznyIDKRfYOiPm2Vw/s32-c-mo/photo.jpg'}

class WorkID extends Component {


  render() {
    
    return (
      <WorkIDsty>
        {this.props.user && <img src={data.img} alt="fa;jlkfdsa;lfdsa;jfdsla"/>}
        {this.props.user &&<h3>{this.props.user.userName}</h3>}
      </WorkIDsty>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user
})




const WorkIDsty = styled.div`
    display:flex;
    img{
        border-radius:50%;
        margin-right:12px;
    }
`




export default connect(mapStateToProps, null)(WorkID)
