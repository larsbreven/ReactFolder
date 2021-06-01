import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarTable from "./CarTable";
import CarDetails from "./CarDetails";
import CarCreate from "./CarCreate";
import getCars from "../api/carsApi";

import "../css/App.css";

class App extends Component {
  state = {
    detailsCar: null,
    createCar: false,
    carList: [],
  };

  componentDidMount() {
    const _this = this;
    getCars().then((cars) => {
      _this.setState({ carList: cars });
    });
  }

  findCar = (id) => {
    const cars = this.state.carList;
    let foundCar = null;
    cars.forEach((element) => {
      if (element.id === id) {
        foundCar = element;
      }
    });
    return foundCar;
  };

  showCar = (id) => {
    const car = this.findCar(id);
    if (car != null) {
      this.setState({
        detailsCar: car,
      });
    }
  };

  closeDetails = () => {
    this.setState({
      detailsCar: null,
    });
  };

  deleteCar = (id) => {
    const car = this.findCar(id);
    if (car != null) {
      const cars = this.state.carList;
      cars.splice(cars.indexOf(car), 1);
      this.setState({
        carList: cars,
        detailsCar: null,
      });
    }
  };

  createCar = () => {
    this.setState({
      createCar: true,
    });
  };

  addCar = (car) => {
    const carList = this.state.carList;
    if (carList === null || carList.length < 1) {
      car.id = 1;
    } else {
      const newId =
        carList.reduce((rowCar, highest) => {
          if (rowCar.id > highest.id) {
            return rowCar.id;
          }
          return highest;
        }).id + 1; //plus 1 to make new id higher then any id currently in carList.
      //console.log("new Id: ", newId);
      car.id = newId;
    }

    carList.push(car);

    this.setState({
      carList: carList,
      createCar: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createCar: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsCar != null ? (
        <CarDetails
          car={this.state.detailsCar}
          closeDetails={this.closeDetails}
          deleteCar={this.deleteCar}
        />
      ) : this.state.createCar ? (
        <CarCreate addCar={this.addCar} closeCreate={this.closeCreate} />
      ) : (
        <div>
          <button onClick={this.createCar} className="btn btn-success">
            Add Car
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <div>
        <Header />

        <div className="container stay-clear">
          <h3>Car SPA</h3>
          <hr />
          <div className="row">
            <CarTable cars={this.state.carList} showCar={this.showCar} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;