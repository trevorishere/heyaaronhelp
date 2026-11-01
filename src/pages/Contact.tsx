import { useState, type FormEvent, type ReactNode } from 'react';
import { buttonClasses } from '../components/ButtonLink';
import Layout from '../components/Layout';
import { display, lede } from '../styles';

// Formspree form URL, e.g. https://formspree.io/f/abcdwxyz (see README).
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

const locations = [
  'North America West (Pacific Time)',
  'North America Central (Mountain/Central Time)',
  'North America East (Eastern Time)',
  'South America West',
  'South America East',
  'Western Europe',
  'Eastern Europe/Western Asia',
  'Africa',
  'Middle East/Central Asia',
  'South Asia',
  'East Asia/Oceania West',
  'Oceania East',
];

const field =
  'w-full rounded-lg border-2 border-field-border bg-field text-base text-ink transition-colors outline-none focus:border-navy tablet:text-lg';
const input = `${field} h-14 px-4 tablet:h-16 tablet:px-6`;

// The border lives on a wrapper with right/bottom padding so the native resize grip sits 8px
// inside the box instead of in its corner. 148px + 8px padding + 4px border = 160px.
function TextArea({ name }: { name: string }) {
  return (
    <span className="block rounded-lg border-2 border-field-border bg-field pr-2 pb-2 transition-colors focus-within:border-navy">
      <textarea
        name={name}
        required
        className="block h-[148px] min-h-20 w-full resize-y bg-transparent pt-3 pr-2 pb-1 pl-4 text-base text-ink outline-none tablet:text-lg"
      />
    </span>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[15px] leading-[1.4] text-label tablet:text-base">{label}</span>
      {children}
    </label>
  );
}

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!endpoint) {
      console.error('VITE_CONTACT_ENDPOINT is not set; the contact form has nowhere to send.');
      setStatus('error');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Layout title="Contact — Hey Aaron Help">
      <section className="pt-10 pb-20 tablet:pt-16 tablet:pb-28 desktop:pt-24 desktop:pb-[140px]">
        <div className="site-container flex max-w-[700px] flex-col gap-10 tablet:gap-12 desktop:gap-16">
          <div className="flex flex-col gap-2 text-center">
            <h1 className={display()}>Let’s get started.</h1>
            <p className={lede}>
              {status === 'sent'
                ? 'Thanks for reaching out — I’ll be in touch soon.'
                : 'Please fill out this form so I can get a sense of how to support you.'}
            </p>
          </div>

          {status !== 'sent' && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 tablet:gap-10">
              <input type="hidden" name="_subject" value="New contact form submission — Hey Aaron Help" />
              <div className="flex flex-col gap-8 tablet:flex-row tablet:gap-4 [&>*]:flex-1">
                <Field label="First Name">
                  <input name="First Name" required autoComplete="given-name" className={input} />
                </Field>
                <Field label="Last Name">
                  <input name="Last Name" required autoComplete="family-name" className={input} />
                </Field>
              </div>
              <Field label="Email">
                {/* Formspree uses a field named `email` as the notification's reply-to. */}
                <input name="email" type="email" required autoComplete="email" className={input} />
              </Field>
              <Field label="Job/Profession">
                <input name="Job" required autoComplete="organization-title" className={input} />
              </Field>
              <Field label="Location">
                <span className="relative block">
                  <select
                    name="Location"
                    required
                    defaultValue=""
                    className={`${input} cursor-pointer appearance-none pr-14 invalid:text-ink-muted`}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {locations.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-1/2 right-2 h-[60px] w-[42px] -translate-y-1/2 bg-ink-muted [mask:url(/images/chevron-down.svg)_center/100%_100%_no-repeat]"
                  />
                </span>
              </Field>
              <Field label="Have you done any personal development or therapeutic work before? If so, give some examples.">
                <TextArea name="Previous work" />
              </Field>
              <Field label="What is happening in your life that led to you reaching out?">
                <TextArea name="What's happening" />
              </Field>
              <Field label="What do you want to get out of working with me?">
                <TextArea name="What you want" />
              </Field>
              <Field label="How did you find out about me? List names of any referrals, websites, etc.">
                <input name="How they found you" required className={input} />
              </Field>

              <div className="flex flex-col items-center gap-4">
                <button type="submit" disabled={status === 'sending'} className={buttonClasses}>
                  {status === 'sending' ? 'Sending…' : 'Submit'}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-center text-[15px] text-ink">
                    Sorry, something went wrong sending your message. Please try again.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}
