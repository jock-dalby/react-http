import React from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

const post = (props) => {
    console.log('props including router props', props);
    return (
        <article className="Post" onClick={props.onClicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
}

// The withRouter higher order component (hoc) passes the props given by the router
// when landing on this page into the component.
export default withRouter(post);