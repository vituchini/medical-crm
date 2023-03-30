import styles from './Breadcrumbs.module.css';

type BreadcrumbType = {
  title: string;
  path?: string;
};

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbType[];
  noTitle?: boolean;
};
export const Breadcrumbs = ({ breadcrumbs, noTitle }: BreadcrumbsProps) => (
  <ul className={styles.container}>
    {breadcrumbs.map((breadcrumb, i) => (
      <li className={`${styles.list} ${noTitle ? '' : styles.title}`} key={i}>
        <a href={breadcrumb.path || '#'}>{breadcrumb.title}</a>
      </li>
    ))}
  </ul>
);

export default Breadcrumbs;
