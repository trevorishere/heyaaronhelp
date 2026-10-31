import type { ReactNode } from 'react';
import { Link } from 'react-router';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const buttonBase =
  'inline-flex cursor-pointer items-center justify-center rounded-full text-sm leading-none font-semibold tracking-[0.12em] whitespace-nowrap uppercase transition-colors disabled:cursor-default disabled:opacity-60 tablet:h-14 tablet:px-9 tablet:text-base desktop:h-16 desktop:px-10';

/** Primary navy pill CTA styles, shared with form submit buttons. */
export const buttonClasses = `${buttonBase} h-12 px-7 bg-navy text-white hover:bg-navy-dark`;

/** White pill on mobile (for use over photos), the navy CTA from tablet up. */
export const heroButtonClasses = `${buttonBase} h-14 px-10 bg-white text-navy hover:bg-ice-100 tablet:bg-navy tablet:text-white tablet:hover:bg-navy-dark`;

/** Primary navy pill CTA. */
export default function ButtonLink({ to, children, className = buttonClasses }: ButtonLinkProps) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
