import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import AppRoutes from './AppRoutes';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
