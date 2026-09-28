import { memo } from 'react';

type Variant = 'dark' | 'lime';

// The four symmetric pieces of the Parqie pin (assets/pinsym-*-N.png), laid out
// in % of the pin box and pushed apart in Z so the pin reads as 3D.
const PIECES = [
  { i: 1, l: 18.878, t: 1.499, w: 62.245, h: 29.085, z: 36, dx: 0, dy: -6, delay: 0 },
  { i: 2, l: 1.701, t: 16.642, w: 32.993, h: 52.174, z: 24, dx: -6, dy: 0, delay: -1.5 },
  { i: 3, l: 65.306, t: 16.642, w: 32.993, h: 52.174, z: 24, dx: 6, dy: 0, delay: -1.5 },
  { i: 4, l: 21.939, t: 57.571, w: 56.122, h: 40.48, z: 36, dx: 0, dy: 6, delay: -3 },
];

function Pin3D({ variant = 'dark' }: { variant?: Variant }) {
  return (
    <div
      role="img"
      aria-label="Pin Parqie 3D deasupra unui loc de parcare"
      className="absolute inset-0 motion-safe:animate-sway"
      style={{ transformStyle: 'preserve-3d', transform: 'rotateX(4deg) rotateY(-12deg)' }}
    >
      {PIECES.map((p) => (
        <div
          key={p.i}
          className="absolute"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: `${p.w}%`,
            height: `${p.h}%`,
            transform: `translate3d(${p.dx}px,${p.dy}px,${p.z}px)`,
          }}
        >
          <img
            src={`/assets/pinsym-${variant}-${p.i}.png`}
            alt=""
            draggable={false}
            className="block h-full w-full motion-safe:animate-bob"
            style={{ filter: 'drop-shadow(0 22px 26px rgba(0,0,0,0.4))', animationDelay: `${p.delay}s` }}
          />
        </div>
      ))}
    </div>
  );
}

export default memo(Pin3D);
