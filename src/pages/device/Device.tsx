import { useEffect, useState } from 'react';
import { ReplyError } from '../user/types';
import { IDevece } from './types';
import GoBackButton from '../../components/shared/buttons/GoBackButton';
import { StyledPageContainer, StyledSection, StyledTitle } from '../profile/styled';
import ErrorMessage from '../../components/shared/errors/ErrorMessage';
import HumanReadableDate from '../../components/shared/HumanReadableDate';

function handleResponse(response: Response) {
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
function isShapedServerError(obj: any): obj is ReplyError {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof obj.message === 'string' &&
    typeof obj.cause === 'string'
  );
}

const Device = () => {
  const [device, setDevice] = useState<IDevece[] | null>(null);
  const [serverError, setServerError] = useState<ReplyError | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/devices', {
          credentials: 'include',
        });

        if (!response.ok) {
          if (response.status === 500) {
            throw {
              message: 'INTERNAL SERVER ERROR',
              cause: 'An unexpected internal server error occurred'
            };
          }
          const errorData = await handleResponse(response);
          if (isShapedServerError(errorData)) {
            throw errorData;
          } else {
            // handle cases when response isn't in the format of ReplyError
            throw {
              message: 'INTERNAL SERVER ERROR',
              cause: 'An unexpected internal server error occurred'
            };
          }
        }

        setServerError(null);
        const result = await handleResponse(response);
        setDevice(result);
      } catch (error) {
        setServerError(error as ReplyError);
      }
    })();
  }, []);
  return (
    <StyledPageContainer>
      {serverError && <ErrorMessage $serverError={serverError} />}
      <GoBackButton path="/" />
      <StyledSection>
        <StyledTitle>Devices</StyledTitle>
        {device?.map(({ id, dsn, type, capacity, content, battery, firstUserId, commissionedAt, lastActive }) => {
          return (
            <div key={id}>
              {dsn ? <span>DSN: {dsn}; </span> : null}
              {type ? <span>Type: {type}; </span> : null}
              {capacity ? <span>Capacity: {capacity}; </span> : null}
              {content ? <span>Content: {content}; </span> : null}
              {battery ? <span>Battery: {battery}; </span> : null}
              {firstUserId ? <span>First user ID: {firstUserId}; </span> : null}
              {commissionedAt ? (
                <span>
                  Commissioned: <HumanReadableDate timestamp={commissionedAt} />;{' '}
                </span>
              ) : null}
              {lastActive ? (
                <span>
                  Last active: <HumanReadableDate timestamp={lastActive} />
                </span>
              ) : null}
            </div>
          );
        })}
      </StyledSection>
    </StyledPageContainer>
  );
};

export default Device;
