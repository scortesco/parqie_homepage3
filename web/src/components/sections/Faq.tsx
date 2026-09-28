import { useId, useState } from 'react';
import { useMediaQuery } from '../../lib/useMediaQuery';
import { PATH_MINUS, PATH_PLUS } from '../ui/icons';

const FAQ: [string, string][] = [
  ['Când se lansează Parqie?', 'Pornim în Chișinău în curând. Cei de pe lista de așteptare află primii data exactă și intră înaintea celorlalți.'],
  ['Costă ceva să intru pe listă?', 'Nu. Înscrierea e gratuită și nu te obligă la nimic.'],
  ['În ce zone va funcționa?', 'Începem cu zonele unde ne cer cei mai mulți șoferi. Spune-ne unde ai nevoie de parcare și ne ajuți să alegem.'],
  ['Va fi pe iPhone și pe Android?', 'Da, pe ambele. Poți precomanda aplicația din App Store sau te poți pre-înregistra pe Google Play.'],
  ['Ce se întâmplă după ce mă înscriu?', 'Primești un e-mail de confirmare. După aceea îți scriem doar când avem ceva important, cum ar fi ziua lansării.'],
  ['Ce date îmi cereți la înscriere?', 'Doar adresa de e-mail și zona unde ai nevoie de parcare. Nimic mai mult.'],
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  const toggle = (i: number) => setOpenIdx((cur) => (cur === i ? -1 : i));

  // Desktop: two independent columns (even/odd split, so Q1 and Q2 sit side by side)
  // so opening one card doesn't stretch its neighbour. Mobile: one column in order.
  const twoCol = useMediaQuery('(min-width: 900px)');
  const indexed = FAQ.map((f, i) => [f, i] as const);
  const columns = twoCol ? [indexed.filter(([, i]) => i % 2 === 0), indexed.filter(([, i]) => i % 2 === 1)] : [indexed];

  return (
    <section data-screen-label="Întrebări frecvente" className="page-x bg-paper py-section">
      <div className="container-page flex flex-col gap-[clamp(32px,4vw,56px)]">
        <h2 className="m-0 font-mont text-[clamp(40px,4.6vw,64px)] font-medium leading-[1.1] tracking-[-0.03em] text-black">
          Întrebări frecvente
        </h2>

        <div className="grid grid-cols-1 items-start gap-6 three:grid-cols-2">
          {columns.map((col, c) => (
            <div key={c} className="flex min-w-0 flex-col gap-6">
              {col.map(([[q, a], i]) => (
                <FaqItem key={q} q={q} a={a} open={openIdx === i} onToggle={() => toggle(i)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div
      className={`rounded-2xl border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-colors duration-200 ease-out ${
        open ? 'border-forest-400' : 'border-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full cursor-pointer items-center gap-6 border-0 bg-transparent px-[clamp(20px,2.6vw,36px)] py-[30px] text-left"
      >
        <span
          className={`grid h-9 w-9 flex-none place-items-center rounded-full border-[1.5px] ${
            open ? 'border-forest' : 'border-forest-400'
          }`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#053333" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d={open ? PATH_MINUS : PATH_PLUS} />
          </svg>
        </span>
        <span className={`font-mont text-[clamp(17px,1.5vw,20px)] font-medium leading-[1.35] ${open ? 'text-black' : 'text-[#7A7C80]'}`}>
          {q}
        </span>
      </button>
      {open && (
        <p
          id={id}
          className="m-0 pb-[30px] pl-[calc(clamp(20px,2.6vw,36px)+60px)] pr-[clamp(20px,2.6vw,36px)] font-mont text-base leading-[1.65] text-ink"
        >
          {a}
        </p>
      )}
    </div>
  );
}
