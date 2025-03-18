import init from "./init";
import { createRoot } from "react-dom/client";

const runApp = () => {
  const root = createRoot(document.getElementById('root'));
  const app = init();
  root.render(app);
}

runApp();