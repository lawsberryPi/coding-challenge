import React, { Component } from 'react';
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
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TextField from '@material-ui/core/TextField';

const rows = [{ id: "first", link: "woverines" }, { id: "second", link: "Huskers" }]
class LinkTable extends Component {
    constructor(props) {
        super(props);
        this.onRedirectoryClick = this.onRedirectoryClick.bind(this);
        this.onDeleteLink = this.onDeleteLink.bind(this);
        this.onStartEditLink = this.onStartEditLink.bind(this);
        this.onUpdateValue = this.onUpdateValue.bind(this);
        this.handleRequestSort = this.handleRequestSort.bind(this);
        this.getSorting = this.getSorting.bind(this);
        this.isValidLink = this.isValidLink.bind(this);
        this.desc = this.desc.bind(this);
    }
    state={
        editingValues:null,
        order:'asc',
        orderBy: 'linkUrl'
    };
    componentWillMount() {
        // at the init stage we need to request
        // the links first
        this.props.requestLink();
    }
    handleChange = editingValues => event => {
        this.setState({
            [editingValues]: event.target.value
        });
      };
    onStartEditing(targetLink){
        this.setState({
            ["editingValues"]: targetLink
        });
    }
    onRedirectoryClick(event) {
        this.props.redirectToLink(event.target.textContent);
    }
    onDeleteLink(event) {
        this.props.deleteLink(event);
    }
    onStartEditLink(event) {
        this.props.startEditLink(event);
    }
    onUpdateValue(oldValue) {
        if (this.state.editingValues === "") {
            alert("url can not be empty");
            return;
        }
        if (this.isValidLink(this.state.editingValues)) {
            alert("special character is detected, url might not be supported");
            return null;
        }
        const newValue = this.state.editingValues;
        this.props.updateEditLink(oldValue, newValue);
    }
    isValidLink(str) {
        return /[~`#%\^+=\-\[\]\\';,/{}|\\:<>\?]/g.test(str);
    }

    handleRequestSort = (event) => {
        const orderBy = event.target.textContent === "Link Title"? 'linkUrl':'clicks';
        let order = 'desc';
    
        if (this.state.order === 'desc') {
          order = 'asc';
        }
    
        this.setState({ order, orderBy });
    };
      desc(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
          return -1;
        }
        if (b[orderBy] > a[orderBy]) {
          return 1;
        }
        return 0;
      };
      getSorting(order, orderBy) {
        return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
      }

      stableSort(array, cmp) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = cmp(a[0], b[0]);
          if (order !== 0) return order;
          return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
      }

    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell key="linkHeader"
                            sortDirection={this.state.orderBy === "linkUrl" ? this.state.order : false}>
                                <TableSortLabel
                                    key="links"
                                    active={this.state.orderBy === "linkUrl"}
                                    direction={this.state.order}
                                    onClick={this.handleRequestSort}
                                >
                                <h3>Link Title</h3>
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right"
                                sortDirection={this.state.orderBy === "clicks" ? this.state.order : false}>
                                <TableSortLabel
                                    key="click"
                                    active={this.state.orderBy === "clicks"}
                                    direction={this.state.order}
                                    onClick={this.handleRequestSort}
                                >
                                <h3>Clicks</h3>
                                </TableSortLabel>

                            </TableCell>
                            <TableCell align="right"><h3>Edit</h3></TableCell>
                            <TableCell align="right"><h3>Delete</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.stableSort(this.props.linksList, this.getSorting(this.state.order, this.state.orderBy))
                    .map(row => (
                            <TableRow key={row.inkUrl}>
                                <TableCell component="th" scope="row" key={row.inkUrl + "url"}>
                                    {
                                        row.editing ?
                                            (<TextField
                                                id="outlined-dense"
                                                label="Edit Link"
                                                margin="dense"
                                                variant="outlined"
                                                value={this.state.editingValues}
                                                onChange={this.handleChange('editingValues')}
                                                onBlur={() => this.onUpdateValue(row.linkUrl)}
                                                onClick={() => this.onStartEditing(row.linkUrl)}
                                            />) :
                                            (<Link to={row.linkUrl}><h6 fontSize="14"
                                                onClick={this.onRedirectoryClick}>{row.linkUrl}</h6></Link>)

                                    }
                                </TableCell>
                                <TableCell fontSize="14" component="th" scope="row" align="right" key={row.inkUrl + "edit"}

                                ><h4>{row.clicks}</h4></TableCell>
                                <TableCell align="right">
                                    <Button color="primary" size="large" onClick={() => this.onStartEditLink(row)}>
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
        );
    }
}
export default connect(
    state => state.LinkManager,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LinkTable)