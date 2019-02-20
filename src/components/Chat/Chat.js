import React, { Component } from "react";
import "./Chat.css";
import Message from "../Message";

export default class Chat extends Component {
  // начальное состояние
  state = {
    messages: [],
    messageInput: ""
  };

  // изменение val инпута при вводе
  changeInputMessage = event => {
    this.setState({
      messageInput: event.target.value
    });
  };

  // отправка сообщения при нажатии Enter
  sendMessageOnEnter = event => {
    if (event.key === "Enter" && this.state.messageInput.trim() !== "") {
      // пуш в массив через спред оператор (...)
      this.setState({
        messages: [...this.state.messages, this.state.messageInput]
      });

      // очистка инпута
      this.setState({
        messageInput: ""
      });
    } else {
      return false;
    }
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {this.state.messages.map((message, index) => {
              return <Message key={index} text={message}/>;
            })}
          </div>
          <div ref={el => {
            this.messagesEnd = el;
          }}>
          </div>
        </div>
        <input
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>

    );
  }
}