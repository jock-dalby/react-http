import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then(res => this.setState({ loadedPost: res.data }));
        }
    }
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id && this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }Title</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;