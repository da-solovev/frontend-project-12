import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigation = useNavigate();

  useEffect(() => {
    const isAuthorized = localStorage.getItem('user');
    if (!isAuthorized) {
      navigation('/login', { replace: true });
    }
  });

  return (
    <div>main</div>
  );
};

export default MainPage;
