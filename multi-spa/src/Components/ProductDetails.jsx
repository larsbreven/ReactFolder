import React from "react";

const ProductDetails = (props) => {
  const rightToDelete = props.loginStatus ? (
    <button
      className="btn btn-danger"
      onClick={() => props.deleteProduct(props.product.id)}>
      Delete
    </button>
  ) : (
    ""
  );

  return (
    <div className="col-md-6">
      <ul className="list-group">
        <li className="list-group-item">
          <b>Benämning:</b>
          <p>{props.product.name}</p>
        </li>
        <li className="list-group-item">
          <b>Kategori:</b>
          <p>{props.product.category}</p>
        </li>
        <li className="list-group-item">
          <b>Ursprung:</b>
          <p>{props.product.origin}</p>
        </li>
        <li className="list-group-item">
          <b>Pris:</b>
          <p>{props.product.price}</p>
        </li>

        <li className="list-group-item">
          <b>Actions:</b>
          <button className="btn btn-secondary" onClick={props.closeDetails}>
            Close
          </button>

          {rightToDelete}
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
