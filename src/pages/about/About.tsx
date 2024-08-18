import GoBackButton from '../../components/shared/buttons/GoBackButton';
import { StyledPageContainer, StyledSection, StyledTitle } from '../profile/styled';

const About = () => {
  return (
    <StyledPageContainer>
      <GoBackButton path="/" />
      <StyledSection>
        <StyledTitle>About</StyledTitle>
      </StyledSection>
    </StyledPageContainer>
  );
};

export default About;
