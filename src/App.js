import React, { Component } from "react";
import "./App.css";
import MakeUpPage from "./makeUpPage";


let url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl";

const options = {
  method: "GET",
  headers: {
    Accept: "application.json",
  }
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.findMakeup();
  }


  findMakeup = () => {
    const url = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl";
    fetch(url, {
      headers: {
        Accept: "applcation/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ isLoaded: true, items: data }));
    console.log("Where are my results", this.state.items)
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <div className = "list">
           <h1>CoverGirl Cosmetics</h1>

            {items.map(item => (
              <div className= "group" key= {item.id}>
                    <p>Product Name: {item.name}</p>
                    <p><img src={item.image_link}/></p>  
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
              </div>
            
            )
    )}
          </div>
          <footer className="name">Shanica Denis ©2021</footer>

        </div>
        
      );
    }

  }
}

export default App;
