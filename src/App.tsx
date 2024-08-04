import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Profile from './pages/user/profile/Profile';
import LoginForm from './pages/user/login/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Profile /> */}
      <LoginForm />
    </QueryClientProvider>
  );
};

export default App;
