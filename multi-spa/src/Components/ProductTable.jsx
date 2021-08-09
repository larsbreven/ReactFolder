import React from "react";

const ProductTable = (props) => {                                               /* Gets in the property */
  const rows = props.products.map((product) => {                                /* For each product in the list a table row is created */
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.origin}</td>
        <td>{product.price}</td>
        <td>
          <button
            onClick={() => {
              props.showProduct(product.id);                                    /* Click on the button to show the product */
            }}
            className="btn btn-info">
            Details
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="col-md-6 middle-bar">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Origin</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;