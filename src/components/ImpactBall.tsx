import React from 'react';
import { interpolate, useVideoConfig } from 'remotion';

export const ImpactBall: React.FC<{ frameNumber: number }> = ({ frameNumber }) => {
  const IMPACT_FRAME = 120;
  
  // Big ball only appears around impact
  const impactPhase = Math.max(0, frameNumber - IMPACT_FRAME + 30);
  
  // Ball grows as it approaches then launches
  const scale = interpolate(impactPhase, [0, 15, 30], [0, 1.5, 1], { extrapolateRight: 'clamp' });
  const opacity = impactPhase < 60 ? 1 : interpolate(impactPhase, [60, 90], [1, 0], { extrapolateRight: 'clamp' });
  
  // Position
  const yPos = interpolate(impactPhase, [0, 20, 30], [300, 200, 250], { extrapolateRight: 'clamp' });
  const launchUp = interpolate(impactPhase, [15, 60], [0, -400], { extrapolateRight: 'clamp' });
  
  const size = 80 * scale;
  const finalY = yPos + launchUp;
  
  return (
    <div style={{
      position: 'absolute',
      left: 550 - size / 2,
      top: 300 + finalY - size / 2,
      width: size,
      height: size,
      backgroundColor: '#FF4500',
      borderRadius: '50%',
      opacity,
      boxShadow: '0 0 20px rgba(255, 69, 0, 0.8)',
      transform: `scale(${scale})`
    }} />
  );
};
