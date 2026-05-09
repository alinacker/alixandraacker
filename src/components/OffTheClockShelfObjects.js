import React from 'react';

const Lamp = ({ on, flicker }) => {
  const intensity = on ? 0.85 + flicker * 0.25 : 0;

  return (
    <g style={{ transformOrigin: '120px 200px' }}>
      {on && (
        <>
          <ellipse
            cx="120"
            cy="205"
            rx={150 + flicker * 10}
            ry="28"
            fill="url(#lampPool)"
            opacity={0.9 * intensity}
            className="lamp-blend"
          />
          <circle
            cx="120"
            cy="120"
            r={70 + flicker * 6}
            fill="url(#lampHaloOuter)"
            opacity={0.55 * intensity}
            className="lamp-blend"
          />
          <circle
            cx="120"
            cy="120"
            r={42 + flicker * 4}
            fill="url(#lampHaloInner)"
            opacity={0.85 * intensity}
            className="lamp-blend"
          />
        </>
      )}
      <path
        d="M 88 110 Q 120 88 152 110 L 148 138 Q 120 130 92 138 Z"
        fill={on ? 'hsl(42, 78%, 68%)' : '#c9a96a'}
      />
      <path
        d="M 92 138 Q 120 130 148 138 L 146 142 Q 120 134 94 142 Z"
        fill="#7a5a2a"
        opacity="0.5"
      />
      {on && (
        <ellipse
          cx="120"
          cy="138"
          rx="22"
          ry="7"
          fill="hsl(48, 100%, 75%)"
          opacity={0.9 * intensity}
          className="lamp-blend"
        />
      )}
      <rect x="118" y="138" width="4" height="50" fill="#2a2a2a" />
      <ellipse cx="120" cy="190" rx="22" ry="6" fill="#1f1f1f" />
      <path d="M 100 188 Q 120 184 140 188 L 138 192 Q 120 196 102 192 Z" fill="#2a2a2a" />
    </g>
  );
};

const PlantMonstera = ({ wiggle }) => {
  const sway = wiggle * 4;

  return (
    <g>
      <path d="M 60 175 L 64 200 L 96 200 L 100 175 Z" fill="#8a4a2a" />
      <path d="M 60 175 L 100 175 L 98 178 L 62 178 Z" fill="#6a3520" />
      <ellipse cx="80" cy="175" rx="20" ry="3" fill="#3a1a10" opacity="0.5" />
      <ellipse cx="80" cy="175" rx="18" ry="2.5" fill="#3a2418" />
      <g
        className="plant-wiggle"
        style={{ transformOrigin: '80px 175px', transform: `rotate(${sway}deg)` }}
      >
        <path d="M 80 175 Q 78 150 70 130" stroke="#3a5a2a" strokeWidth="2.5" fill="none" />
        <path d="M 80 175 Q 84 145 92 120" stroke="#3a5a2a" strokeWidth="2.5" fill="none" />
        <path d="M 80 175 Q 80 155 78 135" stroke="#3a5a2a" strokeWidth="2.5" fill="none" />
        <g transform="translate(70 130)">
          <path d="M 0 0 Q -18 -10 -22 -28 Q -10 -38 4 -32 Q 12 -20 8 -4 Z" fill="#2d5a35" />
          <path d="M -4 -8 L -10 -14 M -8 -18 L -14 -22 M -2 -22 L -8 -28" stroke="#1a3520" strokeWidth="1.5" fill="none" />
          <path d="M 0 0 Q -2 -12 -4 -22" stroke="#1a3520" strokeWidth="1" fill="none" />
        </g>
        <g transform="translate(92 120)">
          <path d="M 0 0 Q 16 -8 24 -28 Q 14 -42 -2 -34 Q -10 -18 -4 -2 Z" fill="#3a6a40" />
          <path d="M 4 -8 L 12 -14 M 8 -18 L 16 -22 M 4 -24 L 12 -30" stroke="#1a3520" strokeWidth="1.5" fill="none" />
        </g>
        <g transform="translate(78 135)">
          <path d="M 0 0 Q -10 -6 -12 -20 Q -4 -28 6 -22 Q 10 -12 6 -2 Z" fill="#4a7a48" />
        </g>
      </g>
    </g>
  );
};

const PlantSnake = ({ wiggle }) => {
  const sway = wiggle * 3;

  return (
    <g>
      <path d="M 62 175 L 66 200 L 94 200 L 98 175 Z" fill="#c9a073" />
      <path d="M 62 175 L 98 175 L 96 178 L 64 178 Z" fill="#a07a55" />
      <ellipse cx="80" cy="175" rx="17" ry="2.5" fill="#3a2418" />
      <g
        className="plant-wiggle"
        style={{ transformOrigin: '80px 175px', transform: `rotate(${sway}deg)` }}
      >
        <path d="M 78 175 Q 76 145 75 110 Q 78 105 81 110 Q 80 145 82 175 Z" fill="#3a6a3a" />
        <path d="M 75 110 Q 78 105 81 110" stroke="#d4c266" strokeWidth="1" fill="none" />
        <path d="M 72 175 Q 70 150 68 125 Q 71 120 74 125 Q 73 150 76 175 Z" fill="#2d5530" />
        <path d="M 84 175 Q 86 148 88 118 Q 91 113 94 118 Q 92 148 88 175 Z" fill="#4a7a45" />
        <path d="M 88 118 Q 91 113 94 118" stroke="#d4c266" strokeWidth="1" fill="none" />
        <path d="M 80 175 Q 80 155 79 135 Q 81 132 83 135 Q 82 155 83 175 Z" fill="#3a6a3a" />
        <path d="M 76 130 L 81 130 M 70 145 L 75 145 M 86 140 L 92 140" stroke="#1a3520" strokeWidth="0.6" fill="none" opacity="0.5" />
      </g>
    </g>
  );
};

