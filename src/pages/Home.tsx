import type { CSSProperties } from 'react';
import ButtonLink from '../components/ButtonLink';
import CoachingSection from '../components/CoachingSection';
import Layout from '../components/Layout';
import { display, lede } from '../styles';

// Desktop logo sizes keep each artwork's proportions within the Figma row's
// 156×36 / 206×30 slots. Multi-part logos place each layer as in Figma
// (left, top, width, height as % of the logo).
const press = [
  { name: 'NPR', w: 105, h: 36, opacity: 'opacity-55', layers: [{ src: '/images/press-logo-npr.svg' }] },
  { name: 'Newsweek', w: 187, h: 30, opacity: 'opacity-50', layers: [{ src: '/images/press-logo-newsweek.png' }] },
  {
    name: 'TODAY',
    w: 194.5,
    h: 30,
    opacity: 'opacity-50',
    layers: [
      { src: '/images/press-logo-today-rainbow.svg', box: { x: 0, y: 0, w: 30.3, h: 98.26 } },
      { src: '/images/press-logo-today-wordmark.svg', box: { x: 33.19, y: 11.86, w: 66.81, h: 88.14 } },
    ],
  },
  { name: 'HuffPost', w: 206, h: 24, opacity: 'opacity-50', layers: [{ src: '/images/press-logo-huffpost.svg' }] },
  {
    name: 'Cosmopolitan',
    w: 164.5,
    h: 30,
    opacity: 'opacity-50',
    layers: [{ src: '/images/press-logo-cosmopolitan.svg' }],
  },
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
          <ul className="flex flex-wrap items-center justify-center gap-4 mix-blend-multiply [--s:0.5] tablet:gap-x-10 tablet:gap-y-6 tablet:[--s:0.75] desktop:flex-nowrap desktop:gap-12 desktop:[--s:1]">
            {press.map((p) => (
              <li
                key={p.name}
                role="img"
                aria-label={p.name}
                className={`relative h-[calc(var(--h)*var(--s))] w-[calc(var(--w)*var(--s))] ${p.opacity}`}
                style={{ '--w': `${p.w}px`, '--h': `${p.h}px` } as CSSProperties}
              >
                {p.layers.map((l) => (
                  <img
                    key={l.src}
                    src={l.src}
                    alt=""
                    className="absolute inset-0 size-full"
                    style={
                      'box' in l
                        ? { left: `${l.box.x}%`, top: `${l.box.y}%`, width: `${l.box.w}%`, height: `${l.box.h}%` }
                        : undefined
                    }
                  />
                ))}
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

      <CoachingSection intro="Live or asynchronous sessions specializing in:" cta="Get Started" />

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
              className="m-0 flex flex-col items-center gap-6 text-center tablet:gap-8 desktop:min-h-[340px] desktop:flex-row desktop:gap-16 desktop:pr-[168px] desktop:pl-6 desktop:text-left desktop:even:flex-row-reverse desktop:even:pr-6 desktop:even:pl-[168px]"
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
              <div className="flex flex-col gap-4 max-w-[540px] desktop:max-w-none desktop:flex-1">
                <blockquote className="m-0 text-[17px] leading-normal font-medium text-ink tablet:text-lg desktop:-indent-[0.45em] desktop:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex flex-col gap-1 text-ink">
                  <span className="text-base leading-[1.4] tablet:text-[17px] desktop:text-lg desktop:leading-[1.4]">
                    {t.name}
                  </span>
                  <span className="text-sm leading-[1.4] font-light tablet:text-[15px] desktop:text-base desktop:leading-[1.4]">
                    {t.role}
                  </span>
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
