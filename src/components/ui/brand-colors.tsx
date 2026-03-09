import { memo, useMemo, useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import { cn } from "@/lib/utils";

const ColorCarousel = memo(
    ({
        colors,
        isLunar,
        scrollValue,
        setDragActive,
        maxScroll
    }: {
        colors: { name: string; hex: string; text: string; class: string }[];
        isLunar: boolean;
        scrollValue: any;
        setDragActive: (active: boolean) => void;
        maxScroll: number;
    }) => {
        return (
            <div className="w-full flex justify-start mt-10 overflow-hidden px-4 md:px-0 relative">
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: maxScroll,
                        right: 0
                    }}
                    onDragStart={() => setDragActive(true)}
                    onDragEnd={() => setDragActive(false)}
                    style={{
                        x: scrollValue,
                        paddingLeft: "calc(50% - 160px)",
                        paddingRight: "calc(50% - 160px)"
                    }}
                    className="flex gap-6 items-center cursor-grab active:cursor-grabbing w-max min-w-full"
                >
                    {colors.map((color, i) => (
                        <div
                            key={color.name}
                            className={cn(
                                "relative flex-shrink-0 flex flex-col h-[400px] w-[320px] items-center justify-end rounded-3xl p-8 border shadow-sm transition-transform duration-300 hover:scale-[1.02]",
                                color.class,
                                color.text,
                                isLunar && color.hex === "#252525" ? "border-white/10" : "border-black/5"
                            )}
                        >
                            <div className="relative z-10 w-full flex flex-col items-center text-center gap-2">
                                <div
                                    className="font-mono text-xs uppercase tracking-widest backdrop-blur-md px-4 py-2 rounded-full border shadow-sm mb-4"
                                    style={{
                                        backgroundColor: color.text === 'text-white' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
                                        borderColor: color.text === 'text-white' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                        color: color.text === 'text-white' ? 'white' : 'black'
                                    }}
                                >
                                    {color.hex}
                                </div>
                                <h4 className={cn(
                                    "font-medium text-2xl tracking-tight leading-none mix-blend-difference drop-shadow-sm",
                                    color.text === 'text-white' ? 'text-white' : 'text-black'
                                )}>
                                    {color.name}
                                </h4>
                                <p className={cn(
                                    "text-[10px] uppercase tracking-[0.2em] mt-2 mix-blend-difference opacity-70",
                                    color.text === 'text-white' ? 'text-white' : 'text-black'
                                )}>
                                    {i < 2 ? "Acento Principal" : "Tono Base"}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    }
);

export function BrandColors() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';

    const lunarColors = useMemo(() => [
        { name: "Ghost White", hex: "#FCF8FF", text: "text-black", class: "bg-[#FCF8FF]" },
        { name: "Light Cyan", hex: "#DBFCFF", text: "text-black", class: "bg-[#DBFCFF]" },
        { name: "Teal Blue", hex: "#0077B6", text: "text-white", class: "bg-[#0077B6]" },
        { name: "Grape Soda", hex: "#963484", text: "text-white", class: "bg-[#963484]" },
        { name: "Carbon Black", hex: "#252525", text: "text-white", class: "bg-[#252525]" },
    ], []);

    const solarColors = useMemo(() => [
        { name: "Sunburst Orange", hex: "#FF6B00", text: "text-white", class: "bg-[#FF6B00]" },
        { name: "Warm Yellow", hex: "#FFC107", text: "text-black", class: "bg-[#FFC107]" },
        { name: "Dawn White", hex: "#FFFBF0", text: "text-black", class: "bg-[#FFFBF0]" },
        { name: "Earth Black", hex: "#1A1A1A", text: "text-white", class: "bg-[#1A1A1A]" },
    ], []);

    const colors = isLunar ? lunarColors : solarColors;

    // Card dimensions
    const cardWidth = 320;
    const gap = 24;
    // maxScroll ensures the last card centers perfectly when fully scrolled
    const maxScroll = -((cardWidth + gap) * (colors.length - 1));

    // Shared horizontal scroll value
    const scrollX = useMotionValue(0);
    const [dragActive, setDragActive] = useState(false);

    const trackWidth = 250; // pixels (Width of the track minus the width of the handle)

    // Map the scroll position to the limited width of the custom bar
    const progress = useTransform(scrollX, [0, maxScroll], [0, 1]);
    const handleX = useTransform(progress, (p) => p * trackWidth);

    const onBarPan = (_: any, info: any) => {
        // info.delta.x is how much the dragged handle moved in pixels
        const scrollPerPixel = maxScroll / trackWidth;

        let newScroll = scrollX.get() + info.delta.x * scrollPerPixel;
        // Clamp to bounds to prevent handle from flying off track
        newScroll = Math.max(maxScroll, Math.min(0, newScroll));
        scrollX.set(newScroll);
    };

    return (
        <section className="py-32 px-6 transition-colors duration-1000 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    // Increased bottom margin as requested
                    className="mb-16 md:mb-24 text-center"
                >
                    <h2 className={cn(
                        "text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 transition-colors duration-1000",
                        isLunar ? "text-[#0077B6]" : "text-[#FF6B00]"
                    )}>
                        Color & Paleta (3D Engine)
                    </h2>
                    <p className={cn(
                        "text-2xl md:text-4xl font-light tracking-tight transition-colors duration-1000",
                        isLunar ? "text-white/80" : "text-[#1A1A1A]/80"
                    )}>
                        Desliza y explora nuestros tonos dinámicos.
                    </p>
                </motion.div>

                <div className="relative flex flex-col items-center w-full max-w-6xl mt-10">
                    <div className="w-full flex-grow relative overflow-visible">
                        {/* Shadow/fade vignettes on edges so cards disappear gracefully */}
                        <div className={cn(
                            "absolute inset-y-0 left-[-20%] md:left-0 w-32 md:w-64 z-10 pointer-events-none bg-gradient-to-r to-transparent",
                            isLunar ? "from-[#0C0C0C]" : "from-[#FFFBF0]"
                        )} />
                        <div className={cn(
                            "absolute inset-y-0 right-[-20%] md:right-0 w-32 md:w-64 z-10 pointer-events-none bg-gradient-to-l to-transparent",
                            isLunar ? "from-[#0C0C0C]" : "from-[#FFFBF0]"
                        )} />

                        <ColorCarousel
                            colors={colors}
                            isLunar={isLunar}
                            scrollValue={scrollX}
                            setDragActive={setDragActive}
                            maxScroll={maxScroll}
                        />
                    </div>

                    {/* Premium Custom Scroll Bar */}
                    <div className="mt-16 w-[300px] relative z-20 flex flex-col items-center select-none"
                        style={{ cursor: dragActive ? 'grabbing' : 'default' }}>

                        <div className="flex justify-between w-full mb-4 px-1">
                            <span className={cn("text-[10px] font-mono tracking-widest uppercase", isLunar ? "text-white/40" : "text-black/40")}>Explorar</span>
                        </div>

                        {/* Track */}
                        <div className={cn(
                            "w-[300px] h-[1px] relative rounded-full flex items-center shadow-inner",
                            isLunar ? "bg-white/10" : "bg-black/10"
                        )}>
                            {/* Handle / Thumb */}
                            <motion.div
                                onPan={onBarPan}
                                onPanStart={() => setDragActive(true)}
                                onPanEnd={() => setDragActive(false)}
                                style={{ x: handleX }}
                                className={cn(
                                    "absolute w-12 h-[3px] md:h-[4px] rounded-full cursor-grab active:cursor-grabbing hover:scale-y-150 transition-transform origin-center touch-none",
                                    isLunar ? "bg-[#DBFCFF] shadow-[0_0_10px_rgba(219,252,255,0.4)]" : "bg-black shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                                )}
                            />
                        </div>
                    </div>
                </div>

                {/* Subtle description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 md:mt-24 text-center relative z-20 pointer-events-none"
                >
                    <p className={cn(
                        "text-sm tracking-wide opacity-60 transition-colors duration-1000 max-w-2xl mx-auto",
                        isLunar ? "text-white" : "text-black"
                    )}>
                        Nuestra paleta de color interactúa de manera coreografiada dependiendo del ecosistema (Lunar/Solar), permitiendo a la marca fluir libremente sin ataduras estáticas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
