import { display, lede } from '../styles';
import ButtonLink from './ButtonLink';

const specialties = [
  ['General Well-Being', 'Performance Coaching', 'Leadership & Communication'],
  ['Relationships', 'Organizational Consulting', 'Executive Coaching'],
];

interface CoachingSectionProps {
  intro: string;
  cta: string;
}

/** "Coaching for Individuals and Groups" checklist with a CTA to /contact. */
export default function CoachingSection({ intro, cta }: CoachingSectionProps) {
  return (
    <section className="bg-ice-100 pt-15 pb-10 tablet:pt-24 desktop:py-30">
      <div className="site-container flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-2">
          <h2 className={display()}>Coaching for Individuals and Groups</h2>
          <p className={`${lede} desktop:leading-[1.2]`}>{intro}</p>
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
        <ButtonLink to="/contact">{cta}</ButtonLink>
      </div>
    </section>
  );
}
