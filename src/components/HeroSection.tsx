import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Shield3D } from './Shield3D';
import { OrbitingIcons } from './OrbitingIcons';
import { GridFloor } from './GridFloor';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Atmosphere */}
            <GridFloor />

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Side - Text Content */}
                <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                            <span className="block text-white drop-shadow-lg">Advanced Intrusion</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[#0066ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                Detection System
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0"
                    >
                        Real-time threat monitoring and AI-driven protection for next-generation enterprise security.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4"
                    >
                        <Link to="/auth">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 107, 43, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#ff6b2b] text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide flex items-center gap-2 group transition-all"
                            >
                                Get Started
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-2 hover:border-[var(--color-neon-blue)]/50 transition-colors"
                        >
                            View Live Demo
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-8 pt-8 border-t border-white/5 flex gap-8 justify-center lg:justify-start"
                    >
                        <div>
                            <p className="text-2xl font-bold text-white">99.9%</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Uptime</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">0ms</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Latency</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-white">24/7</p>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Monitoring</p>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - 3D Shield */}
                <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2 perspective-[2000px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
                        className="relative z-20"
                    >
                        <Shield3D />
                        <OrbitingIcons />
                    </motion.div>

                    {/* Behind Shield Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-neon-blue)] rounded-full blur-[150px] opacity-20 -z-10" />
                </div>
            </div>
        </section>
    );
};
