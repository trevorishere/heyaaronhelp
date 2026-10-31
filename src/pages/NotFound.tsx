import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout title="Page not found — Hey Aaron Help">
      <section className="bg-ice-300 py-24 desktop:py-36">
        <div className="site-container flex flex-col items-center gap-8 text-center">
          <h1 className="font-serif text-4xl text-ink desktop:text-5xl">Page not found</h1>
          <ButtonLink to="/">Back home</ButtonLink>
        </div>
      </section>
    </Layout>
  );
}
