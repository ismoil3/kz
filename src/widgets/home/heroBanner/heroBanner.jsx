"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { useLocale, useTranslations } from "next-intl";

const slides = [
  {
    id: 1,
    title: {
      ru: "Профессиональное корпоративное питание",
      kk: "Кәсіби корпоративтік тамақтандыру",
    },
    subtitle: {
      ru: "Качественные блюда для вашего бизнеса",
      kk: "Сіздің бизнесіңіз үшін сапалы тағамдар",
    },
    description: {
      ru: "Мы обеспечиваем полноценное питание для крупных компаний и организаций по всему Казахстану",
      kk: "Біз бүкіл Қазақстан бойынша ірі компаниялар мен ұйымдарға толыққанды тамақтандыруды қамтамасыз етеміз",
    },
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: {
      ru: "Безопасность и качество",
      kk: "Қауіпсіздік пен сапа",
    },
    subtitle: {
      ru: "Соответствие международным стандартам",
      kk: "Халықаралық стандарттарға сәйкестік",
    },
    description: {
      ru: "Наша система контроля качества гарантирует безопасность каждого блюда",
      kk: "Біздің сапа бақылау жүйесі әрбір тағамның қауіпсіздігіне кепілдік береді",
    },
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: {
      ru: "Индивидуальный подход",
      kk: "Жеке көзқарас",
    },
    subtitle: {
      ru: "Решения для любого масштаба",
      kk: "Кез келген ауқымға арналған шешімдер",
    },
    description: {
      ru: "От небольших офисов до крупных промышленных предприятий",
      kk: "Кішкентай кеңселерден ірі өнеркәсіп кәсіпорындарына дейін",
    },
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  },
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                {slide.title[locale]}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-orange-300">
                {slide.subtitle[locale]}
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.description[locale]}
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  {t("navigation.services")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
