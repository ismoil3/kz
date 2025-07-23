import React from "react";
import StatsCounter from "@/widgets/home/statsCounter/statsCounter";
import HeroBanner from "@/widgets/home/heroBanner/heroBanner";
import ServicesGrid from "@/widgets/home/services/services";
import AboutSection from "@/widgets/home/about/about";
import ProjectsSection from "@/widgets/home/projects/projects";
import PartnersSection from "@/widgets/home/partners/partners";
const Home = () => {
  return (
    <div>
      <HeroBanner />
      <AboutSection />
      <StatsCounter />
      <ProjectsSection />
      <ServicesGrid />
      <PartnersSection />
    </div>
  );
};

export default Home;
