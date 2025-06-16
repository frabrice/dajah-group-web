import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Services from './pages/ServicesPage';
import Advisory from './pages/AdvisoryPage';
import Tax from './pages/TaxPage';
import Audit from './pages/AuditPage';
import Industries from './pages/IndustriesPage';
import Fashion from './pages/industries/FashionPage';
import FineArts from './pages/industries/FineArtsPage';
import NonProfit from './pages/industries/NonProfitPage';
import Construction from './pages/industries/ConstructionPage';
import Healthcare from './pages/industries/HealthcarePage';
import ProfessionalServices from './pages/industries/ProfessionalServicesPage';
import Entertainment from './pages/industries/EntertainmentPage';
import HighNetWorth from './pages/industries/HighNetWorthPage';
import Entrepreneurial from './pages/industries/EntrepreneurialPage';
import Technology from './pages/industries/TechnologyPage';
import RealEstate from './pages/industries/RealEstatePage';
import LogisticsTransport from './pages/industries/LogisticsTransportPage';
import Blog from './pages/BlogPage';
import BlogPost from './pages/BlogPostPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/advisory" element={<Advisory />} />
          <Route path="/services/tax" element={<Tax />} />
          <Route path="/services/audit" element={<Audit />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/fashion" element={<Fashion />} />
          <Route path="/industries/fine-arts" element={<FineArts />} />
          <Route path="/industries/non-profit" element={<NonProfit />} />
          <Route path="/industries/construction" element={<Construction />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/industries/entertainment" element={<Entertainment />} />
          <Route path="/industries/high-net-worth" element={<HighNetWorth />} />
          <Route path="/industries/entrepreneurial" element={<Entrepreneurial />} />
          <Route path="/industries/technology" element={<Technology />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/logistics-transport" element={<LogisticsTransport />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;