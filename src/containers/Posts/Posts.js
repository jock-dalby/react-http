import React, { Component } from 'react';
import instance from '../../axios';
import Post from '../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    instance.get('/posts')
      .then(res => {
        const posts = res.data.slice(0, 4).map(post => (
          { ...post, author: 'Jock' }
        ));
        this.setState({
          posts
        });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: true })
      });
  }

  postSelected(id) {
    this.setState({
      selectedPost: id
    });
  }

  render() {

    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      posts = this.state.posts.map(
        post => <Post key={post.id}
          title={post.title}
          author={post.author}
          onClicked={() => this.postSelected(post.id)} />);
    }
    return (
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts;