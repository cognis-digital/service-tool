// React is used implicitly for JSX
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServiceCatalogPage from './components/ServiceCatalogPage';
import PackageBuilder from './components/PackageBuilder';
import ReviewPage from './components/ReviewPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Base path routes */}
            <Route path="/service-tool" element={<Navigate to="/service-tool/" replace />} />
            <Route path="/service-tool/" element={<ServiceCatalogPage />} />
            <Route path="/service-tool/catalog" element={<ServiceCatalogPage />} />
            <Route path="/service-tool/build" element={<PackageBuilder />} />
            <Route path="/service-tool/review" element={<ReviewPage />} />
            
            {/* Relative routes for development */}
            <Route path="/" element={<Navigate to="/service-tool/" replace />} />
            <Route path="/catalog" element={<Navigate to="/service-tool/catalog" replace />} />
            <Route path="/build" element={<Navigate to="/service-tool/build" replace />} />
            <Route path="/review" element={<Navigate to="/service-tool/review" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;