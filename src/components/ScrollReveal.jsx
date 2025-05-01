import React, { useEffect, useRef } from 'react';


const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  direction = 'up',
  delay = 0
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const getInitialTransform = () => {
      switch (direction) {
        case 'up': return 'translate3d(0, 50px, 0)';
        case 'down': return 'translate3d(0, -50px, 0)';
        case 'left': return 'translate3d(50px, 0, 0)';
        case 'right': return 'translate3d(-50px, 0, 0)';
        default: return 'translate3d(0, 50px, 0)';
      }
    };
    
    element.style.transform = getInitialTransform();
    element.style.opacity = '0';
    element.style.transition = `transform 0.8s ease-out ${delay}ms, opacity 0.8s ease-out ${delay}ms`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.transform = 'translate3d(0, 0, 0)';
              element.style.opacity = '1';
            }, 100);
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [direction, threshold, delay]);
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;