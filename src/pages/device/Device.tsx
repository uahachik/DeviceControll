import useQueriedData from '../../api/useQueriedData';
import GoBackButton from '../../components/shared/buttons/GoBackButton';
import HumanReadableDate from '../../components/shared/HumanReadableDate';
import { StyledPageContainer, StyledSection, StyledTitle } from '../profile/styled';
import { IDevice } from './types';

const Device = () => {
  const { data, isLoading, isFetching } = useQueriedData(['device'], { path: '/api/devices' }, { store: ['device'] });
  const device: IDevice[] | null = !isLoading && data && data || null;
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  return (
    <StyledPageContainer>
      <GoBackButton path="/" />
      <StyledSection>
        <StyledTitle>Devices</StyledTitle>
        {device && device!.map(({ id, dsn, type, capacity, content, battery, firstUserId, commissionedAt, lastActive }) => {
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
