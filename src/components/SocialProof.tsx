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

const stats = [
    { value: '2.4B+', label: 'Threats Analyzed' },
    { value: '99.97%', label: 'Detection Rate' },
    { value: '<0.01s', label: 'Response Time' },
    { value: '150+', label: 'Enterprise Clients' },
];

export const SocialProof: React.FC = () => {
    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="w-full mx-auto px-6 md:px-12 lg:px-24">

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="text-center p-6 rounded-2xl bg-card border border-border relative overflow-hidden group"
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-[2px] opacity-50"
                                style={{ background: 'linear-gradient(90deg, transparent, #e78a53, transparent)' }}
                            />
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-primary">{stat.value}</h3>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

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
                            <span className="text-primary">to secure their digital assets.</span>
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {brands.map((brand, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="h-24 rounded-xl bg-card border border-border flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-all cursor-default group"
                                >
                                    <brand.icon size={24} className="text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
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
                        <div className="absolute inset-0 blur-[100px] opacity-[0.06] rounded-full" style={{ backgroundColor: '#e78a53' }} />

                        <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-3xl font-bold text-foreground mb-2">98.5%</h3>
                                    <p className="text-emerald-500 font-medium flex items-center gap-2">
                                        <TrendingUp size={16} />
                                        Threat Neutralization Rate
                                    </p>
                                </div>
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <ShieldCheck size={32} />
                                </div>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="space-y-4">
                                <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "98.5%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                                        className="absolute top-0 left-0 h-full rounded-full bg-primary"
                                    />
                                </div>
                                <div className="flex justify-between text-xs text-gray-500 font-mono">
                                    <span>SYSTEM INTEGRITY</span>
                                    <span className="text-emerald-500 font-bold">OPTIMAL</span>
                                </div>
                            </div>

                            {/* Additional Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                                <div className="p-4 rounded-xl bg-background border border-border text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">500k+</div>
                                    <div className="text-xs text-muted-foreground uppercase">Attacks Blocked</div>
                                </div>
                                <div className="p-4 rounded-xl bg-background border border-border text-center">
                                    <div className="text-2xl font-bold text-primary mb-1">0.01s</div>
                                    <div className="text-xs text-muted-foreground uppercase">Response Time</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
