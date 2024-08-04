import { useForm } from 'react-hook-form';
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

const useFormState = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: resolver,
  });
  return {
    register,
    handleSubmit,
    errors,
  };
};

export default useFormState;