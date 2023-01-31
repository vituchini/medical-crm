import './Breadcrumbs.css';
type BreadcrumbType = {
  title: string;
  link?: string;
};

type BreadcrumbsProps = {
  breadcrumbs: BreadcrumbType[];
};
export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => (
  <>
    <ul className="container title-container">
      {breadcrumbs.map(
        (breadcrumb, i) =>
          i !== breadcrumbs.length - 1 && (
            <li className="list" key={i}>
              <a href={breadcrumb.link || '#'}>{breadcrumb.title}</a>
            </li>
          ),
      )}
    </ul>
    <ul className="title-container">
      <li className="list list-title">
        <a href={breadcrumbs[breadcrumbs.length - 1].link || '#'}>{breadcrumbs[breadcrumbs.length - 1].title}</a>
      </li>
    </ul>
  </>
);

export default Breadcrumbs;
