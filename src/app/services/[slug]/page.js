import { notFound } from "next/navigation";
import { services } from "../../../lib/content";
import { PageIntro, CTA } from "../../../components/Shared";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s
    ? {
        title: s.title,
        description: s.description,
        alternates: { canonical: "/services/" + slug },
      }
    : { title: "Page not found" };
}
export default async function Service({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <PageIntro
        label="What we do"
        title={s.title}
        description={s.description}
      />
      <section className="service-detail section">
        <div>
          <p className="eyebrow">When it makes sense</p>
          <h2>{s.short}</h2>
          <p>{s.trigger}</p>
        </div>
        <div>
          <p className="eyebrow">What the work can include</p>
          <ul>
            {s.items.map((item, i) => (
              <li key={item}>
                <span>0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <h3>What the work is designed to give you</h3>
          <p>{s.result}</p>
          <p className="small-copy">
            The scope is agreed around your business. These are examples of the
            work, not a fixed package or a promise of a particular result.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
