import ProfileCard from '../../components/cards/profile/ProfileCard';
import { StyledContainer, StyledAboutCard, StyledCard, StyledProfileCard, StyledHeader } from './styled';

const Home = () => {
  return (
    <>
      <StyledHeader>
        <StyledAboutCard to="/about">
          About kjdfhksg osifus oidf osdsod8s98 dgsdysidu fysiudf
        </StyledAboutCard>
        <StyledProfileCard to={"/profile"}>
          <ProfileCard />
        </StyledProfileCard>
      </StyledHeader>
      <StyledContainer>
        <StyledCard to={"/device"}>Device</StyledCard>
        <StyledCard to="/login">Login</StyledCard>
      </StyledContainer>
    </>
  );
};

export default Home;