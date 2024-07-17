import { motion } from 'framer-motion';

import { useAppContext } from './context';
import {
  LoadingIntro,
  Header,
  Hero,
  Skills,
  Projects,
  Modal,
  Footer,
} from '@/components';
import './styles/App.scss';

function App() {
  const { isAppLoading, isAppVisible, modalRef, isModalVisible } = useAppContext();

  return (
    <>
      {!isAppVisible ? (
        <LoadingIntro loading={isAppLoading} />
      ) : (
        <>
          <motion.div
            className="app"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1,
            }}
          >
            <Header />
            <main>
              <Hero />
              <Skills />
              <Projects />
            </main>
            <Footer />
          </motion.div>

          <Modal ref={modalRef} isVisible={isModalVisible} />
        </>
      )}
    </>
  );
}

export default App;
