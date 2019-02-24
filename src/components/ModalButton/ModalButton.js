import React, { Component } from "react";
import "./ModalButton.css";
import Modal from "./Modal";

export default class ModalButton extends Component {
  state = {
    isModalVisible: false
  };

  handleClick = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible })
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Show modal!</button>
        {
          this.state.isModalVisible &&
          (
            <Modal>
              <div className="modal">
                <div className="modal__fog">
                  <div className="modal__body">
                    <h1>Модальное окно!</h1>
                    <button onClick={this.handleClick}>Close</button>
                  </div>
                </div>
              </div>
            </Modal>
          )
        }
      </>
    );
  }
}
