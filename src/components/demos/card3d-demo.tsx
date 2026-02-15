import { Card3D, Button3D, Badge3D } from "@sreedev/my3dui";
import { CreditCard, Wallet, Activity, ShieldCheck, Zap } from "lucide-react";

// Placeholder for Badge3D until it's fully implemented
const BadgePlaceholder = ({ children, className }: any) => (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
        {children}
    </span>
);

export default function Card3DDemo() {
    return (
        <div className="min-h-screen  bg-slate-950 p-10 flex flex-col items-center justify-center gap-12 font-sans">

            <div className="text-center space-y-4 mb-8">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    Card 3D
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    High-performance 3D tilt cards with depth layers and glassmorphism.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full perspective-1000">

                {/* Glass Card */}
                <Card3D variant="glass" className="h-[400px]" depth="md">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Glass Effect</h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                Beautiful glassmorphism with backdrop blur and subtle border gradients.
                                Perfect for modern dashboards.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Button3D variant="primary" className="w-full">Get Started</Button3D>
                        </div>
                    </div>
                </Card3D>

                {/* Neon Card */}
                <Card3D variant="neon" className="h-[400px]" depth="lg">
                    <div className="flex flex-col h-full justify-center items-center text-center space-y-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-30 animate-pulse" />
                            <Zap className="w-16 h-16 text-cyan-400 relative z-10" />
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-cyan-50 tracking-tight">Cyberpunk</h3>
                            <p className="text-cyan-200/60 mt-2">Neon glow effects and dark aesthetics.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full mt-4">
                            <div className="bg-cyan-950/50 p-3 rounded-lg border border-cyan-800/50">
                                <span className="block text-2xl font-bold text-cyan-400">98%</span>
                                <span className="text-xs text-cyan-200/50">Speed</span>
                            </div>
                            <div className="bg-cyan-950/50 p-3 rounded-lg border border-cyan-800/50">
                                <span className="block text-2xl font-bold text-cyan-400">0ms</span>
                                <span className="text-xs text-cyan-200/50">Lag</span>
                            </div>
                        </div>
                    </div>
                </Card3D>

                {/* Minimal/Solid Card */}
                <Card3D variant="solid" className="h-[400px] border-l-4 border-l-purple-500" depth="sm">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-400">SYSTEM STATUS</span>
                            <BadgePlaceholder className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                                Operational
                            </BadgePlaceholder>
                        </div>

                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-default">
                                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-md">
                                        <Activity className="w-4 h-4 text-purple-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm">Server Node {i}</h4>
                                        <p className="text-xs text-slate-500">100% Uptime</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <Button3D variant="outline" size="sm" className="w-full">
                                View Full Report
                            </Button3D>
                        </div>
                    </div>
                </Card3D>
            </div>
        </div>
    );
}
