import type { Metadata } from "next";
import QueryProvider from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick and Morty Characters",
  description: "Browse Rick and Morty characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rickandmortyapi.com" />
        <link rel="dns-prefetch" href="https://rickandmortyapi.com" />
      </head>
      <body>
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
