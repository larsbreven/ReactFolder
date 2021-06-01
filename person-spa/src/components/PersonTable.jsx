import React from "react";

const CarTable = (props) => {
  const rows = props.cars.map((car) => {
    return (
      <tr key={car.id}>
        <td>{car.brand}</td>
        <td>{car.model}</td>
        <td>{car.price}</td>
        <td
          className="btn btn-info"
          onClick={() => {
            props.showCar(car.id);
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
            <th>Brand</th>
            <th>Model</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default CarTable;