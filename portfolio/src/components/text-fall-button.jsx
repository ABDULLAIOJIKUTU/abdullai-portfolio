"use client";;
import { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

import { cn } from "@/lib/utils";

gsap.registerPlugin(SplitText);

export const TextFallButton = ({
    className,
    children,
    effectOnHover = true,
    effectOnLoad = true,
    ...props
}) => {
    const buttonRef = useRef(null);
    const textRef = useRef(null);
    const splitTextRef = useRef(null);
    const timelineRef = useRef(null);

    const { contextSafe } = useGSAP();

    const triggerTextFallEffect = contextSafe(() => {
        const element = buttonRef.current;
        const splitText = splitTextRef.current;
        if (!element || !splitText) return;

        timelineRef.current?.kill();

        timelineRef.current = gsap.timeline();
        gsap.to(splitText.chars, {
            duration: 0,
            y: -60,
        });
        timelineRef.current
            .add("start")
            .to(element, {
                scale: 0.95,
                y: 4,
                duration: 0.1,
            })
            .to(element, {
                scale: 1,
                y: 0,
                duration: 0.2,
            })
            .to(splitText.chars, {
            duration: 1,
            y: 0,
            stagger: 0.05,
            ease: "elastic.out(0.75, 0.25)",
        }, "start");
    });

    useEffect(() => {
        if (textRef.current)
            splitTextRef.current = new SplitText(textRef.current, {
                type: "chars",
            });
        if (effectOnLoad) {
            triggerTextFallEffect();
        }
        return () => {
            splitTextRef.current?.revert();
            splitTextRef.current = null;
        };
    }, [effectOnLoad, triggerTextFallEffect]);

    const onClick = (e) => {
        triggerTextFallEffect();
        props.onClick?.(e);
    };

    return (
        <button
            {...props}
            ref={buttonRef}
            onMouseEnter={() => effectOnHover && triggerTextFallEffect()}
            onClick={onClick}
            className={cn("", className)}>
            <span ref={textRef} className="absolute">
                {children}
            </span>
            <span className="opacity-0">{children}</span>
        </button>
    );
};
