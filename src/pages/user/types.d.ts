export type ReplyError = {
  message: string;
  cause: string;
};

export interface UserCreateInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profile?: string | null | undefined;
  createdAt?: string | Date | undefined;
  lastActive?: string | Date | null | undefined;
  // devices?: Prisma.UsersToDevicesCreateNestedManyWithoutUserInput | undefined;
  // Device?: Prisma.DeviceCreateNestedManyWithoutFirstUserInput | undefined;
};

// export interface IUser {
//   Params: {
//     userId: string;
//   };
//   Body: UserCreateInput;
// }

export interface ProfileReply {
  data: {
    user: UserCreateInput;
  };
}
