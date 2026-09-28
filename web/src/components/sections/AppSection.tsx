import { useElementWidth } from '../../lib/useElementWidth';
import PhoneFrame, { HomeIndicator, StatusBar } from '../PhoneFrame';
import {
  AppleLogo,
  ArrowRight,
  Bell,
  Calendar,
  Check,
  CheckBadge,
  ChevronLeft,
  GooglePlayLogo,
  Navigation,
  Search,
  User,
} from '../ui/icons';

const STAGE_W = 600;
const STAGE_H = 680;

export default function AppSection() {
  return (
    <section id="aplicatie" data-screen-label="Aplicația" className="page-x relative overflow-hidden bg-forest py-section">
      <div className="container-page relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-[clamp(48px,5vw,72px)]">
        <div className="flex min-w-0 flex-col gap-[clamp(28px,3vw,40px)]">
          <div className="flex flex-col gap-4">
            {['Știi unde parchezi.', 'Știi cât costă.', 'Știi că ai loc.'].map((t, i) => (
              <div key={t} className="flex items-center gap-4">
                <CheckBadge size={40} iconSize={20} bg="#ACFF78" fg="#053333" strokeWidth={2.8} />
                <span
                  className={`text-[clamp(30px,3.8vw,50px)] font-extrabold leading-[1.05] tracking-[-0.04em] ${
                    i === 2 ? 'text-lime' : 'text-paper'
                  }`}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
          <div className="h-px bg-forest-600" />
          <div className="flex flex-col gap-3">
            <h2 className="m-0 text-[clamp(24px,2.3vw,30px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-paper">
              Parqie vine pe iPhone și Android.
            </h2>
            <p className="m-0 max-w-[460px] text-[17px] leading-[1.6] text-forest-100">
              Precomandă aplicația acum și o ai în telefon din prima zi.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>
        </div>

        <PhoneStage />
      </div>
    </section>
  );
}

export function StoreButton({ store, size = 'lg', href = '#' }: { store: 'apple' | 'google'; size?: 'lg' | 'sm'; href?: string }) {
  const lg = size === 'lg';
  const apple = store === 'apple';
  return (
    <a
      href={href}
      className={`flex items-center border border-[#3A4444] bg-black text-white transition-colors duration-200 ease-out hover:border-lime hover:text-white ${
        lg ? 'h-[60px] gap-3 rounded-[14px] pl-[18px] pr-[22px]' : 'h-12 w-[176px] gap-2.5 rounded-[10px] pl-3 pr-3.5'
      }`}
    >
      {apple ? <AppleLogo size={lg ? 26 : 20} /> : <GooglePlayLogo size={lg ? 24 : 18} />}
      <span className={`flex flex-col ${lg ? 'gap-[3px]' : 'gap-0.5'}`}>
        <span className={`font-medium leading-none ${lg ? 'text-[11px]' : 'text-[10px]'}`}>
          {apple ? 'Precomandă pe' : 'Pre-înregistrare pe'}
        </span>
        <span className={`font-bold leading-none ${lg ? 'text-[19px] tracking-[-0.01em]' : 'text-[15px]'}`}>
          {apple ? 'App Store' : 'Google Play'}
        </span>
      </span>
    </a>
  );
}

function PhoneStage() {
  const [ref, width] = useElementWidth<HTMLDivElement>(STAGE_W);
  const scale = Math.min(1, width / STAGE_W);

  return (
    <div ref={ref} className="relative w-full min-w-0" style={{ height: Math.round(STAGE_H * scale) }} aria-hidden="true">
      <div
        className="absolute left-1/2 top-0"
        style={{ width: STAGE_W, height: STAGE_H, marginLeft: -STAGE_W / 2, transform: `scale(${scale})`, transformOrigin: '50% 0' }}
      >
        <div
          className="absolute bottom-10 left-10 right-10 top-[120px] rounded-full"
          style={{ background: 'radial-gradient(closest-side, rgba(172,255,120,0.22), rgba(172,255,120,0))' }}
        />
        <PhoneFrame style={{ left: 10, top: 92 }} screenBg="#F9F9F9">
          <SearchScreen />
        </PhoneFrame>
        <PhoneFrame style={{ left: 310, top: 0 }} screenBg="#053333" shadowAlpha={0.5}>
          <BookingScreen />
        </PhoneFrame>
      </div>
    </div>
  );
}

function TabBar({ active, dark }: { active: 0 | 1; dark?: boolean }) {
  const tabs = [
    { label: 'Caută', Icon: Search },
    { label: 'Rezervări', Icon: Calendar },
    { label: 'Cont', Icon: User },
  ];
  const on = dark ? '#ACFF78' : '#053333';
  const off = dark ? '#6F9393' : '#8A9594';
  return (
    <div
      className={`mt-auto grid h-[70px] flex-none grid-cols-3 border-t px-2 pt-2.5 ${
        dark ? 'border-forest-700 bg-forest' : 'border-line bg-white'
      }`}
    >
      {tabs.map(({ label, Icon }, i) => {
        const isOn = i === active;
        return (
          <span
            key={label}
            className={`flex flex-col items-center gap-1 text-[10px] leading-none ${isOn ? 'font-bold' : 'font-semibold'}`}
            style={{ color: isOn ? on : off }}
          >
            <Icon size={20} stroke={isOn ? on : off} strokeWidth={isOn ? 2.2 : 2} />
            {label}
          </span>
        );
      })}
    </div>
  );
}

function SearchScreen() {
  return (
    <>
      <StatusBar color="#000" />
      <div className="flex flex-col gap-3.5 px-4 pt-2.5">
        <div className="flex items-center justify-between">
          <span className="grid h-9 w-9 place-items-center rounded-[11px] bg-forest">
            <img src="/assets/logo-mark-lime.svg" alt="" className="h-5" />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-mist-3">
            <Bell size={17} stroke="#053333" />
          </span>
        </div>
        <div className="text-[25px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black">Unde mergi azi?</div>
        <div className="flex h-12 items-center gap-[9px] rounded-[14px] border-2 border-forest bg-white px-3 text-sm font-semibold leading-none text-black">
          <Search size={17} stroke="#053333" strokeWidth={2.4} />
          Centru, Chișinău
        </div>
        <div className="flex h-10 gap-1 rounded-xl bg-mist-3 p-1">
          <span className="grid flex-1 place-items-center rounded-[9px] bg-white text-xs font-bold leading-none text-black shadow-[0_1px_2px_rgba(5,51,51,0.1)]">
            Azi
          </span>
          <span className="grid flex-1 place-items-center text-xs font-semibold leading-none text-muted">Mâine</span>
          <span className="grid flex-1 place-items-center text-xs font-semibold leading-none text-muted">Altă zi</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 rounded-[14px] border border-line-soft bg-white px-3.5 py-3">
          <div className="flex flex-col gap-[5px]">
            <span className="text-[11px] font-semibold leading-none text-muted">De la</span>
            <span className="text-lg font-extrabold leading-none text-black">14:00</span>
          </div>
          <ArrowRight size={16} stroke="#053333" strokeWidth={2.2} />
          <div className="flex flex-col items-end gap-[5px]">
            <span className="text-[11px] font-semibold leading-none text-muted">Până la</span>
            <span className="text-lg font-extrabold leading-none text-black">16:00</span>
          </div>
        </div>
        <div className="grid h-12 place-items-center rounded-full bg-lime text-sm font-bold leading-none text-black">Caută locuri</div>
      </div>
      <TabBar active={0} />
      <HomeIndicator color="#000000" />
    </>
  );
}

function BookingScreen() {
  return (
    <>
      <StatusBar color="#F9F9F9" />
      <div className="flex flex-col gap-3.5 px-4 pt-2">
        <div className="flex items-center gap-2.5">
          <span className="grid h-[34px] w-[34px] flex-none place-items-center rounded-full bg-forest-800">
            <ChevronLeft size={16} stroke="#F9F9F9" strokeWidth={2.4} />
          </span>
          <span className="text-[15px] font-bold leading-none text-paper">Rezervarea ta</span>
        </div>
        <div className="flex flex-col gap-3.5 rounded-[20px] bg-forest-800 p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-[5px] rounded-full bg-lime py-[5px] pl-[7px] pr-2.5 text-[11px] font-bold leading-none text-forest">
              <Check size={11} stroke="#053333" strokeWidth={3.4} />
              Confirmat
            </span>
            <span className="text-xs font-semibold leading-none text-forest-300">Azi</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[28px] font-extrabold leading-none tracking-[-0.03em] text-paper">14:00–16:00</span>
            <span className="text-[13px] font-medium leading-[1.2] text-forest-300">2 ore · Centru, Chișinău</span>
          </div>
          <div className="h-px bg-forest-600" />
          <div className="flex justify-between text-[13px] font-medium leading-none">
            <span className="text-forest-300">Loc</span>
            <span className="font-bold text-paper">Nr. 12</span>
          </div>
          <div className="flex justify-between text-[13px] font-medium leading-none">
            <span className="text-forest-300">Plată</span>
            <span className="font-bold text-lime">Achitat</span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl bg-forest p-2.5">
            <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-[9px] bg-lime">
              <img src="/assets/logo-mark-green.svg" alt="" className="h-[17px]" />
            </span>
            <span className="text-xs font-semibold leading-[1.3] text-paper">Locul e ținut pentru tine până la 14:15</span>
          </div>
        </div>
        <div className="flex h-12 items-center justify-center gap-2 rounded-full bg-lime text-sm font-bold leading-none text-black">
          <Navigation size={16} stroke="#000" strokeWidth={2.2} />
          Pornește navigarea
        </div>
      </div>
      <TabBar active={1} dark />
      <HomeIndicator color="#F9F9F9" />
    </>
  );
}
