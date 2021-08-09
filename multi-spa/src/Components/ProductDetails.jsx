import React from "react";

const ProductDetails = (props) => {
  return (
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>Name:</b>
          <p>{props.product.name}</p>
        </li>
        <li className="list-group-item">
          <b>Category:</b>
          <p>{props.product.category}</p>
        </li>
        <li className="list-group-item">
          <b>Origin:</b>
          <p>{props.product.origin}</p>
        </li>
        <li className="list-group-item">
          <b>Price:</b>
          <p>{props.product.price}</p>
        </li>

        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.deleteProduct(props.product.id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;