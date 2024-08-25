import { useMutation, } from 'react-query';
import { ReplyError } from '../components/shared/errors/types';
import { handleResponse, onResponse } from './utilts';
import { FetchArgs, FetchActions } from './types';

export const mutationFn = async (args: FetchArgs): Promise<unknown> => {
  const response = await fetch(args.path, {
    ...args,
    method: args.method,
    headers: {
      'Content-Type': 'application/json',
      ...args.headers
    },
    body: JSON.stringify(args.body || null),
    credentials: args.credentials ?? 'include',
  });
  return handleResponse(response);
};

export function useEntityMutation(
  mutationFn: (args: FetchArgs) => Promise<unknown>,
  actions?: FetchActions,
) {
  return useMutation<any, ReplyError, any>(mutationFn, {
    retry: 0,
    ...onResponse(actions),
  });
}