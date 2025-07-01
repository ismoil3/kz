import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/shared/ui/header/header";
import "../globals.css";
import Footer from "@/shared/ui/footer/footer";

export const metadata = {
  title: "Zekamed - Medical Solutions",
  description:
    "Zekamed provides innovative medical solutions and healthcare services.",
  keywords: "medicine, healthcare, medical solutions, health services, zekamed",
  openGraph: {
    title: "Zekamed - Medical Solutions",
    description:
      "Zekamed provides innovative medical solutions and healthcare services.",
    url: "https://zekamed.com/",
    siteName: "Zekamed",
    images: [
      {
        url: "https://zekamed.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zekamed Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zekamed",
    title: "Zekamed - Medical Solutions",
    description:
      "Zekamed provides innovative medical solutions and healthcare services.",
    image: "https://zekamed.com/twitter-image.jpg",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
