import logoDark from "@/images/logo.png";
export const Logo = {
  dark: logoDark
};

export const NavLinksData = [
  {
    name: "Startseite",
    url: "/"
  },
  {
    name: "Über uns",
    url: "/about"
  },
  {
    name: "Leistungen",
    url: "/service",
    subItems: [
      {
        name: "Alle Services",
        url: "/service"
      },
      {
        name: "Herd & Backofen Reparatur",
        url: "/services/herd-backofen-reparatur"
      },
      {
        name: "Waschmaschinen Reparatur",
        url: "/services/waschmaschinen-reparatur"
      },
      {
        name: "Trockner Reparatur",
        url: "/services/trockner-reparatur"
      },
      {
        name: "Elektroherd Reparatur",
        url: "/services/elektroherd-reparatur"
      },
      {
        name: "Mikrowellen Reparatur",
        url: "/services/mikrowellen-reparatur"
      },
      {
        name: "Altgeräte Entsorgen",
        url: "/services/altgeraete-entsorgen"
      },
      {
        name: "Geschirrspüler Reparatur",
        url: "/services/geschirrspueler-reparatur"
      },
      {
        name: "Kühlschrank Reparatur",
        url: "/services/kuehlschrank-reparatur"
      }
    ]
  },
  {
    name: "Contact",
    url: "/contact"
  }
];

