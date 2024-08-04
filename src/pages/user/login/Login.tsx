import { useState } from 'react';
import { useMutation } from 'react-query';
import { Button, ErrorMessage, Form, Input, InputContainer, Label, ToggleButton } from './styled';
import { submitForm } from './api';
import useFormState from './useFormState';

const Login = () => {
  // try {
  //   const response = await loginAPI({ username, password });
  //   return { success: true, data: response.data };
  // } catch (error) {
  //   { success: false, error: error.message; };
  // }


  const [serverError, setServerError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { register, handleSubmit, errors } = useFormState();

  const mutation = useMutation(submitForm, {
    onSuccess: (data) => {
      console.log('Form submitted successfully', data);
      setServerError(null); // Clear any previous server error
    },
    onError: (error: any) => {
      console.error('Form submission error', error);
      setServerError(error.message || 'An unexpected error occurred');
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  const getErrorMessage = (error: any) => {
    if (typeof error === 'string') {
      return error;
    }
    if (error && typeof error.message === 'string') {
      return error.message;
    }
    return 'An error occurred';
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Label>Email: </Label>
        <Input type="email" {...register('email')} $hasError={!!errors.email} />
        {errors.email && <ErrorMessage>{getErrorMessage(errors.email)}</ErrorMessage>}
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
        {errors.password && <ErrorMessage>{getErrorMessage(errors.password)}</ErrorMessage>}
      </InputContainer>
      <Button type="submit">Submit</Button>
      {/* {serverError && <ErrorMessage>{serverError}</ErrorMessage>} */}
    </Form>
  );
};

export default Login;