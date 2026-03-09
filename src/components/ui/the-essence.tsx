import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function TheEssence() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative overflow-hidden transition-colors duration-1000">

            {/* Subtle background glow */}
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none transition-colors duration-1000",
                isLunar ? "bg-[#00E5FF] opacity-10" : "bg-[#FFC107] opacity-20"
            )} />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                >
                    <h2 className={cn(
                        "text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-12 transition-colors duration-1000",
                        isLunar ? "text-[#00E5FF]" : "text-[#FF6B00]"
                    )}>
                        La Esencia
                    </h2>

                    <p className={cn(
                        "text-3xl md:text-5xl lg:text-6xl font-light leading-snug tracking-tight transition-colors duration-1000",
                        isLunar ? "text-white/90" : "text-[#1A1A1A]/90"
                    )}>
                        {isLunar
                            ? "Diseñado para quienes buscan el equilibrio en la quietud de la noche."
                            : "Activación pura para los que abrazan el potencial de cada amanecer."
                        }
                        <span className={cn(
                            "block mt-4 transition-colors duration-1000",
                            isLunar ? "text-white/40" : "text-[#1A1A1A]/50"
                        )}>
                            Una experiencia botánica elevada a su máxima pureza.
                        </span>
                    </p>
                </motion.div>

                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className={cn(
                        "mt-24 w-full aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden relative group transition-colors duration-1000 border",
                        isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                    )}
                >
                    <div className="absolute inset-0 flex items-center justify-center flex-col z-10">
                        <span className={cn(
                            "tracking-[0.3em] uppercase text-sm mb-2 font-semibold transition-colors duration-1000",
                            isLunar ? "text-white/30" : "text-black/40"
                        )}>
                            {isLunar ? "Lifestyle Nocturno" : "Energía Solar"}
                        </span>
                        <span className={cn(
                            "text-xs transition-colors duration-1000",
                            isLunar ? "text-white/20" : "text-black/30"
                        )}>
                            Placeholder para fotografía de ambiente (ej. {isLunar ? "luces tenues, tranquilidad" : "luz de mañana, movimiento activo"})
                        </span>
                    </div>
                    {/* Inner Gradient */}
                    <div className={cn(
                        "absolute inset-0 opacity-80 transition-colors duration-1000",
                        isLunar ? "bg-gradient-to-t from-[#0C0C0C] to-transparent" : "bg-gradient-to-t from-[#FFFBF0] to-transparent"
                    )} />
                </motion.div>
            </div>
        </section>
    );
}
