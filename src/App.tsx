import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Colture from './pages/Colture';
import Fertilizzanti from './pages/Fertilizzanti';
import Trattamenti from './pages/Trattamenti';
import Consigli from './pages/Consigli';
import Storico from './pages/Storico';

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '1rem', backgroundColor: '#e8f5e9', display: 'flex', gap: '1rem' }}>
          <Link to="/">Dashboard</Link>
          <Link to="/colture">Colture</Link>
          <Link to="/fertilizzanti">Fertilizzanti</Link>
          <Link to="/trattamenti">Trattamenti</Link>
          <Link to="/consigli">Consigli</Link>
          <Link to="/storico">Storico</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div><h1>Dashboard</h1></div>} />
          <Route path="/colture" element={<Colture />} />
          <Route path="/fertilizzanti" element={<Fertilizzanti />} />
          <Route path="/trattamenti" element={<Trattamenti />} />
          <Route path="/consigli" element={<Consigli />} />
          <Route path="/storico" element={<Storico />} />
        </Routes>
      </div>
    </Router>
  );
}
