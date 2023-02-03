import { ReactComponent as Active } from './assets/active.svg';
import { ReactComponent as Add } from './assets/add.svg';
import { ReactComponent as Approved } from './assets/approved.svg';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';
import { ReactComponent as ArrowRight } from './assets/arrow-right.svg';
import { ReactComponent as Building } from './assets/building.svg';
import { ReactComponent as Close } from './assets/close.svg';
import { ReactComponent as Date } from './assets/date.svg';
import { ReactComponent as Edit } from './assets/edit.svg';
import { ReactComponent as Error } from './assets/error.svg';
import { ReactComponent as Euro } from './assets/euro.svg';
import { ReactComponent as File } from './assets/file.svg';
import { ReactComponent as FileAdd } from './assets/file-add.svg';
import { ReactComponent as FileCancel } from './assets/file-cancel.svg';
import { ReactComponent as FileDone } from './assets/file-done.svg';
import { ReactComponent as FileNew } from './assets/file-new.svg';
import { ReactComponent as Hamburger } from './assets/hamburger.svg';
import { ReactComponent as Heart } from './assets/heart.svg';
import { ReactComponent as Hospital } from './assets/hospital.svg';
import { ReactComponent as Import } from './assets/import.svg';
import { ReactComponent as Link } from './assets/link.svg';
import { ReactComponent as List } from './assets/list.svg';
import { ReactComponent as ListApproved } from './assets/list-approved.svg';
import { ReactComponent as Location } from './assets/location.svg';
import { ReactComponent as Lock } from './assets/lock.svg';
import { ReactComponent as Notification } from './assets/notification.svg';
import { ReactComponent as Package } from './assets/package.svg';
import { ReactComponent as Percent } from './assets/percent.svg';
import { ReactComponent as Rejected } from './assets/rejected.svg';
import { ReactComponent as Search } from './assets/search.svg';
import { ReactComponent as Send } from './assets/send.svg';
import { ReactComponent as Traffic } from './assets/traffic.svg';
import { ReactComponent as Trash } from './assets/trash.svg';
import { ReactComponent as Upload } from './assets/upload.svg';
import { ReactComponent as User } from './assets/user.svg';
import { ReactComponent as UserAdd } from './assets/user-add.svg';
import { ReactComponent as UserArrow } from './assets/user-arrow.svg';
import { ReactComponent as UserArrowOutlined } from './assets/user-arrow-outlined.svg';
import { ReactComponent as UserBadge } from './assets/user-badge.svg';
import { ReactComponent as UserBlock } from './assets/user-block.svg';
import { ReactComponent as UserCase } from './assets/user-case.svg';
import { ReactComponent as UserFile } from './assets/user-file.svg';
import { ReactComponent as Users } from './assets/users.svg';
import { ReactComponent as UsersOutlined } from './assets/users-outlined.svg';
import styles from './Icon.module.css';

type IconType =
  | 'user'
  | 'userAdd'
  | 'userArrow'
  | 'userArrowOutlined'
  | 'userBlock'
  | 'users'
  | 'usersOutlined'
  | 'userFile'
  | 'userCase'
  | 'userBadge'
  | 'arrowDown'
  | 'arrowRight'
  | 'close'
  | 'rejected'
  | 'hamburger'
  | 'approved'
  | 'list'
  | 'listApproved'
  | 'add'
  | 'active'
  | 'edit'
  | 'notification'
  | 'search'
  | 'heart'
  | 'lock'
  | 'traffic'
  | 'date'
  | 'send'
  | 'upload'
  | 'trash'
  | 'file'
  | 'fileDone'
  | 'fileNew'
  | 'fileCancel'
  | 'fileAdd'
  | 'building'
  | 'hospital'
  | 'location'
  | 'link'
  | 'package'
  | 'euro'
  | 'percent'
  | 'error'
  | 'import';

type IconColor = 'white' | 'default' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'light-gray';

type IconProps = {
  type?: IconType;
  iconColor?: IconColor;
  size?: number;
  alignItems?: string;
};

const iconByType = (type?: IconType) => {
  switch (type) {
    case 'user':
      return <User />;
    case 'userAdd':
      return <UserAdd />;
    case 'userArrow':
      return <UserArrow />;
    case 'userArrowOutlined':
      return <UserArrowOutlined />;
    case 'userBlock':
      return <UserBlock />;
    case 'users':
      return <Users />;
    case 'usersOutlined':
      return <UsersOutlined />;
    case 'userFile':
      return <UserFile />;
    case 'userCase':
      return <UserCase />;
    case 'userBadge':
      return <UserBadge />;
    case 'arrowDown':
      return <ArrowDown />;
    case 'arrowRight':
      return <ArrowRight />;
    case 'close':
      return <Close />;
    case 'rejected':
      return <Rejected />;
    case 'hamburger':
      return <Hamburger />;
    case 'approved':
      return <Approved />;
    case 'list':
      return <List />;
    case 'listApproved':
      return <ListApproved />;
    case 'add':
      return <Add />;
    case 'active':
      return <Active />;
    case 'edit':
      return <Edit />;
    case 'notification':
      return <Notification />;
    case 'search':
      return <Search />;
    case 'heart':
      return <Heart />;
    case 'lock':
      return <Lock />;
    case 'traffic':
      return <Traffic />;
    case 'date':
      return <Date />;
    case 'send':
      return <Send />;
    case 'upload':
      return <Upload />;
    case 'trash':
      return <Trash />;
    case 'file':
      return <File />;
    case 'fileDone':
      return <FileDone />;
    case 'fileNew':
      return <FileNew />;
    case 'fileCancel':
      return <FileCancel />;
    case 'fileAdd':
      return <FileAdd />;
    case 'building':
      return <Building />;
    case 'hospital':
      return <Hospital />;
    case 'location':
      return <Location />;
    case 'link':
      return <Link />;
    case 'package':
      return <Package />;
    case 'euro':
      return <Euro />;
    case 'percent':
      return <Percent />;
    case 'error':
      return <Error />;
    case 'import':
      return <Import />;
    default:
      return <Close />;
  }
};

const Icon = ({ iconColor = 'default', size = 24, type }: IconProps) => {
  return (
    <span className={`${styles.container} ${styles[iconColor!]}`} style={{ height: size, width: size }}>
      {iconByType(type)}
    </span>
  );
};

export default Icon;
