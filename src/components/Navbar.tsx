import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '#products' },
        { name: 'Value', path: '#value' },
        { name: 'FAQs', path: '#faqs' },
        { name: 'Careers', path: '#careers' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 120, damping: 20 }}
            className="fixed top-6 left-0 right-0 z-50 px-4"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Logo - Independent Pill (Left) */}
                <Link to="/" className="flex items-center gap-2 group px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-[var(--color-neon-blue)]/50 transition-all duration-300">
                    <ShieldCheck className="text-[var(--color-neon-blue)] w-6 h-6 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                    <span className="text-lg font-bold font-mono tracking-wider text-white">
                        GANSHIELD
                    </span>
                </Link>

                {/* Desktop Nav - Central Pill */}
                <div className="hidden md:flex items-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-shadow duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                        >
                            {link.name}
                            {/* Hover Pill Effect */}
                            <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-200" />
                        </Link>
                    ))}
                </div>

                {/* CTA Button - Independent Pill (Right) */}
                <div className="hidden md:block">
                    <Link to="/auth">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[var(--color-neon-blue)] text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,200,0.3)] hover:shadow-[0_0_25px_rgba(0,240,200,0.5)] transition-all"
                        >
                            Get Demo
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:text-[var(--color-neon-blue)] transition-colors"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    className="absolute top-20 left-4 right-4 md:hidden bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50"
                >
                    <div className="p-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-[var(--color-neon-blue)] hover:pl-2 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-px bg-white/10 my-2" />
                        <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                            <button className="w-full bg-[var(--color-neon-blue)] text-black py-3 rounded-xl font-bold text-sm uppercase tracking-wide">
                                Get Demo
                            </button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};
