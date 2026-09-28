import { useState } from 'react';
import { useWaitlist } from '../../store/waitlist';
import { ArrowRight, Info, PATH_CHECK, PATH_PLUS } from '../ui/icons';

const ZONES = ['Centru', 'Botanica', 'Rîșcani', 'Buiucani', 'Ciocana', 'Telecentru', 'Sculeni'];
const OTHER = '__other';

export default function Zones() {
  const [zone, setZone] = useState<string | null>(null);
  const [detail, setDetail] = useState('');
  const openModal = useWaitlist((s) => s.openModal);

  const isOther = zone === OTHER;
  const canSubmit = !!zone && (!isOther || detail.trim() !== '');

  const placeholder = isOther
    ? 'Scrie zona sau adresa. Ex: Durlești'
    : zone
      ? `Unde anume în ${zone}? (opțional)`
      : 'Adresa exactă, dacă vrei (opțional)';
  const cta = !zone ? 'Alege mai întâi o zonă' : isOther ? 'Vreau Parqie aici' : `Vreau Parqie în ${zone}`;

  const submit = () => {
    if (!canSubmit) return;
    const location = [isOther ? '' : zone, detail.trim()].filter(Boolean).join(', ');
    openModal({ source: 'zone', location });
  };

  return (
    <section id="zone" data-screen-label="Zone" className="page-x scroll-mt-[74px] bg-paper py-section">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,5vw,72px)]">
        <div className="flex flex-col gap-[22px]">
          <span className="inline-flex items-center gap-2 text-sm font-bold leading-5 text-forest">
            <span className="eyebrow-dot" />
            Tu alegi de unde începem
          </span>
          <h2 className="m-0 text-balance text-[clamp(36px,4.6vw,60px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-black">
            Unde e cel mai greu de parcat?
          </h2>
          <p className="m-0 max-w-[460px] text-pretty text-lg leading-[1.6] text-muted">
            Alege zona care îți dă cele mai mari bătăi de cap. Pornim întâi acolo unde ne cer cei mai mulți șoferi.
          </p>
          <div className="flex max-w-[460px] items-start gap-3 rounded-2xl border border-line bg-white px-[18px] py-4">
            <Info size={20} stroke="#053333" className="mt-px flex-none" />
            <span className="text-sm font-medium leading-[1.55] text-muted">
              Parqie nu funcționează încă în aceste zone. Votul tău ne ajută să decidem de unde pornim.
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] rounded-[28px] border border-line bg-white p-[clamp(20px,2.6vw,32px)] shadow-[0_12px_32px_rgba(5,51,51,0.06)]">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <span className="text-lg font-extrabold leading-6 text-black">Votează zona ta</span>
            <span className="text-[13px] font-medium leading-[18px] text-muted">Alegi una, durează 10 secunde</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 zones4:grid-cols-4" role="radiogroup" aria-label="Zone">
            {ZONES.map((z) => (
              <ZoneTile
                key={z}
                name={z}
                selected={zone === z}
                sub={zone === z ? 'Ales' : 'Votează'}
                iconPath={zone === z ? PATH_CHECK : PATH_PLUS}
                onClick={() => setZone(zone === z ? null : z)}
              />
            ))}
            <ZoneTile
              name="Altă zonă"
              selected={isOther}
              sub="Scrie-o tu"
              iconPath={PATH_PLUS}
              onClick={() => setZone(isOther ? null : OTHER)}
            />
          </div>

          <input
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder={placeholder}
            aria-label={placeholder}
            className="h-[54px] rounded-[15px] border border-line-input bg-white px-4 text-base font-medium leading-6 text-black"
          />
          <button
            type="button"
            onClick={submit}
            disabled={!canSubmit}
            className="flex h-14 items-center justify-center gap-2 rounded-[20px] border-0 text-[15px] font-bold leading-5 transition-colors duration-200 ease-out enabled:cursor-pointer enabled:bg-lime enabled:text-black enabled:hover:bg-lime-hover enabled:active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-[#E8ECEB] disabled:text-[#6A7675]"
          >
            {cta}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ZoneTile({
  name,
  selected,
  sub,
  iconPath,
  onClick,
}: {
  name: string;
  selected: boolean;
  sub: string;
  iconPath: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onClick}
      className={`flex h-20 cursor-pointer flex-col items-start justify-between rounded-2xl border-[1.5px] p-3.5 text-left transition-colors duration-200 ease-out active:scale-[0.98] ${
        selected ? 'border-forest bg-forest' : 'border-[#E1E4E4] bg-white'
      }`}
    >
      <span
        className={`max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold leading-[1.2] ${
          selected ? 'text-paper' : 'text-black'
        }`}
      >
        {name}
      </span>
      <span className={`flex items-center gap-[5px] text-xs font-semibold leading-none ${selected ? 'text-lime' : 'text-muted'}`}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d={iconPath} />
        </svg>
        {sub}
      </span>
    </button>
  );
}
