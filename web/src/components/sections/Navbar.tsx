import { useState } from 'react';
import { useWaitlist } from '../../store/waitlist';
import { ChevronDown, Close, Menu } from '../ui/icons';

const LINKS = [
  { href: '#cum', label: 'Parchează', caret: true },
  { href: '#business', label: 'Devino partener' },
  { href: '#despre', label: 'Despre noi' },
  { href: '#', label: 'Intră în cont' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openModal = useWaitlist((s) => s.openModal);
  const heroAddress = useWaitlist((s) => s.heroAddress);

  const join = () => {
    setMenuOpen(false);
    openModal({ source: 'nav', location: heroAddress });
  };

  return (
    <nav className="page-x sticky top-0 z-30 border-b border-[#0B3F3F] bg-forest" data-screen-label="Nav">
      <div className="container-page flex h-[74px] items-center gap-4">
        <a href="#top" aria-label="Parqie" className="flex flex-none">
          <img src="/assets/parqie-logo.png" alt="parqie" className="block h-8" />
        </a>
        <div className="flex-1" />

        <div className="mr-3 hidden items-center gap-7 nav:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-1.5 text-base font-medium leading-5 text-paper transition-colors hover:text-lime"
            >
              {l.label}
              {l.caret && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={join}
          className="btn-press h-10 flex-none cursor-pointer rounded-lg border-2 border-[#48C9A9] bg-lime px-4 text-[15px] font-semibold leading-5 text-black transition-colors duration-200 ease-out hover:bg-lime-hover"
        >
          Intră pe listă
        </button>

        <button
          type="button"
          className="ml-3 hidden cursor-pointer items-center gap-1.5 text-base font-medium leading-5 text-paper nav:flex"
          aria-haspopup="listbox"
        >
          Română
          <ChevronDown size={14} />
        </button>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Meniu"
          aria-expanded={menuOpen}
          className="grid h-11 w-11 flex-none cursor-pointer place-items-center rounded-xl border border-forest-600 bg-transparent nav:hidden"
        >
          {menuOpen ? <Close size={20} stroke="#F9F9F9" /> : <Menu size={20} stroke="#F9F9F9" />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col border-t border-forest-700 pb-5 pt-2 nav:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-forest-700 py-3.5 text-[17px] font-semibold leading-5 text-paper"
            >
              {l.label}
            </a>
          ))}
          <span className="pt-3.5 text-[15px] font-medium leading-5 text-forest-200">Română · English</span>
        </div>
      )}
    </nav>
  );
}
