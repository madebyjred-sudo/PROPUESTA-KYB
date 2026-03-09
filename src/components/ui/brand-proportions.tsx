import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function BrandProportions() {
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
                        Proporción & Geometría
                    </h2>
                    <p className={cn(
                        "text-2xl md:text-4xl font-light tracking-tight transition-colors duration-1000",
                        isLunar ? "text-white/80" : "text-[#1A1A1A]/80"
                    )}>
                        Estructuras basadas en el balance cósmico.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Golden Ratio Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={cn(
                            "relative aspect-square rounded-[40px] p-8 md:p-12 overflow-hidden flex flex-col justify-end transition-colors duration-1000 border group",
                            isLunar ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
                        )}
                    >
                        {/* Abstract Geometry */}
                        <div className="absolute inset-0 p-12 pointer-events-none">
                            <div className={cn(
                                "w-full h-full border rounded-full transition-colors duration-1000 opacity-20",
                                isLunar ? "border-white" : "border-black"
                            )}>
                                <div className={cn(
                                    "w-[61.8%] h-[61.8%] border rounded-full absolute bottom-0 right-0 transition-colors duration-1000",
                                    isLunar ? "border-white" : "border-black"
                                )}>
                                    <div className={cn(
                                        "w-[61.8%] h-[61.8%] border rounded-full absolute top-0 left-0 transition-colors duration-1000",
                                        isLunar ? "border-[#00E5FF]" : "border-[#FF6B00]"
                                    )}></div>
                                </div>
                            </div>

                            {/* Grid Lines */}
                            <div className={cn(
                                "absolute top-1/2 left-0 w-full border-t border-dashed opacity-20 transition-colors duration-1000",
                                isLunar ? "border-white" : "border-black"
                            )} />
                            <div className={cn(
                                "absolute left-1/2 top-0 h-full border-l border-dashed opacity-20 transition-colors duration-1000",
                                isLunar ? "border-white" : "border-black"
                            )} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 backdrop-blur-md bg-black/5 p-6 rounded-2xl border border-white/10">
                            <h3 className={cn(
                                "text-2xl font-light tracking-tight mb-2 transition-colors duration-1000",
                                isLunar ? "text-white" : "text-black"
                            )}>
                                Proporción Áurea (1.618)
                            </h3>
                            <p className={cn(
                                "text-sm transition-colors duration-1000",
                                isLunar ? "text-white/60" : "text-black/60"
                            )}>
                                Nuestras composiciones visuales, grillas y tipografías están matemáticamente escaladas para generar armonía natural.
                            </p>
                        </div>
                    </motion.div>

                    {/* Spacing System */}
                    <div className="flex flex-col gap-6">
                        {[
                            { name: "Micro (8px)", height: "h-2", desc: "Ajustes sutiles e interacciones" },
                            { name: "Base (16px)", height: "h-4", desc: "Márgenes interiores y párrafos" },
                            { name: "Macro (48px)", height: "h-12", desc: "Separación entre componentes" },
                            { name: "Fluid (8vw)", height: "h-24", desc: "Márgenes de sección adaptables" },
                        ].map((space, i) => (
                            <motion.div
                                key={space.name}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                className={cn(
                                    "flex items-center gap-6 p-4 rounded-2xl transition-colors duration-1000 border",
                                    isLunar ? "bg-white/5 border-white/5 hover:bg-white/10" : "bg-black/5 border-black/5 hover:bg-black/10"
                                )}
                            >
                                {/* Spacing Indicator Block */}
                                <div className={cn(
                                    "w-12 flex-shrink-0 transition-colors duration-1000 rounded-sm opacity-50",
                                    space.height,
                                    isLunar ? "bg-[#00E5FF]" : "bg-[#FF6B00]"
                                )} />

                                <div>
                                    <h4 className={cn(
                                        "font-semibold text-sm tracking-wide transition-colors duration-1000",
                                        isLunar ? "text-white" : "text-black"
                                    )}>
                                        {space.name}
                                    </h4>
                                    <p className={cn(
                                        "text-xs transition-colors duration-1000",
                                        isLunar ? "text-white/50" : "text-black/50"
                                    )}>
                                        {space.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
