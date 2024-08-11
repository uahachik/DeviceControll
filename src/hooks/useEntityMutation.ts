import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { ReplyError } from '../pages/user/types';

export default function useEntityMutation(
  form: any,
  setServerError: Dispatch<SetStateAction<ReplyError | null>> | null,
  setServerData: Dispatch<SetStateAction<any | null>> | null,
  path?: string,
  entity?: string,
) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation<unknown, ReplyError, unknown>(form, {
    onSuccess: (data) => {
      setServerError && setServerError(null);
      setServerData && setServerData(data);
      entity && queryClient.setQueryData(entity, data);
      path && navigate(path);
    },
    // catch the errors that threw in APIs
    onError: async (error: ReplyError) => {
      // TODO: decide where to handle cases when response isn't JSON. Either here or in api.ts
      // if (error.message && error.cause) {
      setServerError && setServerError(error);
      // } else {
      //   setServerError && setServerError({
      //     message: 'INTERNAL SERVER ERROR',
      //     cause: 'An unexpected internal server error occurred'
      //   });
      // }
    },
  });
  return mutation;
}