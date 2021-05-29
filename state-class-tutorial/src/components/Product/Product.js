import React, { Component } from 'react';
import './Product.css';

const products = [
    {
      emoji: '🍦',
      name: 'ice cream',
      price: 5
    },
    {
      emoji: '🍩',
      name: 'donuts',
      price: 2.5,
    },
    {
      emoji: '🍉',
      name: 'watermelon',
      price: 4
    }
  ];
export default class Product extends Component {

  state = {                         // Add a property called state to the product class
    cart: [],                       // Then add two values to the state object => cart and total
  }

  add = (product) => {              // The add method will take product as an argument 
      this.setState(state => ({     // Pass a function that takes the state as an argument and returns an object that
        cart: [...state.cart, product], // has cart updated with the new product and total updated with new price
      }))
  }

  currencyOptions = {               // This property sets the maximum and minimum decimal places for total
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  getTotal = () => {      // This method takes state and converts it to a string using an array of currency options
    const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0);
    return total.toLocaleString(undefined, this.currencyOptions)
  }

  remove = (product) => {
      this.setState(state => {
        const cart = [...state.cart];
        const productIndex = cart.findIndex(p => p.name === product.name);
        if (productIndex < 0) {
            return;
        }
        cart.splice(product.index, 1)
        return ({
            cart,
        })
      })
  }

  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total {this.getTotal()}</div>
        <div>
            {products.map(product => (
                <div key={product.name}>
                    <div className="product">
                        <span role="img" aria-label={product.name}>{product.emoji}</span>
                    </div>
                    <button onClick={() =>this.add(product)}>Add</button>
                    <button onClick={() =>this.remove(product)}>Remove</button>
                </div>
            ))}
        </div>
    </div>
    )
  }
}