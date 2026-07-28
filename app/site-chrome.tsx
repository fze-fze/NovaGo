import Link from "next/link";

import { SmoothLink } from "./smooth-link";

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
      <SmoothLink className="wordmark" href="/#top" aria-label="NovaGo home">
        Nova<span>Go</span>
      </SmoothLink>
      <nav aria-label="Case study sections">
        <SmoothLink href="/#team">Team</SmoothLink>
        <SmoothLink href="/#research">Research</SmoothLink>
        <SmoothLink href="/#define-ideation">Define &amp; Ideation</SmoothLink>
        <SmoothLink className="nav-cta" href="/#final">
          Final prototype
        </SmoothLink>
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
