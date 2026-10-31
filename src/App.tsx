import { Route, Routes } from 'react-router';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Press from './pages/Press';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="press" element={<Press />} />
      <Route path="contact" element={<Contact />} />
      {/* TODO: coaching, projects */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
