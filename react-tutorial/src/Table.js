import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}
const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Kalle</td>
                <td>Managing director</td>
            </tr>
            <tr>
                <td>Pelle</td>
                <td>Administration manager</td>
            </tr>
            <tr>
                <td>Olle</td>
                <td>Beverage assistant</td>
            </tr>
            <tr>
                <td>Lasse</td>
                <td>Coffee machine cleaner</td>
            </tr>
        </tbody>
      
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody/>
            </table>
        )
    }
}

export default Table