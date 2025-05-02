import React, { useState, useEffect } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';


const AnimatedCounter = ({
  end,
  duration = 2000,
  title,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useAnimateOnScroll({ threshold: 0.5 });

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16); // 60fps equivalent
    
    // Don't start at 0 for large numbers to make the animation smoother
    if (end > 100) {
      start = Math.floor(end * 0.5);
      setCount(start);
    }

    let timer = null;
    
    const updateCount = () => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          if (timer) window.clearInterval(timer);
          return end;
        }
        return newCount;
      });
    };
    
    timer = window.setInterval(updateCount, 16);
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [end, duration, isVisible]);

  return (
    <div 
      ref={ref}
      className={`text-center ${className}`}
    >
      <div className="text-sm font-medium text-[var(--color-skill-text)]">
        {Math.floor(count)}
        {suffix}
      </div>
      <div className="mt-2 text-gray-600 dark:text-gray-400">{title}</div>
    </div>
  );
};

export default AnimatedCounter;