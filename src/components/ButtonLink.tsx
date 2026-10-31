import type { ReactNode } from 'react';
import { Link } from 'react-router';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
}

/** Primary navy pill CTA styles, shared with form submit buttons. */
export const buttonClasses =
  'inline-flex h-12 cursor-pointer items-center justify-center rounded-full bg-navy px-7 text-sm leading-[18px] font-semibold tracking-[0.12em] whitespace-nowrap text-white uppercase transition-colors hover:bg-navy-dark disabled:cursor-default disabled:opacity-60 tablet:h-14 tablet:px-9 tablet:text-base desktop:h-16 desktop:px-10 desktop:text-lg';

/** Primary navy pill CTA. */
export default function ButtonLink({ to, children }: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonClasses}>
      {children}
    </Link>
  );
}
