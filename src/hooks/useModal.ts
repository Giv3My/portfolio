import React from 'react';
import { useClickOutside } from '@reactuses/core';

export const useModal = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const openModal = () => {
    setIsVisible(true);

    const scrollWidth = window.innerWidth - document.body.offsetWidth;
    document.body.style.cssText = `overflow: hidden; padding-right: ${scrollWidth}px;`;
  };

  const closeModal = () => {
    setIsVisible(false);
    document.body.style.cssText = '';
  };

  useClickOutside(modalRef, closeModal);

  return { modalRef, isVisible, openModal, closeModal } as const;
};
