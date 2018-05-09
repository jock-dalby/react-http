import React, { Component } from 'react';
import instance from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import { Route, withRouter } from 'react-router-dom';
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
      });
  }

  postSelected(id) {
    this.props.history.push({pathname: '/' + id});
  }

  render() {

    let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
    if (!this.state.error) {
      posts = this.state.posts.map(
        post => <Post title={post.title}
          author={post.author}
          onClicked={() => this.postSelected(post.id)} />
        );
    }
    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        {/* To make dynamic nested route we can use this.props.match.url to get current route
            and append out nested route to end of it.
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
         */}
        <Route path="/:id" exact component={FullPost}/>
      </div>
    )
  }
}

export default withRouter(Posts);