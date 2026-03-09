import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function TheRitual() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className={cn(
            "py-24 px-6 relative transition-colors duration-1000",
            isLunar ? "bg-[#0C0C0C]" : "bg-[#FFFBF0]"
        )}>

            <div className={cn(
                "max-w-7xl mx-auto w-full border-t pt-24 transition-colors duration-1000",
                isLunar ? "border-white/10" : "border-black/10"
            )}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className={cn(
                            "text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-8 transition-colors duration-1000",
                            isLunar ? "text-white/50" : "text-[#1A1A1A]/50"
                        )}>
                            El Ritual
                        </h2>
                        <h3 className={cn(
                            "text-3xl md:text-5xl font-light tracking-tight mb-6 transition-colors duration-1000",
                            isLunar ? "text-white" : "text-[#1A1A1A]"
                        )}>
                            {isLunar ? "Tu ceremonia \n de desconexión." : "Tu catalizador \n de movimiento."}
                        </h3>
                        <p className={cn(
                            "font-light text-lg leading-relaxed mb-8 max-w-md transition-colors duration-1000",
                            isLunar ? "text-white/60" : "text-[#1A1A1A]/70"
                        )}>
                            {isLunar
                                ? "Aplica 3 a 5 gotas debajo de la lengua 30 minutos antes de dormir. Mantén el elixir por 60 segundos antes de tragar. Cierra los ojos y deja que la restauración nocturna comience."
                                : "Aplica 3 a 5 gotas debajo de la lengua al despertar. Mantén por 60 segundos antes de tragar. Siente el impulso de energía natural para comenzar tu día con foco y vitalidad."
                            }
                        </p>
                    </motion.div>

                    {/* Abstract Moon / Sun representation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5 }}
                        className="flex justify-center md:justify-end"
                    >
                        <div className={cn(
                            "w-64 h-64 md:w-80 md:h-80 rounded-full border flex items-center justify-center relative transition-colors duration-1000",
                            isLunar ? "border-[#8E24AA]/30" : "border-[#FF6B00]/30"
                        )}>
                            <div
                                className={cn(
                                    "absolute w-full h-full rounded-full border animate-ping transition-colors duration-1000",
                                    isLunar ? "border-[#00E5FF]/20" : "border-[#FFC107]/40"
                                )}
                                style={{ animationDuration: '4s' }}
                            />
                            <div className={cn(
                                "w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br blur-xl transition-colors duration-1000",
                                isLunar ? "from-[#8E24AA]/20 to-transparent" : "from-[#FF6B00]/30 to-transparent"
                            )} />
                        </div>
                    </motion.div>
                </div>

            </div>

        </section>
    );
}
