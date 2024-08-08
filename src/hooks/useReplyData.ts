import { useQuery } from 'react-query';

const environment = import.meta.env.MODE;

export default function useReplyData<T>(entity: string, replyData: T): T {
  if (environment === 'development' && !(navigator.userAgent).includes('Chrome')) {
    return replyData;
  }
  const queryResult = useQuery(entity, () => null, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  if (queryResult.data) {
    return queryResult;
  }
  return replyData;
}