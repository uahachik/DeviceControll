import { UserCreateInput } from '../types';

export const submitForm = async (data: UserCreateInput): Promise<UserCreateInput> => {
  const response = await fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw errorData;
  }

  return response.json();
};