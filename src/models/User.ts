import { Roles } from '../common/constants/roles';

export default class User {
  _id!: string;
  email!: string;
  username!: string;
  firstname?: string;
  lastname?: string;
  prefix?: string;
  gender!: number;
  phoneno!: string;
  role!: Roles;
  DOB?: string;
  care_approval?: number;
  initials?: string;
  is_active?: boolean;
  nameusage?: number;
  notification?: boolean;
  transaction_count?: number;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
