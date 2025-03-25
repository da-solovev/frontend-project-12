import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChannelsList from '../components/ChannelsList';

const MainPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const isAuthorized = localStorage.getItem('user');
    if (!isAuthorized) {
      navigation('/login', { replace: true });
    }
  });

  return (
    <div>
      <ChannelsList />
    </div>
  );
};

export default MainPage;
