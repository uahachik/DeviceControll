import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { ReplyErrorType, UserCreateInput } from '../pages/user/types';

export default function useEntityMutation(form: any, entity: string, path: string) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<UserCreateInput, ReplyErrorType, UserCreateInput>(form, {
    onSuccess: (data) => {
      queryClient.setQueryData(entity, data);
      // setServerError(null);
      navigate(path);
    },
    onError: async (error: ReplyErrorType) => {
      console.error('Form submitted errors', error);
      // setServerError(error || { message: 'INTERNAL SERVER ERROR', cause: 'An unexpected internal server error occurred' });
    },
  });
  return mutation;
}