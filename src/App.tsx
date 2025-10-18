import {Route, Routes, Navigate} from 'react-router-dom';
import {About, Works, WorkDetails, Competence} from './components/pages';
import {Header, Footer, ScrollToTop} from './components/common';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <ScrollToTop />
      <Header />
      <main>
      <Routes>
        <Route path="*" element={<Navigate to="/works" />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/:id" element={<WorkDetails />} />
        <Route path="/competence/:id" element={<Competence />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
