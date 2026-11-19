import React, { useEffect, useRef, useState } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function AnimateOnScroll({
  children,
  className = "",
  delayMs = 0,
  direction = "up",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If browser doesn't support IntersectionObserver, reveal immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";
      case "down":
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6";
      case "left":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6";
      case "right":
        return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6";
      case "none":
        return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
      default:
        return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delayMs}ms`,
        transitionDuration: "650ms",
      }}
      className={`transition-all ease-out ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
