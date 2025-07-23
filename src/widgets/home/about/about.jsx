"use client";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui/button";
import { Link } from "@/i18n/navigation";

const AboutSection = () => {
  const t = useTranslations("aboutSection");

  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {t("title")}
                </h2>
                <div className="w-20 h-1 bg-orange-600 mb-6"></div>
              </div>
              <div className="space-y-4 text-gray-700">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {t("ourMission")}
                </h3>
                <p className="text-lg leading-relaxed">
                  {t("missionDescription")}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 pt-4">
                  {t("ourGoals")}
                </h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    {t("goals.quality")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    {t("goals.safety")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    {t("goals.individual")}
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    {t("goals.development")}
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    {t("learnMore")}
                  </Button>
                </Link>
              </div>
            </div>
            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("imageAlts.kitchen")}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=225&width=300"
                    alt={t("imageAlts.chefs")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=225&width=300"
                    alt={t("imageAlts.dishes")}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt={t("imageAlts.serving")}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
