import React, { Component } from "react";

export default class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({
      posts: data
    });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map(post => {
          return (
            <div key={post.id} style={{ border: "1px solid red" }}>
              <h1>{post.title}</h1>
              <h4>{post.id}</h4>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
