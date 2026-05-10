import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neo Olinar · Engineer & Builder",
  description: "Portfolio of Neo Olinar. Modern web, AI products, and design-engineering.",
  metadataBase: new URL("https://portfolio-neo.vercel.app"),
  openGraph: {
    title: "Neo Olinar · Engineer & Builder",
    description: "Modern web, AI products, and design-engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
