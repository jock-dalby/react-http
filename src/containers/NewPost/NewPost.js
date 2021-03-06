import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        {/*
        * Can authenticate a route in componentDidMount and react-router-dom as so
        * if unauth => this.props.history.replace('/');
        */}
        console.log(this.props);
    }

    postDataHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts', post)
            .then(res => {
                // Another way of redirecting not using <Redirect> component
                // 'push' pushes a new page to top of history of pages
                // can also use 'replace' to replace current entry on history
                this.props.history.push('/posts');
                // this.setState({submitted: true})
            });
    }

    render () {
        return (
            <div className="NewPost">
                {/* When using Redirect, cannot define a from attribute if outside of a switch component*/}
                {/* Whenever component is rendered, the router will redirect*/}
                {this.state.submitted ? <Redirect to="/posts" /> : null}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;