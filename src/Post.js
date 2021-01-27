import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css'

function Post() {
    return (
        <div className="post">
            <div className="post__header">
              <Avatar
                className="post__avatar"
                alt="Didier"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFxYPWm9sWTfQ/profile-displayphoto-shrink_800_800/0/1607374241023?e=1617235200&v=beta&t=RnPBUKACSpr4bb9mNut-T8nYuBlZdaMciANsYmFm1yo"
              />
              <h3>didierganthier</h3>
            </div>
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