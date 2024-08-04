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

export type LoginType = {
  email: string;
  password: string;
};
