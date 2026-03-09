import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function BrandFonts() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className="py-32 px-6 transition-colors duration-1000">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className={cn(
                        "text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 transition-colors duration-1000",
                        isLunar ? "text-[#00E5FF]" : "text-[#FF6B00]"
                    )}>
                        Tipografía & Voz
                    </h2>
                    <p className={cn(
                        "text-2xl md:text-4xl font-light tracking-tight transition-colors duration-1000",
                        isLunar ? "text-white/80" : "text-[#1A1A1A]/80"
                    )}>
                        Figtree: Claridad geométrica y lectura sin esfuerzo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Font Showcase */}
                    <div className="space-y-12">
                        {/* Huge Display */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col border-b pb-8 transition-colors duration-1000 border-current border-opacity-10 dark:border-opacity-10"
                        >
                            <span className={cn(
                                "text-[10px] uppercase tracking-widest mb-2 opacity-50 font-semibold",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                Display / Light (300) / Tracking Tighter
                            </span>
                            <h3 className={cn(
                                "text-6xl md:text-8xl font-light tracking-tighter leading-none transition-colors duration-1000",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                Aa
                            </h3>
                            <p className={cn(
                                "text-3xl md:text-5xl font-light tracking-tight mt-4 transition-colors duration-1000",
                                isLunar ? "text-white/80" : "text-black/80"
                            )}>
                                Equilibrado.
                            </p>
                        </motion.div>

                        {/* Subheading Showcase */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col border-b pb-8 transition-colors duration-1000 border-current border-opacity-10 dark:border-opacity-10"
                        >
                            <span className={cn(
                                "text-[10px] uppercase tracking-widest mb-2 opacity-50 font-semibold",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                Subheading / Medium (500) / Tracking Widest
                            </span>
                            <div className="flex gap-4 items-end mt-2">
                                <h4 className={cn(
                                    "text-lg md:text-xl font-medium tracking-widest uppercase transition-colors duration-1000",
                                    isLunar ? "text-[#00E5FF]" : "text-[#FF6B00]"
                                )}>
                                    A B C D E F
                                </h4>
                            </div>
                        </motion.div>

                        {/* Body Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col"
                        >
                            <span className={cn(
                                "text-[10px] uppercase tracking-widest mb-2 opacity-50 font-semibold",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                Body Text / Regular (400) / Leading Relaxed
                            </span>
                            <p className={cn(
                                "text-base md:text-lg leading-relaxed mt-2 transition-colors duration-1000",
                                isLunar ? "text-white/60" : "text-black/70"
                            )}>
                                a b c d e f g h i j k l m n ñ o p q r s t u v w x y z <br />
                                0 1 2 3 4 5 6 7 8 9 & @ # % * ! ?
                            </p>
                        </motion.div>
                    </div>

                    {/* Hierarchy System Visualizer */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className={cn(
                                "h-full rounded-[40px] p-10 flex flex-col justify-center transition-colors duration-1000 border hover:scale-105 cursor-default transition-transform",
                                isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                            )}
                        >
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={cn(
                                            "text-xs uppercase tracking-widest opacity-50 transition-colors duration-1000",
                                            isLunar ? "text-white" : "text-black"
                                        )}>H1 (7xl-9xl)</span>
                                    </div>
                                    <div className={cn(
                                        "h-12 w-3/4 rounded-sm transition-colors duration-1000",
                                        isLunar ? "bg-white" : "bg-black"
                                    )}></div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={cn(
                                            "text-xs uppercase tracking-widest opacity-50 transition-colors duration-1000",
                                            isLunar ? "text-white" : "text-black"
                                        )}>H2 (4xl-6xl)</span>
                                    </div>
                                    <div className={cn(
                                        "h-8 w-1/2 rounded-sm transition-colors duration-1000",
                                        isLunar ? "bg-white/80" : "bg-black/80"
                                    )}></div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={cn(
                                            "text-xs uppercase tracking-widest opacity-50 transition-colors duration-1000",
                                            isLunar ? "text-white" : "text-black"
                                        )}>H3/Label (sm)</span>
                                    </div>
                                    <div className={cn(
                                        "h-4 w-1/4 rounded-sm transition-colors duration-1000",
                                        isLunar ? "bg-[#00E5FF]" : "bg-[#FF6B00]"
                                    )}></div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className={cn(
                                            "text-xs uppercase tracking-widest opacity-50 transition-colors duration-1000",
                                            isLunar ? "text-white" : "text-black"
                                        )}>Body (base/lg)</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className={cn(
                                            "h-3 w-full rounded-sm transition-colors duration-1000",
                                            isLunar ? "bg-white/40" : "bg-black/40"
                                        )}></div>
                                        <div className={cn(
                                            "h-3 w-[90%] rounded-sm transition-colors duration-1000",
                                            isLunar ? "bg-white/40" : "bg-black/40"
                                        )}></div>
                                        <div className={cn(
                                            "h-3 w-[60%] rounded-sm transition-colors duration-1000",
                                            isLunar ? "bg-white/40" : "bg-black/40"
                                        )}></div>
                                    </div>
                                </div>
                            </div>

                            <p className={cn(
                                "mt-12 text-sm italic opacity-60 transition-colors duration-1000",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                "El espacio vertical entre elementos tipográficos comunica jerarquía sin necesidad de depender excesivamente en pesos de fuente extragruesos."
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
