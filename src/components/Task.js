import React, { Component } from "react";

import "./styles/Task.css";

class Task extends Component {
  StyleCompleted() {
    return {
      color: this.props.task.done ? "gray" : "black",
      textDecoration: this.props.task.done ? "line-through" : "none"
    };
  }

  render() {
    const { task } = this.props;
    return (
      <div className="card-task" style={this.StyleCompleted()}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span>{task.id}</span>
        <input
          type="checkbox"
          onChange={this.props.checkDone.bind(this, task.id)}
        />
        <button onClick={this.props.deleteTask.bind(this, task.id)}>
          Eliminar
        </button>
      </div>
    );
  }
}

export default Task;
