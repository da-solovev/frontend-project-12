import { createRoot } from 'react-dom/client';
import init from './init';

const runApp = () => {
  const root = createRoot(document.getElementById('root'));
  const app = init();
  root.render(app);
};

runApp();
