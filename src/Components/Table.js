import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper
} from "@material-ui/core";

function TableList(props) {

    return (<div>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {props.list.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">{row.number1}</TableCell>
                            <TableCell align="center">{row.sign1}</TableCell>
                            <TableCell align="center">{row.number2}</TableCell>
                            <TableCell align="center">=</TableCell>
                            <TableCell align="center">{row.output}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
};

export default TableList;