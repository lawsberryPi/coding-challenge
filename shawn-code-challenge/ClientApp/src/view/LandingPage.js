import { connect } from 'react-redux';
import { actionCreators } from '../store/LinkManager';
import { bindActionCreators } from 'redux';
import React, {Component} from 'react';

class LandingPage extends Component{
    render(){
      return(
        <div>
            <h1> {this.props.linkDirectory} HELLO </h1>
        </div>
      )
    }
  }
  
  export default connect(
    state => state.LinkManager,
    dispatch => bindActionCreators(actionCreators, dispatch)
) (LandingPage)