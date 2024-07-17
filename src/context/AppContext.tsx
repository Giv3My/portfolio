import React from 'react';

import { useModal } from '@/hooks';
import type { Project } from '../components/Projects/types';

interface AppContext {
  isAppLoading: boolean;
  isAppVisible: boolean;
  isModalVisible: boolean;
  modalRef: React.MutableRefObject<HTMLDivElement | null>;
  openModal: () => void;
  closeModal: () => void;
  selectedProject: Project | null;
  handleSelectProject: (project: Project) => void;
}

export const AppContext = React.createContext({
  isAppLoading: false,
  isAppVisible: false,
  isModalVisible: false,
  selectedProject: null,
} as AppContext);

export const AppProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAppLoading, setIsAppLoading] = React.useState(true);
  const [isAppVisible, setIsAppVisible] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const { modalRef, isVisible: isModalVisible, openModal, closeModal } = useModal();

  React.useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);
  }, []);

  React.useEffect(() => {
    if (!isAppLoading) {
      setTimeout(() => {
        setIsAppVisible(true);
      }, 500);
    }
  }, [isAppLoading]);

  React.useEffect(() => {
    if (!isModalVisible) {
      setSelectedProject(null);
    }
  }, [isModalVisible]);

  const handleSelectProject = (project: Project) => {
    openModal();
    setSelectedProject(project);
  };

  return (
    <AppContext.Provider
      value={{
        isAppLoading,
        isAppVisible,
        isModalVisible,
        modalRef,
        openModal,
        closeModal,
        selectedProject,
        handleSelectProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
