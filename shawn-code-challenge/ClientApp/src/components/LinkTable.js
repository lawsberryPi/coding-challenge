import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const rows = [ {id:"first", link:"woverines"}, {id:"second", link:"Huskers"} ]
const LinkTable =()=>{
    return(
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><h2>Link Title</h2></TableCell>
                        <TableCell align="right"><h2>Clicks</h2></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell fontSize="16" component="th" scope="row"><h4>{row.id}</h4></TableCell>
                        <TableCell align="right"><h4>{row.link} </h4></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    )
}
export default LinkTable