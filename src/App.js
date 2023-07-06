import react, { useState, useRef } from "react";
import { Auth } from "./components/Auth";
import "./App.css";
import { Chat } from "./components/Chat";
import Cookies from "universal-cookie";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      {room ? (
        <Chat room={room}/>
      ) : (
        <div className="room">
          <label>Enter Room Name: </label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
      )}
      <div className="sign-out">      
        <button onClick={signUserOut}>Sign Out</button>
      </div>
      <Footer />
    </>
  );
}

export default App;
