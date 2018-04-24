import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id) {
                axios.get(`/posts/${this.props.id}`)
                    .then(res => this.setState({ loadedPost: res.data }));
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.id}`)
            .then(res => console.log('Deleted item:', res));
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>{this.props.id ? 'loading...' : 'Please select a Post!'}</p>;
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }Title</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;