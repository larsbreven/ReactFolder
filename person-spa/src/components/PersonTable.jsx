import React from "react";

const PersonTable = (props) => {
  const rows = props.persons.map((person) => {  // For each person in the list a table row is created
    return (
      <tr key={person.id}>                      
        <td>{person.city}</td>
        <td>{person.name}</td>
        <td>{person.phone}</td>
        <td
          className="btn btn-info"
          onClick={() => {
            props.showPerson(person.id);
          }}>
          Details
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>City</th>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default PersonTable;