import React, { Component } from 'react'

class TableBody extends Component {
    state = {
        people: [
            {
                id: 1,
                fullName: "Lars B",
                phoneNumber: "123456",
                emailAddress: "lasse.l@ll.com",
            },
            {
                id: 2,
                fullName: "Karl P",
                phoneNumber: "654321",
                emailAddress: "kalle.l@ll.com",
            },
            {
                id: 3,
                fullName: "Per J",
                phoneNumber: "456123",
                emailAddress: "pelle.l@ll.com",
            },
        ],
    };
    render() {
        const tableRows = this.state.people.map((row) => (
            <tr key={row.id}>
              <td>{row.fullName}</td>
              <td>{row.phoneNumber}</td>
              <td>{row.emailAddress}</td>
              <td></td>
            </tr>
          ));
      
          return <tbody>{tableRows}</tbody>;
    }
}

export default TableBody;