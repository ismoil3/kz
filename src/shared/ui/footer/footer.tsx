"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-white">
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">{t("copyright")}</div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {t("privacyPolicy")}
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {t("termsOfUse")}
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {t("sitemap")}
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
              <div>
                <h5 className="font-semibold text-white mb-2">
                  {t("licenses.title")}
                </h5>
                <p>{t("licenses.foodLicense")}</p>
                <p>{t("licenses.isoСertificate")}</p>
                <p>{t("licenses.haccpCertificate")}</p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">
                  {t("geography.title")}
                </h5>
                <p>{t("geography.cities")}</p>
                <p>{t("geography.majorCities")}</p>
                <p>{t("geography.otherCities")}</p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">
                  {t("statistics.title")}
                </h5>
                <p>{t("statistics.projects")}</p>
                <p>{t("statistics.clients")}</p>
                <p>{t("statistics.experience")}</p>
              </div>
            </div>

            <div className="mt-4 text-center text-gray-500 text-sm">
              {t("poweredBy")}{" "}
              <Link
                href="https://ismoil-beta.vercel.app/"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Softclub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
