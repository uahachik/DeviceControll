import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // this double-invokes functions like useEffect in development mode
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
);
