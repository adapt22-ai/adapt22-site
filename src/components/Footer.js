import Link from "next/link";
import Mark from "./Mark";
import { site } from "../lib/site";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="brand" href="/" aria-label="adapt22 home">
          <Mark />
          <span>adapt22</span>
        </Link>
        <p>
          Technology consulting.
          <br />
          Software, Salesforce, and support.
        </p>
        <div>
          <a href={`mailto:${site.email}`}>{site.email} ↗</a>
          <Link href="/contact">Talk to our team ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.legalName}
        </span>
        <span className="footer-a22">a22 / Implement. Manage. Scale.</span>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
          <Link href="/accessibility">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}
