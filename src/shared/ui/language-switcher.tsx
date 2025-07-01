"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/shared/ui/button";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

const LanguageSwitcher = ({ variant = "desktop" }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("languages");

  const languages = [
    { code: "ru", name: t("ru"), flag: "🇷🇺" },
    { code: "kk", name: t("kk"), flag: "🇰🇿" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (langCode: string) => {
    const segments = pathname.split("/");
    segments[1] = langCode;
    const newPath = segments.join("/");
    router.push(newPath);
    setIsOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="px-3 py-2">
        <div className="text-sm font-medium text-gray-500 mb-2">
          {t("selectLanguage")}
        </div>
        <div className="space-y-1">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                locale === language.code
                  ? "bg-orange-100 text-orange-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <span className="sm:hidden">{currentLanguage?.flag}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center px-4 py-2 text-sm transition-colors duration-200 ${
                    locale === language.code
                      ? "bg-orange-50 text-orange-600 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-3">{language.flag}</span>
                  {language.name}
                  {locale === language.code && (
                    <span className="ml-auto text-orange-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
