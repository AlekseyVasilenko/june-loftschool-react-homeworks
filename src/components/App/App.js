import React, { Component } from "react";
import "./App.css";
import PersonalForm from "../PersonalForm/PersonalForm";
import CardForm from "../CardForm/CardForm";
import Step from "../Step/Step";

export default class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  handleClickNextForm = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  handleTabClick = tabNumber => {
    this.setState({
      step: tabNumber
    });
  };

  handleChangeForm = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  validateEmail = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  isFormCommitable = () => {
    switch (this.state.step) {
      case 1:
        return (
          this.state.firstName !== ''
          && this.state.lastName !== ''
          && this.state.email !== ''
          && this.validateEmail(this.state.email)
        );
      case 2:
        return (
          this.state.cardNumber.length === 16
        );
      default :
        return false;
    }
  };

  renderForm = () => {
    switch (this.state.step) {
      case 1:
        return (
          <PersonalForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 2:
        return (
          <CardForm
            cardNumber={this.state.cardNumber}
            onChangeForm={this.handleChangeForm}
          />
        );
      case 3:
        return <p data-test="congratulations">Поздравляем!</p>;
      default:
        return <p>Ошибка!</p>;
    }
  };

  render() {
    const thisStep = this.state.step;
    const stepTitles = ["Personal info", "Card info", "Success!"];
    return (
      <div className="container">
        <div className="tab-panel">
          {
            stepTitles.map((val, i) => {
              return (
                <Step
                  key={i}
                  number={++i}
                  isSelected={thisStep === i}
                  children={val}
                  isClickable={thisStep > i}
                  onClick={this.handleTabClick}
                />
              );
            })
          }
        </div>
        <div className="form-content">
          {this.renderForm()}
        </div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
            hidden={this.state.step === stepTitles.length}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
