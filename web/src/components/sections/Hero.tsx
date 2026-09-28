import { useWaitlist } from '../../store/waitlist';
import Pin3D from '../Pin3D';
import { ArrowDown, ArrowRight, Check, MapPin } from '../ui/icons';

const HEADLINE = ['Pleci de acasă cu ', 'parcarea deja rezolvată.'] as const;

const STARS = [
  '40px 70px 0 rgba(249,249,249,.35)',
  '130px 24px 0 rgba(249,249,249,.18)',
  '470px 60px 0 rgba(172,255,120,.45)',
  '540px 250px 0 rgba(249,249,249,.25)',
  '30px 330px 0 rgba(249,249,249,.2)',
  '330px 16px 0 rgba(172,255,120,.35)',
  '520px 430px 0 rgba(249,249,249,.3)',
  '100px 520px 0 rgba(172,255,120,.3)',
  '150px 200px 0 rgba(249,249,249,.16)',
  '400px 540px 0 rgba(249,249,249,.22)',
  '560px 120px 0 rgba(249,249,249,.18)',
  '250px 560px 0 rgba(249,249,249,.14)',
].join(',');

export default function Hero() {
  const address = useWaitlist((s) => s.heroAddress);
  const setAddress = useWaitlist((s) => s.setHeroAddress);
  const openModal = useWaitlist((s) => s.openModal);
  const submit = () => openModal({ source: 'hero', location: address });

  return (
    <section
      id="top"
      data-screen-label="Hero"
      className="page-x relative overflow-hidden bg-forest pb-[clamp(64px,7vw,88px)] pt-[clamp(48px,6vw,72px)]"
    >
      {/* Ambient glow + orbit rings */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 60% at 78% 62%, #0B4A45 0%, rgba(5,51,51,0) 70%)' }}
      />
      <div className="pointer-events-none absolute left-[calc(50%+20px)] top-[-460px] h-[1500px] w-[1500px] rounded-full border border-[rgba(172,255,120,0.16)]" />
      <div className="pointer-events-none absolute left-[calc(50%+180px)] top-[-300px] h-[1500px] w-[1500px] rounded-full border border-[rgba(172,255,120,0.07)]" />

      <div className="container-page relative grid min-h-[clamp(560px,calc(100vh_-_234px),720px)] grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))] items-center gap-[clamp(40px,5vw,72px)]">
        <div className="flex min-w-0 max-w-[600px] flex-col gap-7">
          <div className="flex">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.14] bg-white/[0.06] py-[7px] pl-3 pr-4 text-sm font-semibold leading-[18px] text-paper">
              <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_0_4px_rgba(172,255,120,0.18)]" />
              Lansăm în curând în Chișinău
            </span>
          </div>

          <h1 className="m-0 text-balance text-[clamp(44px,5.6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
            {HEADLINE[0]}
            <span className="text-lime">{HEADLINE[1]}</span>
          </h1>

          <p className="m-0 max-w-[520px] text-pretty text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-forest-100">
            Găsești, rezervi și plătești locul înainte să ajungi. Spune-ne unde ai nevoie de parcare și acolo ajungem
            primii.
          </p>

          <div className="flex max-w-[580px] flex-col gap-3">
            <label htmlFor="hero-addr" className="text-sm font-bold leading-5 text-paper">
              Unde ai nevoie de parcare?
            </label>
            <div className="flex flex-wrap gap-2 rounded-[20px] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <div className="flex min-w-0 flex-[999_1_220px] items-center gap-2.5 px-3">
                <MapPin size={22} stroke="#053333" strokeWidth={1.8} className="flex-none" />
                <input
                  id="hero-addr"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="Strada sau cartierul"
                  className="h-[52px] min-w-0 flex-1 border-0 bg-transparent px-0.5 text-[17px] font-medium leading-6 text-black outline-none"
                />
              </div>
              <button
                type="button"
                onClick={submit}
                className="btn-press flex h-14 max-w-full flex-[1_0_200px] cursor-pointer items-center justify-center gap-2 rounded-[15px] border-0 bg-lime px-[26px] text-[15px] font-bold leading-5 text-black transition-colors duration-200 ease-out hover:bg-lime-hover"
              >
                Vreau Parqie aici
                <ArrowRight size={18} stroke="#000" />
              </button>
            </div>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-2">
              {['Acces prioritar la lansare', 'Gratuit, fără obligații'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-sm font-medium leading-5 text-forest-100">
                  <Check size={16} stroke="#ACFF78" strokeWidth={2.6} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <a
            href="#cum"
            className="inline-flex items-center gap-2.5 self-start text-[15px] font-bold leading-5 text-paper transition-colors hover:text-lime"
          >
            <span className="grid h-[34px] w-[34px] place-items-center rounded-full border-[1.5px] border-[rgba(249,249,249,0.4)]">
              <ArrowDown size={14} strokeWidth={2.2} />
            </span>
            Vezi cum funcționează
          </a>
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-[600px] justify-self-center">
      <div
        className="absolute bottom-[14%] left-[14%] right-[14%] top-[18%] rounded-full motion-safe:animate-glow"
        style={{ background: 'radial-gradient(closest-side, rgba(172,255,120,0.30), rgba(172,255,120,0) 100%)' }}
      />
      <div className="absolute left-[3px] top-[3px] h-0.5 w-0.5 rounded-full" style={{ boxShadow: STARS }} />

      {/* Parking bays in perspective: neutral · lit · neutral */}
      <div className="absolute bottom-[1%] left-0 right-0 h-[36%]" style={{ perspective: 760 }}>
        <div className="absolute inset-0 flex" style={{ transform: 'rotateX(58deg)', transformOrigin: '50% 100%' }}>
          <div className="flex-1 rounded-tl-md border-l-[3px] border-t-[3px] border-forest-500" />
          <div
            className="flex-1 rounded-t border-[3px] border-b-0 border-lime"
            style={{
              boxShadow: '0 0 22px rgba(172,255,120,0.55), inset 0 0 22px rgba(172,255,120,0.35)',
              background: 'radial-gradient(ellipse 70% 80% at 50% 60%, rgba(172,255,120,0.4), rgba(172,255,120,0) 100%)',
            }}
          />
          <div className="flex-1 rounded-tr-md border-r-[3px] border-t-[3px] border-forest-500" />
        </div>
      </div>

      {/* Light beam rising from the lit bay */}
      <div
        className="pointer-events-none absolute bottom-[6%] left-[33%] right-[33%] top-[40%] blur-[14px]"
        style={{
          borderRadius: '40% 40% 8% 8%',
          background: 'linear-gradient(0deg, rgba(172,255,120,0.26), rgba(172,255,120,0) 100%)',
        }}
      />
      {/* Pin shadow */}
      <div
        className="absolute bottom-[10%] left-[37%] right-[37%] h-[5%] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgba(0,0,0,0.55), rgba(0,0,0,0))' }}
      />

      <div className="absolute left-[30%] top-[21%] h-[45.5%] w-[40%]" style={{ perspective: 1400 }}>
        <Pin3D variant="dark" />
      </div>
    </div>
  );
}
