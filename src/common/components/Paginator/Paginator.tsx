import Button from '../Button/Button';
import styles from './Paginator.module.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type PaginationProps = {
  skip: number;
  total: number;
  pageSize?: number;
  onPageChange: (skip: number) => void;
};
const DISPLAYED_COLUMNS = 7;

const Paginator = ({ skip, total, pageSize = 10, onPageChange }: PaginationProps) => {
  const { t } = useTranslation();
  const totalPages = Math.ceil(total / pageSize);
  const currentPage = totalPages - Math.ceil((total - skip) / pageSize);
  const pages = [0, totalPages - 1, currentPage - 1, currentPage, currentPage + 1];
  const dots = [currentPage - 2, currentPage + 2];

  const goNext = () => currentPage !== totalPages - 1 && onPageChange(skip + pageSize);
  const goPrevious = () => currentPage && onPageChange(skip - pageSize);

  useEffect(() => onPageChange(0), [pageSize]);

  return (
    <ul className={styles.container}>
      <div className={styles.leftBtn}>
        <Button type="border" disabled={!currentPage} onClick={goPrevious}>
          {t('Previous')}
        </Button>
      </div>
      {Array.from({ length: Math.ceil(total / pageSize) }, (_, i) =>
        totalPages <= DISPLAYED_COLUMNS ||
        (currentPage < DISPLAYED_COLUMNS - 3 && i < DISPLAYED_COLUMNS - 2) ||
        (currentPage > totalPages - (DISPLAYED_COLUMNS - 2) && i > totalPages - (DISPLAYED_COLUMNS - 1)) ||
        pages.includes(i) ? (
          <li key={i} onClick={() => onPageChange(i * pageSize)} className={i === currentPage ? styles.active : ''}>
            {i + 1}
          </li>
        ) : dots.includes(i) ||
          (currentPage < DISPLAYED_COLUMNS - 2 && i === DISPLAYED_COLUMNS - 2) ||
          (currentPage > totalPages - (DISPLAYED_COLUMNS - 1) && i === totalPages - (DISPLAYED_COLUMNS - 1)) ? (
          <li key={i} className={styles.dots}>
            ...
          </li>
        ) : null,
      )}
      <div className={styles.rightBtn}>
        <Button type="border" disabled={currentPage === totalPages - 1} onClick={goNext}>
          {t('Next')}
        </Button>
      </div>
    </ul>
  );
};

export default Paginator;
