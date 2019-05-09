import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store/LinkManager';
import { bindActionCreators } from 'redux';
const rows = [ {id:"first", link:"woverines"}, {id:"second", link:"Huskers"} ]
class LinkTable extends Component{
    constructor(props) {
        super(props);
        this.onRedirectoryClick = this.onRedirectoryClick.bind(this);
        this.onDeleteLink = this.onDeleteLink.bind(this);
        this.onEditLink = this.onEditLink.bind(this);
    }
    componentWillMount(){
        // at the init stage we need to request
        // the links first
        this.props.requestLink(null);
    }
    onRedirectoryClick(event){
        this.props.redirectToLink(event.target.textContent);
    }
    onDeleteLink(event) {
        this.props.deleteLink(event);
    }
    onEditLink(event){
        this.props.editLink(event);
    }
    render(){        
        return(
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><h3>Link Title</h3></TableCell>
                            <TableCell align="right"><h3>Clicks</h3></TableCell>
                            <TableCell align="right"><h3>Edit</h3></TableCell>
                            <TableCell align="right"><h3>Delete</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.props.linksList.map(row => (
                        <TableRow key={row.inkUrl}>
                            <TableCell component="th" scope="row" key={row.inkUrl + "url"}>
                            {
                                row.editing?
                                (<p>editing</p>):
                                (<Link to={row.linkUrl}><h6 fontSize="14" 
                                onClick={this.onRedirectoryClick}>{row.linkUrl}</h6></Link>)
                                
                            }
                            </TableCell>
                            <TableCell fontSize="14" component="th" scope="row" align="right" key={row.inkUrl + "edit"} 
                            ><h4>{row.clicks}</h4></TableCell>
                            <TableCell align="right">
                                <Button color="primary" size="large" onClick={() => this.onEditLink(row)}>
                                    EDIT
                                </Button>       
                            </TableCell>
                            <TableCell align="right">
                                    <Button color="secondary" size="large" key={row.inkUrl + "delete"} onClick={() => this.onDeleteLink(row)}>
                                    DELETE
                                </Button>       
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
export default connect(
    state => state.LinkManager,
    dispatch => bindActionCreators(actionCreators, dispatch)
) (LinkTable)