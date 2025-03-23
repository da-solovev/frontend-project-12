import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<AuthPage />} />
      {/* путь для корня / , продумать переадресацию */}
      <Route path="" element={<AuthPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
