import { ProfileReply } from '../../pages/user/types';

const mockedUserReply: ProfileReply = {
  data: {
    user: {
      firstName: 'Stive',
      lastName: 'Morgan',
      email: 'email11@mail.com',
      password: '',
      profile: 'test profile text',
      lastActive: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }
  }
};

export default mockedUserReply;