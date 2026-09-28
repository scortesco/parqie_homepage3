import type { ReactNode } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Calendar, CalendarPlain, Check, Search } from '../ui/icons';

export default function Benefits() {
  return (
    <section data-screen-label="Beneficii" className="page-x bg-paper py-section">
      <div className="container-page flex flex-col gap-[clamp(40px,4.5vw,64px)]">
        <SectionHeader
          eyebrow="De ce Parqie"
          title="Parcarea nu mai e la noroc."
          lead="Nu mai pleci de acasă sperând că prinzi un loc liber. Pleci știind că îl ai."
        />
        <div className="grid grid-cols-1 gap-5 three:grid-cols-3">
          <BenefitCard
            dark
            visual={<RouteVisual />}
            title="Fără ture în plus"
            body="Știi unde parchezi înainte să pornești motorul. Gata cu rotitul prin cartier."
          />
          <BenefitCard
            visual={<TimeSlotVisual />}
            title="Locul e al tău"
            body="Îl rezervi din timp, pentru cât ai nevoie. Când ajungi, te așteaptă."
          />
          <BenefitCard
            visual={<StepsVisual />}
            title="Totul dintr-o aplicație"
            body="Cauți, rezervi și plătești din telefon. Fără bonuri și fără automate."
          />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ dark, visual, title, body }: { dark?: boolean; visual: ReactNode; title: string; body: string }) {
  return (
    <div
      className={`flex flex-col rounded-3xl p-3 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 ${
        dark ? 'bg-forest hover:shadow-card-dark' : 'border border-line bg-white hover:shadow-card'
      }`}
    >
      {visual}
      <div className="flex flex-col gap-2.5 px-4 pb-4 pt-6">
        <h3 className={`m-0 text-[22px] font-extrabold leading-[1.2] tracking-[-0.02em] ${dark ? 'text-paper' : 'text-black'}`}>
          {title}
        </h3>
        <p className={`m-0 text-base leading-[1.6] ${dark ? 'text-forest-100' : 'text-muted'}`}>{body}</p>
      </div>
    </div>
  );
}

function RouteVisual() {
  return (
    <div className="flex h-[200px] flex-col justify-between rounded-2xl bg-forest-850 p-5">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold leading-4 text-forest-300">Fără Parqie</span>
        <svg viewBox="0 0 300 54" preserveAspectRatio="none" className="block h-[54px] w-full" aria-hidden="true">
          <path
            d="M8 44 C40 44 44 10 80 10 S118 46 150 40 S176 6 206 14 S226 50 250 38 S282 12 292 26"
            fill="none"
            stroke="#3E6E6E"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="8" cy="44" r="5" fill="#3E6E6E" />
        </svg>
      </div>
      <div className="h-px bg-forest-600" />
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-semibold leading-4 text-lime">Cu Parqie</span>
        <div className="flex items-center">
          <span className="h-2.5 w-2.5 flex-none rounded-full bg-lime" />
          <span className="h-[3px] flex-1 bg-lime" />
          <span className="grid h-9 w-9 flex-none place-items-center rounded-[10px] bg-lime">
            <img src="/assets/logo-mark-green.svg" alt="" className="h-5" />
          </span>
        </div>
      </div>
    </div>
  );
}

function TimeSlotVisual() {
  const ticks = [
    { t: '12:00', cls: 'left-0' },
    { t: '14:00', cls: 'left-[33.33%] -translate-x-1/2' },
    { t: '16:00', cls: 'left-[66.66%] -translate-x-1/2' },
    { t: '18:00', cls: 'right-0' },
  ];
  return (
    <div className="flex h-[200px] flex-col justify-between rounded-2xl bg-mist p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-[13px] font-bold leading-none text-black">
          <Calendar size={14} stroke="#053333" strokeWidth={2.4} />
          Azi
        </span>
        <span className="text-xs font-semibold leading-none text-muted">Centru</span>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="relative h-14 rounded-xl border border-line-soft bg-white">
          <span className="absolute bottom-0 left-[33.33%] top-0 w-px bg-line-soft" />
          <span className="absolute bottom-0 left-[66.66%] top-0 w-px bg-line-soft" />
          <div className="absolute bottom-[5px] left-[calc(33.33%+4px)] top-[5px] flex w-[calc(33.33%-8px)] items-center justify-center gap-[5px] rounded-lg bg-lime text-xs font-bold leading-none text-forest">
            <Check size={12} stroke="#053333" strokeWidth={3.2} />
            Rezervat
          </div>
        </div>
        <div className="relative h-3 whitespace-nowrap text-[11px] font-semibold leading-3 text-muted">
          {ticks.map(({ t, cls }) => (
            <span key={t} className={`absolute ${cls}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepsVisual() {
  const row = 'flex h-12 items-center gap-2.5 rounded-xl px-3';
  const iconBox = 'grid h-7 w-7 flex-none place-items-center rounded-lg';
  return (
    <div className="flex h-[200px] flex-col justify-center gap-2 rounded-2xl bg-mist p-4">
      <div className={`${row} border border-line-soft bg-white`}>
        <span className={`${iconBox} bg-mist`}>
          <Search size={14} stroke="#053333" strokeWidth={2.4} />
        </span>
        <span className="flex-1 text-[13px] font-bold leading-[1.2] text-black">Cauți</span>
        <span className="text-xs font-medium leading-none text-muted">Centru, azi</span>
      </div>
      <div className={`${row} border border-line-soft bg-white`}>
        <span className={`${iconBox} bg-mist`}>
          <CalendarPlain size={14} stroke="#053333" strokeWidth={2.4} />
        </span>
        <span className="flex-1 text-[13px] font-bold leading-[1.2] text-black">Rezervi</span>
        <span className="text-xs font-medium leading-none text-muted">Locul nr. 12</span>
      </div>
      <div className={`${row} bg-forest`}>
        <span className={`${iconBox} bg-lime`}>
          <Check size={14} stroke="#053333" strokeWidth={3} />
        </span>
        <span className="flex-1 text-[13px] font-bold leading-[1.2] text-paper">Plătești</span>
        <span className="text-xs font-medium leading-none text-lime">Din aplicație</span>
      </div>
    </div>
  );
}
