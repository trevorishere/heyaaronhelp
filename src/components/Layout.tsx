import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  title: string;
  /** Lets the header float over a full-bleed hero on tablet/desktop. */
  overlayHeader?: boolean;
  children: ReactNode;
}

export default function Layout({ title, overlayHeader = false, children }: LayoutProps) {
  return (
    <>
      <title>{title}</title>
      <Header overlay={overlayHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
