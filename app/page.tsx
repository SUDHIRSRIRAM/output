import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ToolSelector from '@/components/ToolSelector';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import { Button } from "@/components/ui/button";
import { ArrowUp } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Hero />
            
            <div id="tools" className="mt-12 scroll-mt-20">
              <ToolSelector />
            </div>
            
            <HowItWorks />
            <Features />
            <Testimonials />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}