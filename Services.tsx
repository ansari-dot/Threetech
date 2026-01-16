import React from 'react';
import ReactDOM from 'react-dom/client';
import ServicesPage from './components/ServicesPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const ServicesPageApp: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <ServicesPage />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<ServicesPageApp />);
