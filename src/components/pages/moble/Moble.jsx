import React, { Component } from 'react'

import { connect } from 'react-redux'
import HorizontalLinearStepper from './HorizontalLinearStepper';

 class Moble extends Component {


  render() {
    return <HorizontalLinearStepper />
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Moble)
