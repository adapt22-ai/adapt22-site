import Arrow from "@/components/Arrow";
import Link from "@/components/RouteLink";
export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="eyebrow">404 / A different direction</p>
      <h1>This page isn’t here.</h1>
      <p>Head back to the home page or start a conversation with our team.</p>
      <Link className="button" href="/">
        Back to the beginning <Arrow />
      </Link>
    </section>
  );
}
