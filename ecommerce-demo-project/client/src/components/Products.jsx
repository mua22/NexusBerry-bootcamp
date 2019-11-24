import React, { Component } from "react";
import axios from "axios";
class Products extends Component {
  state = {
    products: []
  };
  componentDidMount() {
    this.updateProducts();
  }
  handleDelete = _id => {
    axios
      .delete("http://localhost:4000/api/products/" + _id)
      .then(res => {
        this.updateProducts();
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  updateProducts() {
    axios
      .get("http://localhost:4000/api/products")
      .then(res => {
        this.setState({ products: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h4>Products</h4>
        <ul>
          {this.state.products.map(p => (
            <li key={p._id}>
              {p.name}{" "}
              <button onClick={e => this.handleDelete(p._id)}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
