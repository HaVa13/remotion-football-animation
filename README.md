# Football Animation with Remotion

A Remotion animation project featuring:
- A boy playing with a football on a green pitch
- A big ball impact that launches objects into the sky
- Particles and explosion effects
- Objects traveling toward the moon

## Getting Started

### Installation

```bash
npm install
```

### Development

To preview the animation:

```bash
npm start
```

This will open the Remotion preview at `http://localhost:3000`.

### Building

To render the animation as a video file:

```bash
npm run build
```

## Animation Timeline

- **Frames 0-120 (4 seconds)**: Boy playing with football on the green pitch
- **Frame 120**: Big ball impact
- **Frames 120-180 (2 seconds)**: Explosion effects, particles, and objects launching
- **Frames 180-300 (4 seconds)**: Objects travel toward the moon

## Project Structure

```
src/
├── index.tsx              # Main composition setup
├── components/
│   ├── FootballAnimation.tsx  # Main animation component
│   ├── Boy.tsx               # Boy character
│   ├── Ball.tsx              # Football and launching ball
│   ├── ImpactBall.tsx        # Big impact ball
│   └── Particles.tsx         # Explosion particles and effects
```

## Features

- **Boy Character**: Simple 2D representation that reacts to the impact
- **Football Dynamics**: Ball orbits the boy before being launched
- **Impact Effect**: Big ball creates particles and shock waves
- **Launch Animation**: Objects accelerate upward toward the moon
- **Moon**: Appears as objects reach the sky

## Customization

You can modify:
- Animation timings by changing frame numbers
- Colors in each component
- Character sizes and positions
- Particle effects and speeds
- Camera settings (resolution, FPS, duration)

## Requirements

- Node.js 16+
- npm or yarn
