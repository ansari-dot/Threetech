import React from 'react';
import ReactDOM from 'react-dom/client';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AboutPage />);
