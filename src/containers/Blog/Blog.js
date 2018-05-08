import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
import { Route, NavLink, Switch } from 'react-router-dom';
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
                {/*
                * Using Switch means that rwhen eact-router-dom matches a given path with a route it
                * will stop analusing any further routes. Only one route will ever be rendered. This
                * is useful becuase otherwise here /new-post would render /new-post route and /:id
                * route because the router could think new-post is an id. If we change the order of /new-post
                * and /:id then we will never be able to reach the /new-post route.
                */}
                <Switch>
                    <Route path="/" exact render={() => <Posts/>}/>
                    <Route path="/new-post" exact component={NewPost}/>
                    <Route path="/:id" exact component={FullPost}/>
                </Switch>
            </div>
        );
    }
}

export default Blog;

{/**
    Parsing Query Parameters & the Fragment
Section 11, Lecture 191
You learned how to extract route parameters (=> :id  etc).

But how do you extract search (also referred to as "query") parameters (=> ?something=somevalue  at the end of the URL)? How do you extract the fragment (=> #something  at the end of the URL)?

Query Params:
You can pass them easily like this:

<Link to="/my-path?start=5">Go to Start</Link>

or

<Link
    to={‌{
        pathname: '/my-path',
        search: '?start=5'
    }}
    >Go to Start</Link>
React router makes it easy to get access to the search string: props.location.search .

But that will only give you something like ?start=5

You probably want to get the key-value pair, without the ?  and the = . Here's a snippet which allows you to easily extract that information:

componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        console.log(param); // yields ['start', '5']
    }
}
URLSearchParams  is a built-in object, shipping with vanilla JavaScript. It returns an object, which exposes the entries()  method. entries()  returns an Iterator - basically a construct which can be used in a for...of...  loop (as shown above).

When looping through query.entries() , you get arrays where the first element is the key name (e.g. start ) and the second element is the assigned value (e.g. 5 ).

Fragment:
You can pass it easily like this:

<Link to="/my-path#start-position">Go to Start</Link>

or

<Link
    to={‌{
        pathname: '/my-path',
        hash: 'start-position'
    }}
    >Go to Start</Link>
React router makes it easy to extract the fragment. You can simply access props.location.hash .

**/}