export const TopbarInfos = [
  {
    icon: "icon-clock",
    tagLine: "Servicezeiten",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

import slideOneImage1 from "@/images/slider/slider-1.jpg";
import slideOneImage2 from "@/images/slider/slider-2.jpg";
import slideOneImage3 from "@/images/slider/slider-3.jpg";

export const SlideOneData = [
  {
    backgroundImage: slideOneImage5,
    title: "Ihr Partner für Haushaltsgeräte Reparatur",
    text: "Schnell, zuverlässig, vor Ort",
    button: "JETZT ANRUFEN",
    url: "tel:+4314420391"
  }
];

import slideOneImage4 from "@/images/slider/slider-4.jpg";
import slideOneImage5 from "@/images/slider/slider-5.jpg";

export const SlideTwoData = [
  {
    backgroundImage: slideOneImage4,
    title: "Schnelle Hilfe bei Geräteausfall",
    button: "JETZT ANRUFEN",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage5,
    title: "Reparatur von Herd bis Kühlschrank",
    button: "TERMIN BUCHEN",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage4,
    title: "Meisterbetrieb für Haushaltsgeräte",
    button: "MEHR ERFAHREN",
    url: "/contact"
  }
];

export const FeatureOneData = [
  {
    icon: "icon-wallet",
    title: "Transparente Festpreise"
  },
  {
    icon: "icon-big_clock",
    title: "Schnelle Terminvergabe"
  },
  {
    icon: "icon-handshake",
    title: "Reparatur statt teurem Neukauf"
  },
  {
    icon: "icon-mechanic",
    title: "Über 8 Jahre Erfahrung"
  }
];

export const AboutOneData = {
  title: "Spezialisierter Service für Haushaltsgeräte-Reparatur",
  tagLine: "Willkommen bei Ihrem Geräteprofi",
  content:
    "Wir reparieren Herd, Backofen, Waschmaschine, Trockner, Geschirrspüler, Mikrowelle und Kühlschrank fachgerecht – schnell, zuverlässig und mit transparenten Preisen. Statt direkt neu zu kaufen, prüfen wir, ob sich eine Reparatur lohnt und verlängern so die Lebensdauer Ihrer Geräte.",
  button: {
    url: "/about",
    label: "MEHR ÜBER UNS"
  }
};

import serviceImage1 from "@/images/services/Herd-Backofen-Reparatur.jpg";
import serviceImage2 from "@/images/services/Waschmaschinen Reparatur.jpg";
import serviceImage3 from "@/images/services/trockner-reparatur.jpg";
import serviceImageAlt from "@/images/services/Altger\u00e4te Entsorgen.png";

export const ServiceOneData = {
  title: "Unsere Services",
  posts: [
    {
      image: serviceImage1,
      icon: "icon-fire",
      title: "Herd & Backofen Reparatur",
      text:
        "Ob Herd oder Backofen: heizt nicht mehr richtig, brennt einseitig an oder zeigt Fehlercodes – wir reparieren Elektronik, Heizelemente und Sensoren fachgerecht.",
      button: {
        label: "Mehr erfahren",
        url: "/services/herd-backofen-reparatur"
      }
    },
    {
      image: serviceImage2,
      icon: "icon-maintenance",
      title: "Waschmaschinen Reparatur",
      text:
        "Professionelle Waschmaschinen Reparatur, wenn die Maschine nicht mehr abpumpt, laute Geräusche macht oder Fehlercodes anzeigt – wir finden die Ursache und beheben den Defekt.",
      button: {
        label: "Mehr erfahren",
        url: "/services/waschmaschinen-reparatur"
      }
    },
    {
      image: serviceImage3,
      icon: "icon-big-ac",
      title: "Trockner Reparatur",
      text:
        "Trockner Reparatur, wenn das Gerät nicht mehr warm wird, Programme abbricht oder ewig läuft – unsere Techniker prüfen Heizung, Sensorik und Luftwege.",
      button: {
        label: "Mehr erfahren",
        url: "/services/trockner-reparatur"
      }
    },
    {
      image: serviceImage1,
      icon: "icon-ac",
      title: "Elektroherd Reparatur",
      text:
        "Defekte Kochplatten, durchgebrannte Heizspiralen oder Probleme mit der Temperaturregelung – wir reparieren Ihren Elektroherd fachgerecht direkt vor Ort.",
      button: {
        label: "Mehr erfahren",
        url: "/services/elektroherd-reparatur"
      }
    },
    {
      image: serviceImage2,
      icon: "icon-mechanic",
      title: "Mikrowellen Reparatur",
      text:
        "Wenn die Mikrowelle nicht mehr gleichmäßig erhitzt, der Drehteller streikt oder ungewöhnliche Geräusche auftreten – wir prüfen das Gerät und tauschen defekte Bauteile.",
      button: {
        label: "Mehr erfahren",
        url: "/services/mikrowellen-reparatur"
      }
    },
    {
      image: serviceImageAlt,
      icon: "icon-building",
      title: "Altgeräte Entsorgen",
      text:
        "Fachgerechte Entsorgung von Altgeräten und Elektrogroßgeräten. Wir holen Ihr defektes oder unnötiges Gerät ab und entsorgen es umweltgerecht.",
      button: {
        label: "Mehr erfahren",
        url: "/services/altgeraete-entsorgen"
      }
    },
    {
      image: serviceImage1,
      icon: "icon-support",
      title: "Geschirrspüler Reparatur",
      text:
        "Geschirrspüler Reparatur bei schlechtem Spülergebnis, Programmabbrüchen oder Überlaufen – wir reinigen, reparieren und tauschen defekte Komponenten.",
      button: {
        label: "Mehr erfahren",
        url: "/services/geschirrspueler-reparatur"
      }
    },
    {
      image: serviceImage2,
      icon: "icon-ac",
      title: "Kühlschrank Reparatur",
      text:
        "Kühlschrank Reparatur bei Temperaturproblemen, starker Eisbildung oder lauten Kompressoren – wir prüfen Kühlkreislauf, Dichtungen und Elektronik.",
      button: {
        label: "Mehr erfahren",
        url: "/services/kuehlschrank-reparatur"
      }
    }
  ]
};

export const CallToActionOneData = {
  title: "Schnelle Hilfe bei defekten Haushaltsgeräten – ohne versteckte Kosten",
  button: {
    url: "/contact",
    label: "JETZT KOSTENLOSE ANFRAGE STELLEN"
  }
};

export const CallToActionTwoData = {
  left: {
    text: "Reparatur von Waschmaschinen & Trocknern",
    title: "Damit die Wäsche wieder läuft"
  },
  right: {
    text: "Reparatur von Kühl- & Gefriergeräten",
    title: "Alles wieder zuverlässig gekühlt"
  }
};

import funfactShape from "@/images/shape/about-shape.png";

export const FunfactOneData = {
  shapeImage: funfactShape,
  title: "Zahlen, die für uns sprechen.",
  posts: [
    {
      count: 8870,
      text: "erfolgreiche Reparaturen von Haushaltsgeräten"
    },
    {
      count: 4760,
      text: "zufriedene Stammkunden"
    },
    {
      count: 9032,
      text: "Einsätze bei Notfällen und Ausfällen"
    }
  ]
};

import galleryOne1 from "@/images/gallery/gallery-1.jpg";
import galleryOne2 from "@/images/gallery/gallery-2.jpg";
import galleryOne3 from "@/images/gallery/gallery-3.jpg";
import galleryOne4 from "@/images/gallery/gallery-4.jpg";
import galleryOne5 from "@/images/gallery/gallery-5.jpg";
import galleryOne6 from "@/images/gallery/gallery-6.jpg";

export const GalleryOneData = [
  {
    title: "Maintenance and Repair",
    image: galleryOne1,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne2,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne3,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne4,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne5,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne6,
    url: "#"
  }
];

import testimonial1 from "@/images/testimonial/testimonial-1.jpg";
import testimonial2 from "@/images/testimonial/testimonial-2.jpg";
import testimonial3 from "@/images/testimonial/testimonial-3.jpg";

export const TestimonialOneData = {
  title: "Kundenstimmen",
  posts: [
    {
      image: testimonial1,
      content:
        "Schnelle Terminvergabe, transparente Preise und sehr freundlicher Techniker. Unsere Waschmaschine läuft wieder einwandfrei.",
      name: "Familie H.",
      designation: "Privatkunde"
    },
    {
      image: testimonial2,
      content:
        "Der Defekt am Geschirrspüler wurde rasch gefunden und direkt vor Ort behoben. Klare Empfehlung.",
      name: "Herr K.",
      designation: "Privatkunde"
    },
    {
      image: testimonial3,
      content:
        "Kompetente Beratung, ob sich eine Reparatur noch lohnt. Fairer Preis und sehr sorgfältige Arbeit.",
      name: "Frau L.",
      designation: "Privatkundin"
    },
    {
      image: testimonial1,
      content:
        "Freundlicher Kundenservice und schnelle Rückmeldung auf unsere Anfrage. Wir sind sehr zufrieden.",
      name: "Familie S.",
      designation: "Privatkunde"
    },
    {
      image: testimonial2,
      content:
        "Pünktlich, zuverlässig und kompetent – so wünscht man sich einen Kundendienst.",
      name: "Herr B.",
      designation: "Privatkunde"
    },
    {
      image: testimonial3,
      content:
        "Von der Terminvereinbarung bis zur Reparatur unseres Kühlschranks hat alles reibungslos funktioniert.",
      name: "Frau M.",
      designation: "Privatkundin"
    }
  ]
};

export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-twitter",
      url: "#"
    },
    {
      icon: "fa fa-facebook-f",
      url: "#"
    },
    {
      icon: "fa fa-linkedin",
      url: "#"
    },
    {
      icon: "fa fa-youtube-play",
      url: "#"
    }
  ]
};

