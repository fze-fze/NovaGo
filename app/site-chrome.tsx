import Link from "next/link";

// Shared by the case study and the per-service pages. Section links are
// root-relative so they also work from /prototype/*.
export function NovaGo() {
  return (
    <span className="novago">
      Nova<span>Go</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/#top" aria-label="NovaGo home">
        Nova<span>Go</span>
      </Link>
      <nav aria-label="Case study sections">
        <Link href="/#team">Team</Link>
        <Link href="/#research">Research</Link>
        <Link href="/#ideation">Ideation</Link>
        <Link className="nav-cta" href="/#final">
          Final prototype
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="wordmark footer-mark" href="/#top">
        Nova<span>Go</span>
      </Link>
      <p>
        Portfolio of <NovaGo />
      </p>
      <p>A well-designed super app</p>
    </footer>
  );
}
