import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            if (!this.state.loadedPost || this.state.loadedPost.id !== this.props.match.params.id) {
                axios.get(`/posts/${this.props.match.params.id}`)
                    .then(res => this.setState({ loadedPost: res.data }));
            }
        }
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.props.match.params.id}`)
            .then(res => console.log('Deleted item:', res));
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>{this.props.match.params.id ? 'loading...' : 'Please select a Post!'}</p>;
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

export default withRouter(FullPost);