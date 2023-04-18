import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';
import './style.css';

function ChatRoomCall({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  // O hook useEffect é chamado toda vez que o valor de roomId ou serverUrl é alterado
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId); // realiza a conexão com o servidor
    connection.connect(); 
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);

  // sintaxe do useEffect useEffect(() => {}, [variavel1, variavel2, variavel3])

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

export default function ChatRoom() {
  // O ID da sala é um estado que pode ser alterado
  const [roomId, setRoomId] = useState('general');
  // O estado que controla a exibição do chat
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>

      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoomCall roomId={roomId} />}
    </>
  );
}