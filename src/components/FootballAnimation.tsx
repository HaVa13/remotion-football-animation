import React from 'react';
import { useFrame, useVideoConfig, interpolate, Easing } from 'remotion';
import { Boy } from './Boy';
import { Ball } from './Ball';
import { ImpactBall } from './ImpactBall';
import { Particles } from './Particles';

export const FootballAnimation: React.FC = () => {
  const { fps } = useVideoConfig();
  const IMPACT_FRAME = 120; // Frame when big ball hits (4 seconds at 30fps)

  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#87CEEB',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Green Pitch */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '40%',
        backgroundColor: '#228B22',
        boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.3)'
      }} />

      {/* Clouds */}
      <Cloud x={100} y={50} />
      <Cloud x={600} y={100} />
      <Cloud x={1000} y={75} />

      {/* Boy playing with football */}
      <Boy frameNumber={IMPACT_FRAME} />

      {/* Small football being kicked around */}
      <Ball frameNumber={IMPACT_FRAME} />

      {/* Big ball impact */}
      <ImpactBall frameNumber={IMPACT_FRAME} />

      {/* Particles and explosion effect */}
      <Particles frameNumber={IMPACT_FRAME} />

      {/* Moon in the sky (appears as objects launch) */}
      <Moon frameNumber={IMPACT_FRAME} />
    </div>
  );
};

const Cloud: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <div style={{
    position: 'absolute',
    left: x,
    top: y,
    width: 100,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 50,
    opacity: 0.8,
    filter: 'blur(2px)'
  }} />
);

const Moon: React.FC<{ frameNumber: number }> = ({ frameNumber }) => {
  const { durationInFrames } = useVideoConfig();
  const opacity = frameNumber < 150 ? 0 : interpolate(frameNumber, [150, 200], [0, 1], { extrapolateRight: 'clamp' });
  
  return (
    <div style={{
      position: 'absolute',
      right: 100,
      top: 80,
      width: 80,
      height: 80,
      backgroundColor: '#F5F5DC',
      borderRadius: '50%',
      boxShadow: '0 0 30px rgba(245, 245, 220, 0.5), inset -2px -2px 5px rgba(0,0,0,0.2)',
      opacity
    }} />
  );
};
