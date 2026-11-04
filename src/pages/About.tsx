import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';
import { display, prose } from '../styles';

const bio = [
  'After majoring in math and a stint as a professional poker player, I had a quarter-life crisis and realized that what I truly love is talking to people about what’s really going on with them. For my friends and family, I was always the person they went to for support and advice, and I relished being able to listen, help them open up, and successfully navigate their issues.',
  'It became clear that I wanted a career in the helping professions, so I enrolled in life coaching school and eventually completed a PCC coaching certification from the ICF and a master’s in psychology, along with certificates in leadership, complex and developmental therapy practice, ACT, CBT, and five other coaching and therapeutic models. Since 2010, I have supported thousands of people—one-on-one, in group classes and workshops, and in mindfulness and personal development retreats—to help them foster fulfilling and meaningful careers, relationships, and lives, and learn emotional resilience, interpersonal, and leadership skills. I’ve worked with a wide range of clients, including authors, actors, professional gamers, athletes and investors, educators and physicians, small business owners, other professional coaches, executives, and entire teams and businesses.',
  'I’ve been a featured expert for NPR, Newsweek, Today, HuffPost, and Yahoo!, and for an untitled, in-production documentary about how parenthood affects one’s sense of self and identity, set to be released in 2026.',
  'And I practice what I preach! While I have a lot of education and experience and have cultivated expertise in growth and change, I don’t view myself as “having it all together.” I am dedicated to my own “self work,” with daily journaling and mindfulness practices, coaching and therapy, group workshops, and regular continuing education.',
  'I’m a husband and father of two young boys (aged 8 and 6) and a puppy. I’m also a blue belt in Brazilian Jiu Jitsu and love to play golf, travel, do house projects, officiate weddings, and read and write.',
];

export default function About() {
  return (
    <Layout title="About — Hey Aaron Help">
      <section className="pt-10 pb-20 tablet:pt-16 tablet:pb-28 desktop:pt-24 desktop:pb-40">
        <div className="site-container flex max-w-[700px] flex-col items-center gap-10 tablet:gap-12 desktop:gap-16">
          <img
            src="/images/about-aaron.png"
            alt="Aaron Steinberg"
            width={180}
            height={180}
            className="mt-3 size-[140px] rounded-full object-cover object-bottom tablet:size-40 desktop:size-[180px]"
          />
          <div className="flex flex-col gap-4 tablet:gap-6">
            <h1 className={`${display()} text-center`}>About Me</h1>
            <div className={prose}>
              {bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          <ButtonLink to="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </Layout>
  );
}
