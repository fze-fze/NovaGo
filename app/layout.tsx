import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const origin = host ? `${protocol}://${host}` : "http://localhost:3000";
  const socialImage = new URL("/og.png", origin).toString();

  return {
    title: "NovaGo — A Softer Start to Campus Life",
    description:
      "The UX case study for NovaGo, a connected campus super-app concept for students who are new to NUS.",
    openGraph: {
      title: "NovaGo — A Softer Start to Campus Life",
      description:
        "A connected campus super-app concept for students who are new to NUS.",
      type: "website",
      images: [{ url: socialImage, width: 1731, height: 909 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "NovaGo — A Softer Start to Campus Life",
      description:
        "A connected campus super-app concept for students who are new to NUS.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
