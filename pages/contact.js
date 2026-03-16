import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import ContactOne from "@/components/contact-one";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Kontakt">
        <HeaderOne />
        <PageHeader title="Kontakt" name="Kontakt" />
        <ContactOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Contact;