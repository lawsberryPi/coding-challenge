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
        <h1>Grow the web with referrals</h1>
        <LinkInput/>
        <LinkTable/>
      </div>
    )
  }
}
// const Home = props => (
//   <div>
//     <h1>Hello, world!</h1>
//   </div>
// );

export default connect()(Home);
