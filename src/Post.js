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
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFxYPWm9sWTfQ/profile-displayphoto-shrink_800_800/0/1607374241023?e=1617235200&v=beta&t=RnPBUKACSpr4bb9mNut-T8nYuBlZdaMciANsYmFm1yo"
              />
              <h3>{username}</h3>
            </div>
          
            <img
              className="post__image"
              src="https://firebasestorage.googleapis.com/v0/b/spotlight-flutter.appspot.com/o/events%2FWzIydLwLYFR5tJnEHdue3uCX1sQ2%2Fimage_picker2541470734286195538.jpg?alt=media&token=de965f71-fec7-4990-b8c1-c6f07e3da455"
              alt=""
            />

            <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>
        </div>
    );
}

export default Post;