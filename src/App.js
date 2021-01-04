import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import tasks from "./sample/tasks.json";
//Componentes
import Tasks from "./components/Tasks.js";
import TaskForm from "./components/TaskForm.js";
import Posts from "./components/Posts.js";

class App extends React.Component {
  state = {
    tasks: tasks
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  deleteTask = id => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  };

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id == id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Router>
          <header className="header">
            <a href="#" className="logo">
              ToDos
            </a>
            <nav className="nav">
              <Link to="/" className="nav-item">
                Home
              </Link>
              <Link to="/posts" className="nav-item">
                Posts
              </Link>
            </nav>
          </header>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="App">
                  <TaskForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          />
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    );
  }
}

export default App;
