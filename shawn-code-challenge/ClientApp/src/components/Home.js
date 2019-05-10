import React, {Component} from 'react';
import { connect } from 'react-redux';
import LinkInput from './LinkInput';
import LinkTable from './LinkTable';

class Home extends Component{
  componentWillMount(){
    console.log("console will log")
  }
  render(){
    return(
      <div>
        <h1>FORD CVPP TEAM</h1>
        <LinkInput/>
        <LinkTable/>
      </div>
    )
  }
}

export default Home;
