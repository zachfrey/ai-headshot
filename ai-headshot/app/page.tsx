// app/page.tsx
import React from 'react';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CallToAction from '../components/CTA';
import SocialProof from '../components/SocialProof';
import Benefits from '../components/Benefits';
import Features from '../components/Features';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <main className="font-sans">
      <Hero />
      <CallToAction 
        text="Ready to upgrade your professional image?" 
        buttonText="Generate Your Headshot"
      />
      <SocialProof 
        testimonials={[
          { name: "John Doe", role: "Marketing Manager", text: "This AI headshot generator saved me time and money. The results are impressive!" },
          { name: "Jane Smith", role: "Software Engineer", text: "I was skeptical at first, but the quality of the headshots exceeded my expectations." },
          { name: "Mike Johnson", role: "Freelance Consultant", text: "As a freelancer, this tool helps me maintain a professional image across all platforms." }
        ]}
      />
      <Benefits />
      <Features />
      <CallToAction 
        text="Join thousands of professionals who've upgraded their image" 
        buttonText="Start Now"
      />
    </main>
      <Footer />
    </div>
  );
};

export default LandingPage;