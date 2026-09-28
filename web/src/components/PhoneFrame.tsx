import type { CSSProperties, ReactNode } from 'react';

const FRAME_BG = 'linear-gradient(150deg,#56605F 0%,#1B2121 30%,#0E1212 65%,#434D4C 100%)';
const SIDE_BUTTONS = [
  { side: 'left', top: 118, h: 30 },
  { side: 'left', top: 166, h: 54 },
  { side: 'left', top: 230, h: 54 },
  { side: 'right', top: 180, h: 84 },
] as const;

/** 280×580 iPhone-style frame. Children render inside the rounded screen. */
export default function PhoneFrame({
  style,
  screenBg,
  shadowAlpha = 0.45,
  children,
}: {
  style: CSSProperties;
  screenBg: string;
  shadowAlpha?: number;
  children: ReactNode;
}) {
  return (
    <div
      className="absolute h-[580px] w-[280px] rounded-[52px] p-1"
      style={{ ...style, background: FRAME_BG, boxShadow: `0 40px 80px rgba(0,0,0,${shadowAlpha})` }}
    >
      {SIDE_BUTTONS.map((b, i) => (
        <span
          key={i}
          className="absolute w-[3px] rounded-sm bg-[#2E3636]"
          style={{ [b.side]: -3, top: b.top, height: b.h }}
        />
      ))}
      <div className="relative h-full w-full rounded-[48px] bg-[#050707] p-[9px]">
        <div className="absolute left-1/2 top-[19px] z-[2] -ml-[46px] h-[27px] w-[92px] rounded-full bg-black" />
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[39px]" style={{ background: screenBg }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatusBar({ color }: { color: string }) {
  const dim = color === '#000' ? 0.4 : 0.5;
  return (
    <div
      className="flex h-[50px] flex-none items-center justify-between pb-0 pl-[30px] pr-[26px] pt-1 text-[15px] font-bold leading-none"
      style={{ color }}
    >
      <span>9:41</span>
      <span className="flex items-center gap-[5px]">
        <svg width="17" height="11" viewBox="0 0 17 11" fill={color} aria-hidden="true">
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13.5" y="0" width="3" height="11" rx="1" />
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12" aria-hidden="true">
          <rect x="0.5" y="0.5" width="20" height="11" rx="3.2" fill="none" stroke={color} opacity={dim} />
          <rect x="2" y="2" width="15" height="8" rx="2" fill={color} />
          <rect x="21.5" y="4" width="1.8" height="4" rx="0.8" fill={color} opacity={dim} />
        </svg>
      </span>
    </div>
  );
}

export function HomeIndicator({ color }: { color: string }) {
  return <span className="absolute bottom-[7px] left-1/2 -ml-[54px] h-1 w-[108px] rounded-full" style={{ background: color }} />;
}
