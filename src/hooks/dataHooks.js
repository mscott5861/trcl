import { useState, useEffect } from 'react'



//----------------------------------------------------------------------------------
// Experimenting with using React Hooks in lieu of HOCs
//----------------------------------------------------------------------------------

function useWebsocketDataProvider(src) {
  const [data, setData] = useState(null);
  let ws = new WebSocket(src);

  useEffect(() => {
    ws.onmessage = (e) => {
      if (e.data) {
        setData(e.data);
      }
    }

    ws.onerror = (e) => {
      console.log("Error on Websocket connection with " + src + " -> " + e.message);
    }

    return() => {
      ws.close(); 
    }
  });
}
