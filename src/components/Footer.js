import Link from "next/link";
import Mark from "./Mark";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Link className="brand" href="/" aria-label="adapt22 home">
          <Mark />
          <span>adapt22</span>
        </Link>
        <p>
          Technology that moves
          <br />
          with your business.
        </p>
        <div>
          <a href="mailto:jackson@adapt22.ai">jackson@adapt22.ai ↗</a>
          <Link href="/contact">Start a conversation ↗</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} adapt22</span>
        <span className="footer-a22">A22 / Implement. Manage. Scale.</span>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms-of-service">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
