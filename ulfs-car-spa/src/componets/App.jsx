import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarTable from "./CarTable";
import CarDetails from "./CarDetails";
import CarCreate from "./CarCreate";
import getCars, { getCarById, createCar, deleteCar } from "../api/carsApi";

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

  findCar = async (id) => {
    /*const cars = this.state.carList;
    let foundCar = null;
    cars.forEach((element) => {
      if (element.id === id) {
        foundCar = element;
      }
    });*/

    return await getCarById(id);
  };

  showCar = async (id) => {
    const car = await this.findCar(id);
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

  deleteCarHandler = (id) => {
    const car = this.findCar(id);
    if (car != null) {
      if (deleteCar(id)) {
        const cars = this.state.carList;
        cars.forEach((element) => {
          if (element.id === id) {
            cars.pop(element);
          }
        });

        this.setState({
          carList: cars,
          detailsCar: null,
        });
      }
    }
  };

  showCreateCar = () => {
    this.setState({
      createCar: true,
    });
  };

  addCar = async (car) => {
    const carList = this.state.carList;
    /*
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
*/
    car = await createCar(car);

    console.log(car);

    if (car !== undefined) {
      carList.push(car);
    }

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
          deleteCar={this.deleteCarHandler}
        />
      ) : this.state.createCar ? (
        <CarCreate addCar={this.addCar} closeCreate={this.closeCreate} />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreateCar} className="btn btn-success">
            Add Car
          </button>
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default App;
