"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useTheme } from "@/lib/theme-context"
import { cn } from "@/lib/utils"
import type React from "react"

interface LayeredTextProps {
    fontSize?: string
    fontSizeMd?: string
    lineHeight?: number
    lineHeightMd?: number
    className?: string
}

const lunarLines = [
    { top: "\u00A0", bottom: "Restauración" },
    { top: "Restauración", bottom: "Nocturna" },
    { top: "Nocturna", bottom: "Calma" },
    { top: "Calma", bottom: "Profunda" },
    { top: "Profunda", bottom: "Descanso" },
    { top: "Descanso", bottom: "Renacer" },
    { top: "Renacer", bottom: "\u00A0" },
]

const solarLines = [
    { top: "\u00A0", bottom: "Energía" },
    { top: "Energía", bottom: "Natural" },
    { top: "Natural", bottom: "Vitalidad" },
    { top: "Vitalidad", bottom: "Impulso" },
    { top: "Impulso", bottom: "Enfoque" },
    { top: "Enfoque", bottom: "Movimiento" },
    { top: "Movimiento", bottom: "\u00A0" },
]

export function LayeredText({
    fontSize = "72px",
    fontSizeMd = "36px",
    lineHeight = 60,
    lineHeightMd = 35,
    className = "",
}: LayeredTextProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<gsap.core.Timeline | null>(null)
    const { theme } = useTheme()
    const isLunar = theme === "lunar"

    const lines = isLunar ? lunarLines : solarLines

    const calculateTranslateX = (index: number) => {
        const baseOffset = 35
        const baseOffsetMd = 20
        const centerIndex = Math.floor(lines.length / 2)
        return {
            desktop: (index - centerIndex) * baseOffset,
            mobile: (index - centerIndex) * baseOffsetMd,
        }
    }

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const paragraphs = container.querySelectorAll("p")

        timelineRef.current = gsap.timeline({ paused: true })

        timelineRef.current.to(paragraphs, {
            y: window.innerWidth >= 768 ? -lineHeight : -lineHeightMd,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.08,
        })

        const handleMouseEnter = () => {
            timelineRef.current?.play()
        }

        const handleMouseLeave = () => {
            timelineRef.current?.reverse()
        }

        container.addEventListener("mouseenter", handleMouseEnter)
        container.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            container.removeEventListener("mouseenter", handleMouseEnter)
            container.removeEventListener("mouseleave", handleMouseLeave)
            timelineRef.current?.kill()
        }
    }, [lines, lineHeight, lineHeightMd])

    return (
        <section
            className={cn(
                "w-full py-24 md:py-32 transition-colors duration-1000 overflow-hidden",
                isLunar ? "bg-[#0C0C0C]" : "bg-[#FFFBF0]"
            )}
        >
            <div
                ref={containerRef}
                className={cn(
                    "mx-auto py-12 tracking-[-2px] antialiased cursor-pointer transition-colors duration-1000",
                    isLunar ? "text-white" : "text-[#1A1A1A]",
                    className
                )}
                style={
                    {
                        fontSize,
                        fontFamily: "'Figtree', sans-serif",
                        "--md-font-size": fontSizeMd,
                    } as React.CSSProperties
                }
            >
                <ul className="list-none p-0 m-0 flex flex-col items-center">
                    {lines.map((line, index) => {
                        const translateX = calculateTranslateX(index)
                        return (
                            <li
                                key={`${theme}-${index}`}
                                className="overflow-hidden relative"
                                style={
                                    {
                                        height: `${lineHeight}px`,
                                        transform: `translateX(${translateX.desktop}px) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                                        "--md-height": `${lineHeightMd}px`,
                                        "--md-translateX": `${translateX.mobile}px`,
                                    } as React.CSSProperties
                                }
                            >
                                <p
                                    className="px-[15px] align-top whitespace-nowrap m-0 font-extralight"
                                    style={{
                                        height: `${lineHeight}px`,
                                        lineHeight: `${lineHeight - 5}px`,
                                    }}
                                >
                                    {line.top}
                                </p>
                                <p
                                    className="px-[15px] align-top whitespace-nowrap m-0 font-medium"
                                    style={{
                                        height: `${lineHeight}px`,
                                        lineHeight: `${lineHeight - 5}px`,
                                    }}
                                >
                                    {line.bottom}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
