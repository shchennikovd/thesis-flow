import { ID, ISODateString } from "../../../shared/types/common";
import { UserRole } from "./roles";

export interface IUser {
  id: ID;
  name: string;
  email: string;
  role: UserRole;
  createdAt: ISODateString;
}