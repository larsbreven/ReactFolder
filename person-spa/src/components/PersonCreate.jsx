import React, { Component } from "react";
class PersonCreate extends Component {
  createPerson = (event) => {
    event.preventDefault();

    const person = {
      City: event.target["city"].value,
      Name: event.target["name"].value,
      Phone: Number(event.target["phone"].value),
    };

    this.props.addPerson(person);
  };

  render() {
    return (
      <div className="col-md-6">
        <div className="row">
          <h3 className="col-12">Add Person</h3>
        </div>

        <form onSubmit={this.createCar}>
          <div className="row mb-2">
            <label htmlFor="city" className="col-2 mt-2">
              City:
            </label>
            <input
              id="city"
              type="text"
              required
              minLength="2"
              className="form-control col-10"
              placeholder="Enter City"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="name" className="col-2 mt-2">
              Name:
            </label>
            <input
              id="name"
              type="text"
              required
              className="form-control col-10"
              placeholder="Enter Name"
            />
          </div>
          <div className="row mb-2">
            <label htmlFor="phone" className="col-2 mt-2">
              Phone:
            </label>
            <input
              id="phone"
              type="number"
              required
              step="1"
              min="1"
              className="form-control col-10"
              placeholder="Enter Phone"
            />
          </div>

          <div className="row d-flex justify-content-center">
            <input
              type="reset"
              className="mr-2 btn btn-warning"
              value="Reset"
            />
            <input type="submit" className=" btn btn-success" value="Create" />
          </div>
        </form>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-secondary"
            onClick={this.props.closeCreate}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCreate;