import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import ServiceCards from '../components/ServiceCards';
import Pricing from '../components/Pricing';
import OurTools from '../components/OurTools';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import GetStarted from '../components/GetStaeted';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <ServiceCards />
        <Pricing />
        <OurTools />
        <GetStarted />
        <Reviews />
        {/* 
        <Testimonials /> */}
        {/* <FAQ /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
