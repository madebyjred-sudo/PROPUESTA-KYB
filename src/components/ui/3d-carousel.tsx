"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import {
    AnimatePresence,
    motion,
    useAnimation,
    useMotionValue,
    useTransform,
} from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
    defaultValue?: boolean
    initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
    query: string,
    {
        defaultValue = false,
        initializeWithValue = true,
    }: UseMediaQueryOptions = {}
): boolean {
    const getMatches = (query: string): boolean => {
        if (IS_SERVER) {
            return defaultValue
        }
        return window.matchMedia(query).matches
    }

    const [matches, setMatches] = useState<boolean>(() => {
        if (initializeWithValue) {
            return getMatches(query)
        }
        return defaultValue
    })

    const handleChange = () => {
        setMatches(getMatches(query))
    }

    useIsomorphicLayoutEffect(() => {
        const matchMedia = window.matchMedia(query)
        handleChange()

        matchMedia.addEventListener("change", handleChange)

        return () => {
            matchMedia.removeEventListener("change", handleChange)
        }
    }, [query])

    return matches
}

// Replaced generic cities with more relevant botanical/nature keywords matching the brand identity
const keywords = [
    "nature",
    "plant",
    "leaf",
    "botanical",
    "flower",
    "forest",
    "water",
    "drop",
    "herb",
    "seed",
    "extract",
    "oil",
    "essence",
    "pure",
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const, filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] as const }

const Carousel = memo(
    ({
        handleClick,
        controls,
        cards,
        isCarouselActive,
    }: {
        handleClick: (imgUrl: string, index: number) => void
        controls: any
        cards: string[]
        isCarouselActive: boolean
    }) => {
        const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
        const cylinderWidth = isScreenSizeSm ? 1100 : 1800
        const faceCount = cards.length
        const faceWidth = cylinderWidth / faceCount
        const radius = cylinderWidth / (2 * Math.PI)
        const rotation = useMotionValue(0)
        const transform = useTransform(
            rotation,
            (value) => `rotate3d(0, 1, 0, ${value}deg)`
        )

        // Slow auto-rotation
        useEffect(() => {
            let animationId: number
            let lastTime = performance.now()
            const speed = 3 // degrees per second — slow but noticeable

            const autoRotate = (now: number) => {
                const delta = (now - lastTime) / 1000
                lastTime = now
                rotation.set(rotation.get() + speed * delta)
                animationId = requestAnimationFrame(autoRotate)
            }

            animationId = requestAnimationFrame(autoRotate)

            return () => cancelAnimationFrame(animationId)
        }, [rotation])

        return (
            <div
                className="flex h-full items-center justify-center"
                style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                }}
            >
                <motion.div
                    drag={isCarouselActive ? "x" : false}
                    className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
                    style={{
                        transform,
                        rotateY: rotation,
                        width: cylinderWidth,
                        transformStyle: "preserve-3d",
                    }}
                    onDrag={(_, info) =>
                        isCarouselActive &&
                        rotation.set(rotation.get() + info.offset.x * 0.05)
                    }
                    onDragEnd={(_, info) =>
                        isCarouselActive &&
                        controls.start({
                            rotateY: rotation.get() + info.velocity.x * 0.05,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 30,
                                mass: 0.1,
                            },
                        })
                    }
                    animate={controls}
                >
                    {cards.map((imgUrl, i) => (
                        <motion.div
                            key={`key-${imgUrl}-${i}`}
                            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
                            style={{
                                width: `${faceWidth}px`,
                                transform: `rotateY(${i * (360 / faceCount)
                                    }deg) translateZ(${radius}px)`,
                            }}
                            onClick={() => handleClick(imgUrl, i)}
                        >
                            <motion.img
                                src={imgUrl}
                                alt={`keyword_${i} ${imgUrl}`}
                                layoutId={`img-${imgUrl}`}
                                className="pointer-events-none w-full rounded-xl object-cover aspect-square shadow-lg"
                                initial={{ filter: "blur(4px)" }}
                                layout="position"
                                animate={{ filter: "blur(0px)" }}
                                transition={transition}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        )
    }
)

function ThreeDPhotoCarousel() {
    const { theme } = useTheme();
    const isLunar = theme === 'lunar';
    const [activeImg, setActiveImg] = useState<string | null>(null)
    const [isCarouselActive, setIsCarouselActive] = useState(true)
    const controls = useAnimation()

    // Use nature/botanical keywords instead of city/street to match the brand
    const cards = useMemo(
        () => keywords.map((keyword) => `https://source.unsplash.com/random/400x400/?${keyword}`),
        []
    )

    const handleClick = (imgUrl: string) => {
        setActiveImg(imgUrl)
        setIsCarouselActive(false)
        controls.stop()
    }

    const handleClose = () => {
        setActiveImg(null)
        setIsCarouselActive(true)
    }

    return (
        <motion.div layout className="relative w-full overflow-visible">
            <AnimatePresence mode="sync">
                {activeImg && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        layoutId={`img-container-${activeImg}`}
                        layout="position"
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] m-0"
                        style={{ willChange: "opacity" }}
                        transition={transitionOverlay}
                    >
                        <motion.img
                            layoutId={`img-${activeImg}`}
                            src={activeImg}
                            className="max-w-[90vw] max-h-[90vh] rounded-3xl shadow-2xl object-cover"
                            initial={{ scale: 0.5 }} // Start with a smaller scale
                            animate={{ scale: 1 }} // Animate to full scale
                            transition={{
                                delay: 0.1,
                                duration: 0.5,
                                ease: [0.25, 0.1, 0.25, 1],
                            }} // Clean ease-out curve
                            style={{
                                willChange: "transform",
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
                {/* Subtle horizontal gradient masks to fade the edges on large screens */}
                <div className={cn(
                    "absolute inset-y-0 left-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent",
                    isLunar ? "from-[#0C0C0C]" : "from-[#FFFBF0]"
                )} />
                <div className={cn(
                    "absolute inset-y-0 right-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent",
                    isLunar ? "from-[#0C0C0C]" : "from-[#FFFBF0]"
                )} />

                <Carousel
                    handleClick={handleClick}
                    controls={controls}
                    cards={cards}
                    isCarouselActive={isCarouselActive}
                />
            </div>
        </motion.div>
    )
}

export { ThreeDPhotoCarousel };
