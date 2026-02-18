import type { Metadata } from "next";
import "./globals.css";
import "@waysconf/ui/project-page.css";
import "@waysconf/ui/nominations.css";

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
      <body suppressHydrationWarning>
        <div className="site-preheader">
          <div className="site-preheader__content">
            <span className="site-preheader__text">
              WaysConf – product leadership conference
            </span>
            <a
              href="https://www.waysconf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="site-preheader__link"
            >
              waysconf.com
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
