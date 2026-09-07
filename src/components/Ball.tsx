import React from 'react';
import { interpolate, useVideoConfig } from 'remotion';

export const Ball: React.FC<{ frameNumber: number }> = ({ frameNumber }) => {
  const { durationInFrames } = useVideoConfig();
  
  // Small football being kicked around before impact
  const playingPhase = Math.min(frameNumber, 120);
  
  // Ball moves around the boy
  const angle = (playingPhase / 20) * Math.PI * 2;
  const radius = 100;
  const ballX = 330 + Math.cos(angle) * radius;
  const ballY = 200 + Math.sin(angle) * radius * 0.5;
  
  // After impact: ball gets launched upward
  const postImpact = Math.max(0, frameNumber - 120);
  const launchHeight = interpolate(postImpact, [0, 90], [0, -600], { extrapolateRight: 'clamp' });
  const launchX = interpolate(postImpact, [0, 90], [0, 200], { extrapolateRight: 'clamp' });
  
  const finalX = ballX + launchX;
  const finalY = ballY + launchHeight;
  
  return (
    <div style={{
      position: 'absolute',
      left: finalX,
      top: 300 + finalY,
      width: 25,
      height: 25,
      backgroundColor: '#000',
      borderRadius: '50%',
      boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
    }}>
      {/* Football pentagon pattern */}
      <svg width="100%" height="100%" viewBox="0 0 25 25">
        <circle cx="12.5" cy="12.5" r="12.5" fill="#000" />
        <line x1="12.5" y1="2" x2="12.5" y2="23" stroke="white" strokeWidth="1" />
      </svg>
    </div>
  );
};
