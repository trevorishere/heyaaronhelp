import { Route, Routes } from 'react-router';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Press from './pages/Press';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="coaching" element={<Coaching />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="press" element={<Press />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
