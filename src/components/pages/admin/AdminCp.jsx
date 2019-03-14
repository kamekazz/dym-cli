import React, { Component } from 'react'
import requireAuth from '../../../store/requireAuth';
import NewWCp from './NewWCp';
import styled from 'styled-components';
import { styThem } from '../../../style/varble';
import EmlistCp from './EmlistCp';

class AdminCp extends Component {

    componentDidMount(){
        this.props.acRoute('Admin')
    }


  render() {
    return (
      <TopCtEl>
        <NewWCp></NewWCp>
        <EmlistCp />
      </TopCtEl>
    )
  }
}

export default requireAuth(AdminCp) 


const TopCtEl = styled.div`
  display:flex;
  justify-content:space-around;
  width: 100%;
`