import React, { Component } from 'react'
import requireAuth from '../../../store/requireAuth';

class AdworckerCp extends Component {

    componentDidMount(){
        // this.props.acRoute('Admin')
      }
  render() {
    return (
      <div>
        addnewepl
      </div>
    )
  }
}

export default requireAuth(AdworckerCp) 
