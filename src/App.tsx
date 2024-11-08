import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { NewsFlash } from './components/NewsFlash';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { BulkPayment } from './pages/BulkPayment';
import { Pricing } from './pages/Pricing';
import { Tpe } from './pages/Tpe';
import { Contact } from './pages/Contact';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Compliance } from './pages/Compliance';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NewsFlash />
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/bulk-payment" element={<BulkPayment />} />
          <Route path="/nos-tarifs" element={<Pricing />} />
          <Route path="/tpe" element={<Tpe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/conditions-utilisation" element={<TermsOfService />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/conformite" element={<Compliance />} />
          <Route path="/creer-compte" element={<div className="p-8">Page Créer un compte en construction</div>} />
          <Route path="/connexion" element={<div className="p-8">Page Connexion en construction</div>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;