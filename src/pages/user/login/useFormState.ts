import { FieldError, FieldErrorsImpl, FieldValues, useForm } from 'react-hook-form';
import Ajv from 'ajv';
import { ajvResolver } from '@hookform/resolvers/ajv';
import ajvErrors from 'ajv-errors';
import { fullFormats } from 'ajv-formats/dist/formats';
import loginSchema from './validationSchema';

const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);

// https://github.com/react-hook-form/resolvers/issues/432
const resolver = ajvResolver(loginSchema, {
  formats: fullFormats,
});

const getErrorMessage = <TFieldValues extends FieldValues>(
  errors: Record<string, FieldError | FieldErrorsImpl<TFieldValues> | undefined>
): Record<string, string> => {
  const errorMessages: Record<string, string> = {};
  for (const [key, value] of Object.entries(errors)) {
    if (value && typeof value.message === 'string') {
      errorMessages[key] = value.message;
    } else {
      errorMessages[key] = 'An error occurred';
    }
  }
  return errorMessages;
};

const useFormState = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<any>({ resolver });
  const errorMessages = getErrorMessage(errors);
  return {
    register,
    handleSubmit,
    errors: errorMessages,
  };
};

export default useFormState;