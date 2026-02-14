import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldAlert, Cpu, Network, ScanFace, Database, Radio } from 'lucide-react';

export const OrbitingIcons: React.FC = () => {
    // Icons placed around the orbit
    const icons = [
        { Icon: Lock, color: '#00f0ff', delay: 0 },
        { Icon: ShieldAlert, color: '#ff4444', delay: 2 },
        { Icon: Cpu, color: '#0aff00', delay: 4 },
        { Icon: Network, color: '#ffffff', delay: 6 },
        { Icon: ScanFace, color: '#ff9f43', delay: 8 },
        { Icon: Database, color: '#00ccff', delay: 10 },
        { Icon: Radio, color: '#ff00ff', delay: 12 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
            <style>
                {`
                @keyframes orbit {
                    from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
                    to { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
                }
                @keyframes orbit-reverse {
                    from { transform: rotate(360deg) translateX(280px) rotate(-360deg); }
                    to { transform: rotate(0deg) translateX(280px) rotate(0deg); }
                }
                `}
            </style>

            {/* Inner Ring */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-white/5 animate-spin-slow opacity-30" />

            {/* Outer Ring */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-white/5 border-dashed animate-spin-slower opacity-20" />

            {/* Orbiting Icons - Inner Ring */}
            <div className="absolute w-full h-full flex items-center justify-center">
                {icons.slice(0, 4).map((item, i) => (
                    <div
                        key={i}
                        className="absolute w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        style={{
                            animation: `orbit 20s linear infinite`,
                            animationDelay: `-${item.delay * 2}s`,
                        }}
                    >
                        <item.Icon size={20} style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color})` }} />
                    </div>
                ))}
            </div>

            {/* Orbiting Icons - Outer Ring (Reverse) */}
            <div className="absolute w-full h-full flex items-center justify-center">
                {icons.slice(4).map((item, i) => (
                    <div
                        key={i}
                        className="absolute w-8 h-8 flex items-center justify-center bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                        style={{
                            animation: `orbit-reverse 25s linear infinite`,
                            animationDelay: `-${item.delay * 2}s`,
                        }}
                    >
                        <item.Icon size={16} style={{ color: item.color, filter: `drop-shadow(0 0 5px ${item.color})` }} />
                    </div>
                ))}
            </div>
        </div>
    );
};
