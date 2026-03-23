import React from "react";

const ContactOne = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      email: form.email.value,
      location: form.location.value,
      deviceType: form.deviceType.value,
      problem: form.problem.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Danke! Ihre Anfrage wurde erfolgreich gesendet.");
        form.reset();
      } else {
        alert("Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.");
      }
    } catch (err) {
      console.error(err);
      alert("Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.");
    }
  };

  return (
    <section className="contact_form_area">
      <div className="contact_form_width contact-right">
        <div className="hero-title-with-shape">
          <h4 className="heading_with_border">
            Schnellanfrage – wir rufen Sie zurück!
          </h4>
          <p className="contact_form_hotline">
            Oder rufen Sie uns direkt an unter{" "}
            <a href="tel:++4314420391">+43 1 4420391</a>.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="feedback_form">
          <div className="feedback_form_row">
            <div className="half_width input_m_right">
              <label className="feedback_label" htmlFor="firstName">
                Vorname *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="z.B. Max"
              />
            </div>
            <div className="half_width">
              <label className="feedback_label" htmlFor="lastName">
                Nachname *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="z.B. Mustermann"
              />
            </div>
          </div>
          <div className="feedback_form_row">
            <div className="half_width input_m_right">
              <label className="feedback_label" htmlFor="phone">
                Telefonnummer *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="z.B. +43 1 4420391"
              />
            </div>
            <div className="half_width">
              <label className="feedback_label" htmlFor="email">
                E‑Mail‑Adresse *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="z.B. max@example.com"
              />
            </div>
          </div>
          <div className="feedback_form_row">
            <div className="half_width input_m_right">
              <label className="feedback_label" htmlFor="location">
                Standort / PLZ *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="z.B. Wien, 1010"
              />
            </div>
            <div className="half_width">
              <label className="feedback_label" htmlFor="deviceType">
                Gerätetyp *
              </label>
              <span className="select_icon">
                <select name="deviceType" id="deviceType">
                  <option value="">Bitte Gerät auswählen …</option>
                  <option value="herd-backofen">Herd &amp; Backofen</option>
                  <option value="waschmaschine">Waschmaschine</option>
                  <option value="trockner">Trockner</option>
                  <option value="geschirrspueler">Geschirrspüler</option>
                  <option value="kuehlschrank">
                    Kühlschrank / Gefriergerät
                  </option>
                  <option value="mikrowelle">Mikrowelle</option>
                  <option value="dunstabzug">Dunstabzugshaube</option>
                  <option value="sonstiges">Sonstiges Gerät</option>
                </select>
              </span>
            </div>
          </div>
          <div className="feedback_form_row">
            <label className="feedback_label" htmlFor="problem">
              Problembeschreibung *
            </label>
            <textarea
              id="problem"
              name="problem"
              rows="4"
              placeholder="Beschreiben Sie kurz das Problem mit Ihrem Gerät …"
            ></textarea>
          </div>
          <button className="btn-yellow" value="SEND" type="submit">
            Anfrage senden
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactOne;
