import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { ReplyError } from '../components/shared/errors/types';
import { FetchActions } from './types';

function handleContentType(response: Response) {
  const contentType = response.headers.get('content-type');
  if (contentType!.includes('application/json')) {
    return response.json();
  } else if (contentType!.includes('text/html')) {
    console.error('Type of content-type is: "text/html"');
    return response.text();
  } else if (contentType!.includes('image/')) {
    console.error('Type of content-type is: "blob"');
    return response.blob();
  } else {
    console.error('Type of content-type is:', contentType);
  }
}

function isShapedServerError(obj: ReplyError): obj is ReplyError {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.message === 'string' &&
    typeof obj.cause === 'string'
  );
}

export async function handleResponse(response: Response) {
  if (!response.ok) {
    const errorData = await handleContentType(response);
    if (!isShapedServerError(errorData)) {
      throw {
        message: 'INTERNAL SERVER ERROR',
        cause: 'An unexpected internal server error occurred'
      };
    }
    throw response.status === 401 ? { ...errorData, notAuthStatus: true } : errorData;
  }

  return handleContentType(response);
}

export function onResponse(actions: FetchActions) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const store = actions?.store ? actions.store : [];
  return {
    onError: (error: ReplyError) => {
      queryClient.setQueryData(['fetchError'], error);
      error.notAuthStatus ? queryClient.invalidateQueries(['user']) : null;
      error.notAuthStatus && store.forEach((entity: string) => queryClient.invalidateQueries([entity]));
    },
    onSuccess: (response: any) => {
      queryClient.invalidateQueries('fetchError');
      store.forEach((entity: string) => queryClient.setQueryData(entity, response));
      actions && actions?.redirect && navigate(actions.redirect);
    },
  };
}