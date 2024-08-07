import { useQuery } from 'react-query';
import mockedReply from '../assets/fake-reply/user';

const environment = import.meta.env.MODE;

export default function useUserReply(entity: string) {
  if (environment === 'development' && !(navigator.userAgent).includes('Chrome/126.0.0.0')) {
    const simpleBrowserVSCodeReply = { data: mockedReply.data! };
    return simpleBrowserVSCodeReply;
  }
  const queryResult = useQuery(entity, () => null, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  if (queryResult.data) {
    return queryResult;
  }
  return { data: mockedReply.data! };
}