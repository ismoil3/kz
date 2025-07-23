import type React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter } from "next/font/google";
import Header from "@/shared/ui/header/header";
import Footer from "@/shared/ui/footer/footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata" });

  const baseUrl = "https://zekamed.com";
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    title: {
      default: t("title.default"),
      template: `%s | Zekamed`,
    },
    description: t("description.default"),
    keywords: t("keywords"),
    authors: [
      {
        name: t("author"),
        url: baseUrl,
      },
    ],
    creator: t("author"),
    publisher: t("publisher"),
    category: t("category"),
    classification: t("classification"),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${baseUrl}/en`,
        kk: `${baseUrl}/kk`,
        ru: `${baseUrl}/ru`,
        "x-default": `${baseUrl}/en`,
      },
    },
    openGraph: {
      type: "website",
      locale: t("openGraph.locale"),
      url: currentUrl,
      siteName: t("openGraph.siteName"),
      title: t("title.default"),
      description: t("description.default"),
      images: [
        {
          url: t("openGraph.images.url"),
          width: 1200,
          height: 630,
          alt: t("openGraph.images.alt"),
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: t("twitter.site"),
      creator: t("twitter.creator"),
      title: t("title.default"),
      description: t("description.default"),
      images: [t("openGraph.images.url")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
    other: {
      "msapplication-TileColor": "#2563eb",
      "theme-color": "#2563eb",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": t("openGraph.siteName"),
      "application-name": t("openGraph.siteName"),
      "mobile-web-app-capable": "yes",
      "msapplication-config": "/browserconfig.xml",
      "msapplication-TileImage": "/mstile-144x144.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zekamed",
              alternateName:
                locale === "kk"
                  ? "Зекамед"
                  : locale === "ru"
                  ? "Зекамед"
                  : "Zekamed",
              url: `https://zekamed.com/${locale}`,
              logo: "https://zekamed.com/logo.png",
              image: "https://zekamed.com/og-image.jpg",
              description:
                locale === "kk"
                  ? "Zekamed инновациялық медициналық шешімдер мен денсаулық сақтау қызметтерін ұсынады."
                  : locale === "ru"
                  ? "Zekamed предоставляет инновационные медицинские решения и услуги здравоохранения."
                  : "Zekamed provides innovative medical solutions and healthcare services.",
              telephone: "+7-XXX-XXX-XXXX",
              email: "info@zekamed.com",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  locale === "kk"
                    ? "Медициналық орталық көшесі 123"
                    : locale === "ru"
                    ? "ул. Медицинский центр 123"
                    : "123 Medical Center Street",
                addressLocality:
                  locale === "kk"
                    ? "Алматы"
                    : locale === "ru"
                    ? "Алматы"
                    : "Almaty",
                addressCountry: "KZ",
                postalCode: "050000",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.2220",
                longitude: "76.8512",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
              sameAs: [
                "https://www.facebook.com/zekamed",
                "https://www.instagram.com/zekamed",
                "https://www.linkedin.com/company/zekamed",
              ],
              serviceArea: {
                "@type": "Country",
                name: "Kazakhstan",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name:
                  locale === "kk"
                    ? "Медициналық қызметтер"
                    : locale === "ru"
                    ? "Медицинские услуги"
                    : "Medical Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name:
                        locale === "kk"
                          ? "Диагностика"
                          : locale === "ru"
                          ? "Диагностика"
                          : "Diagnostics",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name:
                        locale === "kk"
                          ? "Емдеу"
                          : locale === "ru"
                          ? "Лечение"
                          : "Treatment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name:
                        locale === "kk"
                          ? "Профилактика"
                          : locale === "ru"
                          ? "Профилактика"
                          : "Prevention",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "250",
                bestRating: "5",
                worstRating: "1",
              },
              foundingDate: "2010",
              numberOfEmployees: "100+",
              slogan:
                locale === "kk"
                  ? "Сіздің денсаулығыңыз - біздің басымдығымыз"
                  : locale === "ru"
                  ? "Ваше здоровье - наш приоритет"
                  : "Your health is our priority",
            }),
          }}
        />

        {/* Medical Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "@id": "https://zekamed.com",
              name: "Zekamed",
              image: "https://zekamed.com/logo.png",
              telephone: "+7-XXX-XXX-XXXX",
              email: "info@zekamed.com",
              url: `https://zekamed.com/${locale}`,
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  locale === "kk"
                    ? "Медициналық орталық көшесі 123"
                    : locale === "ru"
                    ? "ул. Медицинский центр 123"
                    : "123 Medical Center Street",
                addressLocality:
                  locale === "kk"
                    ? "Алматы"
                    : locale === "ru"
                    ? "Алматы"
                    : "Almaty",
                addressRegion:
                  locale === "kk"
                    ? "Алматы облысы"
                    : locale === "ru"
                    ? "Алматинская область"
                    : "Almaty Region",
                postalCode: "050000",
                addressCountry: "KZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.222,
                longitude: 76.8512,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
              ],
              priceRange: "$$",
              medicalSpecialty: [
                locale === "kk"
                  ? "Жалпы медицина"
                  : locale === "ru"
                  ? "Общая медицина"
                  : "General Medicine",
                locale === "kk"
                  ? "Диагностика"
                  : locale === "ru"
                  ? "Диагностика"
                  : "Diagnostics",
                locale === "kk"
                  ? "Кардиология"
                  : locale === "ru"
                  ? "Кардиология"
                  : "Cardiology",
              ],
              paymentAccepted: "Cash, Credit Card, Insurance",
              currenciesAccepted: "KZT",
              isAcceptingNewPatients: true,
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
