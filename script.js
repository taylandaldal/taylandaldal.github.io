const translations = {
  index: {
    en: {
      heroTitle: "Taylan Daldal",
      heroRole: "Mechanical Engineer | Mechanical Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimization | Automation | Robotics",

      featuredTitle: "Featured Projects",
      card1Title: "Structural Optimization of a Robotic Gripper Finger Using Static and Fatigue FEA",
      card1Subtitle: "View project",
      card2Title: "Project 2",
      card2Subtitle: "Will be added soon",

      aboutTitle: "About",
      aboutText: "Mechanical engineer focused on mechanical design, CAE, and engineering analysis. This portfolio showcases selected projects in FEA, simulation, optimization, and design iteration, with applications in manufacturing, automation, and robotics.",

      skillsTitle: "Skills",
      toolsTitle: "Tools",
      coreTitle: "Core Areas",
      relatedTitle: "Related Areas",

      contactTitle: "Resume / LinkedIn / Contact",
      resumeLabel: "Resume:",
      linkedinLabel: "LinkedIn:",
      emailLabel: "Email:"
    },
    de: {
      heroTitle: "Taylan Daldal",
      heroRole: "Maschinenbauingenieur | Konstruktion & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimierung | Automatisierung | Robotik",

      featuredTitle: "Ausgewählte Projekte",
      card1Title: "Strukturelle Optimierung eines Roboter-Greiffingers mit statischer und Ermüdungs-FEA",
      card1Subtitle: "Projekt ansehen",
      card2Title: "Projekt 2",
      card2Subtitle: "Wird bald hinzugefügt",

      aboutTitle: "Über mich",
      aboutText: "Maschinenbauingenieur mit Schwerpunkt auf Konstruktion, CAE und technischer Analyse. Dieses Portfolio zeigt ausgewählte Projekte in FEA, Simulation, Optimierung und Design-Iteration mit Anwendungen in Fertigung, Automatisierung und Robotik.",

      skillsTitle: "Fähigkeiten",
      toolsTitle: "Tools",
      coreTitle: "Kernbereiche",
      relatedTitle: "Verwandte Bereiche",

      contactTitle: "Lebenslauf / LinkedIn / Kontakt",
      resumeLabel: "Lebenslauf:",
      linkedinLabel: "LinkedIn:",
      emailLabel: "E-Mail:"
    }
  },

  project2: {
    en: {
      heroTitle: "Taylan Daldal",
      heroRole: "Mechanical Engineer | Mechanical Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimization | Automation | Robotics",

      backLink: "← Back to Featured Projects",
      project2Title: "Project 2",
      project2Text: "Will be added soon.",

      aboutTitle: "About",
      aboutText: "Mechanical engineer focused on mechanical design, CAE, and engineering analysis. This portfolio showcases selected projects in FEA, simulation, optimization, and design iteration, with applications in manufacturing, automation, and robotics.",

      skillsTitle: "Skills",
      toolsTitle: "Tools",
      coreTitle: "Core Areas",
      relatedTitle: "Related Areas",

      contactTitle: "Resume / LinkedIn / Contact",
      resumeLabel: "Resume:",
      linkedinLabel: "LinkedIn:",
      emailLabel: "Email:"
    },
    de: {
      heroTitle: "Taylan Daldal",
      heroRole: "Maschinenbauingenieur | Konstruktion & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimierung | Automatisierung | Robotik",

      backLink: "← Zurück zu den Projekten",
      project2Title: "Projekt 2",
      project2Text: "Wird bald hinzugefügt.",

      aboutTitle: "Über mich",
      aboutText: "Maschinenbauingenieur mit Schwerpunkt auf Konstruktion, CAE und technischer Analyse. Dieses Portfolio zeigt ausgewählte Projekte in FEA, Simulation, Optimierung und Design-Iteration mit Anwendungen in Fertigung, Automatisierung und Robotik.",

      skillsTitle: "Fähigkeiten",
      toolsTitle: "Tools",
      coreTitle: "Kernbereiche",
      relatedTitle: "Verwandte Bereiche",

      contactTitle: "Lebenslauf / LinkedIn / Kontakt",
      resumeLabel: "Lebenslauf:",
      linkedinLabel: "LinkedIn:",
      emailLabel: "E-Mail:"
    }
  }
};

function setLanguage(lang) {
  const page = document.body.dataset.page;
  const pageTranslations = translations[page]?.[lang];
  if (!pageTranslations) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (pageTranslations[key]) {
      el.textContent = pageTranslations[key];
    }
  });

  const currentLang = document.getElementById("currentLang");
  if (currentLang) currentLang.textContent = lang.toUpperCase();

  localStorage.setItem("siteLang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("siteLang") || "en";
  setLanguage(savedLang);

  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => {
      langMenu.classList.toggle("show");
    });

    document.querySelectorAll(".lang-option").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        setLanguage(lang);
        langMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".lang-switch")) {
        langMenu.classList.remove("show");
      }
    });
  }
});
