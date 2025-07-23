"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Card } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import {
  Users,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: {
      ru: "ТОО 'Казахстанская Медная Компания'",
      kk: "«Қазақстан Мыс Компаниясы» ЖШС",
    },
    description: {
      ru: "Организация полноценного питания для 2,500 сотрудников горнодобывающего предприятия. Реализована система трехразового питания с учетом специфики работы в три смены. Особое внимание уделено питанию для подземных работников с повышенными энергетическими потребностями.",
      kk: "2500 қызметкер үшін кен өндіру кәсіпорнында толыққанды тамақтандыруды ұйымдастыру. Үш ауысымда жұмыс істеу ерекшелігін ескере отырып, үш рет тамақтану жүйесі іске асырылды. Жер асты жұмысшыларының жоғары энергетикалық қажеттіліктерін ескере отырып, олардың тамақтануына ерекше назар аударылды.",
    },
    employees: "2,500",
    duration: {
      ru: "3 года",
      kk: "3 жыл",
    },
    location: {
      ru: "г. Жезказган",
      kk: "Жезқазған қ.",
    },
    tags: {
      ru: ["Промышленность", "Круглосуточно", "Диетическое питание"],
      kk: ["Өнеркәсіп", "Тәулік бойы", "Диеталық тамақтану"],
    },
    photoCollage: [
      "/placeholder.svg?height=250&width=300",
      "/placeholder.svg?height=200&width=250",
      "/placeholder.svg?height=300&width=280",
      "/placeholder.svg?height=220&width=260",
      "/placeholder.svg?height=280&width=300",
      "/placeholder.svg?height=240&width=270",
    ],
    mainImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: {
      ru: "АО 'Казахтелеком'",
      kk: "«Қазақтелеком» АҚ",
    },
    description: {
      ru: "Комплексное корпоративное питание для головного офиса и 15 региональных представительств. Внедрена система здорового питания с разнообразным меню, включающим международную кухню. Организация VIP-обслуживания для руководства и бизнес-ланчей для партнеров.",
      kk: "Бас кеңсе және 15 өңірлік өкілдік үшін кешенді корпоративтік тамақтандыру. Халықаралық ас үйді қамтитын әртүрлі мәзірмен салауатты тамақтану жүйесі енгізілді. Басшылық үшін VIP қызмет көрсету және серіктестер үшін бизнес-ланч ұйымдастыру.",
    },
    employees: "1,200",
    duration: {
      ru: "2 года",
      kk: "2 жыл",
    },
    location: {
      ru: "г. Алматы + регионы",
      kk: "Алматы қ. + өңірлер",
    },
    tags: {
      ru: ["IT/Телеком", "Офисное питание", "VIP-сервис"],
      kk: ["IT/Телеком", "Кеңсе тамақтануы", "VIP-қызмет"],
    },
    photoCollage: [
      "/placeholder.svg?height=280&width=320",
      "/placeholder.svg?height=240&width=280",
      "/placeholder.svg?height=260&width=300",
      "/placeholder.svg?height=300&width=290",
      "/placeholder.svg?height=220&width=250",
      "/placeholder.svg?height=270&width=310",
    ],
    mainImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: {
      ru: "Завод 'КазАзот'",
      kk: "«ҚазАзот» зауыты",
    },
    description: {
      ru: "Специализированное питание для химического предприятия с соблюдением строжайших требований безопасности. Разработано специальное меню для работников вредных производств с повышенным содержанием витаминов и антиоксидантов. Внедрена система контроля качества HACCP.",
      kk: "Қауіпсіздіктің қатаң талаптарын сақтай отырып, химия кәсіпорны үшін мамандандырылған тамақтандыру. Зиянды өндірістер жұмысшылары үшін дәрумендер мен антиоксиданттардың жоғары мөлшерімен арнайы мәзір әзірленді. HACCP сапа бақылау жүйесі енгізілді.",
    },
    employees: "1,800",
    duration: {
      ru: "4 года",
      kk: "4 жыл",
    },
    location: {
      ru: "г. Актау",
      kk: "Ақтау қ.",
    },
    tags: {
      ru: ["Химпром", "Спецпитание", "HACCP"],
      kk: ["Химөнеркәсіп", "Арнайы тамақтану", "HACCP"],
    },
    photoCollage: [
      "/placeholder.svg?height=260&width=290",
      "/placeholder.svg?height=300&width=320",
      "/placeholder.svg?height=230&width=270",
      "/placeholder.svg?height=280&width=300",
      "/placeholder.svg?height=250&width=280",
      "/placeholder.svg?height=290&width=310",
    ],
    mainImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: {
      ru: "Банк 'Центр Кредит'",
      kk: "«Центр Кредит» банкі",
    },
    description: {
      ru: "Премиальное обслуживание банковской сферы с акцентом на презентабельность и качество. Организовано питание в 45 отделениях по всему Казахстану. Специальное меню для клиентских мероприятий и банкетов. Внедрена система онлайн-заказов для сотрудников.",
      kk: "Көрнекілік пен сапаға баса назар аудара отырып, банк саласының премиум қызмет көрсетуі. Бүкіл Қазақстан бойынша 45 бөлімшеде тамақтандыру ұйымдастырылды. Клиенттік іс-шаралар мен банкеттер үшін арнайы мәзір. Қызметкерлер үшін онлайн тапсырыс беру жүйесі енгізілді.",
    },
    employees: "3,000",
    duration: {
      ru: "5 лет",
      kk: "5 жыл",
    },
    location: {
      ru: "45 городов Казахстана",
      kk: "Қазақстанның 45 қаласы",
    },
    tags: {
      ru: ["Банки", "Премиум", "Онлайн-заказы"],
      kk: ["Банктер", "Премиум", "Онлайн тапсырыстар"],
    },
    photoCollage: [
      "/placeholder.svg?height=290&width=310",
      "/placeholder.svg?height=250&width=280",
      "/placeholder.svg?height=270&width=300",
      "/placeholder.svg?height=240&width=270",
      "/placeholder.svg?height=310&width=330",
      "/placeholder.svg?height=260&width=290",
    ],
    mainImage: "/placeholder.svg?height=400&width=600",
  },
];

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);
  const t = useTranslations("projectsSection");
  const locale = useLocale();

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section className="py-16 bg-white">
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

        {/* Project Showcase */}
        <div className="relative">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title[locale]}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags[locale].map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-orange-100 text-orange-800"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {project.description[locale]}
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">
                        {project.employees} {t("employees")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">
                        {project.duration[locale]} {t("duration")}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-600 font-medium">
                        {project.location[locale]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Collage */}
              <div className="relative bg-gray-50 p-6">
                <div className="grid grid-cols-3 gap-2 h-full">
                  {/* Main large image */}
                  <div className="col-span-2 row-span-2">
                    <img
                      src={project.mainImage || "/placeholder.svg"}
                      alt={`${project.title[locale]} - ${t("mainPhoto")}`}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                  {/* Smaller images */}
                  {project.photoCollage.slice(0, 4).map((photo, index) => (
                    <div
                      key={index}
                      className={index === 0 ? "row-span-1" : ""}
                    >
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`${project.title[locale]} - ${t("photo")} ${
                          index + 1
                        }`}
                        className="w-full h-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                      />
                    </div>
                  ))}
                  {/* Last image with overlay showing more photos */}
                  <div className="relative">
                    <img
                      src={project.photoCollage[4] || "/placeholder.svg"}
                      alt={`${project.title[locale]} - ${t("photo")} 5`}
                      className="w-full h-full object-cover rounded-lg shadow-sm"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">
                        +{project.photoCollage.length - 5} {t("morePhotos")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentProject
                  ? "bg-orange-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-6">
          <span className="text-gray-500">
            {currentProject + 1} {locale === "ru" ? "из" : ""} {projects.length}{" "}
            {locale === "ru" ? "проектов" : "жобалардан"}
          </span>
        </div>
      </div>
    </section>
  );
}
