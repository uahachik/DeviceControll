import { useQuery } from 'react-query';
import { handleResponse, onResponse } from './utilts';
import { FetchActions, FetchArgs } from './types';

export default function useQueriedData(
  queryKey: string[],
  args: FetchArgs,
  actions?: FetchActions,
) {
  const queryFn = async () => {
    const response = await fetch(args.path, {
      ...args,
      headers: {
        'Content-Type': 'application/json',
        ...args.headers
      },
      credentials: args.credentials ?? 'include',
    });
    return handleResponse(response);
  };

  return useQuery(queryKey, queryFn, {
    retry: false,
    ...onResponse(actions),
  });
}
