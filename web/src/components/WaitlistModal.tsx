import { useEffect, useRef } from 'react';
import { useWaitlist } from '../store/waitlist';
import { Check, Close } from './ui/icons';

const inputCls =
  'h-[52px] rounded-[15px] border bg-white px-4 text-base font-medium leading-6 text-black';

export default function WaitlistModal() {
  const s = useWaitlist();
  const emailRef = useRef<HTMLInputElement>(null);
  const { open, closeModal } = s;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && closeModal();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    emailRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeModal]);

  if (!open) return null;

  const done = s.status === 'done';
  const submitting = s.status === 'submitting';

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(3,30,30,0.78)] p-5"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-[460px] flex-col gap-[18px] rounded-3xl bg-white p-[clamp(24px,4vw,36px)] shadow-card"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Închide"
          className="absolute right-4 top-4 grid h-9 w-9 cursor-pointer place-items-center rounded-full border-0 bg-[#F1F3F3]"
        >
          <Close size={16} stroke="#000" strokeWidth={2.2} />
        </button>

        {!done ? (
          <form
            className="flex flex-col gap-[18px]"
            onSubmit={(e) => {
              e.preventDefault();
              void s.submit();
            }}
            noValidate
          >
            <div className="flex flex-col gap-2 pr-10">
              <h3 id="waitlist-title" className="m-0 text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black">
                Mai e un pas.
              </h3>
              <p className="m-0 text-[15px] leading-[1.55] text-muted">
                Lasă-ne e-mailul și îți scriem primii când Parqie pornește în zona ta.
              </p>
            </div>
            <label className="flex flex-col gap-1.5 text-[13px] font-bold leading-[18px] text-black">
              Unde ai nevoie de parcare
              <input
                value={s.location}
                onChange={(e) => s.setLocation(e.target.value)}
                placeholder="Strada sau cartierul"
                className={`${inputCls} border-line-input`}
              />
            </label>
            <label className="flex flex-col gap-1.5 text-[13px] font-bold leading-[18px] text-black">
              E-mail
              <input
                ref={emailRef}
                type="email"
                autoComplete="email"
                value={s.email}
                onChange={(e) => s.setEmail(e.target.value)}
                placeholder="nume@exemplu.md"
                aria-invalid={!!s.error}
                aria-describedby={s.error ? 'waitlist-error' : undefined}
                className={`${inputCls} ${s.error ? 'border-danger' : 'border-line-input'}`}
              />
            </label>
            {s.error && (
              <span id="waitlist-error" role="alert" className="-mt-2.5 text-[13px] font-medium leading-[18px] text-danger">
                {s.error}
              </span>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="h-14 cursor-pointer rounded-[20px] border-0 bg-lime text-[15px] font-bold leading-5 text-black transition-colors duration-200 ease-out hover:bg-lime-hover disabled:cursor-wait disabled:opacity-70"
            >
              {submitting ? 'Te înscriem…' : 'Intră pe lista de așteptare'}
            </button>
            <span className="text-center text-xs leading-[18px] text-muted">
              E gratuit. Îți scriem doar când avem ceva important de spus.
            </span>
          </form>
        ) : (
          <div className="flex flex-col items-start gap-4 py-2">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-lime">
              <Check size={28} stroke="#053333" strokeWidth={2.6} />
            </span>
            <h3 id="waitlist-title" className="m-0 text-[28px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black">
              Gata, ești pe listă.
            </h3>
            <p className="m-0 text-base leading-[1.55] text-muted">
              {s.confirmedLocation
                ? `Am notat ${s.confirmedLocation}. Când Parqie pornește acolo, afli primul.`
                : 'Când pornim în Chișinău, afli primul.'}
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-2 h-12 cursor-pointer rounded-[15px] border-2 border-forest bg-transparent px-6 text-sm font-bold leading-5 text-forest"
            >
              Închide
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
