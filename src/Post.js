import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css'

function Post() {
    return (
        <div className="post">
            <Avatar
              className="post__avatar"
              alt="{username}"
              src="/static/images/avatar/1.jpg"
            />
            <h3>didierganthier</h3>
            {/* header -> avatar + username */}
            
            <img
              className="post__image"
              src="https://images.unsplash.com/photo-1609953398453-c3fc0a7be8e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            {/* image */}

            <h4 className="post__text"><strong>didierganthier:</strong> Power at it's finest 🤯</h4>
            {/* username + caption */}
        </div>
    );
}

export default Post;