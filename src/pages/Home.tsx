import type { CSSProperties } from 'react';
import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';

// Logo boxes match the Figma frame. `fill` logos are pre-squashed PNGs that
// stretch back to their natural proportions inside the box.
const press = [
  { name: 'NPR', src: '/images/logo-npr.png', w: 156, h: 36, fit: 'object-fill' },
  { name: 'Newsweek', src: '/images/logo-newsweek.png', w: 206, h: 30, fit: 'object-fill' },
  { name: 'TODAY', src: '/images/logo-today.png', w: 206, h: 30, fit: 'object-cover' },
  { name: 'HuffPost', src: '/images/logo-huffpost.png', w: 206, h: 30, fit: 'object-cover' },
  { name: 'Cosmopolitan', src: '/images/logo-cosmopolitan.png', w: 206, h: 30, fit: 'object-cover' },
];

const specialties = [
  ['General Well-Being', 'Performance Coaching', 'Leadership & Communication'],
  ['Relationships', 'Organizational Consulting', 'Executive Coaching'],
];

// `crop` reproduces each photo's placement inside its circular frame in Figma
// (percentages of the frame: width, height, left, top).
const testimonials = [
  {
    quote:
      'Aaron’s ability to get to the core of an issue made our work together incredibly valuable and transformative. I highly recommend him to other executives, or really anyone seeking impactful guidance.',
    name: 'Michael Garrett',
    role: 'Founder & CEO, Plunge',
    src: '/images/testimonial-michael.jpg',
    crop: { w: 272.16, h: 111.59, x: 4.73, y: -5.96 },
  },
  {
    quote:
      'Aaron’s ability to convey complex concepts in a lighthearted and accessible way—while still being sincere—is incredibly useful. He is terrific at what he does and his work has helped me tremendously. I highly recommend his services.',
    name: 'Lane 8',
    role: 'Musician & Producer',
    src: '/images/testimonial-lane8.jpg',
    crop: { w: 317.79, h: 130.29, x: -209.12, y: 0 },
  },
  {
    quote:
      'Aaron helped me understand myself and how to communicate effectively. He’s helped me progress and grow as a person, and I love soaking up all the good things he has to offer.',
    name: 'Erika Shelton',
    role: 'Yoga Teacher and Entrepreneur',
    src: '/images/testimonial-erika.jpg',
    crop: { w: 238.88, h: 134.4, x: -0.04, y: 0.02 },
  },
];

const display = (mobileSize = 'text-[26px]') =>
  `font-serif ${mobileSize} leading-[1.25] text-balance text-ink tablet:text-[38px] tablet:leading-[1.2] desktop:text-5xl`;
const lede =
  'text-[17px] leading-normal font-light text-balance text-ink tablet:text-xl tablet:leading-[1.4] desktop:text-2xl';

