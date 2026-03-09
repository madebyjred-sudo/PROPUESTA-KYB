import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function TheProduct() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden transition-colors duration-1000">

            {/* Background radial gradient */}
            <div className={cn(
                "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] pointer-events-none transition-colors duration-1000",
                isLunar ? "from-white/[0.03] via-[#0C0C0C] to-[#0C0C0C]" : "from-black/[0.03] via-[#FFFBF0] to-[#FFFBF0]"
            )} />

            <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className={cn(
                        "text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-4 transition-colors duration-1000",
                        isLunar ? "text-white/50" : "text-[#1A1A1A]/50"
                    )}>
                        Presentación
                    </h2>
                </motion.div>

                {/* Central Pedestal / Product Image */}
                <div className="relative w-full max-w-sm aspect-[1/2] md:aspect-[2/3] mx-auto flex items-center justify-center">

                    {/* Subtle Glow behind the product */}
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className={cn(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] mix-blend-screen transition-colors duration-1000",
                            isLunar ? "bg-[#00E5FF]" : "bg-[#FFC107]"
                        )}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={cn(
                            "w-full h-full rounded-full border bg-gradient-to-b p-4 flex flex-col items-center justify-center backdrop-blur-sm relative z-10 transition-colors duration-1000",
                            isLunar
                                ? "border-white/20 from-white/10 to-transparent shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                                : "border-black/10 from-black/5 to-transparent shadow-[0_0_50px_rgba(255,107,0,0.2)]"
                        )}
                    >
                        <span className={cn(
                            "tracking-[0.3em] uppercase text-sm mb-2 font-semibold text-center px-4 transition-colors duration-1000",
                            isLunar ? "text-white/40" : "text-[#FF6B00]"
                        )}>Gotero 10 ML</span>
                        <span className={cn(
                            "text-xs text-center px-4 transition-colors duration-1000",
                            isLunar ? "text-white/20" : "text-black/30"
                        )}>Placeholder para render 3D o foto de producto frontal ({isLunar ? 'Noche' : 'Día'})</span>
                    </motion.div>

                    {/* Lines / Specs pointing to the product (visible on desktop) */}
                    <div className="hidden md:block absolute top-1/4 -left-32 w-48 text-right">
                        <div className={cn("border-b pb-2 mb-2 transition-colors duration-1000", isLunar ? "border-white/20" : "border-black/20")}>
                            <span className={cn("text-xs tracking-widest uppercase transition-colors duration-1000", isLunar ? "text-white/50" : "text-black/50")}>Absorción Rápida</span>
                        </div>
                        <p className={cn("text-xs font-light transition-colors duration-1000", isLunar ? "text-white/30" : "text-black/40")}>Fórmula sublingual para efecto en minutos.</p>
                    </div>
                    <div className="hidden md:block absolute bottom-1/4 -right-32 w-48 text-left">
                        <div className={cn("border-b pb-2 mb-2 transition-colors duration-1000", isLunar ? "border-white/20" : "border-black/20")}>
                            <span className={cn("text-xs tracking-widest uppercase transition-colors duration-1000", isLunar ? "text-white/50" : "text-black/50")}>Dosis Precisa</span>
                        </div>
                        <p className={cn("text-xs font-light transition-colors duration-1000", isLunar ? "text-white/30" : "text-black/40")}>Gotero graduado para tu medida exacta.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
