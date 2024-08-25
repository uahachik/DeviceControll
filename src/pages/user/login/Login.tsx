import { useState } from 'react';
import { useEntityMutation, mutationFn } from '../../../api/useEntityMutation';
import { UserCreateInput } from '../types';
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
  const { register, handleSubmit, errors } = useFormState();
  const mutation = useEntityMutation(mutationFn, { store: ['user'], redirect: '/' });

  const onSubmit = (formData: UserCreateInput) => {
    mutation.mutate({
      path: '/api/user/login',
      method: 'POST',
      body: formData,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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