"use client";

import type React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { Alert, AlertDescription } from "@/shared/ui/alert";
import {
  Phone,
  Mail,
  Building2,
  MapPin,
  Shield,
  CheckCircle,
  Send,
  Calendar,
  Users,
  Clock,
  Utensils,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    eventType: "",
    guestCount: "",
    eventDate: "",
    location: "",
    comments: "",
    serviceType: "catering",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Security function to detect and prevent links
  const containsLinks = (text: string): boolean => {
    const linkPatterns = [
      /https?:\/\//i,
      /www\./i,
      /[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/,
      /@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/,
    ];
    return linkPatterns.some((pattern) => pattern.test(text));
  };

  const validateField = (name: string, value: string): string => {
    if (containsLinks(value)) {
      return t("form.validation.linksNotAllowed");
    }
    switch (name) {
      case "fullName":
        return value.length < 2 ? t("form.validation.nameMinLength") : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? t("form.validation.invalidEmail")
          : "";
      case "phoneNumber":
        return !/^[\d\s\-+()]+$/.test(value)
          ? t("form.validation.invalidPhone")
          : "";
      case "guestCount":
        const count = Number.parseInt(value);
        return isNaN(count) || count <= 0
          ? t("form.validation.invalidGuestCount")
          : "";
      default:
        return !value ? t("form.validation.fieldRequired") : "";
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Real-time validation
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "comments") return; // Comments are optional
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="pt-8 pb-8">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <CheckCircle className="relative h-20 w-20 text-orange-500 mx-auto" />
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  {t("success.title")}
                </h2>
                <p className="text-gray-600 text-lg">{t("success.message")}</p>
              </div>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t("success.newRequest")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Modern Header with Orange Gradient */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Mail className="h-8 w-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>
        </div>
        {/* Modern wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-12 fill-orange-50">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Modern Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Card */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  {t("contactInfo.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="p-2 bg-orange-500 rounded-full">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{t("contactInfo.phone")}</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="p-2 bg-orange-500 rounded-full">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">{t("contactInfo.email")}</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="p-2 bg-orange-500 rounded-full">
                    <Building2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">
                    {t("contactInfo.company")}
                  </span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
                  <div className="p-2 bg-orange-500 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">
                    {t("contactInfo.address")}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  {t("workingHours.title")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                  <span className="font-medium">
                    {t("workingHours.weekdays")}
                  </span>
                  <span>{t("workingHours.weekdaysTime")}</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-100 pb-2">
                  <span className="font-medium">
                    {t("workingHours.saturday")}
                  </span>
                  <span>{t("workingHours.saturdayTime")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">
                    {t("workingHours.sunday")}
                  </span>
                  <span>{t("workingHours.sundayTime")}</span>
                </div>
                <Alert className="mt-4 border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-gray-700">
                    {t("workingHours.alert")}
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Modern Application Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                    <Utensils className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{t("form.title")}</CardTitle>
                </div>
                <CardDescription className="text-lg text-gray-600">
                  {t("form.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b-2 border-orange-100">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {t("form.sections.contact")}
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label
                          htmlFor="fullName"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t("form.fields.fullName.label")}
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                          }
                          placeholder={t("form.fields.fullName.placeholder")}
                          className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                            errors.fullName
                              ? "border-red-400"
                              : "border-gray-200"
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.fullName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="phoneNumber"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t("form.fields.phoneNumber.label")}
                        </Label>
                        <Input
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                          }
                          placeholder={t("form.fields.phoneNumber.placeholder")}
                          className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                            errors.phoneNumber
                              ? "border-red-400"
                              : "border-gray-200"
                          }`}
                        />
                        {errors.phoneNumber && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 flex items-center gap-2"
                      >
                        <Mail className="h-4 w-4 text-orange-500" />
                        {t("form.fields.email.label")}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder={t("form.fields.email.placeholder")}
                        className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                          errors.email ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Event Information Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b-2 border-orange-100">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {t("form.sections.event")}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="serviceType"
                        className="text-sm font-medium text-gray-700"
                      >
                        {t("form.fields.serviceType.label")}
                      </Label>
                      <RadioGroup
                        value={formData.serviceType}
                        onValueChange={(value) =>
                          handleInputChange("serviceType", value)
                        }
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="catering" id="catering" />
                          <Label htmlFor="catering" className="font-normal">
                            {t("form.fields.serviceType.catering")}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <Label htmlFor="delivery" className="font-normal">
                            {t("form.fields.serviceType.delivery")}
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="corporate" id="corporate" />
                          <Label htmlFor="corporate" className="font-normal">
                            {t("form.fields.serviceType.corporate")}
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label
                          htmlFor="eventType"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t("form.fields.eventType.label")}
                        </Label>
                        <Select
                          value={formData.eventType}
                          onValueChange={(value) =>
                            handleInputChange("eventType", value)
                          }
                        >
                          <SelectTrigger
                            id="eventType"
                            className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                              errors.eventType
                                ? "border-red-400"
                                : "border-gray-200"
                            }`}
                          >
                            <SelectValue
                              placeholder={t(
                                "form.fields.eventType.placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="wedding">
                              {t("form.fields.eventType.wedding")}
                            </SelectItem>
                            <SelectItem value="birthday">
                              {t("form.fields.eventType.birthday")}
                            </SelectItem>
                            <SelectItem value="corporate">
                              {t("form.fields.eventType.corporate")}
                            </SelectItem>
                            <SelectItem value="conference">
                              {t("form.fields.eventType.conference")}
                            </SelectItem>
                            <SelectItem value="other">
                              {t("form.fields.eventType.other")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.eventType && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.eventType}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="guestCount"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t("form.fields.guestCount.label")}
                        </Label>
                        <Input
                          id="guestCount"
                          type="number"
                          min="1"
                          value={formData.guestCount}
                          onChange={(e) =>
                            handleInputChange("guestCount", e.target.value)
                          }
                          placeholder={t("form.fields.guestCount.placeholder")}
                          className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                            errors.guestCount
                              ? "border-red-400"
                              : "border-gray-200"
                          }`}
                        />
                        {errors.guestCount && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.guestCount}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label
                          htmlFor="eventDate"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t("form.fields.eventDate.label")}
                        </Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) =>
                            handleInputChange("eventDate", e.target.value)
                          }
                          className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                            errors.eventDate
                              ? "border-red-400"
                              : "border-gray-200"
                          }`}
                        />
                        {errors.eventDate && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.eventDate}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="location"
                          className="text-sm font-medium text-gray-700"
                        >
                          {t("form.fields.location.label")}
                        </Label>
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) =>
                            handleInputChange("location", e.target.value)
                          }
                          placeholder={t("form.fields.location.placeholder")}
                          className={`h-12 border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 ${
                            errors.location
                              ? "border-red-400"
                              : "border-gray-200"
                          }`}
                        />
                        {errors.location && (
                          <p className="text-sm text-red-500 flex items-center gap-1">
                            <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                            {errors.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Information Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b-2 border-orange-100">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg">
                        <Send className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {t("form.sections.additional")}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="comments"
                        className="text-sm font-medium text-gray-700"
                      >
                        {t("form.fields.comments.label")}
                      </Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) =>
                          handleInputChange("comments", e.target.value)
                        }
                        placeholder={t("form.fields.comments.placeholder")}
                        className={`min-h-[140px] border-2 transition-all duration-200 focus:border-orange-500 focus:ring-orange-500 resize-none ${
                          errors.comments ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.comments && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors.comments}
                        </p>
                      )}
                    </div>
                    <Alert className="border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100">
                      <Shield className="h-4 w-4 text-orange-600" />
                      <AlertDescription className="text-gray-700">
                        {t("form.security")}
                      </AlertDescription>
                    </Alert>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t("form.submitButton")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
