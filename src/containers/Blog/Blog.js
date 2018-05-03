import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import { Route, Link } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {

    render () {
        const newPostRoute = {
            pathname: "/new-post",
            // append a fragemnt after url using hash to jump to anchor on that page
            hash: '#submit',
            // Add query params using search prop
            // hash and search do nothing in application but left here as examples.
            search: '?quick-submit=true'
        };
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*Using Link instead of <a> prevents the default browser behaviour of sending off a new request.*/}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={newPostRoute}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact render={() => <Posts/>}/>
                <Route path="/new-post" exact component={NewPost}/>
            </div>
        );
    }
}

export default Blog;