import { useState } from 'react';
import useEntityMutation from '../../../hooks/useEntityMutation';
import { UserCreateInput } from '../types';
import { submitForm } from './api';
import useFormState from './useFormState';
import { ErrorMessage, Form, Input, InputContainer, Label, SubmitButton, ToggleButton } from './styled';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit, errors } = useFormState();

  const mutation = useEntityMutation(submitForm, 'user', '/');

  const onSubmit = (formData: UserCreateInput) => {
    mutation.mutate(formData);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Email: </Label>
        <Input type="email" {...register('email')} $hasError={!!errors.email} />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </InputContainer>
      <InputContainer>
        <Label>Password: </Label>
        <Input
          type={passwordVisible ? 'text' : 'password'}
          $hasError={!!errors.password}
          {...register('password')}
        />
        <ToggleButton
          type="button"
          $hasError={!!errors.password}
          onClick={() => setPasswordVisible(!passwordVisible)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </ToggleButton>
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </InputContainer>
      <SubmitButton type="submit">Submit</SubmitButton>
      {/* {serverError && <ErrorMessage>{serverError}</ErrorMessage>} */}
    </Form>
  );
};

export default Login;