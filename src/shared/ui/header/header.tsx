"use client";

import { useState } from "react";
import { Menu, X, Home, User, Settings, MessageCircle } from "lucide-react";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "../language-switcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("navigation");
  const pathname = usePathname();

  const navigationItems = [
    { name: t("home"), href: "/", icon: Home },
    { name: t("about"), href: "/about", icon: User },
    { name: t("services"), href: "/services", icon: Settings },
    { name: t("contact"), href: "/contact", icon: MessageCircle },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/ru" || pathname === "/kk";
    }
    return pathname.includes(href);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 lg:block hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900">
                  Logo<span className="text-orange-500">.</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex space-x-8">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive(item.href)
                      ? "text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher variant="desktop" />
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-200"
              >
                {t("consultation")}
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-200">
                {t("contactUs")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Logo<span className="text-orange-500">.</span>
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="border-t border-gray-100 bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                      isActive(item.href)
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 px-3">
                  <LanguageSwitcher variant="mobile" />
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    {t("consultation")}
                  </Button>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    {t("contactUs")}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="grid grid-cols-4 h-16">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
