import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

const links = [
  { to: '/coaching', label: 'Coaching' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/press', label: 'Press' },
];

interface HeaderProps {
  overlay?: boolean;
}

export default function Header({ overlay = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const mq = matchMedia('(min-width: 768px)');
    const close = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  const bar = 'absolute left-0 h-0.5 w-6 rounded-[10px] bg-ink-dark transition-[transform,opacity] duration-200';

  return (
    <header
      className={
        'sticky top-0 z-10 bg-paper shadow-header tablet:shadow-none ' +
        (overlay ? 'tablet:absolute tablet:inset-x-0 tablet:bg-transparent' : 'tablet:relative')
      }
    >
      <div className="site-container relative flex h-20 items-center justify-between tablet:h-[104px] desktop:h-[120px]">
        <Link to="/" aria-label="Hey Aaron Help — home">
          <img
            src="/images/logo-header.png"
            alt=""
            width={65}
            height={65}
            className="size-12 tablet:size-14 desktop:size-[65px]"
          />
        </Link>

        <button
          type="button"
          className="-mr-1.5 grid size-11 cursor-pointer place-items-center tablet:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-[18px] w-6" aria-hidden="true">
            <span className={`${bar} top-0 ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`${bar} top-2 ${open ? 'opacity-0' : ''}`} />
            <span className={`${bar} top-4 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>

        <nav
          id="site-nav"
          aria-label="Main"
          className={
            (open ? 'flex' : 'hidden') +
            ' absolute inset-x-[-24px] top-full flex-col items-center gap-6 bg-paper px-6 pt-4 pb-10 shadow-[0_12px_12px_-8px_rgba(41,41,41,0.12)]' +
            ' tablet:static tablet:flex tablet:flex-row tablet:gap-4 tablet:bg-transparent tablet:p-0 tablet:shadow-none desktop:gap-6'
          }
        >
          <ul className="flex flex-col items-center gap-2 tablet:flex-row tablet:gap-1 desktop:gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block p-2 text-base leading-6 font-semibold tracking-[0.1em] text-ink uppercase hover:text-navy tablet:px-2 tablet:py-1 tablet:text-[15px] desktop:text-base"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="rounded-3xl bg-ink-dark px-6 py-3 text-sm leading-5 font-semibold tracking-[0.1em] text-paper uppercase hover:bg-[#1f1f1f]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
