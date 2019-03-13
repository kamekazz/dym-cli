
import React, { Component } from 'react'
import * as actions from '../../../store/actions'
import { connect } from 'react-redux'
import  history from '../../../store/history';


export class SignOutCp extends Component {

    componentDidMount(){
        this.props.acSignOut()
        this.setupTimer()
    }

    setupTimer=()=>{
        setTimeout(() => {
            history.push("/")
        }, 3000);
    }


  render() {
    return (
      <div>
        SignOutCp
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, actions)(SignOutCp)


