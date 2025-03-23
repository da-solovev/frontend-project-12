import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import MainPage from './pages/MainPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<AuthPage />} />
      <Route path="" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
