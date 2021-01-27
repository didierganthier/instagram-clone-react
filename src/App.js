import React, { useState } from 'react';
import './App.css';
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "didierganthier", 
      caption: "Hello World!", 
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/spotlight-flutter.appspot.com/o/events%2FWzIydLwLYFR5tJnEHdue3uCX1sQ2%2Fimage_picker2541470734286195538.jpg?alt=media&token=de965f71-fec7-4990-b8c1-c6f07e3da455", 
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQFxYPWm9sWTfQ/profile-displayphoto-shrink_800_800/0/1607374241023?e=1617235200&v=beta&t=RnPBUKACSpr4bb9mNut-T8nYuBlZdaMciANsYmFm1yo"
    },
    {
      username: "woodensfg", 
      caption: "Somewhere chilling", 
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/spotlight-flutter.appspot.com/o/events%2FWzIydLwLYFR5tJnEHdue3uCX1sQ2%2Fimage_picker3245999896000948729.jpg?alt=media&token=9a6399e1-5cef-4e78-9c25-990539aacac3",
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQGY5IzZX15doQ/profile-displayphoto-shrink_800_800/0/1601995769392?e=1617235200&v=beta&t=9WHz6PNKGiFHfIbtpIsh7MQd6-DTtrLQAvKAXN97RQs"
    },
    {
      username: "amiralda",
      caption: "Doing something really amazing",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/spotlight-flutter.appspot.com/o/events%2FWzIydLwLYFR5tJnEHdue3uCX1sQ2%2Fimage_picker2635295699700479841.jpg?alt=media&token=243b9ccb-d2b8-4326-9a00-83c5d8c383d5", 
      avatarUrl: "https://media-exp1.licdn.com/dms/image/C4E35AQGrzaOBlQjqwg/profile-framedphoto-shrink_800_800/0/1609830720155?e=1611874800&v=beta&t=Bgncou0ehQk9F4YhMxuC1Cu-2dzfb1H6ZTKJIqROtpw"
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      
      <h1>Let's build an Instagram Clone with React 🖖</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} avatarUrl={post.avatarUrl}/>
        ))
      }

    </div>
  );
}

export default App;
