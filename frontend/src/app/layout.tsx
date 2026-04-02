import "@/styles/globals.css";
import "katex/dist/katex.min.css";

import { type Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/core/i18n/context";
import { detectLocaleServer } from "@/core/i18n/server";

export const metadata: Metadata = {
  title: "Cocoon Break",
  description: "A LangChain-based framework for building super agents.",
};

export const links = [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/geist@5.2.8/geist-all.css",
  },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/@fontsource-variable/geist-mono@5.2.7/geist-mono-all.css",
  },
];

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await detectLocaleServer();
  return (
    <html lang={locale} suppressContentEditableWarning suppressHydrationWarning>
      <body style={{ fontFamily: "'Raleway', sans-serif" }}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <I18nProvider initialLocale={locale}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
