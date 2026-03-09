import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function TheScience() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className={cn(
            "min-h-screen flex items-center justify-center py-24 px-6 relative border-t transition-colors duration-1000",
            isLunar ? "bg-[#0C0C0C] border-white/5" : "bg-[#FFFBF0] border-black/5"
        )}>
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2"
                >
                    <h2 className={cn(
                        "text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-6 transition-colors duration-1000",
                        isLunar ? "text-white/50" : "text-[#1A1A1A]/50"
                    )}>
                        Extracción Molecular
                    </h2>
                    <h3 className={cn(
                        "text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight transition-colors duration-1000",
                        isLunar ? "text-white" : "text-[#1A1A1A]"
                    )}>
                        La ciencia de <br /> lo intangible.
                    </h3>
                    <p className={cn(
                        "font-light text-lg leading-relaxed mb-8 transition-colors duration-1000",
                        isLunar ? "text-white/60" : "text-[#1A1A1A]/70"
                    )}>
                        Utilizamos tecnología de extracción molecular para aislar y preservar los compuestos más puros de la planta sin el uso de solventes agresivos. Esto da como resultado un elixir dorado, limpio y altamente biodisponible.
                    </p>

                    <div className={cn(
                        "flex gap-12 border-t pt-8 mt-8 transition-colors duration-1000",
                        isLunar ? "border-white/10" : "border-black/10"
                    )}>
                        <div>
                            <span className={cn(
                                "block text-3xl font-light mb-2 transition-colors duration-1000",
                                isLunar ? "text-[#00E5FF]" : "text-[#FF6B00]"
                            )}>100%</span>
                            <span className={cn(
                                "text-xs tracking-widest uppercase transition-colors duration-1000",
                                isLunar ? "text-white/40" : "text-[#1A1A1A]/50"
                            )}>Pureza Botánica</span>
                        </div>
                        <div>
                            <span className={cn(
                                "block text-3xl font-light mb-2 transition-colors duration-1000",
                                isLunar ? "text-[#8E24AA]" : "text-[#FFC107]"
                            )}>0%</span>
                            <span className={cn(
                                "text-xs tracking-widest uppercase transition-colors duration-1000",
                                isLunar ? "text-white/40" : "text-[#1A1A1A]/50"
                            )}>Solventes</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Abstract/Process Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                    className="w-full md:w-1/2"
                >
                    <div className={cn(
                        "aspect-square md:aspect-[4/5] rounded-[48px] overflow-hidden relative border transition-colors duration-1000",
                        isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                    )}>
                        <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                            <span className={cn(
                                "tracking-[0.3em] uppercase text-sm mb-2 font-semibold transition-colors duration-1000",
                                isLunar ? "text-white/30" : "text-black/40"
                            )}>Proceso/Laboratorio</span>
                            <span className={cn(
                                "text-xs max-w-[200px] transition-colors duration-1000",
                                isLunar ? "text-white/20" : "text-black/30"
                            )}>Placeholder para foto de textura líquida dorada o equipo de laboratorio</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
