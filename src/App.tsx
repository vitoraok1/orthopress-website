import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Especialidade from './pages/Especialidade';
import { specialties } from './data/content';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {specialties.map((specialty) => (
            <Route
              key={specialty.slug}
              path={`/${specialty.slug}`}
              element={<Especialidade specialty={specialty} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