const PlantFern = ({ wiggle }) => {
  const sway = wiggle * 5;
  const fronds = [0, 1, 2, 3, 4, 5, 6];
  const leafSteps = [0.2, 0.35, 0.5, 0.65, 0.8];

  return (
    <g>
      <path d="M 62 175 L 66 200 L 94 200 L 98 175 Z" fill="#5a3a28" />
      <path d="M 62 175 L 98 175 L 96 178 L 64 178 Z" fill="#3a2418" />
      <ellipse cx="80" cy="175" rx="17" ry="2.5" fill="#2a1810" />
      <g
        className="plant-wiggle"
        style={{ transformOrigin: '80px 175px', transform: `rotate(${sway}deg)` }}
      >
        {fronds.map((item) => {
          const angle = -75 + item * 25;
          const len = 45 + (item % 2) * 8;

          return (
            <g key={item} transform={`translate(80 174) rotate(${angle})`}>
              <path d={`M 0 0 Q -2 -${len * 0.5} 0 -${len}`} stroke="#3a6a3a" strokeWidth="1.5" fill="none" />
              {leafSteps.map((step) => {
                const y = -len * step;
                const size = 4 + Math.sin(step * Math.PI) * 4;

                return (
                  <g key={step}>
                    <ellipse cx={-size * 0.7} cy={y} rx={size} ry={size * 0.5} fill="#4a8048" transform={`rotate(-30 ${-size * 0.7} ${y})`} />
                    <ellipse cx={size * 0.7} cy={y} rx={size} ry={size * 0.5} fill="#4a8048" transform={`rotate(30 ${size * 0.7} ${y})`} />
                  </g>
                );
              })}
            </g>
          );
        })}
      </g>
    </g>
  );
};

const PlantSucculent = ({ wiggle }) => {
  const pulse = 1 + wiggle * 0.04;
  const outerLeaves = [0, 60, 120, 180, 240, 300];
  const innerLeaves = [30, 90, 150, 210, 270, 330];

  return (
    <g>
      <path d="M 60 175 L 65 200 L 95 200 L 100 175 Z" fill="#d4a574" />
      <path d="M 60 175 L 100 175 L 98 178 L 62 178 Z" fill="#a87a45" />
      <ellipse cx="80" cy="175" rx="19" ry="3" fill="#3a2418" />
      <g
        className="plant-wiggle"
        style={{ transformOrigin: '80px 170px', transform: `scale(${pulse})` }}
      >
        {outerLeaves.map((deg) => (
          <g key={deg} transform={`translate(80 170) rotate(${deg})`}>
            <ellipse cx="0" cy="-12" rx="6" ry="11" fill="#6a8a55" />
            <ellipse cx="0" cy="-14" rx="4" ry="8" fill="#85a570" />
          </g>
        ))}
        {innerLeaves.map((deg) => (
          <g key={deg} transform={`translate(80 170) rotate(${deg})`}>
            <ellipse cx="0" cy="-7" rx="4" ry="8" fill="#7a9a65" />
          </g>
        ))}
        <circle cx="80" cy="170" r="3" fill="#9ab885" />
      </g>
    </g>
  );
};

const Plant = ({ species, wiggle }) => {
  if (species === 'snake') return <PlantSnake wiggle={wiggle} />;
  if (species === 'fern') return <PlantFern wiggle={wiggle} />;
  if (species === 'succulent') return <PlantSucculent wiggle={wiggle} />;
  return <PlantMonstera wiggle={wiggle} />;
};

const handleToggleKeyDown = (event, onToggle) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  onToggle();
};

const ShelfObjects = ({
  lampOn,
  flicker,
  plantSpecies,
  plantWiggle,
  onLampToggle,
  onPlantHover,
}) => (
  <div className="shelf-objects-bottom">
    <svg viewBox="0 0 280 205" className="shelf-objects-svg" preserveAspectRatio="xMidYMax meet">
      <defs>
        <radialGradient id="lampHaloOuter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(42, 100%, 75%)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(42, 100%, 75%)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lampHaloInner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(50, 100%, 88%)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="hsl(42, 100%, 75%)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lampPool" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(40, 95%, 70%)" stopOpacity="0.9" />
          <stop offset="40%" stopColor="hsl(38, 90%, 60%)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="hsl(36, 85%, 50%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g transform="translate(20 0)" onMouseEnter={onPlantHover} className="plant-scene">
        <Plant species={plantSpecies} wiggle={plantWiggle} />
      </g>

      <g
        transform="translate(125 0)"
        onClick={onLampToggle}
        className="lamp-toggle"
        role="button"
        tabIndex="0"
        aria-pressed={lampOn}
        aria-label="Toggle bookshelf lamp"
        onKeyDown={(event) => handleToggleKeyDown(event, onLampToggle)}
      >
        <Lamp on={lampOn} flicker={flicker} />
      </g>
    </svg>
  </div>
);

export default ShelfObjects;
