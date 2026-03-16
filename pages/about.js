import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Über uns">
        <HeaderOne />
        <PageHeader title="Über uns" name="Über uns" />
        <section className="section_padding">
          <Container>
            <h2>Über uns</h2>
            <h3>Unsere Mission</h3>
            <p>
              Wir möchten unseren Kunden einen schnellen, zuverlässigen und
              fairen Service bieten. Nachhaltigkeit ist uns wichtig – daher
              setzen wir auf Reparatur statt Neukauf.
            </p>

            <h3>Fachkompetenz</h3>
            <p>Ausgebildete Mechatroniker mit Spezialisierung auf Haushaltsgeräte.</p>

            <h3>Schneller Service</h3>
            <p>Termine innerhalb von 24–48 Stunden möglich.</p>

            <h3>Qualität</h3>
            <p>Nur Original-Ersatzteile oder hochwertige Alternativen.</p>

            <h3>Kundenorientiert</h3>
            <p>Persönliche Beratung und transparente Kommunikation.</p>

            <h3>Leidenschaft</h3>
            <p>Mit Herzblut bei der Arbeit für zufriedene Kunden.</p>

            <h3>Unser Einsatzgebiet</h3>
            <p>
              Wir sind österreichweit für Sie unterwegs – in Wien, Graz,
              Salzburg und allen anderen Regionen Österreichs.
            </p>
          </Container>
        </section>
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default About;
