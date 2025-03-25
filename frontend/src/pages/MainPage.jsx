import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelsList from '../components/channels/ChannelsList';
import MessagesList from '../components/messages/MessagesList';

const MainPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const isAuthorized = localStorage.getItem('user');
    if (!isAuthorized) {
      navigation('/login', { replace: true });
    }
  }, []);

  return (
    <div>
      <ChannelsList />
      <MessagesList />
    </div>
  );
};

export default MainPage;
