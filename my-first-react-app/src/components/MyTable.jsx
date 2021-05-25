import React, { Component } from 'react';
import  TableHeads from "./TableHeads";
import TableBody from "./TableBody";

class MyTable extends Component {
    render() {
        return <table>
            <TableHeads />
            <TableBody />
        </table>;
    }
}

export default MyTable;