export default function Home() {
  return (
    <Layout title="Hey Aaron Help — Coaching for Individuals and Groups" overlayHeader>
      {/* Hero */}
      <section className="relative h-[340px] overflow-hidden tablet:h-[640px] desktop:h-[946px]">
        <img
          src="/images/hero.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-[50%_100%] tablet:object-[30%_100%] desktop:object-[50%_100%]"
        />
        <div className="site-container relative flex flex-col items-start gap-5 pt-[34px] tablet:gap-8 tablet:pt-[190px] desktop:gap-10">
          <h1 className="max-w-[220px] font-serif text-[32px] leading-none tracking-[-0.2px] text-ink-dark tablet:max-w-none tablet:text-5xl tablet:leading-[1.1] tablet:tracking-normal tablet:text-ink desktop:text-7xl">
            Be the person you’ve <br className="hidden tablet:inline" />
            always wanted to be.
          </h1>
          <ButtonLink to="/coaching">Learn More</ButtonLink>
        </div>
      </section>

      {/* Featured in */}
      <section
        aria-labelledby="featured-title"
        className="bg-ice-400 pt-10 pb-[50px] tablet:pt-16 tablet:pb-20 desktop:pt-20 desktop:pb-25"
      >
        <div className="site-container">
          <h2
            id="featured-title"
            className="mb-4 text-center font-serif text-sm leading-[1.4] text-black tablet:text-base tablet:leading-[22.4px]"
          >
            Featured in
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-4 mix-blend-multiply [--s:0.5] tablet:gap-x-10 tablet:gap-y-6 tablet:[--s:0.75] desktop:flex-nowrap desktop:gap-10 desktop:[--s:1]">
            {press.map((p) => (
              <li
                key={p.name}
                className="h-[calc(var(--h)*var(--s))] w-[calc(var(--w)*var(--s))]"
                style={{ '--w': `${p.w}px`, '--h': `${p.h}px` } as CSSProperties}
              >
                <img src={p.src} alt={p.name} className={`size-full ${p.fit}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ice-200 pt-15 pb-20 tablet:py-24 desktop:py-30">
        <div className="site-container flex flex-col items-center gap-8 text-center tablet:gap-10 desktop:gap-12">
          <div className="flex max-w-[900px] flex-col gap-3">
            <h2 className={display()}>“Hey, I’ve gotta get my s**t together and make my life work.”</h2>
            <p className={lede}>
              Cut through the noise with practical and rigorously tested tools to elevate your
              self-awareness, performance, leadership, and relationships.
            </p>
          </div>
          <ButtonLink to="/about">About Me</ButtonLink>
        </div>
      </section>

      {/* Coaching */}
      <section className="bg-ice-100 pt-15 pb-10 tablet:pt-24 desktop:py-30">
        <div className="site-container flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col gap-2">
            <h2 className={display()}>Coaching for Individuals and Groups</h2>
            <p className={`${lede} desktop:leading-[1.2]`}>
              Live or asynchronous sessions specializing in:
            </p>
          </div>
          <div className="flex flex-col gap-2 text-left tablet:flex-row tablet:justify-center tablet:gap-10 desktop:mb-6 desktop:gap-12">
            {specialties.map((col) => (
              <ul key={col[0]} className="flex flex-col gap-2">
                {col.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-lg leading-[1.4] font-light text-ink tablet:text-xl desktop:text-2xl"
                  >
                    <img src="/images/check.svg" alt="" width={24} height={25} className="flex-none" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <ButtonLink to="/contact">Get Started</ButtonLink>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-title"
        className="bg-ice-100 pt-15 pb-20 text-center tablet:pt-14 tablet:pb-24 desktop:py-24"
      >
        <h2 id="testimonials-title" className={display()}>
          Testimonials
        </h2>
        <div className="site-container mt-8 flex flex-col gap-14 tablet:mt-10 tablet:gap-12 desktop:mt-6 desktop:gap-[39px]">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="m-0 flex flex-col items-center gap-6 text-left tablet:flex-row tablet:gap-10 tablet:even:flex-row-reverse desktop:min-h-[340px] desktop:gap-16 desktop:pr-[168px] desktop:pl-6 desktop:even:pr-6 desktop:even:pl-[168px]"
            >
              <div className="relative size-[200px] flex-none overflow-hidden rounded-full tablet:size-[220px] desktop:size-[300px]">
                <img
                  src={t.src}
                  alt={t.name}
                  loading="lazy"
                  className="absolute max-w-none"
                  style={{
                    width: `${t.crop.w}%`,
                    height: `${t.crop.h}%`,
                    left: `${t.crop.x}%`,
                    top: `${t.crop.y}%`,
                  }}
                />
              </div>
              <div className="flex flex-col gap-4 tablet:flex-1">
                <blockquote className="m-0 -indent-[0.45em] text-lg leading-[1.4] font-light text-ink tablet:text-xl desktop:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex flex-col gap-1 leading-[1.4] text-ink">
                  <span className="text-lg font-bold tablet:text-xl">{t.name}</span>
                  <span className="text-[15px] tablet:text-base">{t.role}</span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* Start */}
      <section className="bg-ice-300 pt-[70px] pb-20 tablet:py-28 desktop:pt-[139px] desktop:pb-[140px]">
        <div className="site-container flex flex-col items-center gap-6 text-center tablet:gap-8 desktop:gap-10">
          <div className="flex flex-col gap-1.5 tablet:gap-2">
            <h2 className={display('text-[28px]')}>Your Journey Begins Today</h2>
            <p className={lede}>Discover yourself and live life at your fullest.</p>
          </div>
          <ButtonLink to="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </Layout>
  );
}
