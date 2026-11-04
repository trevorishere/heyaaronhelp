import { buttonClasses } from '../components/ButtonLink';
import Layout from '../components/Layout';
import { display } from '../styles';

const projects = [
  {
    title: 'Grow Together',
    body: 'Grow Together is an online hub for current and expecting parents seeking relationship support during the challenging periods of parenthood. Practical tools, resources, and online courses grounded in contemporary research such as “Babyproofing Your Relationship,” “Connect Through the Chaos,” and “In It Together” are a compassionate yet rigorous approach to maintaining emotional connection and avoiding common pitfalls during parenthood.',
    src: '/images/project-grow-together.jpg',
    alt: 'The Babyproofing Your Relationship course on a laptop',
    imageClass: 'object-cover',
    cta: 'Visit Site',
    href: 'https://www.thegrowtogetherco.com/',
  },
  {
    title: 'The Honesty Practice',
    body: 'I wrote The Honesty Practice to help people consider relationship conflicts as an opportunity for growth. I challenge common approaches to conflict resolution, which usually looks like one or both sides trying to convince the other of their perspective, using logic, evidence, or opinion, only to fuel more repeated arguments. Addressing uncertainties and underlying emotions help create a complete version of your inner world to share that will build empathy and self-confidence, leading to greater ease, happiness, and connection over time.',
    src: '/images/project-honesty-practice.jpg',
    alt: 'The Honesty Practice book cover',
    imageClass: 'object-contain bg-[#ecf2ff]',
    cta: 'Buy on Amazon',
    href: 'https://www.amazon.com/Honesty-Practice-Relationship-Attraction-Connection/dp/0692819940',
  },
];

export default function Projects() {
  return (
    <Layout title="Projects — Hey Aaron Help">
      <section className="pt-10 pb-20 tablet:pt-16 tablet:pb-28 desktop:pt-24 desktop:pb-[136px]">
        <div className="site-container flex flex-col items-center gap-10 tablet:gap-12 desktop:w-[min(1248px,100%-80px)] desktop:gap-16">
          <h1 className={`${display()} text-center`}>Projects</h1>
          <ul className="grid w-full max-w-[600px] gap-8 tablet:gap-10 desktop:max-w-none desktop:grid-cols-2 desktop:gap-16">
            {projects.map((p) => (
              <li
                key={p.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-field-border bg-white shadow-[0_0_30px_rgba(17,7,7,0.05)] tablet:rounded-[32px]"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`h-[220px] w-full tablet:h-[300px] desktop:h-[330px] ${p.imageClass}`}
                />
                <div className="flex flex-1 flex-col justify-between gap-10 px-6 pt-8 pb-10 tablet:px-12 tablet:pt-10 tablet:pb-16 desktop:gap-16">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-serif text-[26px] leading-[1.2] text-ink-dark tablet:text-[32px]">
                      {p.title}
                    </h2>
                    <p className="text-[17px] leading-[1.7] text-ink tablet:text-lg">{p.body}</p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonClasses} gap-2 self-center`}
                  >
                    {p.cta}
                    <img src="/images/arrow-right.svg" alt="" width={16} height={16} className="opacity-50" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
