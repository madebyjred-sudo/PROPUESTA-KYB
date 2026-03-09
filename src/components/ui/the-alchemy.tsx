import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function TheAlchemy() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className="min-h-screen flex items-center justify-center py-24 px-6 relative transition-colors duration-1000">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <h2 className={cn(
                        "text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-12 transition-colors duration-1000",
                        isLunar ? "text-[#8E24AA]" : "text-[#FF6B00]"
                    )}>
                        La Alquimia
                    </h2>
                    <p className={cn(
                        "text-3xl md:text-4xl font-light tracking-tight max-w-2xl mx-auto transition-colors duration-1000",
                        isLunar ? "text-white/80" : "text-[#1A1A1A]/80"
                    )}>
                        Dos elementos de la naturaleza trabajando en perfecta sinergia.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Ingredient 1: Cannabis F.S. */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="flex flex-col gap-8"
                    >
                        <div className={cn(
                            "aspect-[3/4] rounded-3xl overflow-hidden relative border transition-colors duration-1000",
                            isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                        )}>
                            <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                                <span className={cn(
                                    "tracking-[0.3em] uppercase text-sm mb-2 font-semibold transition-colors duration-1000",
                                    isLunar ? "text-white/30" : "text-black/40"
                                )}>Macro Botánica</span>
                                <span className={cn(
                                    "text-xs transition-colors duration-1000",
                                    isLunar ? "text-white/20" : "text-black/30"
                                )}>Placeholder para fotografía de Cannabis Full Spectrum</span>
                            </div>
                        </div>
                        <div>
                            <h3 className={cn(
                                "text-2xl font-light tracking-wider uppercase mb-4 transition-colors duration-1000",
                                isLunar ? "text-white" : "text-[#1A1A1A]"
                            )}>Cannabis F.S.</h3>
                            <p className={cn(
                                "font-light leading-relaxed transition-colors duration-1000",
                                isLunar ? "text-white/50" : "text-[#1A1A1A]/60"
                            )}>
                                {isLunar
                                    ? "El espectro completo garantiza el efecto séquito, conservando todos los cannabinoides, terpenos y flavonoides para una relajación profunda y natural."
                                    : "Extracto integral que potencia la vitalidad, regulando el sistema endocannabinoide para mantener el foco y la claridad durante el día."
                                }
                            </p>
                        </div>
                    </motion.div>

                    {/* Ingredient 2: Romero / Cordyceps */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col gap-8 md:mt-24"
                    >
                        <div className={cn(
                            "aspect-[3/4] rounded-3xl overflow-hidden relative border transition-colors duration-1000",
                            isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                        )}>
                            <div className="absolute inset-0 flex items-center justify-center flex-col p-8 text-center">
                                <span className={cn(
                                    "tracking-[0.3em] uppercase text-sm mb-2 font-semibold transition-colors duration-1000",
                                    isLunar ? "text-white/30" : "text-black/40"
                                )}>
                                    {isLunar ? "Macro Botánica" : "Macro Fungi"}
                                </span>
                                <span className={cn(
                                    "text-xs transition-colors duration-1000",
                                    isLunar ? "text-white/20" : "text-black/30"
                                )}>
                                    Placeholder para fotografía de {isLunar ? "Romero Fresco/Esencia" : "Hongo Cordyceps"}
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className={cn(
                                "text-2xl font-light tracking-wider uppercase mb-4 transition-colors duration-1000",
                                isLunar ? "text-white" : "text-[#1A1A1A]"
                            )}>
                                {isLunar ? "Romero" : "Cordyceps"}
                            </h3>
                            <p className={cn(
                                "font-light leading-relaxed transition-colors duration-1000",
                                isLunar ? "text-white/50" : "text-[#1A1A1A]/60"
                            )}>
                                {isLunar
                                    ? "Reconocido por sus propiedades neuroprotectoras y calmantes. Aporta una nota terrosa y potencia la claridad al despertar."
                                    : "Hongo adaptógeno legendario por aumentar la oxigenación, la energía celular y la resistencia física natural."
                                }
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
