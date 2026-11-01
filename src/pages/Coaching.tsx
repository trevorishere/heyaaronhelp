import ButtonLink from '../components/ButtonLink';
import CoachingSection from '../components/CoachingSection';
import Layout from '../components/Layout';
import { display, prose } from '../styles';

// Copy from the current heyaaronhelp.com/coaching page.
const methodology = [
  {
    heading: 'Why is it so hard to live up to our full potential?',
    body: [
      'As we approach middle age, we begin to imagine how the rest of our life could unfold. We fear that we may never become the person we want to be, have the relationship of our dreams, or accomplish what we aspire to. We grow increasingly frustrated with the cycles we’re stuck in and ask ourselves, “I’m smart and capable, so why can’t I figure this out?”',
      'It’s easy to think that because we’re successful in business, art, athletics, parenting or other hobbies, we should be able to think, act, and feel the way we want. But for most of us, there’s a gap between who we are and who we want to be. We’re forced to admit there’s more to well-being and behavior than we understand.',
    ],
  },
  {
    heading: '“You should talk to someone.”',
    body: [
      'If you’re brave or challenged enough to open up about your struggles, you’re often referred to coaching, therapy, workshops, or classes—different versions of “You should talk to someone.”',
      'The first hurdle is understanding that needing support is normal. Transformation is complex and requires expert guidance. It doesn’t mean you’re broken; emotions, behavior, and connection are skills that can and need to be developed.',
      'But once you accept the idea of getting help, the second hurdle is finding it. Quality support tends to be obscured by either “woo-woo” jargon or dense, academic theories. Simple, accessible tools and qualified practitioners are hard to come by.',
    ],
  },
  {
    heading: 'You need a well-educated practitioner with diverse skills.',
    body: [
      'When people think of a life coach, negative stereotypes often come to mind. You might picture a person in flowy clothes burning sage and talking about chakra alignment or a former executive pushing you to “conquer your day,” dropping terms like “choice,” “self-responsibility,” and “accountability” with militant fervor.',
      'In reality, coaching is a guided conversation that uses inquiry, feedback, education, and skill-building to help you achieve your goals faster than you would on your own.',
      'Historically, therapy asks, “Where are you now, and how did you get here?” with a focus on diagnosing and treating psychiatric issues. Coaching asks, “Where are you now, and where do you want to go?” However, the lines between the two have blurred as therapy shifts away from a strictly medical model and coaches incorporate therapeutic education and techniques.',
      'No matter what, good coaching focuses on a client’s goals. To get there, we explore and try new actions and provide education on best practices. But, we also recognize that it’s often impossible to break out of cycles without understanding how you’ve learned to think and act the way you do. We go back only to the extent that it serves your growth and freedom.',
      'In coaching and therapy, it’s easy to feel like you’re just a nail because your practitioner only knows how to be a hammer. However, the best practitioners draw from a variety of models to meet the unique needs of each client, issue, and moment, while also matching your language and worldview.',
    ],
  },
  {
    heading: 'But even great practitioners aren’t enough.',
    body: [
      'Insights from sessions often fade. We may say, “It just feels good to talk about things I normally keep inside,” but that alone isn’t enough for lasting change.',
    ],
  },
  {
    heading: 'A clear model and practical tools between sessions.',
    body: [
      'Even when we find a practitioner we connect with, it’s often unclear how to make the most of the service or what to do between sessions to sustain progress. This leads to the feeling of two steps forward, two steps back.',
      'This happens because most models of transformation address only parts of the puzzle. Few, if any, provide a comprehensive framework or teach clients how everything works together.',
      'In working with me, you’ll get clear steps forward and both therapy and coaching best practices to support what you want.',
    ],
  },
];

export default function Coaching() {
  return (
    <Layout title="Coaching — Hey Aaron Help">
      <article className="pt-10 pb-20 tablet:pt-16 tablet:pb-24 desktop:pt-24 desktop:pb-30">
        <div className="site-container flex max-w-[700px] flex-col items-center gap-10 tablet:gap-12 desktop:gap-16">
          <div className="flex flex-col gap-8 tablet:gap-10 desktop:gap-12">
            <h1 className={`${display()} text-center`}>My Methodology</h1>
            {methodology.map((s) => (
              <section key={s.heading} className="flex flex-col gap-3 tablet:gap-4">
                <h2 className="font-serif text-[22px] leading-[1.35] text-balance text-ink-dark tablet:text-2xl desktop:text-[26px]">
                  {s.heading}
                </h2>
                <div className={prose}>
                  {s.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <ButtonLink to="/contact">Get Started</ButtonLink>
        </div>
      </article>

      <CoachingSection
        intro="I offer private sessions, classes, and practice groups, specializing in:"
        cta="Work With Me"
      />
    </Layout>
  );
}
