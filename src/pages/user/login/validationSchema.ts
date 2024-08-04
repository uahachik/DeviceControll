import { JSONSchemaType } from 'ajv';
import { LoginType } from '../types';

const loginSchema: JSONSchemaType<LoginType> = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      errorMessage: {
        format: 'Must be a valid email address',
      },
    },
    password: {
      type: 'string',
      minLength: 8,
      errorMessage: { minLength: 'Password field is required' },
    },
  },
  required: ['email', 'password'],
  additionalProperties: false,
};

export default loginSchema;