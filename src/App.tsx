import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import AppRoutes from './AppRoutes';
import { ReplyError } from './components/shared/errors/types';
import { mutationFn } from './api/useEntityMutation';
import './App.css';

function App() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn,
    onError: (error: ReplyError) => {
      queryClient.setQueryData('fetchError', error);
    },
    onSuccess: (response) => {
      queryClient.setQueryData('user', response);
    },
  });

  useEffect(() => {
    mutation.mutate({
      path: '/api/user/me',
      method: 'POST',
    });
  }, []);

  return (
    <AppRoutes />
  );
};

export default App;
