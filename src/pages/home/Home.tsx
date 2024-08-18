import ProfileCard from '../../components/cards/profile/ProfileCard';
import useReplyData from '../../hooks/useReplyData';
import { StyledContainer, StyledAboutCard, StyledCard, StyledProfileCard, StyledHeader } from './styled';

const Home = () => {
  const { user } = useReplyData('user', {}).data;
  return (
    <>
      <StyledHeader>
        <StyledAboutCard to="/about">
          About kjdfhksg osifus oidf osdsod8s98 dgsdysidu fysiudf
        </StyledAboutCard>
        <StyledProfileCard to={user.id ? "/profile" : "/login"}>
          <ProfileCard />
        </StyledProfileCard>
      </StyledHeader>
      <StyledContainer>
        <StyledCard to={user.id ? "/device" : "/login"}>Device</StyledCard>
        <StyledCard to="/login">Login</StyledCard>
      </StyledContainer>
    </>
  );
};

export default Home;