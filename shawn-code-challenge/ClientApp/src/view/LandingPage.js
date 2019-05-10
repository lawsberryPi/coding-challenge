import { connect } from 'react-redux';
import { actionCreators } from '../store/LinkManager';
import { bindActionCreators } from 'redux';
import React, {Component} from 'react';

class LandingPage extends Component{
    render(){
      return(
        <div>
            <h1> {this.props.linkDirectory} are Awesome!</h1>
            <h3>Shawn would like to join Tim's World Wide Web!</h3>
        </div>
      )
    }
  }
  
  export default connect(
    state => state.LinkManager,
    dispatch => bindActionCreators(actionCreators, dispatch)
) (LandingPage)