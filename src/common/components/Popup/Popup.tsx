import React, { useEffect } from 'react';

import styles from './Popup.module.css';

type PopupProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Popup = ({ visible, onClose, children }: PopupProps) => {
  const close = (e: KeyboardEvent) => e.code === 'Escape' && onClose();
  useEffect(() => {
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return visible ? (
    <>
      <div className={styles.container} onClick={onClose} />
      <div className={styles.paper}>{children}</div>
    </>
  ) : null;
};

export default Popup;
