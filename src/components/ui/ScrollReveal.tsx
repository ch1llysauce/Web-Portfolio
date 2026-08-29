import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of element is in viewport
                rootMargin: '0px 0px -30px 0px',
            }
        );

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-500 ease-out transform ${
                isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-6 scale-[0.98] pointer-events-none'
            } ${className}`}
        >
            {children}
        </div>
    );
};
