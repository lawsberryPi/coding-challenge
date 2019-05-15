import React, {Component} from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/LinkManager';



// import TextField from '@material-ui/core/TextField';

class LinkInput extends Component{
    constructor(props) {
        super(props);
        this.state = {linkValue: ''};
        // This binding is necessary to make `this` work in the callback
        this.onAddLinkHandler = this.onAddLinkHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isValidLink = this.isValidLink.bind(this);
        }

    handleChange(event) {
        this.setState({linkValue: event.target.value});
        }
    onAddLinkHandler(){
        if (this.isValidLink(this.state.linkValue)) {
            alert("special character is detected, url might not be supported");
            return null;
        }
        this.props.requestLink(this.state.linkValue);
        this.state.linkValue = '';
    }
    isValidLink(str) {
        return /[~`#%\^+=\-\[\]\\';,/{}|\\:<>\?]/g.test(str);
    }
    render() {
        return(
            <div>
                <form>
                    <label>
                        Add a Link:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <Button variant="contained" onClick={this.onAddLinkHandler}>
                        Add
                    </Button>       
                </form>
            </div>
        )
    }
}
export default connect(
    state => state.LinkManager,
    dispatch => bindActionCreators(actionCreators,dispatch),
  )(LinkInput)