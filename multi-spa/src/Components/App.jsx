import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductTable from "./ProductTable";
import ProductDetails from "./ProductDetails";
import ProductCreate from "./ProductCreate";
import getProducts, { getProductById, createProduct, deleteProduct } from "../Api/ProductsApi";

import "../css/App.css";

class App extends Component {
  state = {
    detailsProduct: null,                                                       /* Show the details of the product */      
    createProduct: false,                                                       /* Show create product */
    productList: [],                                                            /* Show the list of the products */   
  };

  componentDidMount() {                                                         /* When this component is mounted, this method will run */
    const _this = this;                                                         /* This will happen when the application starts up */

    getProducts().then((products) => {                                          /* A get request to the backend, to get the productlist */
      _this.setState({ productList: products });                                /* Then React will have the same list as the database have */
    });

  }

  findProduct = async (id) => {                                                 /* Find a product in the list, the list is already in the frontend */
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

  closeDetails = () => {                                                        /* Method to close down the window */
    this.setState({
      detailsProduct: null,
    });
  };

  deleteProductHandler = (id) => {                                              /* Method to delete a product */
    const product = this.findProduct(id);                                       /* Different method to be used when there is a backend */
    if (product != null) {                                                      /* Check if there is a product */
      
      if (deleteProduct(id)) {                                                  /* If Backend tells the product is deleted */
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

  showCreateProduct = () => {
    this.setState({
      createProduct: true,
    });
  };

  addProduct = async (product) => {
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

    if (product !== undefined) {
      productList.push(product);
    }

    this.setState({
      productList: productList,
      createProduct: false,
    });
  };

  closeCreate = () => {
    this.setState({
      createProduct: false,
    });
  };

  render() {
    const sideElement =
      this.state.detailsProduct != null ? (
        <ProductDetails                                                         /* Details of a product */
          product={this.state.detailsProduct}
          closeDetails={this.closeDetails}
          deleteProduct={this.deleteProductHandler}
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
          <p>Click on Details button to see more information here.</p>
        </div>
      );

    return (
      <React.Fragment>
        <Header />

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