export interface IDevece {
  id?: number;
  dsn: string;
  type: string;
  capacity: string;
  content?: string | null;
  battery?: number | null;
  firstUserId: number;
  commissionedAt?: Date | string;
  lastActive?: Date | string;
}