export const FooterInfo = [
  {
    icon: "icon-contact",
    tagLine: "E-Mail",
    text: "office@hgreparatur.at",
    url: "mailto:office@hgreparatur.at"
  },
  {
    icon: "icon-clock",
    tagLine: "Servicezeiten",
    text: " Mo–Sa: 9–18 Uhr",
    url: "#"
  }
];

export const FooterWidgets = {
  about: {
    title: "Über unseren Service",
    text:
      "Wir sind auf die Reparatur von Haushaltsgeräten spezialisiert – von Herd und Backofen über Waschmaschine und Trockner bis hin zu Geschirrspüler und Kühlschrank. Unser Ziel: schnelle Hilfe, faire Preise und Transparenz statt unnötigem Neukauf.",
    tagLine: "Jetzt anrufen",
    phone: "+4314420391"
  },
  linkOne: {
    title: "Rechtliches",
    menu: [
      {
        lable: "Feedback",
        url: "/feedback"
      },
      {
        lable: "Impressum",
        url: "/impressum"
      },
      {
        lable: "Datenschutz",
        url: "/datenschutz"
      }
    ]
  },
  linkTwo: {
    menu: []
  }
};

import blog1 from "@/images/blog/blog-1.jpg";
import blog2 from "@/images/blog/blog-2.jpg";
import blog3 from "@/images/blog/blog-3.jpg";
import blog4 from "@/images/blog/blog-4.jpg";
import blog5 from "@/images/blog/blog-5.jpg";
import blog6 from "@/images/blog/blog-6.jpg";

