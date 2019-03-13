import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions'

import  history from './history';


export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.isAuthenticated || !this.props.user.position === 'admin' ) {
        history.push('/signin');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }




  const mapStateToProps = (state) => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    user: state.authReducer.user,
  })
  

  

  return connect(mapStateToProps,actions)(ComposedComponent);
};