import React, { Component } from "react";

class ProductCreate extends Component {
  createProduct = (event) => {
    event.preventDefault();

    const product = {
      Name: event.target["name"].value,
      Category: event.target["category"].value,
      Origin: event.target["origin"].value,
      Price: Number(event.target["price"].value),
    };

    console.log("product to create:", product);                                 /* Check here if the information is coming from the backend */
    this.props.addProduct(product);                                             /* Product object added to the list */ 
  };

  render() {

    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Lägg till produkt</h3>
        </div>

        <form onSubmit={this.createProduct}>
          <div className="row mb-2">
            <label htmlFor="name" className="col-2 mt-2"></label>
            <input
              id="name"
              type="text"
              required
              className="form-control col-10"
              placeholder="Benämning"
              />
          </div>
          <div className="row mb-2">
            <label htmlFor="category" className="col-2 mt-2"></label>
            <input
              id="category"
              type="text"
              required
              className="form-control col-10"
              placeholder="Kategori"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="origin" className="col-2 mt-2"></label>
            <input
              id="origin"
              type="text"
              required
              className="form-control col-10"
              placeholder="Ursprung"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="price" className="col-2 mt-2"></label>
            <input
              id="price"
              type="number"
              required
              step="1"
              min="1"
              className="form-control col-10"
              placeholder="Pris"
            />
          </div>

          <div className="row d-flex justify-content-center">
            <input
             type="reset"
             className="mr-2 btn btn-warning"
             value="Radera text"
            />
            <input
             type="submit"
             className=" btn btn-success"
             value="Skapa produkt" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Stäng sida
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCreate;