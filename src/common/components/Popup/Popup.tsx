import './Popup.css';

import React, { useEffect, useState } from 'react';

type PopupProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ visible, setVisible, children }) => {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setVisible(false);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return visible ? (
    <div
      className="container center"
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className="paper" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
