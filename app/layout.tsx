import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { notFound, redirect } from "next/navigation";
import { getLocale } from "next-intl/server";
import { getCurrentLocale } from "./locales/server";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "test.",
};
const locales = ["en", "fr"];
export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const { locale } = await params;
  //  const local = await getLocale();

  // const locale = await getCurrentLocale();
  //console.log(locale);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
