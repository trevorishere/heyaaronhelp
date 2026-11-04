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
// height over 300, and the links fade in from 50. Closing, the links fade out
// over 200 and the overlay collapses over the last 300 (from 100).
const MENU_HEIGHT_MS = 300;
const MENU_LINKS_OPEN_DELAY_MS = 50;
const MENU_LINKS_DELAY_MS = 200;
const MENU_LINKS_FADE_MS = 200;
const MENU_TOTAL_MS = MENU_LINKS_DELAY_MS + MENU_LINKS_FADE_MS;
// Within the fade, each link drops 50px into place one after another (top
// first); closing lifts them back up bottom first. 6 × 15 + 110 = 200.
const MENU_LINK_STAGGER_MS = 15;
const MENU_LINK_DROP_MS = MENU_LINKS_FADE_MS - (mobileLinks.length - 1) * MENU_LINK_STAGGER_MS;
// Opening, the cascade runs 100ms longer than the fade, and each drop is
// long and tightly staggered so they overlap like a wave (6 × 10 + 240 = 300).
const MENU_LINK_CASCADE_OPEN_MS = MENU_LINKS_FADE_MS + 100;
const MENU_LINK_STAGGER_OPEN_MS = 10;
const MENU_LINK_DROP_OPEN_MS = MENU_LINK_CASCADE_OPEN_MS - (mobileLinks.length - 1) * MENU_LINK_STAGGER_OPEN_MS;
// Closing, once the links have gone the navy overlay and white logo fade out
// while the overlay finishes collapsing; opening shows them at once.
const MENU_FADE_OUT_DELAY_MS = MENU_LINKS_FADE_MS;
const MENU_FADE_OUT_MS = MENU_TOTAL_MS - MENU_FADE_OUT_DELAY_MS;

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

  // The menu icon morphs on the same timing as the overlay's height.
  const barTiming = {
    transitionDuration: `${MENU_HEIGHT_MS}ms`,
    transitionDelay: open ? '0ms' : `${MENU_TOTAL_MS - MENU_HEIGHT_MS}ms`,
  };
  const fadeOut = {
    transitionDuration: open ? '0ms' : `${MENU_FADE_OUT_MS}ms`,
    transitionDelay: open ? '0ms' : `${MENU_FADE_OUT_DELAY_MS}ms`,
  };
  const bar =
    'absolute left-1 h-0.5 w-6 rounded-[10px] transition-[translate,rotate,background-color] ease-in-out motion-reduce:transition-none';

  return (
    <header
      className={
        // backdrop-blur would make the fixed menu below size to the header, so it's dropped
        // while open, and only eased back in once the menu has closed.
        'sticky top-0 z-10 tablet:shadow-none tablet:backdrop-blur-none ' +
        (shown
          ? ''
          : 'shadow-[0_1px_6px_rgba(41,41,41,0.12)] backdrop-blur-[10px] transition-[box-shadow,backdrop-filter] duration-200 ') +
        (overlay ? 'tablet:absolute tablet:inset-x-0 tablet:bg-transparent' : 'tablet:relative')
      }
    >
      <nav
        id="mobile-nav"
        aria-label="Main"
        style={{
          transitionDuration: `${MENU_HEIGHT_MS}ms, ${fadeOut.transitionDuration}`,
          transitionDelay: `${open ? '0ms' : `${MENU_TOTAL_MS - MENU_HEIGHT_MS}ms`}, ${fadeOut.transitionDelay}`,
        }}
        className={
          (shown ? 'flex' : 'hidden') +
          (open ? ' h-[max(800px,100dvh)] opacity-100' : ' h-20 opacity-0') +
          ' fixed inset-x-0 top-0 flex-col items-center overflow-hidden bg-navy transition-[height,opacity] ease-in-out motion-reduce:transition-none tablet:hidden'
        }
      >
        <ul
          style={{
            transitionDuration: `${MENU_LINKS_FADE_MS}ms`,
            transitionDelay: open ? `${MENU_LINKS_OPEN_DELAY_MS}ms` : '0ms',
          }}
          className={`flex shrink-0 flex-col items-center pt-40 pb-16 text-center transition-opacity ease-in-out motion-reduce:transition-none ${open ? 'opacity-100' : 'opacity-0'}`}
        >
          {mobileLinks.map((l, i) => (
            <li
              key={l.label}
              style={{
                transform: open ? 'none' : 'translateY(-50px)',
                transitionDuration: `${open ? MENU_LINK_DROP_OPEN_MS : MENU_LINK_DROP_MS}ms`,
                transitionDelay: open
                  ? `${MENU_LINKS_OPEN_DELAY_MS + i * MENU_LINK_STAGGER_OPEN_MS}ms`
                  : `${(mobileLinks.length - 1 - i) * MENU_LINK_STAGGER_MS}ms`,
              }}
              className="transition-transform ease-in-out motion-reduce:transition-none"
            >
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
        <Link
          to="/"
          aria-label="Hey Aaron Help — home"
          onClick={() => setOpen(false)}
          className="relative"
        >
          <img
            src="/images/logo-header.svg"
            alt=""
            width={65}
            height={65}
            className="size-12 tablet:size-14 desktop:size-[65px]"
          />
          {/* The white logo sits over the dark one while the menu is open. */}
          <img
            src="/images/logo-header-light.svg"
            alt=""
            width={65}
            height={65}
            style={fadeOut}
            className={`absolute inset-0 size-full transition-opacity ease-in-out motion-reduce:transition-none tablet:hidden ${open ? 'opacity-100' : 'opacity-0'}`}
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
          {/* Two lines that meet in the middle and rotate into an X (matching the
              old 16px close icon), in step with the menu's height. */}
          <span className="relative block size-8" aria-hidden="true">
            <span
              style={barTiming}
              className={`${bar} ${open ? 'translate-y-1 rotate-45 bg-white' : 'bg-ink-dark'} top-[11px]`}
            />
            <span
              style={barTiming}
              className={`${bar} ${open ? '-translate-y-1 -rotate-45 bg-white' : 'bg-ink-dark'} top-[19px]`}
            />
          </span>
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
