import React from 'react';
import { interpolate, useVideoConfig } from 'remotion';

export const Particles: React.FC<{ frameNumber: number }> = ({ frameNumber }) => {
  const IMPACT_FRAME = 120;
  const impactPhase = Math.max(0, frameNumber - IMPACT_FRAME);
  
  return (
    <div>
      {/* Grass particles */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Particle key={`grass-${i}`} index={i} impactPhase={impactPhase} type="grass" />
      ))}
      
      {/* Dust particles */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Particle key={`dust-${i}`} index={i} impactPhase={impactPhase} type="dust" />
      ))}
      
      {/* Shock wave */}
      <ShockWave impactPhase={impactPhase} />
    </div>
  );
};

const Particle: React.FC<{ index: number; impactPhase: number; type: string }> = ({
  index,
  impactPhase,
  type
}) => {
  const angle = (index / 10) * Math.PI * 2;
  const speed = 3 + (index % 3) * 2;
  
  const distance = impactPhase * speed;
  const x = 550 + Math.cos(angle) * distance;
  const y = 250 + Math.sin(angle) * distance;
  
  const gravity = type === 'grass' ? impactPhase * impactPhase * 0.5 : 0;
  const opacity = impactPhase < 30 ? 1 : interpolate(impactPhase, [30, 60], [1, 0], { extrapolateRight: 'clamp' });
  
  const size = type === 'grass' ? 8 : 4;
  const color = type === 'grass' ? '#228B22' : 'rgba(200, 200, 200, 0.7)';
  
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y + gravity,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: '50%',
        opacity
      }}
    />
  );
};

const ShockWave: React.FC<{ impactPhase: number }> = ({ impactPhase }) => {
  const radius = impactPhase * 4;
  const opacity = impactPhase < 25 ? interpolate(impactPhase, [0, 25], [1, 0], { extrapolateRight: 'clamp' }) : 0;
  
  return (
    <div
      style={{
        position: 'absolute',
        left: 550,
        top: 250,
        width: radius * 2,
        height: radius * 2,
        border: '2px solid rgba(255, 255, 255, 0.8)',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        opacity
      }}
    />
  );
};
