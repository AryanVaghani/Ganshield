import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Shield3D: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);

    // Mouse-follow parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    }, [mouseX, mouseY]);

    const handleMouseLeave = useCallback(() => {
        mouseX.set(0);
        mouseY.set(0);
    }, [mouseX, mouseY]);

    // Continuous slow Y-axis rotation
    useEffect(() => {
        let animationFrame: number;
        let startTime: number | null = null;

        const animate = (time: number) => {
            if (startTime === null) startTime = time;
            const elapsed = time - startTime;
            // Full 360° rotation every 12 seconds
            setRotation((elapsed / 12000) * 360 % 360);
            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[320px] h-[380px] md:w-[420px] md:h-[500px] cursor-default"
            style={{ perspective: '1200px' }}
        >
            <style>{`
                @keyframes glowPulse {
                    0%, 100% {
                        filter: drop-shadow(0 0 25px rgba(0, 240, 255, 0.4)) drop-shadow(0 0 60px rgba(0, 240, 255, 0.15));
                    }
                    50% {
                        filter: drop-shadow(0 0 40px rgba(0, 240, 255, 0.6)) drop-shadow(0 0 100px rgba(0, 240, 255, 0.25));
                    }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                @keyframes floatY {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-18px); }
                }
                .shield-float {
                    animation: floatY 5s ease-in-out infinite;
                }
                .shield-glow {
                    animation: glowPulse 4s ease-in-out infinite;
                }
            `}</style>

            {/* Floating wrapper for up/down bob */}
            <div className="shield-float w-full h-full flex items-center justify-center">
                {/* 3D Rotation wrapper — continuous Y spin + mouse parallax */}
                <motion.div
                    className="shield-glow relative"
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {/* The Shield Body */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            transform: `rotateY(${rotation}deg)`,
                            transformStyle: 'preserve-3d',
                            transition: 'none',
                        }}
                    >
                        {/* === BACK FACE === */}
                        <div
                            className="absolute inset-[10%]"
                            style={{
                                clipPath: 'polygon(50% 2%, 95% 22%, 95% 72%, 50% 98%, 5% 72%, 5% 22%)',
                                background: 'linear-gradient(135deg, #050a18 0%, #0a1530 50%, #061025 100%)',
                                transform: 'translateZ(-30px)',
                                backfaceVisibility: 'visible',
                            }}
                        />

                        {/* === MID FACE (Depth ring) === */}
                        <div
                            className="absolute inset-[8%]"
                            style={{
                                clipPath: 'polygon(50% 2%, 95% 22%, 95% 72%, 50% 98%, 5% 72%, 5% 22%)',
                                background: 'linear-gradient(160deg, #0a1a3a 0%, #003060 40%, #001833 100%)',
                                transform: 'translateZ(-15px)',
                                boxShadow: 'inset 0 0 40px rgba(0, 240, 255, 0.08)',
                                backfaceVisibility: 'visible',
                            }}
                        />

                        {/* === FRONT FACE (Main visible shield) === */}
                        <div
                            className="absolute inset-[6%] overflow-hidden"
                            style={{
                                clipPath: 'polygon(50% 2%, 95% 22%, 95% 72%, 50% 98%, 5% 72%, 5% 22%)',
                                background: 'linear-gradient(145deg, #0c1e3a 0%, #0a2550 30%, #003366 60%, #001a33 100%)',
                                transform: 'translateZ(0px)',
                                boxShadow: `
                                    0 0 0 1px rgba(0, 240, 255, 0.25),
                                    inset 0 0 50px rgba(0, 240, 255, 0.06),
                                    0 20px 60px -20px rgba(0, 0, 0, 0.8)
                                `,
                                backfaceVisibility: 'visible',
                            }}
                        >
                            {/* Metallic shimmer sweep */}
                            <div
                                className="absolute inset-0 opacity-30 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 45%, transparent 55%)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer 6s ease-in-out infinite',
                                }}
                            />

                            {/* Inner border glow ring */}
                            <div
                                className="absolute inset-[8%] pointer-events-none"
                                style={{
                                    clipPath: 'polygon(50% 2%, 95% 22%, 95% 72%, 50% 98%, 5% 72%, 5% 22%)',
                                    border: '1px solid rgba(0, 240, 255, 0.2)',
                                    boxShadow: 'inset 0 0 20px rgba(0, 240, 255, 0.05)',
                                }}
                            />

                            {/* "G" Letter — centered */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span
                                    className="text-[100px] md:text-[140px] font-black font-mono select-none"
                                    style={{
                                        background: 'linear-gradient(180deg, #ffffff 0%, #00d4ff 40%, #0088cc 80%, #004466 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 50px rgba(0, 240, 255, 0.2))',
                                        transform: 'translateZ(20px)',
                                    }}
                                >
                                    G
                                </span>
                            </div>
                        </div>

                        {/* === HIGHLIGHT FACE (Reflection edge) === */}
                        <div
                            className="absolute inset-[6%] pointer-events-none"
                            style={{
                                clipPath: 'polygon(50% 2%, 95% 22%, 95% 72%, 50% 98%, 5% 72%, 5% 22%)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(0,240,255,0.05) 100%)',
                                transform: 'translateZ(2px)',
                                backfaceVisibility: 'visible',
                            }}
                        />
                    </div>

                    {/* === AMBIENT GLOW (doesn't rotate) === */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full pointer-events-none -z-10"
                        style={{
                            background: 'radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, rgba(0, 240, 255, 0.05) 40%, transparent 70%)',
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};
