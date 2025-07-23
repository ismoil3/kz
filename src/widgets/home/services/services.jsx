"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import {
  Building2,
  PartyPopper,
  Factory,
  Heart,
  GraduationCap,
  Crown,
  ChefHat,
  Clock,
  Star,
  Users,
  Utensils,
  TrendingUp,
} from "lucide-react";

// Predefined beautiful color combinations
const colorPalettes = [
  {
    gradient: "from-blue-500 to-blue-600",
    accent: "border-blue-200 hover:border-blue-300",
    hover:
      "group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700",
  },
  {
    gradient: "from-purple-500 to-pink-500",
    accent: "border-purple-200 hover:border-purple-300",
    hover:
      "group-hover:bg-purple-50 group-hover:border-purple-200 group-hover:text-purple-700",
  },
  {
    gradient: "from-orange-500 to-red-500",
    accent: "border-orange-200 hover:border-orange-300",
    hover:
      "group-hover:bg-orange-50 group-hover:border-orange-200 group-hover:text-orange-700",
  },
  {
    gradient: "from-green-500 to-emerald-500",
    accent: "border-green-200 hover:border-green-300",
    hover:
      "group-hover:bg-green-50 group-hover:border-green-200 group-hover:text-green-700",
  },
  {
    gradient: "from-yellow-500 to-orange-400",
    accent: "border-yellow-200 hover:border-yellow-300",
    hover:
      "group-hover:bg-yellow-50 group-hover:border-yellow-200 group-hover:text-yellow-700",
  },
  {
    gradient: "from-indigo-500 to-purple-600",
    accent: "border-indigo-200 hover:border-indigo-300",
    hover:
      "group-hover:bg-indigo-50 group-hover:border-indigo-200 group-hover:text-indigo-700",
  },
  {
    gradient: "from-rose-500 to-pink-600",
    accent: "border-rose-200 hover:border-rose-300",
    hover:
      "group-hover:bg-rose-50 group-hover:border-rose-200 group-hover:text-rose-700",
  },
  {
    gradient: "from-cyan-500 to-blue-500",
    accent: "border-cyan-200 hover:border-cyan-300",
    hover:
      "group-hover:bg-cyan-50 group-hover:border-cyan-200 group-hover:text-cyan-700",
  },
  {
    gradient: "from-teal-500 to-green-500",
    accent: "border-teal-200 hover:border-teal-300",
    hover:
      "group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-700",
  },
  {
    gradient: "from-violet-500 to-purple-500",
    accent: "border-violet-200 hover:border-violet-300",
    hover:
      "group-hover:bg-violet-50 group-hover:border-violet-200 group-hover:text-violet-700",
  },
  {
    gradient: "from-amber-500 to-yellow-500",
    accent: "border-amber-200 hover:border-amber-300",
    hover:
      "group-hover:bg-amber-50 group-hover:border-amber-200 group-hover:text-amber-700",
  },
  {
    gradient: "from-lime-500 to-green-400",
    accent: "border-lime-200 hover:border-lime-300",
    hover:
      "group-hover:bg-lime-50 group-hover:border-lime-200 group-hover:text-lime-700",
  },
];

