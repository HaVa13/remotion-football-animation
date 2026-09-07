import React from 'react';
import { Composition } from 'remotion';
import { FootballAnimation } from './components/FootballAnimation';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="FootballAnimation"
      component={FootballAnimation}
      durationInFrames={300}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
