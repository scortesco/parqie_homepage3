import SectionHeader from '../ui/SectionHeader';
import { CheckBadge } from '../ui/icons';

const STEPS = [
  {
    n: '01',
    img: '/assets/ill-search.png',
    title: 'Cauți',
    body: 'Scrii unde mergi și cât stai. Vezi ce locuri sunt libere pe intervalul tău.',
  },
  {
    n: '02',
    img: '/assets/ill-reserve.png',
    title: 'Rezervi',
    body: 'Alegi locul care îți convine. Prețul îl vezi de la început, nu la ieșire.',
  },
  {
    n: '03',
    img: '/assets/ill-pay.png',
    title: 'Parchezi',
    body: 'Mergi direct la loc. Plata e deja făcută, deci nu mai cauți niciun automat.',
  },
];

export default function HowItWorks() {
  return (
    <section id="cum" data-screen-label="Cum funcționează" className="page-x scroll-mt-[74px] bg-white py-section">
      <div className="container-page flex flex-col gap-[clamp(40px,4.5vw,64px)]">
        <SectionHeader
          eyebrow="Cum funcționează"
          title="Trei pași și ai parcat."
          lead="Durează mai puțin decât un tur de bloc. Și de data asta chiar găsești loc."
        />
        <ol className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-10 p-0 three:grid-cols-3">
          {STEPS.map((s, i) => {
            const last = i === STEPS.length - 1;
            return (
              <li key={s.n} className="flex min-w-0 flex-col gap-6">
                {/* Timeline: the connector runs into the next column's gap on desktop. */}
                <div className="flex h-12 items-center">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-forest text-[15px] font-extrabold leading-none text-lime">
                    {s.n}
                  </span>
                  {last ? (
                    <>
                      <span className="h-0.5 flex-1 bg-forest" />
                      <span className="flex h-10 flex-none items-center gap-2 rounded-full bg-lime pl-2 pr-4 text-sm font-bold leading-none text-forest">
                        <CheckBadge size={24} iconSize={12} bg="#053333" fg="#ACFF78" />
                        Ai parcat
                      </span>
                    </>
                  ) : (
                    <span className="-mr-6 hidden h-0.5 flex-1 bg-forest three:block" />
                  )}
                </div>
                <div className="card-lift flex flex-1 flex-col rounded-3xl bg-mist-2 p-3">
                  <div className="grid h-[220px] place-items-center rounded-2xl bg-white">
                    <img src={s.img} alt="" className="h-[188px] w-auto max-w-[90%] object-contain" />
                  </div>
                  <div className="flex flex-col gap-2.5 px-4 pb-4 pt-6">
                    <h3 className="m-0 text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] text-black">{s.title}</h3>
                    <p className="m-0 text-base leading-[1.6] text-muted">{s.body}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
