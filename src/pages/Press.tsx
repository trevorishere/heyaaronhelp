import Layout from '../components/Layout';

// `crop` reproduces each image's placement inside its 520×312 frame in Figma
// (percentages of the frame: width, height, left, top).
const press: {
  type: 'Article' | 'Spotify Podcast';
  title: string;
  src: string;
  alt: string;
  crop: { w: number; h: number; x: number; y: number };
  href: string;
}[] = [
  {
    type: 'Article',
    title: '4 Fights Couples Always Have On Vacation (And How To Avoid Them)',
    src: '/images/press-huffpost-vacation.jpg',
    href: 'https://www.huffpost.com/entry/couples-fighting-vacation-advice_l_668eb904e4b0922e34ab61b7',
    alt: 'HuffPost',
    crop: { w: 113.56, h: 100, x: -3.09, y: 0 },
  },
  {
    type: 'Spotify Podcast',
    title: 'Keeping intimacy alive after having a baby',
    src: '/images/press-npr-intimacy.jpg',
    href: 'https://open.spotify.com/episode/3fCdltitkle9sYO8gXWSOY',
    alt: 'NPR',
    crop: { w: 113.56, h: 100, x: -2.29, y: 0 },
  },
  {
    type: 'Article',
    title: '120 romantic love messages for the special woman in your life',
    src: '/images/press-today-love-messages.jpg',
    href: 'https://www.today.com/life/relationships/love-messages-for-her-rcna65346',
    alt: 'TODAY',
    crop: { w: 100, h: 104.19, x: 0, y: -2.1 },
  },
  {
    type: 'Article',
    title: 'What Is a Toxic Relationship? Certified Mental-Health Expert Weighs In',
    src: '/images/press-newsweek-toxic.jpg',
    href: 'https://www.newsweek.com/toxic-relationships-mental-health-expert-opinion-1913600',
    alt: 'Newsweek',
    crop: { w: 100, h: 104.27, x: 0, y: -2.14 },
  },
  {
    type: 'Spotify Podcast',
    title: 'Transforming Codependency/Anxious Attachment with Aaron Steinberg',
    src: '/images/press-initiations-in-love.jpg',
    href: 'https://open.spotify.com/episode/5YWmtcMovnqn71YPrPhVpQ',
    alt: 'Initiations in Love podcast',
    crop: { w: 100, h: 114.58, x: 0, y: -2.1 },
  },
  {
    type: 'Spotify Podcast',
    title: 'Navigating Relationships and Parenthood (‘The Story of a Brand’)',
    src: '/images/press-story-of-a-brand.jpg',
    href: 'https://open.spotify.com/episode/6VJpDDd04IOCpCK7X3vtVw',
    alt: 'The Story of a Brand podcast',
    crop: { w: 100, h: 125.39, x: 0, y: -2.54 },
  },
  {
    type: 'Spotify Podcast',
    title: 'Embracing Nuances & Re-Examining Relationship Paradigms',
    src: '/images/press-embracing-nuances.jpg',
    href: 'https://open.spotify.com/episode/4cm1C81ujrXVWcC6wNTryN',
    alt: 'Another Way podcast',
    crop: { w: 106.67, h: 100, x: -3.33, y: 0 },
  },
  {
    type: 'Spotify Podcast',
    title: 'Nurturing Partner Relationships and Parenting with Aaron Steinberg',
    src: '/images/press-joyful-courage.jpg',
    href: 'https://open.spotify.com/episode/6Jo8PvH0fAU9r2CWhHMLTi',
    alt: 'Joyful Courage podcast',
    crop: { w: 106.85, h: 100, x: -4.63, y: 0 },
  },
  {
    type: 'Article',
    title: 'Presenting: Perfect Responses for When Someone Asks Why You Don’t Want Kids',
    src: '/images/press-cosmopolitan-kids.jpg',
    href: 'https://www.cosmopolitan.com/sex-love/a46131051/what-to-say-people-ask-why-you-don-t-want-kids/',
    alt: 'Cosmopolitan',
    crop: { w: 100, h: 104.22, x: 0, y: -2.11 },
  },
  {
    type: 'Article',
    title: 'These 3 Reasons Why Couples Argue Are the Basis of Every Fight in a Relationship',
    src: '/images/press-wellgood-argue.jpg',
    href: 'https://www.wellandgood.com/reasons-why-couples-argue/',
    alt: 'Well+Good',
    crop: { w: 103.93, h: 100, x: -1.96, y: 0 },
  },
  {
    type: 'Article',
    title: 'Relationship Coach Shares 3 Biggest Marriage Problems After Having A Baby',
    src: '/images/press-huffpost-baby.jpg',
    href: 'https://www.huffingtonpost.co.uk/entry/3-biggest-marriage-problems-after-having-a-baby_uk_65115ce8e4b060f32d3ac231',
    alt: 'HuffPost',
    crop: { w: 100, h: 111.11, x: 0, y: -5.56 },
  },
  {
    type: 'Spotify Podcast',
    title: 'How to Not Ruin Your Relationship After Kids with Aaron Steinberg',
    src: '/images/press-big-time-adulting.jpg',
    href: 'https://open.spotify.com/episode/1si38S24dITKh6qNJK559p',
    alt: 'Big Time Adulting podcast',
    crop: { w: 100, h: 104, x: 0, y: -2 },
  },
];

export default function Press() {
  return (
    <Layout title="Press — Hey Aaron Help">
      <section className="pt-8 pb-20 tablet:pt-16 tablet:pb-28 desktop:pt-[92px] desktop:pb-[140px]">
        <h1 className="sr-only">Press</h1>
        <ul className="site-container grid max-w-[1100px] gap-y-10 tablet:grid-cols-2 tablet:gap-x-10 tablet:gap-y-14 desktop:gap-x-[60px] desktop:gap-y-[68px]">
          {press.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col gap-3 tablet:gap-4"
              >
                <div className="relative aspect-[520/312] overflow-hidden rounded-3xl desktop:rounded-[32px]">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="absolute max-w-none transition-transform duration-400 ease-in-out group-hover:scale-[1.03]"
                    style={{
                      width: `${p.crop.w}%`,
                      height: `${p.crop.h}%`,
                      left: `${p.crop.x}%`,
                      top: `${p.crop.y}%`,
                    }}
                  />
                </div>
                <div className="flex flex-col gap-[5px] pr-1 pl-0.5 desktop:pb-6">
                  <p className="text-sm leading-[1.4] tracking-[0.02em] text-ink-muted">{p.type}</p>
                  <h2 className="font-serif text-xl leading-[1.4] text-pretty text-ink desktop:text-2xl">
                    {p.title}
                  </h2>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
