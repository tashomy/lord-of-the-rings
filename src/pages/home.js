import React, { Component } from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loader: true };
  }
  componentDidMount() {
    let self = this;
    self.setState({ loader: false });
  }
  render() {
    return (
      <div className="container" id="home-container">
        <Header></Header>
        <Showcase></Showcase>
      </div>
    );
  }
}

export default Home;
