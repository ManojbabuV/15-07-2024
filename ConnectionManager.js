import React from 'react';
import { socket } from '../socket';

export function ConnectionManager({ role }) {
  function connect() {
    socket.connect();
    if (role === 'manager') {
      socket.emit('managerConnect');
    } else if (role === 'admin') {
      socket.emit('adminConnect');
    }
  }

  function disconnect() {
    socket.disconnect();
    if (role === 'manager') {
      socket.emit('managerDisconnect');
    } else if (role === 'admin') {
      socket.emit('adminDisconnect');
    }
  }

  return (
    <div>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}
