import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Support from './pages/Support';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      <Route path="/privacy" element={<Navigate to="/privacidad" replace />} />
      <Route path="/terminos" element={<Terms />} />
      <Route path="/terms" element={<Navigate to="/terminos" replace />} />
      <Route path="/support" element={<Support />} />
      <Route path="/soporte" element={<Navigate to="/support" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
