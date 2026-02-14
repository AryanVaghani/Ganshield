import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, User, Mail, ArrowRight } from 'lucide-react';
import { Input } from './Input';

export const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="relative z-10 w-full max-w-md p-8">
            <motion.div
                className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Decorational Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-green)]" />
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[var(--color-neon-blue)] rounded-full blur-[50px] opacity-20" />
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-[var(--color-neon-green)] rounded-full blur-[50px] opacity-20" />

                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2 text-[var(--color-neon-blue)]">
                        <ShieldCheck size={32} />
                        <h1 className="text-2xl font-bold tracking-wider font-mono">GAN IDS</h1>
                    </div>
                </div>

                <div className="flex bg-gray-900/50 rounded-lg p-1 mb-8 relative">
                    <motion.div
                        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-gray-800 rounded shadow-sm z-0"
                        animate={{ x: isLogin ? 0 : "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${isLogin ? 'text-white' : 'text-gray-400'}`}
                    >
                        LOGIN
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${!isLogin ? 'text-white' : 'text-gray-400'}`}
                    >
                        SIGN UP
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    <motion.form
                        key={isLogin ? "login" : "signup"}
                        initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2"
                    >
                        {!isLogin && (
                            <Input
                                id="name"
                                label="Full Name"
                                type="text"
                                placeholder="John Doe"
                                icon={<User size={18} />}
                            />
                        )}
                        <Input
                            id="email"
                            label={isLogin ? "Email" : "Work Email"}
                            type="email"
                            placeholder="agent@security.com"
                            icon={<Mail size={18} />}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            icon={<Lock size={18} />}
                        />

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "var(--color-neon-green)", color: "black" }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-6 w-full bg-[var(--color-neon-blue)] text-black font-bold py-3 rounded flex items-center justify-center gap-2 group transition-colors duration-300"
                        >
                            {isLogin ? "ACCESS SYSTEM" : "INITIALIZE PROTOCOL"}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.form>
                </AnimatePresence>

                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500 font-mono">
                        SECURE CONNECTION ESTABLISHED
                    </p>
                </div>
            </motion.div>
        </div>
    );
};
