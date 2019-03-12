import React, { Component } from 'react'

import { connect } from 'react-redux'

export class LandingPage extends Component {


    componentDidMount(){
        console.log(this.props.navigtion)
    }

  render() {
    return (
      <div className="LandingPage">
        LandingPage
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    navigtion:state.transiton.trantiones
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
