import './App.css';
import Post from "./Post";

function App() {
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

      <Post username="didierganthier" caption="Hello World!" imageUrl="https://firebasestorage.googleapis.com/v0/b/spotlight-flutter.appspot.com/o/events%2FWzIydLwLYFR5tJnEHdue3uCX1sQ2%2Fimage_picker2541470734286195538.jpg?alt=media&token=de965f71-fec7-4990-b8c1-c6f07e3da455"/>
      <Post/>
      <Post/>
    </div>
  );
}

export default App;
