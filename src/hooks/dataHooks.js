import { useState, useEffect } from 'react'



//----------------------------------------------------------------------------------
// Experimenting with using React Hooks in lieu of HOCs
//----------------------------------------------------------------------------------

function useWebsocketDataProvider(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ws = new WebSocket(this.state.src);

    ws.onmessage = (e) => {
      if (e.data) {
        this.setState({
          data: e.data
        });
      }
    }

    ws.onerror = (e) => {
      console.log("Error on Websocket connection with " + this.state.src + " -> " + e.message);
    }

  return() => {
    we.close(); 
  }
  
  });
}
