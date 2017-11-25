import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style/site.css';

import Post from './component/Post';
import Layout from './layout/Layout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    let dataURL = "http://uqcc.azurewebsites.net/wp-json/wp/v2/posts?_embed";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }
  render() {
    const { posts } = this.state;
    return (
      <Layout>
        {
          posts.map((post, index) => {
            return <Post post={post} index={index} />
          })
        }
      </Layout>
    );
  }
}

export default App;
