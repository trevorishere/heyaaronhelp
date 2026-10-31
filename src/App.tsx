import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* TODO: coaching, about, projects, press, contact */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
