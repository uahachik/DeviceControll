import { useQuery } from 'react-query';

const environment = import.meta.env.MODE;

export default function usePrefetchedData<T>(entity: string, mockedRepy: T) {
  const queryResult: any = useQuery(entity, async () => null, {
    cacheTime: Infinity,
    staleTime: Infinity,
  });
  if (
    environment === 'development' &&
    !(navigator.userAgent.includes('Chrome/127.0.0.0')) &&
    queryResult && !queryResult.data
  ) {
    return mockedRepy;
  }
  if (queryResult.isLoading || !queryResult.data) {
    const emptyReplyData: {} = Object.create(null);
    return { data: { [entity]: emptyReplyData } };
  }
  if (queryResult && queryResult.data) {
    return queryResult;
  }
}