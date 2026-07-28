"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type SmoothLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function SmoothLink({
  href,
  onClick,
  ...props
}: SmoothLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex);
    const hash = href.slice(hashIndex + 1);
    const isSamePage =
      path === "" || (path === "/" && window.location.pathname === "/");
    if (!isSamePage || !hash) return;

    const target = document.getElementById(decodeURIComponent(hash));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", `#${hash}`);
    const headerOffset = window.matchMedia("(max-width: 760px)").matches
      ? 78
      : 92;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      top: Math.max(0, targetTop),
    });
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
