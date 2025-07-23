"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import {
  Utensils,
  Award,
  Heart,
  Clock,
  Users,
  ChefHat,
  Cake,
  Star,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";

export default function DastarkhanAboutPage() {
  const t = useTranslations("dastarkhanAbout");

  const services = [
    {
      icon: <Cake className="h-8 w-8" />,
      titleKey: "events.title",
      descriptionKey: "events.description",
    },
    {
      icon: <Users className="h-8 w-8" />,
      titleKey: "corporate.title",
      descriptionKey: "corporate.description",
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      titleKey: "national.title",
      descriptionKey: "national.description",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      titleKey: "express.title",
      descriptionKey: "express.description",
    },
  ];

  const stats = [
    {
      number: "15+",
      labelKey: "experience",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      number: "500+",
      labelKey: "events",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "50+",
      labelKey: "chefs",
      icon: <ChefHat className="h-6 w-6" />,
    },
    {
      number: "100%",
      labelKey: "satisfaction",
      icon: <Heart className="h-6 w-6" />,
    },
  ];

  const specialties = [
    {
      nameKey: "beshbarmak.name",
      descriptionKey: "beshbarmak.description",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "plov.name",
      descriptionKey: "plov.description",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "manti.name",
      descriptionKey: "manti.description",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      nameKey: "baursaki.name",
      descriptionKey: "baursaki.description",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  const testimonials = [
    {
      textKey: "testimonial1.text",
      authorKey: "testimonial1.author",
      roleKey: "testimonial1.role",
    },
    {
      textKey: "testimonial2.text",
      authorKey: "testimonial2.author",
      roleKey: "testimonial2.role",
    },
    {
      textKey: "testimonial3.text",
      authorKey: "testimonial3.author",
      roleKey: "testimonial3.role",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Food-themed decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Utensils className="h-10 w-10" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {t("hero.subtitle")}. {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Utensils className="mr-2 h-5 w-5" />
                {t("hero.ourMenu")}
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t("hero.orderNow")}
              </Button>
            </div>
          </div>
        </div>
        {/* Modern wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-orange-50">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              <Utensils className="h-4 w-4" />
              {t("story.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t("story.title")}
              <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                {" "}
                {t("story.titleAccent")}
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("story.description1")}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t("story.description2")}
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full border-2 border-white flex items-center justify-center text-white font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                {t("story.trustBadge")}
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-xl opacity-20"></div>
            <Card className="relative border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="flex justify-center">
                        <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t(`stats.${stat.labelKey}`)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-200 text-orange-800 rounded-full text-sm font-medium mb-4">
              <Award className="h-4 w-4" />
              {t("services.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t(`services.${service.titleKey}`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`services.${service.descriptionKey}`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            <ChefHat className="h-4 w-4" />
            {t("specialties.badge")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("specialties.title")}
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              {" "}
              {t("specialties.titleAccent")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("specialties.subtitle")}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={specialty.image || "/placeholder.svg"}
                  alt={t(`specialties.${specialty.nameKey}`)}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`specialties.${specialty.nameKey}`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`specialties.${specialty.descriptionKey}`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-gray-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              {t("testimonials.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t("testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    &quot;{t(`testimonials.${testimonial.textKey}`)}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      {t(`testimonials.${testimonial.authorKey}`).charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {t(`testimonials.${testimonial.authorKey}`)}
                      </p>
                      <p className="text-sm text-gray-600">
                        {t(`testimonials.${testimonial.roleKey}`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Phone className="mr-2 h-5 w-5" />
                {t("cta.callUs")}
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("cta.sendRequest")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
