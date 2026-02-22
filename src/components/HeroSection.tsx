import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GridFloor } from './GridFloor';
import { SpinningShield } from './SpinningShield';
import { TextScramble } from '@/components/ui/text-scramble';

const AnimatedCounter: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
    >
        <p className="text-2xl font-bold text-primary">{value}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    </motion.div>
);

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            <GridFloor />

            <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                <div className="flex flex-col gap-6 items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            <TextScramble
                                as="span"
                                className="block text-white drop-shadow-lg font-bold"
                                duration={1.2}
                                speed={0.03}
                                characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%"
                            >
                                Next-Gen Cyber
                            </TextScramble>
                            <TextScramble
                                as="span"
                                className="block text-primary drop-shadow-md font-bold"
                                duration={1.5}
                                speed={0.03}
                                characterSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%"
                            >
                                Defense Platform
                            </TextScramble>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0"
                    >
                        AI-powered threat detection with zero-latency response. Protecting 10,000+ enterprise nodes across 48 countries in real-time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
                    >
                        <Link to="/auth">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-primary-foreground hover:opacity-90 px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide flex items-center gap-2 group transition-all shadow-lg shadow-primary/20"
                            >
                                Get Started
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <Link to="/dashboard">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-card border border-border hover:border-primary/50 text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 transition-all"
                            >
                                View Live Demo
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-8 pt-8 border-t border-white/5 flex gap-8 justify-center lg:justify-start"
                    >
                        <AnimatedCounter value="99.99%" label="Uptime SLA" />
                        <AnimatedCounter value="<2ms" label="Response Time" />
                        <AnimatedCounter value="500K+" label="Threats Blocked" />
                        <AnimatedCounter value="48" label="Countries" />
                    </motion.div>
                </div>

                <div className="relative h-full min-h-[500px] flex items-center justify-center order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1.2, type: "spring" }}
                    >
                        <SpinningShield />
                    </motion.div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[180px] opacity-[0.06] -z-10" style={{ backgroundColor: '#e78a53' }} />
                </div>
            </div>
        </section>
    );
};
