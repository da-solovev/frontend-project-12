import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './components/AuthPage.jsx';
import NotFoundPage from './components/NotFoundPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<AuthPage />}></Route>
        {/* путь для корня / , продумать переадресацию*/}
        <Route path='' element={<AuthPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
