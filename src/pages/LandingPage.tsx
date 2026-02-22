import React from 'react';
import { Background } from '../components/Background';
import { HeroSection } from '../components/HeroSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { SocialProof } from '../components/SocialProof';
import { Footer } from '../components/Footer';
import { DisplayCardsSection } from '../components/DisplayCardsSection';

const LandingPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
            {/* Global Background Particles */}
            <div className="fixed inset-0 z-0 opacity-40">
                <Background />
            </div>

            {/* Content (Navbar is now global in App.tsx) */}
            <div className="relative z-10 flex flex-col">
                <HeroSection />
                <FeaturesGrid />
                <DisplayCardsSection />
                <SocialProof />
                <Footer />

                {/* Decoration: Light Beams */}
                <div className="absolute top-0 right-0 w-[500px] h-[800px] bg-gradient-to-b from-orange-500/5 via-amber-500/3 to-transparent -skew-x-[20deg] blur-[80px] pointer-events-none" />
                <div className="absolute top-[40%] left-0 w-[400px] h-[600px] bg-gradient-to-b from-amber-500/5 to-transparent skew-x-[15deg] blur-[80px] pointer-events-none" />
            </div>
        </div>
    );
};

export default LandingPage;
