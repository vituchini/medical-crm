import './Card.css';

import { colors } from '../../constants/theme';

type CardProps = {
  title?: string;
  children?: React.ReactNode[];
  count?: number;
  type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
};

const Card: React.FC<CardProps> = ({ title, count, type = 'primary', children }) => {
  return (
    <div className="container">
      {title && (
        <>
          <div className="header">
            <p className="title">{title}</p>
            {count && (
              <p className="count" style={{ background: colors[type] }}>
                {count}
              </p>
            )}
          </div>
          <div className="divider" />
        </>
      )}
      {children?.map((child, index) => (
        <>
          <div className="child" key={index}>
            {child}
          </div>
          {index !== children.length - 1 && <div className="divider divider-margin"></div>}
        </>
      ))}
    </div>
  );
};

export default Card;
