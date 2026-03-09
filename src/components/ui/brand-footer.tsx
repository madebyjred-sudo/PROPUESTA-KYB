import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";

export function BrandFooter() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <div className="w-full flex flex-col relative">
            {/* The global footer content (extracted from TheRitual component) */}
            <footer className="text-center pt-16 md:pt-24 mt-12 md:mt-24 border-t transition-colors duration-1000 border-black/5 dark:border-white/5"
                style={{ borderColor: isLunar ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <motion.h2
                    key={theme}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={cn(
                        "font-sans text-4xl font-light tracking-tighter mb-6 transition-colors duration-1000",
                        isLunar ? "text-white/50" : "text-[#1A1A1A]/40"
                    )}
                >
                    {isLunar ? "Lunar" : "Solar"}<span className="text-[10px] align-top">&reg;</span>
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={cn(
                        "text-xs tracking-widest uppercase flex flex-col md:flex-row justify-center items-center gap-4 transition-colors duration-1000",
                        isLunar ? "text-white/30" : "text-black/40"
                    )}
                >
                    <span>Cannabis F.S.</span>
                    <span className="hidden md:inline">&middot;</span>
                    <span>{isLunar ? "Romero" : "Cordyceps"}</span>
                    <span className="hidden md:inline">&middot;</span>
                    <span>Extracción Molecular</span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className={cn(
                        "text-[10px] tracking-wider mt-12 uppercase transition-colors duration-1000",
                        isLunar ? "text-white/20" : "text-black/30"
                    )}
                >
                    &copy; {new Date().getFullYear()} {isLunar ? "Lunar. Restauración Nocturna." : "Solar. Energía Natural."}
                </motion.p>
            </footer>

            {/* User's uploaded SVG KYN line, spanning FULL WIDTH at the very bottom with center-out reveal animation */}
            <motion.div
                initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0, scale: 0.98 }}
                whileInView={{ clipPath: "inset(0 0% 0 0%)", opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full mt-12 md:mt-20 pointer-events-none"
            >
                <img
                    src="/footer-logo.png"
                    alt="Brand Footer Line"
                    className={cn(
                        "w-full h-auto object-cover transition-all duration-1000",
                        isLunar ? "invert opacity-20" : "invert-0 opacity-30"
                    )}
                />
            </motion.div>
        </div>
    );
}
