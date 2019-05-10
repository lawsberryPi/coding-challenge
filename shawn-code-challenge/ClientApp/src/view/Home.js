import React, {Component} from 'react';
import { connect } from 'react-redux';
import LinkInput from '../components/LinkInput';
import LinkTable from '../components/LinkTable';
import { bindActionCreators } from 'redux';

class Home extends Component{
  componentWillMount(){
    console.log("console will log")
  }
  render(){
    return(
      <div>
        <h1>FORD CVPP TEST CASE MANAGEMENT</h1>
        <LinkInput/>
        <LinkTable/>
      </div>
    )
  }
}

export default Home;