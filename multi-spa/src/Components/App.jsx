import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductTable from "./ProductTable";
import ProductDetails from "./ProductDetails";
import ProductCreate from "./ProductCreate";
import getProducts, { getProductById, createProduct, deleteProduct } from "../Api/ProductsApi";

import { loginUser, getUserToken } from "../Api/userApi";

import "../App.css";

class App extends Component {
  state = {                                                                     /* Manage the main three states */
    detailsProduct: null,                                                       /* Show the details of the product */      
    createProduct: false,                                                       /* Show create product */
    productList: [],                                                            /* Show the list of the products */ 
    userToken: null,  
  };

  componentDidMount() {                                                         /* When this component is mounted, this method will run */
    const _this = this;                                                         /* This will happen when the application starts up */

    getProducts().then((products) => {                                          /* A get request to the backend, to get the productList */
      _this.setState({ productList: products });                                /* Then React will have the same list as the database have */
    });

  }

  login = (loginData) => {
    const _this = this;
    loginUser(loginData).then((data) => {
      console.log(data);
      if (data === "Ok") {
        _this.setState({ userToken: getUserToken() });
      }
    });
  };

  logout = () => {
    this.setState({ userToken: null });
  };

  findProduct = async (id) => {                                                 /* Find a product in the list, the list is already loaded to the frontend */
    /*const products = this.state.productList; OK to use this method for smaller lists, not big ones
    let foundProduct = null;
    products.forEach((element) => {
      if (element.id === id) {
        foundProduct = element;
      }
    });*/

    return await getProductById(id);
  };

  showProduct = async (id) => {                                                 /* Show details for the product */
    const product = await this.findProduct(id);
    if (product != null) {
      this.setState({
        detailsProduct: product,
      });
    }
  };

  closeDetails = () => {                                                        /* Method to close the page "Product Details" */
    this.setState({
      detailsProduct: null,
    });
  };

  deleteProductHandler = (id) => {                                              /* Method to delete a product */
    const product = this.findProduct(id);                                       /* (Different method to be used when there is a backend) */

    if (product != null && this.state.userToken != null) {                      /* Check if there is a product */
      if (deleteProduct(id, this.state.userToken)) {                            /* If Backend tells the product is deleted */
        const products = this.state.productList;

        for (let index = 0; index < products.length; index++) {
          if (products[index].id === id) {
            products.splice(index, 1);
          }
        }
        /*
        products.forEach((element) => {                                    Loop through the list 
          if (element.id === id) {
            cars.pop(element);//pop removes the last element, so if we want to remove something other then that, we cant use pop.            
          }
        });
        */
        this.setState({
          productList: products,
          detailsProduct: null,
        });
      }
    }
  };

  showCreateProduct = () => {                                                   /* Method to show "Create Product" */
    this.setState({
      createProduct: true,
    });
  };

  addProduct = async (product) => {                                             /* Method to add a product */
    const productList = this.state.productList;
    /*            Logic not used when connected to backend!
    if (productList === null || productList.length < 1) {
      product.id = 1;
    } else {
      const newId =
        productList.reduce((rowProduct, highest) => {
          if (rowProduct.id > highest.id) {
            return rowProduct.id;
          }
          return highest;
        }).id + 1; //plus 1 to make new id higher then any id currently in productList.
      //console.log("new Id: ", newId);
      product.id = newId;
    }
*/
    product = await createProduct(product);

    console.log(product);

    if (product !== undefined) {                                                /* If product is not undefined */
      productList.push(product);                                                /* Push the new product to the ProductList */
    }

    this.setState({
      productList: productList,                                                 /* Save the productList */
      createProduct: false,                                                     /* Close the createProduct*/
    });
  };

  closeCreate = () => {                                                         /* Method to close the page "Create Product" */
    this.setState({
      createProduct: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsProduct != null ? (
        <ProductDetails                                                         /* Show details of a product */
          product={this.state.detailsProduct}
          closeDetails={this.closeDetails}
          deleteProduct={this.deleteProductHandler}
          loginStatus={this.state.userToken === null ? false : true}
        />
      ) : this.state.createProduct ? (                                          /* Create a new product */
        <ProductCreate
          addProduct={this.addProduct}
          closeCreate={this.closeCreate}
        />
      ) : (
        <div className="col-md-6">
          <button onClick={this.showCreateProduct} className="btn btn-success">
            Lägg till produkt
          </button>
          <p>Klicka på "Detaljvy" för att få mer information.</p>
        </div>
      );

    return (
      <React.Fragment>
       <Header
          login={this.login}
          logout={this.logout}
          status={this.state.userToken === null ? true : false}
        />

        <div className="container stay-clear">
          <h3>Multi Webshop</h3>
          <hr />
          <div className="row">
            <ProductTable products={this.state.productList} showProduct={this.showProduct} />
            {sideElement}
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;