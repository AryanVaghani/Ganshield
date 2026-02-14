import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Lock, Cpu, Activity } from 'lucide-react';

const features = [
    {
        icon: Shield,
        title: "24/7 Threat Monitoring",
        description: "Continuous AI-driven surveillance to detect and neutralize threats before they impact your infrastructure."
    },
    {
        icon: Zap,
        title: "Zero-Latency Response",
        description: "Instantaneous automated countermeasures deployed the microsecond an anomaly is detected."
    },
    {
        icon: Cpu,
        title: "AI Pattern Recognition",
        description: "Advanced machine learning algorithms that evolve to recognize new attack vectors in real-time."
    },
    {
        icon: Lock,
        title: "Military-Grade Encryption",
        description: "End-to-end encryption for all data streams, ensuring your sensitive information remains impenetrable."
    },
    {
        icon: Globe,
        title: "Global Threat Intelligence",
        description: "Connected to a worldwide network of security nodes to anticipate global cyberattack trends."
    },
    {
        icon: Activity,
        title: "Live Security Dashboard",
        description: "Visualize your entire security posture with real-time metrics and actionable insights."
    }
];

export const FeaturesGrid: React.FC = () => {
    return (
        <section id="features" className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-white">Elevate security with</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-green)]">
                            seamless intelligence
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Deploy enterprise-grade protection without the complexity. Our autonomous systems handle the heavy lifting.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 240, 255, 0.2)" }}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-neon-blue)]/50 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-[var(--color-neon-blue)]/10 flex items-center justify-center mb-6 text-[var(--color-neon-blue)] group-hover:bg-[var(--color-neon-blue)] group-hover:text-black transition-colors">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-neon-blue)] transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
