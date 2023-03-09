import React, { Component } from "react";
import { Transition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true, showBlock: false });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            console.log("on enter");
          }}
          onEntering={() => {
            console.log("on entering");
          }}
          onEntered={() => {
            console.log("on entered");
          }}
          onExit={() => {
            console.log("on exit");
          }}
          onExiting={() => {
            console.log("on exiting");
          }}
          onExited={() => {
            console.log("on exited");
          }}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exited" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        <Transition in={this.state.modalIsOpen}>
          <Backdrop show={this.state.modalIsOpen} />
        </Transition>

        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
