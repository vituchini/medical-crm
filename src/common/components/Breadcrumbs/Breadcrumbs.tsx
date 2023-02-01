import styles from './Breadcrumbs.module.css';

type BreadcrumbType = {
  title: string;
  path?: string;
};

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbType[];
};
export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <ul className={styles.container}>
    {breadcrumbs.map((breadcrumb, i) => (
      <li className={styles.list} key={i}>
        <a href={breadcrumb.path || '#'}>{breadcrumb.title}</a>
      </li>
    ))}
  </ul>
);

export default Breadcrumbs;
