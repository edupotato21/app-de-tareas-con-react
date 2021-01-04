import React, { Component } from "react";
import PropTypes from "prop-types";

import Task from "./Task.js";

import "./styles/Tasks.css";

class Tasks extends Component {
  render() {
    return (
      <div className="main-tasks">
        <div className="Tasks">
          {this.props.tasks.map(task => (
            <Task
              task={task}
              key={task.id}
              deleteTask={this.props.deleteTask}
              checkDone={this.props.checkDone}
            />
          ))}
        </div>
      </div>
    );
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default Tasks;
