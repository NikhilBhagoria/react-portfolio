import React, { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

const SkillBar= ({
  skill,
  percentage,
  color = '',
  delay = 0,
}) => {
  const [animate, setAnimate] = useState(false);
  const barRef = useRef(null);
  
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setAnimate(true);
          }, delay);
          observer.unobserve(bar);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(bar);
    
    return () => {
      if (bar) observer.unobserve(bar);
    };
  }, [delay]);
  
  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-900">{skill}</span>
        {/* <span className="text-sm font-medium text-gray-600">{percentage}%</span> */}
      <AnimatedCounter end={percentage} suffix="%" />
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${percentage}%` : '0%', background:'var(--color-accent-primary) linear-gradient(90deg, var(--color-gradient-skill-start), var(--color-gradient-skill-end))' }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;