import React from 'react';

export const useMenuAnimation = (activeMenuItem: number, styles: CSSModuleClasses) => {
  const [offset, setOffset] = React.useState(0);
  const [backgroundWidth, setBackgroundWidth] = React.useState(0);

  const menuItems = React.useRef<HTMLElement[] | null>(null);
  const menu = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    menuItems.current = [
      ...document.querySelectorAll(`.${styles['menu-item']}`),
    ] as HTMLElement[];

    menu.current = document.querySelector(`.${styles.menu}`);
  }, []);

  React.useEffect(() => {
    setBackgroundOnActiveTab();
  }, [activeMenuItem]);

  const getElementRect = (element: HTMLElement | null) => {
    return element?.getBoundingClientRect();
  };

  const changeBackgroundWidth = (width: number) => {
    setBackgroundWidth(width);
  };

  const moveBackground = (index: number) => () => {
    const menuRect = getElementRect(menu.current);
    const menuItemRect = getElementRect(menuItems.current?.[index]!);

    if (menuRect && menuItemRect) {
      changeBackgroundWidth(menuItemRect.width);
      setOffset(menuItemRect.left - menuRect.left);
    }
  };

  const setBackgroundOnActiveTab = moveBackground(activeMenuItem);

  return {
    offset,
    backgroundWidth,
    moveBackground,
    setBackgroundOnActiveTab,
  } as const;
};
