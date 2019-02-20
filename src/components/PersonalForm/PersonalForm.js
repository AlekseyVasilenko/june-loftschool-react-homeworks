import React, { Component } from "react";
import "./PersonalForm.css";

export default class PersonalForm extends Component {
  handleChangeForm = event => {
    const { onChangeForm } = this.props;
    onChangeForm(event.target.name, event.target.value);
  };

  render() {
    return (
      <div className="personal-form" data-test="personal-form">
        <h1 className="title">Персональная информация</h1>
        <input
          type="text"
          name="firstName"
          placeholder="Имя"
          value={this.props.firstName}
          onChange={this.handleChangeForm}
          autoComplete="off"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Фамилия"
          value={this.props.lastName}
          onChange={this.handleChangeForm}
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.props.email}
          onChange={this.handleChangeForm}
          autoComplete="off"
        />
      </div>
    );
  }
}
