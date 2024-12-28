
import React from 'react';

interface CircularProgressBarProps {
  percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
  const radius = 50; 
  const strokeWidth = 10; 
  const normalizedRadius = radius - strokeWidth * 0.5; 
  const circumference = normalizedRadius * 2 * Math.PI; 
  const strokeDashoffset = circumference - (percentage / 100) * circumference; 

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6" 
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#4caf50" 
        fill="white"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} 
      />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20">
        {Math.round(percentage)}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
