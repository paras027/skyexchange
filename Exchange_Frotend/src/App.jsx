import { useEffect, useState } from "react";
import "./App.css";
import CardOne from "./Component/CardOne";


function App() {
  const [messages, setMessages] = useState([]); // To store received messages

  useEffect(() => {
    const token = "73a2d66fb0d78c9d490d9a7f3699d79d"; // Replace with your token
    const socket = new WebSocket(`wss://webhook.entitysport.com:8087/connect?token=${token}`);

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      try {
        const parsedMessage = JSON.parse(event.data);
        const l = Object.keys(parsedMessage.response).length;
        // Check if match_id exists
        const matchId = String(parsedMessage.response?.match_id); // Convert to string
        if (!matchId) {
          console.error("Invalid match_id in message:", parsedMessage);
          return;
        }
    
        setMessages((prevMessages) => {
          // Create a map of match_id (as strings) to data
          const map = new Map(prevMessages.map((item) => [String(item.response?.match_id), item]));
    
          console.log("Existing Map contents:", Array.from(map.entries()));
    
          // Update or insert the new message
          if(l>3){map.set(matchId, parsedMessage);
          }
          console.log("Updated Map contents:", Array.from(map.entries()));
    
          // Convert Map back to an array
          return Array.from(map.values());
        });
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };
    
    

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    // Cleanup WebSocket on component unmount
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="parent">
      <div className="box">Highlights</div>
      <div className="greyoe">
        <div>1</div>
        <div>X</div>
        <div>2</div>
      </div>
      {messages
        .filter(
          (message, index, self) =>
            self.findIndex((m) => m.response?.match_id === message.response?.match_id) === index
        )
        .map((val) => (
          <CardOne key={1} val={val} />
        ))}
      
    </div>
  );
}

export default App;
