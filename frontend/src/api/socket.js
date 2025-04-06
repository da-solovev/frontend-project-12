import { io } from 'socket.io-client';
import { channelsApi } from './channelsApi';
import { messagesApi } from './messagesApi';

const connectSocket = (store) => {
  const socket = io('http://localhost:5001/');

  socket.on('newMessage', (payload) => {
    store.dispatch(messagesApi.util.updateQueryData('getMessages', undefined, (draft) => {
      draft.push(payload);
    }));
  });

  socket.on('newChannel', (payload) => {
    store.dispatch(channelsApi.util.updateQueryData('getChannels', undefined, (draft) => {
      draft.push(payload);
    }));
  });

  window.addEventListener('online', () => {
    if (socket.disconnected) {
      socket.connect();
    }
  });
};

export default connectSocket;
