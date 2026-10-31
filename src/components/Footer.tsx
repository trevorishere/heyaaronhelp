import { Link } from 'react-router';

const links = [
  { to: '/', label: 'Home' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/about', label: 'About' },
  { to: '/press', label: 'Press' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

const social = [
  {
    href: 'https://www.instagram.com/thegrowtogetherco/',
    label: 'Instagram',
    src: '/images/icon-instagram.svg',
    w: 45.5,
    h: 45.5,
  },
  {
    href: 'https://www.youtube.com/@thegrowtogetherco',
    label: 'YouTube',
    src: '/images/icon-youtube.svg',
    w: 49,
    h: 38.5,
  },
  {
    href: 'https://www.linkedin.com/in/aaronfseducation/',
    label: 'LinkedIn',
    src: '/images/icon-linkedin.svg',
    w: 45.5,
    h: 45.5,
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy pt-15 pb-[70px] tablet:pt-20 tablet:pb-25">
      <div className="site-container flex flex-col items-center">
        <Link to="/" aria-label="Home" className="mb-9 opacity-50">
          <img src="/images/logo-footer.png" alt="" width={60} height={60} className="size-15" />
        </Link>

        <ul className="flex gap-7 tablet:gap-12">
          {social.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid size-14 place-items-center opacity-80 transition-opacity hover:opacity-100"
              >
                <img src={s.src} alt="" width={s.w} height={s.h} />
              </a>
            </li>
          ))}
        </ul>

        <nav aria-label="Footer">
          <ul className="mt-5 flex max-w-80 flex-wrap justify-center gap-x-7 gap-y-3 tablet:mt-7 tablet:max-w-none tablet:gap-x-10 tablet:gap-y-4 desktop:gap-12">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm leading-[21px] tracking-[0.1em] text-footer uppercase underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 text-xs leading-[21px] tracking-[0.3px] text-footer-muted opacity-68 tablet:mt-7 tablet:text-sm">
          © 2026. Designed by <span className="text-footer">Freshlymade</span>
        </p>
      </div>
    </footer>
  );
}
