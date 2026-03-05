import type { Metadata } from "next";
import { Button } from "@waysconf/ui";
import "./globals.css";
import "@waysconf/ui/fonts.css";
import "@waysconf/ui/project-page.css";
import "@waysconf/ui/nominations.css";
import "@waysconf/ui/components.css";
import "@waysconf/ui/awards-home.css";
import "@waysconf/ui/awards-jury-form.css";

export const metadata: Metadata = {
  title: "WaysAwards - Voting",
  description:
    "Vote for your favorite digital projects in the WaysAwards. Cast your vote today!",
  keywords: ["WaysConf", "Awards", "Voting", "Digital Projects"],
  authors: [{ name: "WaysConf" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/GeneralSans-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <div className="site-preheader">
          <div className="site-preheader__content">
            <span className="site-preheader__text">
              WaysConf – product leadership conference
            </span>
            <Button
              href="https://www.waysconf.com"
              className="site-preheader__button"
            >
              waysconf.com
            </Button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
