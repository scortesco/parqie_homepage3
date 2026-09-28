import { StoreButton } from './AppSection';

const linkCls = 'text-base leading-5 text-forest-200 transition-colors hover:text-lime';
const headCls = 'text-base font-semibold leading-5 text-paper';

export default function Footer() {
  return (
    <footer data-screen-label="Footer" className="page-x bg-forest pb-8 pt-[clamp(64px,7vw,96px)]">
      <div className="container-page flex flex-col gap-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 foot4:grid-cols-4 foot5:grid-cols-[minmax(200px,1.4fr)_repeat(4,minmax(0,1fr))]">
          <div className="col-span-full flex flex-col gap-4 foot5:col-auto">
            <img src="/assets/parqie-logo.png" alt="parqie" className="h-11 self-start" />
          </div>
          <div className="flex flex-col gap-5">
            <span className={headCls}>Ai nevoie de ajutor?</span>
            <a href="#cum" className={linkCls}>Cum funcționează?</a>
            <a href="#" className={linkCls}>Ajutor</a>
            <a href="#" className={linkCls}>Contactează-ne</a>
          </div>
          <div className="flex flex-col gap-5">
            <span id="despre" className={headCls}>Despre noi</span>
            <a href="#" className={linkCls}>Job-uri</a>
            <a href="#" id="business" className={linkCls}>Devino partener</a>
            <a href="#zone" className={linkCls}>Lista de așteptare</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className={headCls}>Legal</span>
            <a href="#" className={linkCls}>Termeni</a>
            <a href="#" className={linkCls}>Confidențialitate</a>
            <a href="#" className={linkCls}>Cookies</a>
            <a href="#" className={linkCls}>Harta site</a>
          </div>
          <div className="flex flex-col gap-5">
            <span className={headCls}>Descarcă aplicația</span>
            <StoreButton store="apple" size="sm" href="#aplicatie" />
            <StoreButton store="google" size="sm" href="#aplicatie" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-forest-650 pt-6 text-sm leading-5 text-forest-200">
          <span>© 2026 Parqie. Chișinău, Moldova.</span>
          <div className="flex flex-wrap gap-6">
            {['Instagram', 'Facebook', 'TikTok', 'LinkedIn'].map((s) => (
              <a key={s} href="#" className="text-forest-200 transition-colors hover:text-lime">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
