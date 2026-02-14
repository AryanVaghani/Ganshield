import React from 'react';
import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { SocialProof } from '../components/SocialProof';

const LandingPage: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-[var(--color-dark-bg)] text-white overflow-x-hidden selection:bg-[var(--color-neon-blue)] selection:text-black">
            {/* Global Background Particles (reused but customized via simple opacity/layering if needed) */}
            <div className="fixed inset-0 z-0 opacity-40">
                <Background />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col">
                <Navbar />
                <HeroSection />
                <FeaturesGrid />
                <SocialProof />

                {/* Decoration: Light Beams */}
                <div className="absolute top-0 right-0 w-[500px] h-[800px] bg-gradient-to-b from-[var(--color-neon-blue)]/5 to-transparent -skew-x-[20deg] blur-[80px] pointer-events-none" />
            </div>
        </div>
    );
};

export default LandingPage;
