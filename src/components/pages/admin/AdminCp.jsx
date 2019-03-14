import React, { Component } from 'react'
import requireAuth from '../../../store/requireAuth';
import NewWCp from './NewWCp';

class AdminCp extends Component {

    componentDidMount(){
        this.props.acRoute('Admin')
    }
  render() {
    return (
      <div>
        <NewWCp></NewWCp>
      </div>
    )
  }
}

export default requireAuth(AdminCp) 
