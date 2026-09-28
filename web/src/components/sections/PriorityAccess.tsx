import { useWaitlist } from '../../store/waitlist';
import { CheckBadge } from '../ui/icons';

const PERKS = ['Intri în aplicație înaintea celorlalți', 'Afli primul când și unde pornim', 'Ne ajuți să alegem primele zone'];

export default function PriorityAccess() {
  const email = useWaitlist((s) => s.priorityEmail);
  const setEmail = useWaitlist((s) => s.setPriorityEmail);
  const address = useWaitlist((s) => s.heroAddress);
  const openModal = useWaitlist((s) => s.openModal);
  const submit = () => openModal({ source: 'priority', location: address, email });

  return (
    <section data-screen-label="Acces prioritar" className="page-x bg-white pb-section">
      <div className="container-page grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,5vw,72px)] rounded-[32px] bg-lime p-[clamp(32px,5vw,64px)]">
        <div className="flex min-w-0 flex-col gap-6">
          <div className="flex">
            <span className="rounded-full bg-forest px-3.5 py-2 text-[13px] font-bold leading-4 text-lime">Acces prioritar</span>
          </div>
          <h2 className="m-0 text-balance text-[clamp(34px,4.2vw,54px)] font-extrabold leading-[1.04] tracking-[-0.04em] text-black">
            Fii printre primii care parchează cu Parqie.
          </h2>
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {PERKS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-base font-semibold leading-[1.4] text-forest">
                <CheckBadge size={24} iconSize={12} bg="#053333" fg="#ACFF78" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex max-w-[540px] flex-col gap-2.5">
            <div className="flex flex-wrap gap-2 rounded-[20px] bg-white p-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder="Adresa ta de e-mail"
                aria-label="Adresa ta de e-mail"
                className="h-[52px] min-w-0 flex-[999_1_200px] border-0 bg-transparent px-3.5 text-base font-medium leading-6 text-black outline-none"
              />
              <button
                type="button"
                onClick={submit}
                className="btn-press h-[52px] flex-[1_0_200px] cursor-pointer rounded-[15px] border-0 bg-forest px-[22px] text-[15px] font-bold leading-5 text-paper transition-colors duration-200 ease-out hover:bg-black"
              >
                Vreau acces prioritar
              </button>
            </div>
            <span className="text-[13px] font-medium leading-[18px] text-forest">
              Gratuit. Îți scriem doar când avem ceva important.
            </span>
          </div>
        </div>

        <div className="flex justify-center py-3">
          <PriorityPass />
        </div>
      </div>
    </section>
  );
}

const BARCODE =
  'repeating-linear-gradient(90deg,#F9F9F9 0 2px,transparent 2px 5px,#F9F9F9 5px 6px,transparent 6px 9px,#F9F9F9 9px 12px,transparent 12px 14px,#F9F9F9 14px 15px,transparent 15px 19px)';

function PriorityPass() {
  const fields = [
    { k: 'Oraș', v: 'Chișinău' },
    { k: 'Cost', v: 'Gratuit' },
    { k: 'Titular', v: 'Tu', accent: true },
    { k: 'Intri', v: 'Înaintea tuturor' },
  ];
  return (
    <div
      aria-hidden="true"
      className="flex w-full max-w-[380px] -rotate-3 flex-col overflow-hidden rounded-3xl bg-forest shadow-[0_30px_60px_rgba(5,51,51,0.35)]"
    >
      <div className="flex flex-col gap-[26px] px-[26px] pb-6 pt-[26px]">
        <div className="flex items-center justify-between gap-3">
          <img src="/assets/parqie-logo.png" alt="" className="h-6" />
          <span className="whitespace-nowrap rounded-full border-[1.5px] border-lime px-[11px] py-1.5 text-[11px] font-bold leading-none text-lime">
            Acces prioritar
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold leading-none text-forest-300">Valabil pentru</span>
          <span className="whitespace-nowrap text-[clamp(32px,3.2vw,42px)] font-extrabold leading-none tracking-[-0.04em] text-paper">
            Primul val
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-[18px]">
          {fields.map((f) => (
            <div key={f.k} className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold leading-none text-forest-300">{f.k}</span>
              <span className={`text-[15px] font-bold leading-[1.2] ${f.accent ? 'text-lime' : 'text-paper'}`}>{f.v}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Tear line with half-circle notches (intentionally clipped by the card edge). */}
      <div className="-mx-3.5 flex items-center">
        <span className="h-7 w-7 flex-none rounded-full bg-lime" />
        <span className="mx-2.5 h-0.5 flex-1 bg-forest-700" />
        <span className="h-7 w-7 flex-none rounded-full bg-lime" />
      </div>
      <div className="flex items-center gap-[18px] px-[26px] pb-6 pt-5">
        <div className="h-[46px] flex-1 rounded-sm opacity-85" style={{ background: BARCODE }} />
        <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-lime">
          <img src="/assets/logo-mark-green.svg" alt="" className="h-7" />
        </span>
      </div>
    </div>
  );
}