export const BlogOneData = {
  title: "Aktuelle Informationen",
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Tipps rund um Haushaltsgeräte",
      url: "#",
      text: "Hier könnten in Zukunft Beiträge mit Pflegetipps und Empfehlungen zu Ihren Haushaltsgeräten stehen."
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Energie sparen im Haushalt",
      url: "#",
      text: "Wie Sie mit richtig eingestellten Geräten Energie sparen und die Lebensdauer verlängern können."
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Haushaltsgeräte vor dem Urlaub",
      url: "#",
      text: "Worauf Sie achten sollten, bevor Sie länger verreisen – von Kühlschrank bis Waschmaschine."
    }
  ]
};

export const BlogTwoData = {
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Tipps rund um Haushaltsgeräte",
      url: "#",
      text: "Hier könnten in Zukunft Beiträge mit Pflegetipps und Empfehlungen zu Ihren Haushaltsgeräten stehen."
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Energie sparen im Haushalt",
      url: "#",
      text: "Wie Sie mit richtig eingestellten Geräten Energie sparen und die Lebensdauer verlängern können."
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Haushaltsgeräte vor dem Urlaub",
      url: "#",
      text: "Worauf Sie achten sollten, bevor Sie länger verreisen – von Kühlschrank bis Waschmaschine."
    },
    {
      image: blog4,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Sicherheit im Umgang mit Geräten",
      url: "#",
      text: "Empfehlungen für einen sicheren Betrieb von Herd, Ofen und anderen Geräten."
    },
    {
      image: blog5,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Pflege und Wartung",
      url: "#",
      text: "Warum regelmäßige Reinigung und Wartung Störungen vermeiden kann."
    },
    {
      image: blog6,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Professionelle Überprüfung von Geräten",
      url: "#",
      text: "Wann sich eine fachmännische Kontrolle Ihrer Haushaltsgeräte lohnt."
    }
  ]
};

export const VideoOneData = {
  title: "Watch how we work",
  id: "8DP4NgupAhI"
};

export const AboutTwoData = {
  caption: " Über <span>20 Jahre Erfahrung</span> ",
  blockTitle: {
    title:
      "Ihr vertrauenswürdiger Partner für Reparaturen von Haushaltsgeräten",
    tagline: "Warum wir die richtige Wahl sind"
  },
  lists: [
    {
      text: " Fachgerechte Reparatur aller gängigen Marken und Geräte"
    },
    {
      text: " Sorgsamer Umgang mit Ihrer Küche und Ihrem Haushalt"
    },
    {
      text: " Feste, faire Preise – keine versteckten Zusatzkosten"
    },
    {
      text: " Schnelle Termine bei dringenden Ausfällen"
    },
    {
      text: " Wir reparieren nachhaltig – nicht nur kurzfristig"
    },
    {
      text: " Klare Kommunikation und transparente Beratung"
    }
  ],
  offer: {
    tagline: "10% Rabatt",
    text: "auf unsere Reparaturleistungen für Senioren."
  }
};

import team1 from "@/images/team/team-1.jpg";
import team2 from "@/images/team/team-2.jpg";
import team3 from "@/images/team/team-3.jpg";
import team4 from "@/images/team/team-4.jpg";

export const TeamOneData = {
  title: "Unser Team",
  posts: [
    {
      image: team1,
      name: "Effie Green",
      designation: "Manager",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team2,
      name: "Catherine Lane",
      designation: "Worker",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team3,
      name: "Augusta Wells",
      designation: "Developer",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team4,
      name: "Kyle Fuller",
      designation: "Founder",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    }
  ]
};

