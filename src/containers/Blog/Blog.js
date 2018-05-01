import React, { Component } from 'react';
import instance from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPost: null,
        error: false
    }

    componentDidMount() {
        instance.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4).map(post => (
                    {...post, author: 'Jock'}
                ));
                this.setState({
                    posts,
                    error: false
                });
            })
            .catch(err => this.setState({error: true}));
    }

    postSelected(id) {
        this.setState({
            selectedPost: id
        });
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(
                post => <Post key={post.id}
                            title={post.title}
                            author={post.author}
                            onClicked={ () => this.postSelected(post.id)}/>);
        }

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;