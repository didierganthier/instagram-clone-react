import { Avatar } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from "react";
import { db } from './firebase';
import './Post.css'

function Post({ username, caption, imageUrl, key, postId }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
      let unsubscribe;
      if(postId) {
        unsubscribe = db
          .collection("posts")
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
      }
      return () => {
        unsubscribe();
      }
    }, [postId])

    const postComment = (event) => {

    }

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

            <form className="post__commentBox">
              <input
                className="post__input"
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="post__button"
                disabled={!comment}
                type="submit"
                onClick={postComment}
              >
                Post
              </button>
            </form>
        </div>
    );
}

export default Post;