export const AboutThreeData = {
  blockTitle: {
    tagline: "Unsere Erfolgsgeschichte",
    title: "Professioneller Service für Haushaltsgeräte in Ihrer Region"
  },
  summery:
    "Was als kleiner Reparaturdienst begonnen hat, ist heute ein eingespieltes Team aus Spezialisten für alle großen Haushaltsgeräte. Wir kombinieren Praxis-Erfahrung mit modernem Know-how und sorgen dafür, dass Ihre Küche und Ihr Haushalt schnell wieder voll einsatzbereit sind.",
  button: {
    lable: "MEHR ERFAHREN",
    url: "/about"
  },
  box: [
    {
      icon: "icon-maintenance",
      title: "Wir bringen Ihre Geräte wieder zum Laufen"
    },
    {
      icon: "icon-big-ac",
      title: "Weniger Ausfälle, mehr Komfort zu Hause"
    }
  ]
};

export const AboutFourData = {
  blockTitle: {
    title: "Mehr als <span>8900</span> zufriedene Kunden vertrauen uns",
    text1:
      "Seit vielen Jahren kümmern wir uns um defekte Haushaltsgeräte in privaten Haushalten, kleinen Betrieben und Büros. Unsere Kunden schätzen unsere ehrliche Beratung, pünktliche Termine und saubere Arbeit.",
    text2:
      "Ob Herd, Backofen, Waschmaschine, Geschirrspüler, Mikrowelle oder Kühlschrank – wir finden die Ursache, erklären die Optionen und führen die Reparatur transparent und zuverlässig durch."
  }
};

export const BenefitOneData = {
  title: "Ihre Vorteile mit unserem Reparaturservice",
  posts: [
    {
      icon: "icon-big_clock",
      title: "Schnelle Hilfe",
      text: "Kurze Reaktionszeiten, damit Ihre wichtigsten Geräte schnell wieder funktionieren."
    },
    {
      icon: "icon-wallet",
      title: "Faire Preise",
      text: "Transparente Kosten, die sich meist deutlich unter einem Neukauf bewegen."
    },
    {
      icon: "icon-diploma",
      title: "Qualifizierte Techniker",
      text: "Erfahrene Spezialisten mit Fokus auf Haushaltsgeräte-Reparaturen."
    },
    {
      icon: "icon-mechanic",
      title: "Langjährige Erfahrung",
      text: "Tausende Reparaturen und langjährige Stammkunden sprechen für uns."
    }
  ]
};

export const ServiceSidebarListData = [
  {
    icon: "icon-snow",
    title: "Küchen- & Kochgeräte",
    list: [
      {
        label: "Herd & Backofen Reparatur",
        url: "/services/herd-backofen-reparatur"
      },
      {
        label: "Elektroherd Reparatur",
        url: "/services/elektroherd-reparatur"
      },
      {
        label: "Mikrowellen Reparatur",
        url: "/services/mikrowellen-reparatur"
      },
      {
        label: "Geschirrspüler Reparatur",
        url: "/services/geschirrspueler-reparatur"
      },
      {
        label: "Altgeräte Entsorgen",
        url: "/services/altgeraete-entsorgen"
      }
    ]
  },
  {
    icon: "icon-fire",
    title: "Waschen & Kühlen",
    list: [
      {
        label: "Waschmaschinen Reparatur",
        url: "/services/waschmaschinen-reparatur"
      },
      {
        label: "Trockner Reparatur",
        url: "/services/trockner-reparatur"
      },
      {
        label: "Kühlschrank Reparatur",
        url: "/services/kuehlschrank-reparatur"
      },
      {
        label: "Notdienst bei Geräteausfall",
        url: "/contact"
      },
      {
        label: "Beratung Reparatur vs. Neukauf",
        url: "/contact"
      }
    ]
  }
];

export const ServiceSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Kontaktieren Sie uns </span>+4314420391"
    }
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Kontaktieren Sie uns </span>+4314420391"
    }
  }
];

import comment1 from "@/images/comment-1.jpg";
import comment2 from "@/images/comment-2.jpg";

export const CommentPostData = [
  {
    name: "David Martin",
    image: comment1,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  },
  {
    name: "Jessica Brown",
    image: comment2,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  }
];
