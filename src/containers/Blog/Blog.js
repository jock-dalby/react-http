import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import { Route, NavLink } from 'react-router-dom';
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
                            {/*
                                Using NavLink instead of <a> prevents the default browser behaviour of sending off a new request.
                                'NavLink' also has the 'active' class added to it when the path is active, whereas the 'Link' component
                                does not. The 'active' class can be overridden to use a different class name using the
                                activeClassName prop. There is also the activeStyle prop for passing in inline styles for
                                active routers e.g. activeStyle={{ color: 'pink' }}
                            */}
                            <li><NavLink to="/" exact activeStyle={{ textDecoration: 'underline' }}>Home</NavLink></li>
                            <li><NavLink to={newPostRoute}>New Post</NavLink></li>
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