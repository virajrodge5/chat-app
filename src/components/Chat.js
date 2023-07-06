import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore"; //Like adding a row in the database table
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";

export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const messagesRef = collection(db, "messages"); //To say which collection the Doc has to be added to

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room), orderBy("createdAt")); //First argument is which collection query exists in, second specifies the condition under which it should happen
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {        //Provided by firebase and helps to listen to changes, the callback function runs everytime there is aby change in the query
      
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id }); //Setting the new object of messages to be equal to whatever data already existed in the doc (by using ...doc.data()) plus the new id field which is obtained by sayin doc.id. If id already existed in the doc.data a mere messages.push(...doc.data) would have sufficed
      });
      setMessages(messages);
    });

    return () => unsubscribe(); //Whenever there is a useEffect subscribed to a listening service a cleanup function is used
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(), //Provided by firebase to store the time at which the message was create din order to arrannge them accordingly
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div className="header">
        <h1>Welcome to: {room}</h1>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <span className="user">{message.user}</span>
            {message.text}
          </div>
        ))}
      </div>
      <form className="new-message-form" onSubmit={handleSubmit}>
        <input
          className="new-message-input"
          placeholder="Type your message here..."
          onChange={(event) => setNewMessage(event.target.value)}
          value={newMessage}
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};
