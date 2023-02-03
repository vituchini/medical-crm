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

export enum IconTypes {
  user = 'user',
  userAdd = 'userAdd',
  userArrow = 'userArrow',
  userArrowOutlined = 'userArrowOutlined',
  userBlock = 'userBlock',
  users = 'users',
  usersOutlined = 'usersOutlined',
  userCase = 'userCase',
  userFile = 'userFile',
  userBadge = 'userBadge',
  arrowDown = 'arrowDown',
  arrowRight = 'arrowRight',
  close = 'close',
  rejected = 'rejected',
  hamburger = 'hamburger',
  approved = 'approved',
  list = 'list',
  listApproved = 'listApproved',
  add = 'add',
  active = 'active',
  edit = 'edit',
  notification = 'notification',
  search = 'search',
  heart = 'heart',
  lock = 'lock',
  traffic = 'traffic',
  date = 'date',
  send = 'send',
  upload = 'upload',
  trash = 'trash',
  file = 'file',
  fileDone = 'fileDone',
  fileNew = 'fileNew',
  fileCancel = 'fileCancel',
  fileAdd = 'fileAdd',
  building = 'building',
  hospital = 'hospital',
  location = 'location',
  link = 'link',
  package = 'package',
  euro = 'euro',
  percent = 'percent',
  error = 'error',
  import = 'import',
}

type IconColor = 'white' | 'default' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'light-gray';

type IconProps = {
  type?: IconTypes;
  iconColor?: IconColor;
  size?: number;
  alignItems?: string;
};

const iconByType = (type?: IconTypes) => {
  switch (type) {
    case IconTypes.user:
      return <User />;
    case IconTypes.userAdd:
      return <UserAdd />;
    case IconTypes.userArrow:
      return <UserArrow />;
    case IconTypes.userArrowOutlined:
      return <UserArrowOutlined />;
    case IconTypes.userBlock:
      return <UserBlock />;
    case IconTypes.users:
      return <Users />;
    case IconTypes.usersOutlined:
      return <UsersOutlined />;
    case IconTypes.userFile:
      return <UserFile />;
    case IconTypes.userCase:
      return <UserCase />;
    case IconTypes.userBadge:
      return <UserBadge />;
    case IconTypes.arrowDown:
      return <ArrowDown />;
    case IconTypes.arrowRight:
      return <ArrowRight />;
    case IconTypes.close:
      return <Close />;
    case IconTypes.rejected:
      return <Rejected />;
    case IconTypes.hamburger:
      return <Hamburger />;
    case IconTypes.approved:
      return <Approved />;
    case IconTypes.list:
      return <List />;
    case IconTypes.listApproved:
      return <ListApproved />;
    case IconTypes.add:
      return <Add />;
    case IconTypes.active:
      return <Active />;
    case IconTypes.edit:
      return <Edit />;
    case IconTypes.notification:
      return <Notification />;
    case IconTypes.search:
      return <Search />;
    case IconTypes.heart:
      return <Heart />;
    case IconTypes.lock:
      return <Lock />;
    case IconTypes.traffic:
      return <Traffic />;
    case IconTypes.date:
      return <Date />;
    case IconTypes.send:
      return <Send />;
    case IconTypes.upload:
      return <Upload />;
    case IconTypes.trash:
      return <Trash />;
    case IconTypes.file:
      return <File />;
    case IconTypes.fileDone:
      return <FileDone />;
    case IconTypes.fileNew:
      return <FileNew />;
    case IconTypes.fileCancel:
      return <FileCancel />;
    case IconTypes.fileAdd:
      return <FileAdd />;
    case IconTypes.building:
      return <Building />;
    case IconTypes.hospital:
      return <Hospital />;
    case IconTypes.location:
      return <Location />;
    case IconTypes.link:
      return <Link />;
    case IconTypes.package:
      return <Package />;
    case IconTypes.euro:
      return <Euro />;
    case IconTypes.percent:
      return <Percent />;
    case IconTypes.error:
      return <Error />;
    case IconTypes.import:
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
