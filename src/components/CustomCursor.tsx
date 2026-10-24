"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(false);
    } else {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out flex items-center justify-center rounded-full mix-blend-difference ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        width: isHovered ? "80px" : "12px",
        height: isHovered ? "80px" : "12px",
        backgroundColor: isHovered ? "#FF3D6E" : "#F2F0EB",
        transitionProperty: "width, height, background-color, opacity",
        transitionDuration: "200ms",
      }}
    >
      {cursorText && (
        <span className="text-[10px] font-bold tracking-widest text-[#0A0A0A] uppercase select-none">
          {cursorText}
        </span>
      )}
    </div>
  );
}
