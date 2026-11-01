import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

const links = [
  { to: '/coaching', label: 'Coaching' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/press', label: 'Press' },
];

const mobileLinks = [
  { to: '/', label: 'Home' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
  { to: '/press', label: 'Press' },
  { to: '/contact', label: 'Get Started' },
];

interface HeaderProps {
  overlay?: boolean;
}

// Mobile menu timing (ms): the overlay grows from the header's 80px to full
// height over 300, and the links fade in from 200. Closing runs it in reverse.
const MENU_HEIGHT_MS = 300;
const MENU_LINKS_DELAY_MS = 200;
const MENU_LINKS_FADE_MS = 200;
const MENU_TOTAL_MS = MENU_LINKS_DELAY_MS + MENU_LINKS_FADE_MS;

export default function Header({ overlay = false }: HeaderProps) {
  // `open` is the target state; `shown` keeps the overlay (and its white logo
  // and close icon) on screen until the closing animation has finished.
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open) {
      setShown(true);
      return;
    }
    const t = setTimeout(() => setShown(false), MENU_TOTAL_MS);
    return () => clearTimeout(t);
  }, [open]);

  // Render the collapsed overlay for a frame before opening so the height can transition.
  const toggle = () => {
    if (open) return setOpen(false);
    setShown(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setOpen(true)));
  };

  useEffect(() => {
    const mq = matchMedia('(min-width: 768px)');
    const close = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  // While the full-screen menu is open, freeze the page behind it and let Esc close it.
  useEffect(() => {
    if (!shown) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      removeEventListener('keydown', onKey);
    };
  }, [shown]);

  const bar = 'absolute left-1 h-0.5 w-6 rounded-[10px] bg-ink-dark';

  return (
    <header
      className={
        // backdrop-blur would make the fixed menu below size to the header, so it's dropped while open.
        'sticky top-0 z-10 tablet:shadow-none tablet:backdrop-blur-none ' +
        (shown ? '' : 'shadow-[0_1px_6px_rgba(41,41,41,0.12)] backdrop-blur-[10px] ') +
        (overlay ? 'tablet:absolute tablet:inset-x-0 tablet:bg-transparent' : 'tablet:relative')
      }
    >
      <nav
        id="mobile-nav"
        aria-label="Main"
        style={{
          transitionDuration: `${MENU_HEIGHT_MS}ms`,
          transitionDelay: open ? '0ms' : `${MENU_TOTAL_MS - MENU_HEIGHT_MS}ms`,
        }}
        className={
          (shown ? 'flex' : 'hidden') +
          (open ? ' h-[max(800px,100dvh)]' : ' h-20') +
          ' fixed inset-x-0 top-0 flex-col items-center overflow-hidden bg-navy transition-[height] ease-in-out motion-reduce:transition-none tablet:hidden'
        }
      >
        <ul
          style={{
            transitionDuration: `${MENU_LINKS_FADE_MS}ms`,
            transitionDelay: open ? `${MENU_LINKS_DELAY_MS}ms` : '0ms',
          }}
          className={`flex shrink-0 flex-col items-center pt-40 pb-16 text-center transition-opacity ease-in-out motion-reduce:transition-none ${open ? 'opacity-100' : 'opacity-0'}`}
        >
          {mobileLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 font-serif text-[32px] leading-[2.2] text-white transition-opacity hover:opacity-70"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-container relative flex h-20 items-center justify-between max-tablet:w-[max(85%,100%-64px)] tablet:h-[104px] desktop:h-[120px]">
        <Link to="/" aria-label="Hey Aaron Help — home" onClick={() => setOpen(false)}>
          <img
            src={shown ? '/images/logo-header-light.svg' : '/images/logo-header.svg'}
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
          aria-controls="mobile-nav"
          onClick={toggle}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Menu'}</span>
          {shown ? (
            <img src="/images/icon-close.svg" alt="" width={32} height={32} />
          ) : (
            <span className="relative block size-8" aria-hidden="true">
              <span className={`${bar} top-[7px]`} />
              <span className={`${bar} top-[15px]`} />
              <span className={`${bar} top-[23px]`} />
            </span>
          )}
        </button>

        <nav aria-label="Main" className="hidden items-center gap-4 tablet:flex desktop:gap-6">
          <ul className="flex items-center gap-1 desktop:gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block px-2 py-1 text-[15px] leading-[1.5] font-semibold tracking-[0.1em] text-ink uppercase hover:text-navy desktop:text-base"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-3xl bg-ink-dark px-5 font-fraunces text-sm leading-[1.5] whitespace-nowrap text-paper hover:bg-[#1f1f1f]"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
