import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css'

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
              <Avatar
                className="post__avatar"
                alt="Didier"
                src="https://firebasestorage.googleapis.com/v0/b/spotlight-flutter.appspot.com/o/profiledummy.jpg?alt=media&token=554527d2-89b1-461d-b746-238e710321da"
              />
              <h3>{username}</h3>
            </div>
          
            <img
              className="post__image"
              src={imageUrl}
              alt=""
            />

            <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>
        </div>
    );
}

export default Post;