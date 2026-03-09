import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function BrandLogos() {
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
                        Logotipo & Marca
                    </h2>
                    <p className={cn(
                        "text-2xl md:text-4xl font-light tracking-tight transition-colors duration-1000",
                        isLunar ? "text-white/80" : "text-[#1A1A1A]/80"
                    )}>
                        La identidad en su forma más pura y equilibrada.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Primary Logo Construction */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={cn(
                            "relative aspect-[4/3] rounded-3xl overflow-hidden flex items-center justify-center p-12 transition-colors duration-1000 border",
                            isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                        )}
                    >
                        {/* Grid overlay for construction feel */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `linear-gradient(${isLunar ? 'white' : 'black'} 1px, transparent 1px), linear-gradient(90deg, ${isLunar ? 'white' : 'black'} 1px, transparent 1px)`,
                                backgroundSize: "20px 20px"
                            }}
                        />

                        {/* Logo Typography/Symbol Placeholder */}
                        <h3 className={cn(
                            "text-6xl md:text-8xl font-sans tracking-tighter font-light relative z-10",
                            isLunar ? "text-white" : "text-black"
                        )}>
                            L u n a r<span className="text-[20px] align-top ml-1">&reg;</span>
                        </h3>

                        {/* Safe Space Indicators */}
                        <div className="absolute inset-0 m-12 border border-dashed border-current opacity-20 pointer-events-none" />
                        <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest opacity-40">Área de Seguridad (X)</span>
                    </motion.div>

                    {/* Secondary/Symbol Version */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className={cn(
                                "flex-1 rounded-3xl flex items-center justify-center relative overflow-hidden transition-colors duration-1000 border",
                                isLunar ? "bg-[#00E5FF]/5 border-[#00E5FF]/20" : "bg-[#FF6B00]/5 border-[#FF6B00]/20"
                            )}
                        >
                            <div className={cn(
                                "w-24 h-24 rounded-full blur-[40px] absolute",
                                isLunar ? "bg-[#00E5FF]/30" : "bg-[#FF6B00]/30"
                            )} />
                            <span className={cn(
                                "text-4xl font-light tracking-widest relative z-10",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                L / N
                            </span>
                            <span className="absolute top-4 left-6 text-[10px] uppercase tracking-widest opacity-50">Isotipo / Reducción</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className={cn(
                                "flex-1 rounded-3xl flex items-center justify-center p-8 transition-colors duration-1000 border",
                                isLunar ? "bg-white/5 border-white/10 text-white/60" : "bg-black/5 border-black/10 text-black/60"
                            )}
                        >
                            <p className="text-sm tracking-wide leading-relaxed text-center max-w-sm">
                                Nuestro logotipo debe respirar. Nunca debe ser invadido por otros elementos gráficos y siempre debe mantener un contraste óptimo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
