import React from 'react';

export const useActiveMenuItem = (
  headerRef: React.RefObject<HTMLElement | null>,
  scrollY: number
) => {
  const [activeMenuItem, setActiveMenuItem] = React.useState(0);

  const sections = React.useRef<NodeListOf<HTMLElement> | null>(null);

  React.useEffect(() => {
    sections.current = document.querySelectorAll('[data-section-id]');
  }, []);

  React.useEffect(() => {
    changeActiveNavItemOnScroll();
  }, [scrollY]);

  const changeActiveNavItemOnScroll = () => {
    if (!sections.current || !headerRef.current) {
      return;
    }

    const headerHeight = headerRef.current.offsetHeight;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = +section.dataset.sectionId!;

      if (
        scrollY >= sectionOffsetTop - headerHeight &&
        scrollY < sectionOffsetTop + sectionHeight - 200
      ) {
        setActiveMenuItem(sectionId);
      }
    });
  };

  return activeMenuItem;
};
