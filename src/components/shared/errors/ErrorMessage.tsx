import { ReplyError } from './types';
import { StyledErrorMessage } from './styled';

const ErrorMessage = ({ $serverError }: { $serverError: ReplyError; }) => {
  const { message, cause } = $serverError;
  return (
    <StyledErrorMessage >
      <span>{message}</span>
      <span>{cause}</span>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
