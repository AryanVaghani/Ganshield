import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, ShieldCheck, Users, Server, Globe2 } from 'lucide-react';

const brands = [
    { name: "CyberCorp", icon: ShieldCheck },
    { name: "NetGuard", icon: Server },
    { name: "GlobalSafe", icon: Globe2 },
    { name: "SecureFlow", icon: TrendingUp },
    { name: "TeamDefend", icon: Users },
    { name: "TrustShield", icon: CheckCircle2 },
];

export const SocialProof: React.FC = () => {
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Brands */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Trusted by industry leaders<br />
                            <span className="text-gray-500">to secure their digital assets.</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {brands.map((brand, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                                    className="h-24 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-white hover:border-[var(--color-neon-blue)]/30 transition-all cursor-default"
                                >
                                    <brand.icon size={24} />
                                    <span className="text-sm font-mono font-medium">{brand.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Success Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Decorational Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-neon-blue)] to-[var(--color-neon-green)] blur-[100px] opacity-20 rounded-full" />

                        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">98.5%</h3>
                                    <p className="text-[var(--color-neon-green)] font-medium flex items-center gap-2">
                                        <TrendingUp size={16} />
                                        Threat Neutralization Rate
                                    </p>
                                </div>
                                <div className="p-3 bg-[var(--color-neon-blue)]/10 rounded-lg text-[var(--color-neon-blue)]">
                                    <ShieldCheck size={32} />
                                </div>
                            </div>

                            {/* Fake Chart / Visual */}
                            <div className="space-y-4">
                                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "98.5%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-green)]"
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 font-mono">
                                    <span>SYSTEM INTEGRITY</span>
                                    <span>OPTIMAL</span>
                                </div>
                            </div>

                            {/* Additional Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <div className="text-2xl font-bold text-white mb-1">500k+</div>
                                    <div className="text-xs text-gray-500 uppercase">Attacks Blocked</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                                    <div className="text-2xl font-bold text-white mb-1">0.01s</div>
                                    <div className="text-xs text-gray-500 uppercase">Response Time</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
