import { Marquee } from "@/shared/magicui/marquee";
import { getTranslations } from "next-intl/server";
const partners = [
  {
    id: 1,
    name: "Казахстанская Медная Компания",
    logo: "/images/creating1.webp",
    category: "Горнодобыча",
  },
  {
    id: 2,
    name: "Казахтелеком",
    logo: "/images/creating2.webp",
    category: "Телекоммуникации",
  },
  {
    id: 3,
    name: "КазМунайГаз",
    logo: "/images/creating3.webp",
    category: "Нефтегаз",
  },
  {
    id: 4,
    name: "Банк Центр Кредит",
    logo: "/images/creating4.webp",
    category: "Банковские услуги",
  },
  {
    id: 5,
    name: "Казахстан Темир Жолы",
    logo: "/images/eyes.webp",
    category: "Железнодорожный транспорт",
  },
  {
    id: 6,
    name: "АрселорМиттал Темиртау",
    logo: "/images/pc.webp",
    category: "Металлургия",
  },
  {
    id: 7,
    name: "Казатомпром",
    logo: "/images/result.webp",
    category: "Атомная энергетика",
  },
];

export default async function PartnersSection() {
  const t = await getTranslations("partnersSection");
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Partners Carousel - Row 1 (Left to Right) */}
        <div className="mb-8">
          <Marquee pauseOnHover className="[--duration:30s]">
            {partners.map((partner, index) => (
              <div
                key={`row1-${partner.id}-${index}`}
                className="flex-shrink-0 max-h-[140px] w-[100px] group cursor-pointer"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-[100%] w-[100%] object-contain filter  transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
