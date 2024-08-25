import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';
import './index.css';

const queryClientInstance = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // this double-invokes functions like useEffect in development mode
  // <React.StrictMode>
  <QueryClientProvider client={queryClientInstance}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  // </React.StrictMode>,
);
