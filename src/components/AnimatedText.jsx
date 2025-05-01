import React, { useEffect, useRef } from 'react';

const AnimatedText = ({ 
  text, 
  className = "", 
  delay = 0 
}) => {
  const spanRef = useRef(null);
  
  useEffect(() => {
    const span = spanRef.current;
    if (!span) return;
    
    const timer = setTimeout(() => {
      span.classList.add('animate-in');
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span 
      ref={spanRef}
      className={`inline-block opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {text}
    </span>
  );
};

export default AnimatedText;