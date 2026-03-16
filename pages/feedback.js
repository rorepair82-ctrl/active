import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import { Container } from "react-bootstrap";

const FeedbackPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Feedback">
        <HeaderOne />
        <PageHeader title="Feedback" name="Feedback" />
        <section className="section_padding">
          <Container>
            <h2>Ihre Meinung ist uns wichtig</h2>
            <p>
              Wir möchten unseren Service ständig verbessern. Teilen Sie uns Ihre
              Erfahrungen, Ihr Feedback oder mögliche Verbesserungsvorschläge
              mit. Ihr Feedback hilft uns, unseren Haushaltsgeräte-Kundendienst
              in Österreich noch besser zu machen.
            </p>

            <h3>Warum Ihr Feedback wichtig ist</h3>
            <ul>
              <li>Ihr Feedback hilft uns, unseren Reparaturservice zu verbessern.</li>
              <li>
                Falls einmal etwas nicht perfekt gelaufen ist, kümmern wir uns
                schnell darum.
              </li>
              <li>Unsere Kunden stehen im Mittelpunkt unseres Services.</li>
            </ul>

            <h3>Feedback senden</h3>
            <form action="#" method="post" className="feedback_form">
              <div className="feedback_form_row">
                <div className="half_width input_m_right">
                  <label className="feedback_label" htmlFor="firstName">
                    Vorname
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                  />
                </div>
                <div className="half_width">
                  <label className="feedback_label" htmlFor="lastName">
                    Nachname
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="feedback_form_row">
                <div className="half_width input_m_right">
                  <label className="feedback_label" htmlFor="phone">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                  />
                </div>
                <div className="half_width">
                  <label className="feedback_label" htmlFor="email">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="feedback_form_row">
                <label className="feedback_label" htmlFor="feedbackType">
                  Art Ihres Feedbacks
                </label>
                <span className="select_icon">
                  <select name="feedbackType" id="feedbackType">
                    <option value="">Bitte auswählen</option>
                    <option value="allgemein">Allgemeines Feedback</option>
                    <option value="bewertung">Servicebewertung</option>
                    <option value="verbesserung">
                      Verbesserungsvorschlag
                    </option>
                    <option value="problem">Problem melden</option>
                  </select>
                </span>
              </div>
              <div className="feedback_form_row feedback_rating">
                <div className="feedback_rating_label">Service Bewertung</div>
                <div className="feedback_rating_stars">
                  <input type="radio" id="star5" name="rating" value="5" />
                  <label htmlFor="star5" title="5 Sterne">
                    ★
                  </label>
                  <input type="radio" id="star4" name="rating" value="4" />
                  <label htmlFor="star4" title="4 Sterne">
                    ★
                  </label>
                  <input type="radio" id="star3" name="rating" value="3" />
                  <label htmlFor="star3" title="3 Sterne">
                    ★
                  </label>
                  <input type="radio" id="star2" name="rating" value="2" />
                  <label htmlFor="star2" title="2 Sterne">
                    ★
                  </label>
                  <input type="radio" id="star1" name="rating" value="1" />
                  <label htmlFor="star1" title="1 Stern">
                    ★
                  </label>
                </div>
                <div className="feedback_rating_hint">
                  Aktuelle Bewertung: keine Angabe
                </div>
              </div>
              <div className="feedback_form_row">
                <label className="feedback_label" htmlFor="message">
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Beschreiben Sie bitte Ihre Erfahrung oder Ihr Anliegen."
                ></textarea>
              </div>
              <div className="feedback_form_row">
                <label className="feedback_checkbox">
                  <input type="checkbox" name="consent_usage" /> Ich bin
                  einverstanden, dass mein Feedback zur Verbesserung unseres
                  Services genutzt wird.
                </label>
                <label className="feedback_checkbox">
                  <input type="checkbox" name="consent_reference" /> Ich bin
                  einverstanden, dass meine Bewertung anonym als
                  Kundenreferenz veröffentlicht werden darf.
                </label>
              </div>
              <button className="btn-yellow" type="submit">
                Feedback senden
              </button>
            </form>

            <h3>Unser Versprechen</h3>
            <ul>
              <li>Persönliche Bearbeitung durch unser Serviceteam</li>
              <li>Transparente und faire Lösungen</li>
              <li>Schutz Ihrer Daten und vertrauliche Behandlung</li>
            </ul>
          </Container>
        </section>
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default FeedbackPage;

