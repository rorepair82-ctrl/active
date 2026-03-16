import React from "react";

const ContactTwo = () => {
  return (
    <section className="contact_form_area ctf_gray section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">
                  Schnellanfrage für Ihren Service
                </h4>
                <h1>
                  Füllen Sie das Formular aus und wir melden uns schnellstmöglich
                  telefonisch bei Ihnen.
                </h1>
              </div>
              <p>
                Je genauer Sie Ihr Gerät und den Fehler beschreiben, desto
                besser können wir den Einsatz vorbereiten und Ihnen einen
                passenden Termin vorschlagen.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2">
              <form action="#" method="post">
                <input
                  type="text"
                  placeholder="Ihr Name"
                  className="half_width input_m_right"
                />
                <input
                  type="EMAIL"
                  placeholder="E-Mail-Adresse"
                  className="half_width"
                />
                <input type="tel" placeholder="Telefonnummer" />
                <span className="select_icon">
                  <select name="select" id="select">
                    <option value="option0">Gewünschte Leistung wählen</option>
                    <option value="option1">Reparatur</option>
                    <option value="option2">Altgeräte-Entsorgung</option>
                    <option value="option3">Beratung</option>
                  </select>
                </span>
                <button className="btn-yellow" value="SUBMIT NOW">
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;
