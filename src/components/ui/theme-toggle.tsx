import { useTheme } from "@/lib/theme-context";
import { ShimmerButton } from "./shimmer-button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isLunar = theme === 'lunar';

    // Logic: The style should be Lunar if (we are in Lunar AND not hovering) OR (we are in Solar AND hovering)
    const showLunarStyle = (isLunar && !isHovered) || (!isLunar && isHovered);

    // Dynamic visual properties based on hover preview state
    const currentShimmerColor = showLunarStyle ? "#00E5FF" : "#FF6B00";
    const currentBackground = showLunarStyle ? "rgba(10, 10, 10, 0.85)" : "rgba(255, 251, 240, 0.95)";
    const currentTextClass = showLunarStyle ? "text-white" : "text-black font-bold";
    const currentBorderClass = showLunarStyle ? "border-white/20 shadow-[0_0_15px_rgba(0,229,255,0.1)]" : "border-black/20 shadow-[0_4px_20px_rgba(255,107,0,0.2)]";

    // Mobile properties (Mobile doesn't have hover, so it stays strictly tied to the current theme)
    const mobileShimmerProps = {
        shimmerColor: isLunar ? "#00E5FF" : "#FF6B00",
        shimmerSize: "0.1em",
        shimmerDuration: "2s",
        background: isLunar ? "rgba(10, 10, 10, 0.85)" : "rgba(255, 251, 240, 0.95)",
    };
    const mobileTextClass = isLunar ? "text-white" : "text-black font-bold";
    const mobileBorderClass = isLunar ? "border-white/20" : "border-black/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)]";


    return (
        <>
            {/* --- DESKTOP VERSION (Hidden on Mobile) --- */}
            <div
                className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[100]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <ShimmerButton
                    onClick={toggleTheme}
                    shimmerColor={currentShimmerColor}
                    shimmerSize="0.1em"
                    shimmerDuration="2s"
                    background={currentBackground}
                    className={cn("backdrop-blur-xl transition-all duration-500", currentBorderClass)}
                >
                    <div className="flex items-center gap-2 px-2 transition-colors duration-500">
                        {isLunar ? <Sun className={cn("w-4 h-4 transition-colors duration-500", showLunarStyle ? "text-[#00E5FF]" : "text-[#FF6B00]")} /> : <Moon className={cn("w-4 h-4 transition-colors duration-500", showLunarStyle ? "text-[#00E5FF]" : "text-[#FF6B00]")} />}
                        <span className={cn("whitespace-nowrap text-center text-xs tracking-widest uppercase transition-colors duration-500", currentTextClass)}>
                            {isLunar ? "Solar" : "Lunar"}
                        </span>
                    </div>
                </ShimmerButton>
            </div>

            {/* --- MOBILE VERSION (Smart Dock, Hidden on Desktop) --- */}
            <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-center">
                <ShimmerButton
                    onClick={() => {
                        if (!isExpanded) {
                            setIsExpanded(true);
                            // Auto collapse after 5 seconds if not clicked
                            setTimeout(() => setIsExpanded(false), 5000);
                        } else {
                            toggleTheme();
                            setIsExpanded(false);
                        }
                    }}
                    {...mobileShimmerProps}
                    // Adjusted padding for the pill shape when collapsed vs expanded
                    className={cn(
                        "backdrop-blur-xl transition-all duration-500 h-14",
                        mobileBorderClass,
                        isExpanded ? "px-6" : "px-0 w-14"
                    )}
                >
                    <div className="flex items-center justify-center gap-3">
                        {/* Icon is always visible */}
                        <motion.div layout>
                            {isLunar ? <Sun className="w-5 h-5 text-[#00E5FF]" /> : <Moon className="w-5 h-5 text-[#FF6B00]" />}
                        </motion.div>

                        {/* Text only appears when expanded */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.span
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    exit={{ width: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={cn(
                                        "whitespace-nowrap text-xs tracking-widest uppercase overflow-hidden",
                                        mobileTextClass
                                    )}
                                >
                                    {isLunar ? "Solar" : "Lunar"}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                </ShimmerButton>
            </div>
        </>
    );
}
