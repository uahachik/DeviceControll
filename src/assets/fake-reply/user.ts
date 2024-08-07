import { ProfileReply } from '../../pages/user/types';

const mockedReply: ProfileReply = {
  data: {
    user: {
      firstName: 'Stive',
      lastName: 'Morgan',
      email: 'email11@mail.com',
      password: '',
      profile: 'test profile text',
      lastActive: new Date().toISOString(),
    }
  }
};

export default mockedReply;