const services = [
  {
    id: "corporate",
    icon: "Building2",
    title: {
      ru: "Корпоративное питание",
      kk: "Корпоративтік тамақтандыру",
    },
    description: {
      ru: "Ежедневное питание для офисов и производственных предприятий с индивидуальным подходом к каждому клиенту",
      kk: "Кеңселер мен өндірістік кәсіпорындар үшін күнделікті тамақтандыру қызметі әрбір клиентке жеке көзқараспен",
    },
    features: {
      ru: ["Ежедневное меню", "Диетические блюда", "Доставка", "Гибкие тарифы"],
      kk: [
        "Күнделікті мәзір",
        "Диеталық тағамдар",
        "Жеткізу қызметі",
        "Икемді тарифтер",
      ],
    },
    isPopular: true,
  },
  {
    id: "events",
    icon: "PartyPopper",
    title: {
      ru: "Мероприятия и банкеты",
      kk: "Іс-шаралар мен банкеттер",
    },
    description: {
      ru: "Профессиональное обслуживание корпоративных событий, свадеб и праздников с полным сервисом",
      kk: "Корпоративтік іс-шаралар, той-жиындар мен мерекелер үшін кәсіби қызмет толық сервиспен",
    },
    features: {
      ru: [
        "Индивидуальное меню",
        "Декор и сервировка",
        "Профессиональное обслуживание",
        "Фото-зона",
      ],
      kk: [
        "Дербес мәзір",
        "Декор және сервировка",
        "Кәсіби қызмет көрсету",
        "Фото аймағы",
      ],
    },
  },
  {
    id: "industrial",
    icon: "Factory",
    title: {
      ru: "Промышленное питание",
      kk: "Өнеркәсіптік тамақтандыру",
    },
    description: {
      ru: "Специализированные программы питания для заводов и горнодобывающих предприятий с соблюдением всех норм безопасности",
      kk: "Зауыттар мен кен орындары үшін арнайы тамақтандыру бағдарламалары барлық қауіпсіздік нормаларын сақтаумен",
    },
    features: {
      ru: [
        "Круглосуточное обслуживание",
        "Специальные диеты",
        "Стандарты безопасности HACCP",
        "Усиленное питание",
      ],
      kk: [
        "Тәулік бойы қызмет",
        "Арнайы диета",
        "HACCP қауіпсіздік стандарттары",
        "Күшейтілген тамақтану",
      ],
    },
  },
  {
    id: "healthcare",
    icon: "Heart",
    title: {
      ru: "Медицинские учреждения",
      kk: "Медициналық мекемелер",
    },
    description: {
      ru: "Диетическое и лечебное питание для больниц и клиник с учетом медицинских требований",
      kk: "Ауруханалар мен клиникалар үшін диеталық және емдік тамақтандыру медициналық талаптарды ескере отырып",
    },
    features: {
      ru: [
        "Лечебные диеты",
        "Стерильные условия",
        "Консультации диетологов",
        "Индивидуальные рационы",
      ],
      kk: [
        "Емдік диета",
        "Стерильді жағдайлар",
        "Диетологтармен кеңес",
        "Жеке рациондар",
      ],
    },
  },
  {
    id: "education",
    icon: "GraduationCap",
    title: {
      ru: "Образовательные учреждения",
      kk: "Білім беру мекемелері",
    },
    description: {
      ru: "Здоровое питание для школ, университетов и детских садов с учетом возрастных особенностей",
      kk: "Мектептер, университеттер мен балабақшалар үшін тамақтандыру жас ерекшеліктерін ескере отырып",
    },
    features: {
      ru: [
        "Детское меню",
        "Сбалансированное питание",
        "Контроль качества",
        "Образовательные программы",
      ],
      kk: [
        "Балалар мәзірі",
        "Теңдестірілген тамақтану",
        "Сапа бақылауы",
        "Білім беру бағдарламалары",
      ],
    },
  },
  {
    id: "vip",
    icon: "Crown",
    title: {
      ru: "VIP обслуживание",
      kk: "VIP қызмет көрсету",
    },
    description: {
      ru: "Эксклюзивные кейтеринговые услуги для клиентов высокого уровня с персональным подходом",
      kk: "Жоғары деңгейдегі клиенттер үшін эксклюзивті тамақтандыру қызметі жеке көзқараспен",
    },
    features: {
      ru: [
        "Персональный шеф-повар",
        "Премиум продукты",
        "Индивидуальный сервис",
        "Эксклюзивные блюда",
      ],
      kk: [
        "Жеке аспазшы",
        "Премиум өнімдер",
        "Жеке қызмет",
        "Эксклюзивті тағамдар",
      ],
    },
    isPopular: false,
  },
];

// Function to shuffle array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ServicesGridClient() {
  const [hoveredService, setHoveredService] = useState(null);
  const t = useTranslations("servicesGrid");
  const locale = useLocale();

  // Generate random colors for each service (memoized to prevent re-shuffling on re-renders)
  const serviceColors = useMemo(() => {
    const shuffledColors = shuffleArray(colorPalettes);
    const colorMap = {};

    services.forEach((service, index) => {
      colorMap[service.id] = shuffledColors[index % shuffledColors.length];
    });

    return colorMap;
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <ChefHat className="w-4 h-4" />
            {locale === "kk" ? "Кәсіби қызметтер" : "Профессиональные услуги"}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const isHovered = hoveredService === service.id;
            const colors = serviceColors[service.id];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative"
              >
                <Card
                  className={`h-full border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colors.accent} bg-white/80 backdrop-blur-sm`}
                >
                  {/* Popular Badge */}
                  {service.isPopular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge
                        className={`bg-gradient-to-r ${colors.gradient} text-white px-3 py-1 rounded-full shadow-lg`}
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {locale === "kk" ? "Танымал" : "Популярно"}
                      </Badge>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Content */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {service.title[locale]}
                        </h3>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {service.description[locale]}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features[locale].map(
                          (feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: isHovered ? 1 : 0.7, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-center gap-2"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient}`}
                              />
                              <span className="text-sm text-gray-700 font-medium">
                                {feature}
                              </span>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-100"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className={`w-full ${colors.hover} bg-transparent`}
                      >
                        {locale === "kk" ? "Толығырақ" : "Подробнее"}
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
