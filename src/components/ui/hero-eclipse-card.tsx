import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

export function HeroEclipseCard() {
    const [isHovered, setIsHovered] = useState(false);
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    return (
        <section className="relative min-h-screen w-full flex justify-center items-center px-4 md:px-6 pt-12 pb-24 md:pb-32 transition-colors duration-1000">

            {/* FULL SECTION BACKGROUND (Videos + Global LED Overlay) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                {/* LUNAR Video Background */}
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        isLunar ? "opacity-100" : "opacity-0"
                    )}
                >
                    <div className="absolute inset-0 scale-[1.2] blur-[8px]">
                        <iframe
                            className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            src="https://www.youtube.com/embed/SJkx9EE3isc?autoplay=1&mute=1&controls=0&loop=1&playlist=SJkx9EE3isc&showinfo=0&modestbranding=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    {/* Dark tint over video so it acts as a subtle background */}
                    <div className="absolute inset-0 bg-[#0C0C0C]/50 mix-blend-multiply" />

                    {/* Bottom fade out to page background color */}
                    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0C0C0C]/80 to-[#0C0C0C]" />
                </div>

                {/* SOLAR Video Background */}
                <div
                    className={cn(
                        "absolute inset-0 transition-opacity duration-1000",
                        isLunar ? "opacity-0" : "opacity-100"
                    )}
                >
                    <div className="absolute inset-0 scale-[1.2] blur-[4px]">
                        {/* Note: start=8 works reliably when playlist param is removed if it's the same video, or use the video ID as playlist */}
                        <iframe
                            className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            src="https://www.youtube.com/embed/nZUMdnky11E?autoplay=1&mute=1&controls=0&loop=1&start=8&playlist=nZUMdnky11E&showinfo=0&modestbranding=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    {/* Warm tint over video */}
                    <div className="absolute inset-0 bg-[#FFFBF0]/30 mix-blend-screen" />

                    {/* Bottom fade out to page background color */}
                    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#FFFBF0]/80 to-[#FFFBF0]" />
                </div>

            </div>

            {/* GLOBAL Holographic LED Grid Overlay (Covers the entire screen background AND the Hero glows/eclipse) */}
            <div
                className={cn(
                    "absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000",
                    isLunar ? "opacity-70 mix-blend-overlay" : "opacity-30 mix-blend-multiply"
                )}
                style={{
                    backgroundImage: isLunar
                        ? "linear-gradient(rgba(0,0,0,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.9) 1px, transparent 1px)"
                        : "linear-gradient(rgba(100,50,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(100,50,0,0.5) 1px, transparent 1px)",
                    backgroundSize: "4px 4px"
                }}
            />

            <div
                className="w-full max-w-7xl relative z-10 -translate-y-12"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={cn(
                        "relative overflow-visible min-h-[700px] md:min-h-[800px] flex flex-col items-center justify-center duration-1000 transition-all bg-transparent border-none shadow-none"
                    )}
                >

                    {/* Background Glows (Aurora / Sun Rays) INSIDE the pill */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center overflow-visible pointer-events-none mix-blend-normal">

                        {/* Glow 1 (Cyan for Lunar, Orange for Solar) */}
                        <motion.div
                            animate={{
                                scale: isHovered ? 1.2 : 1,
                                rotate: isHovered ? 180 : 0,
                                opacity: isHovered ? 0.8 : 0.6,
                            }}
                            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            className={cn(
                                "absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-1000 translate-x-[-20%] translate-y-[-10%]",
                                isLunar ? "bg-[#0077B6] mix-blend-screen opacity-50" : "bg-[#FF6B00] mix-blend-multiply opacity-60"
                            )}
                        />
                        {/* Glow 2 (Purple for Lunar, Yellow for Solar) */}
                        <motion.div
                            animate={{
                                scale: isHovered ? 1.3 : 1,
                                rotate: isHovered ? -180 : 0,
                                opacity: isHovered ? 0.7 : 0.5,
                            }}
                            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                            className={cn(
                                "absolute w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-1000 translate-x-[20%] translate-y-[20%]",
                                isLunar ? "bg-[#963484] mix-blend-screen opacity-40" : "bg-[#FFC107] mix-blend-multiply opacity-50"
                            )}
                        />

                        {/* The Core (Eclipse vs Sun) */}
                        <motion.div
                            animate={{
                                scale: isHovered ? 0.95 : 1,
                            }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="absolute w-[600px] h-[600px] md:w-[750px] md:h-[750px] rounded-full z-10 transition-all duration-1000"
                            style={{
                                background: isLunar
                                    // Lunar: 85% opacity black gradient fading to transparent 
                                    ? "radial-gradient(circle at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0) 100%)"
                                    // Solar: Bright white/warm core radiating outwards
                                    : "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,251,240,0.9) 40%, rgba(255,251,240,0.4) 70%, rgba(255,251,240,0) 100%)",
                                boxShadow: isLunar
                                    ? "inset 0 0 100px rgba(0,0,0,0.5)"
                                    : "0 0 150px rgba(255,255,255,0.8), inset 0 0 100px rgba(255,255,255,1)",
                            }}
                        />
                    </div>

                    {/* Content Layer (z-30 ensures it's above the Global LED Overlay) */}
                    <div className={cn(
                        "relative z-30 px-6 max-w-4xl mx-auto text-center flex flex-col items-center transition-colors duration-1000",
                        isLunar ? "text-white" : "text-[#1A1A1A]"
                    )}
                    >

                        {/* Top Subheading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className={cn(
                                "mb-6 tracking-widest text-xs md:text-sm font-semibold uppercase",
                                isLunar ? "text-white/70" : "text-[#FF6B00]"
                            )}
                        >
                            <span className="tracking-[0.5em]">K Y N</span><br />
                            <span className="tracking-[0.3em] mt-2 block">
                                {isLunar ? "Restauración Nocturna" : "Energía Natural"}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            key={theme} // Forces re-animation on theme switch
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-sans text-7xl md:text-9xl font-light tracking-tighter mb-8"
                        >
                            {isLunar ? "Lunar" : "Solar"}
                            <span className="text-[20px] align-top">&reg;</span>
                        </motion.h1>

                        {/* Description / Label info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className={cn(
                                "flex items-center gap-4 text-xs md:text-sm font-semibold tracking-widest uppercase mb-16",
                                isLunar ? "text-white/80" : "text-[#1A1A1A]/80"
                            )}
                        >
                            <span className="tracking-[0.3em]">1 0 M L</span>
                            <div className={cn("h-[1px] w-12", isLunar ? "bg-white/30" : "bg-black/20")}></div>
                            <span className="tracking-[0.3em]">Cannabis F.S.</span>
                            <div className={cn("h-[1px] w-12", isLunar ? "bg-white/30" : "bg-black/20")}></div>
                            <span className="tracking-[0.3em]">
                                {isLunar ? "Romero" : "Cordyceps"}
                            </span>
                        </motion.div>

                        {/* Bottom Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className={cn(
                                "text-xs md:text-sm font-medium tracking-[0.4em] uppercase absolute bottom-[8%]",
                                isLunar ? "text-white/60" : "text-[#FF6B00]"
                            )}
                        >
                            Extracción Molecular
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
