import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import CtaOne from "@/components/cta-one";
import ContactOne from "@/components/contact-one";
const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Startseite">
        <HeaderOne />
        <SliderOne />
        <ContactOne />
        <FeatureOne />
        <AboutOne />
        <ServiceOne />
        <CtaOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
