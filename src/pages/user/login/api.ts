import { UserCreateInput } from '../types';

export const submitForm = async (data: UserCreateInput): Promise<UserCreateInput> => {
  const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  // TODO: decide where to handle cases when response isn't JSON. Either here or in useEntityMutation
  // generic error handle approach is commented out in useEntityMutation
  // throw an error off to catch and handle them in useEntityMutation
  if (!response.ok) {
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const errorData = await response.json();
      throw errorData;
    } else {
      // handle cases when response isn't JSON
      throw {
        message: 'INTERNAL SERVER ERROR',
        cause: 'An unexpected internal server error occurred'
      };
    }
  }


  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json();
};