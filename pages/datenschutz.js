import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";

const DatenschutzPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Datenschutz">
        <HeaderOne />
        <PageHeader title="Datenschutz" name="Datenschutz" />
        <section className="section_padding">
          <div className="container">
            <h2>Datenschutzerklärung</h2>
            <p>
              Informationen zur Verarbeitung personenbezogener Daten nach DSGVO
            </p>

            <h3>Datenschutzerklärung</h3>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
              Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich
              und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO)
              sowie dieser Datenschutzerklärung.
            </p>

            <h3>1. Allgemeine Hinweise</h3>
            <p>
              Diese Datenschutzerklärung informiert Sie darüber, welche Daten
              wir erheben, wie wir sie verwenden und welche Rechte Sie als
              betroffene Person haben.
            </p>

            <h3>2. Verantwortlicher</h3>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>

            <h3>3. Zwecke der Verarbeitung</h3>
            <p>Ihre Daten werden ausschließlich zu folgenden Zwecken verarbeitet:</p>
            <ul>
              <li>Kontaktaufnahme zur Beantwortung Ihrer Anfrage</li>
              <li>Terminvereinbarung und Einsatzplanung</li>
              <li>Durchführung vorvertraglicher Maßnahmen und Erfüllung von Verträgen</li>
              <li>Erfüllung gesetzlicher Aufbewahrungspflichten</li>
            </ul>

            <h3>4. Vermittlung an Partnerbetriebe</h3>
            <p>
              Zur Bearbeitung Ihrer Anfrage kann es erforderlich sein, Ihre
              Angaben an einen regionalen und befugten Partnerbetrieb
              weiterzuleiten. Die Weitergabe erfolgt ausschließlich zum Zweck
              der Bearbeitung Ihrer Anfrage sowie der Durchführung der
              angefragten Dienstleistung.
            </p>
            <p>
              Dabei werden nur die für die Vermittlung notwendigen Daten
              übermittelt, insbesondere Name, Telefonnummer, Adresse sowie eine
              kurze Beschreibung des Anliegens.
            </p>
            <p>
              Unser Unternehmen ist ausschließlich als Vermittlungsservice tätig
              und vermittelt Werk- und Dienstleistungsverträge an befugte
              Partnerbetriebe. Eine Ausführung der Leistungen im eigenen Namen
              oder auf eigene Rechnung erfolgt nicht.
            </p>
            <p>
              Der Vertrag über die Durchführung der Arbeiten kommt ausschließlich
              zwischen dem Auftraggeber und dem ausführenden Partnerbetrieb
              zustande.
            </p>

            <h3>5. Kontaktformular</h3>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden
              Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten bei
              uns gespeichert, um die Anfrage zu bearbeiten und für den Fall von
              Anschlussfragen.
            </p>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO zur
              Durchführung vorvertraglicher Maßnahmen.
            </p>

            <h3>6. Telefonische Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns telefonisch kontaktieren, können Ihre Angaben zum
              Zweck der Bearbeitung Ihrer Anfrage sowie für eventuelle
              Rückfragen gespeichert werden.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
              DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              einer effizienten Kundenkommunikation).
            </p>

            <h3>7. Weitergabe von Daten an Dienstleister</h3>
            <p>
              Zur Bereitstellung und zum Betrieb dieser Website kann es
              erforderlich sein, dass personenbezogene Daten an technische
              Dienstleister (z. B. Hosting-Provider oder IT-Dienstleister)
              übermittelt werden.
            </p>
            <p>
              Diese Dienstleister verarbeiten personenbezogene Daten
              ausschließlich im Rahmen einer Auftragsverarbeitung gemäß Art. 28
              DSGVO und nur nach unseren Weisungen.
            </p>

            <h3>8. Speicherdauer</h3>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie dies für
              die Bearbeitung Ihrer Anfrage, die Durchführung eines Auftrags
              oder zur Einhaltung gesetzlicher Aufbewahrungsfristen erforderlich
              ist.
            </p>

            <h3>9. Ihre Rechte</h3>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten, soweit keine gesetzlichen Pflichten entgegenstehen</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
            </ul>
            <p>
              Zur Ausübung dieser Rechte können Sie sich jederzeit an uns wenden.
            </p>

            <h3>10. Widerruf von Einwilligungen</h3>
            <p>
              Eine bereits erteilte Einwilligung zur Verarbeitung
              personenbezogener Daten können Sie jederzeit mit Wirkung für die
              Zukunft widerrufen. Hierzu genügt eine formlose Mitteilung per
              E-Mail an uns.
            </p>

            <h3>11. Beschwerderecht bei der Aufsichtsbehörde</h3>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen Datenschutzrecht verstößt, können
              Sie sich bei der zuständigen Aufsichtsbehörde beschweren.
            </p>
            <p>Zuständige Behörde in Österreich ist:</p>
            <p>
              Österreichische Datenschutzbehörde
              <br />
              Barichgasse 40–42
              <br />
              1030 Wien
              <br />
              <a href="https://www.dsb.gv.at" target="_blank" rel="noreferrer">
                www.dsb.gv.at
              </a>
            </p>

            <h3>12. SSL- bzw. TLS-Verschlüsselung</h3>
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung.
            </p>

            <h3>13. Cookies</h3>
            <p>
              Unsere Website verwendet technisch notwendige Cookies, um
              grundlegende Funktionen der Website bereitzustellen.
            </p>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden und die Ihr Browser speichert.
            </p>
            <p>
              Rechtsgrundlage für den Einsatz technisch notwendiger Cookies ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              technisch fehlerfreien Bereitstellung der Website).
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden oder Cookies nur im Einzelfall
              erlauben.
            </p>

            <h3>14. Server-Logfiles &amp; Hosting</h3>
            <p>
              Beim Aufruf unserer Website werden durch den Hosting-Provider
              automatisch sogenannte Server-Logfiles erhoben.
            </p>
            <p>Dabei können insbesondere folgende Daten erfasst werden:</p>
            <ul>
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seiten</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p>
              Diese Daten dienen ausschließlich der technischen Sicherheit und
              Stabilität der Website.
            </p>

            <h3>15. Datensicherheit</h3>
            <p>
              Wir setzen geeignete technische und organisatorische
              Sicherheitsmaßnahmen ein, um Ihre Daten vor Verlust, Missbrauch
              oder unbefugtem Zugriff zu schützen.
            </p>

            <h3>16. Aktualität dieser Datenschutzerklärung</h3>
            <p>Diese Datenschutzerklärung hat den Stand: März 2026.</p>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren,
              wenn dies aufgrund rechtlicher oder technischer Änderungen
              erforderlich ist.
            </p>
          </div>
        </section>
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default DatenschutzPage;

