import { useState } from 'react';
import useEntityMutation from '../../../hooks/useEntityMutation';
import ErrorMessage from '../../../components/shared/errors/ErrorMessage';
import { ReplyError, UserCreateInput } from '../types';
import { submitForm } from './api';
import useFormState from './useFormState';
import {
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledSubmitButton,
  StyledToggleButton,
} from './styled';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [serverError, setServerError] = useState<ReplyError | null>(null);

  const { register, handleSubmit, errors } = useFormState();

  const mutation = useEntityMutation(submitForm, setServerError, null, '/', 'user');

  const onSubmit = (formData: UserCreateInput) => {
    mutation.mutate(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {serverError && <ErrorMessage $serverError={serverError} />}
      <StyledInputContainer>
        <StyledLabel>Email: </StyledLabel>
        <StyledInput type="email" {...register('email')} $hasError={!!errors.email} />
        {errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel>Password: </StyledLabel>
        <StyledInput
          type={passwordVisible ? 'text' : 'password'}
          $hasError={!!errors.password}
          {...register('password')}
        />
        <StyledToggleButton
          type="button"
          $hasError={!!errors.password}
          onClick={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </StyledToggleButton>
        {errors.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>}
      </StyledInputContainer>
      <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
    </StyledForm>
  );
};

export default Login;