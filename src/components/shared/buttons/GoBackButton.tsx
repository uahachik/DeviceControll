import { useNavigate } from 'react-router-dom';
import { StyledButton, StyledButtonContainer } from './styled';

const GoBackButton = ({ path }: { path: string; }) => {
  const navigate = useNavigate();
  return (
    <StyledButtonContainer>
      <StyledButton onClick={() => navigate(path)}>
        {'<<<'}
      </StyledButton>
    </StyledButtonContainer>
  );
};

export default GoBackButton;
