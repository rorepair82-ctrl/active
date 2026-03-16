import React from "react";

const ContactThree = () => {
  return (
    <section className="contact_form_area contact_us section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-right contact_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">Kontakt aufnehmen</h4>
                <h1>Wir sind für Ihre Haushaltsgeräte im Einsatz</h1>
              </div>
              <p>
                Beschreiben Sie kurz Ihr Anliegen – wir melden uns so rasch wie
                möglich mit einem Terminvorschlag oder Rückruf.
              </p>
              <div className="contact_location_box">
                <div className="contact_location_map">
                  <span className="icon-location"></span>
                  <p>Österreichweit im Einsatz</p>
                </div>
                <div className="contact_location_map contact_location_call">
                  <span className="icon-contact_call"></span>
                  <p>
                    office@hgreparatur.at <br />
                    +436605510339
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-right contact-right-style-2 responsive_mt">
              <form action="#" method="post">
                <input
                  className="half_width input_m_right"
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                />
                <input
                  className="half_width"
                  type="EMAIL"
                  name="email"
                  placeholder="E-Mail-Adresse"
                />
                <input type="tel" name="tel" placeholder="Telefonnummer" />
                <textarea
                  name="content"
                  id="content"
                  cols="20"
                  rows="5"
                  placeholder="Nachricht schreiben"
                ></textarea>
                <button className="btn-yellow" value="SEND">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;
