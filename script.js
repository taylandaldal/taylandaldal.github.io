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
      aboutText: "Mechanical engineer focused on mechanical design, CAE, and engineering analysis. This portfolio showcases selected projects in FEA, simulation, optimization, and mechanical design, with applications in manufacturing, automation, and robotics.",

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
      heroRole: "Maschinenbauingenieur | Mechanisches Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimierung | Automatisierung | Robotik",

      featuredTitle: "Ausgewählte Projekte",
      card1Title: "Strukturelle Optimierung eines Roboter-Greiffingers mit statischer und Ermüdungs-FEA",
      card1Subtitle: "Projekt ansehen",
      card2Title: "Projekt 2",
      card2Subtitle: "Wird bald hinzugefügt",

      aboutTitle: "Über mich",
      aboutText: "Maschinenbauingenieur mit Schwerpunkt auf mechanischem Design, CAE und technischer Analyse. Dieses Portfolio zeigt ausgewählte Projekte in FEA, Simulation, Optimierung und mechanischem Design mit Anwendungen in Fertigung, Automatisierung und Robotik.",

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
      aboutText: "Mechanical engineer focused on mechanical design, CAE, and engineering analysis. This portfolio showcases selected projects in FEA, simulation, optimization, and mechanical design, with applications in manufacturing, automation, and robotics.",

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
      heroRole: "Maschinenbauingenieur | Mechanisches Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimierung | Automatisierung | Robotik",

      backLink: "← Zurück zu den Projekten",
      project2Title: "Projekt 2",
      project2Text: "Wird bald hinzugefügt.",

      aboutTitle: "Über mich",
      aboutText: "Maschinenbauingenieur mit Schwerpunkt auf mechanischem Design, CAE und technischer Analyse. Dieses Portfolio zeigt ausgewählte Projekte in FEA, Simulation, Optimierung und mechanischem Design mit Anwendungen in Fertigung, Automatisierung und Robotik.",

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

  project1: {
    en: {
      heroTitle: "Taylan Daldal",
      heroRole: "Mechanical Engineer | Mechanical Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimization | Automation | Robotics",

      backLink: "← Back to Featured Projects",
      project1Title: "Project 1",
      project1MainTitle: "Structural Optimization of a Robotic Gripper Finger Using Static and Fatigue FEA",
      overviewTitle: "Project Overview",
      overviewText: "This project focused on the structural optimization of a robotic gripper finger using static and fatigue finite element analysis. The baseline geometry was evaluated under a 300 N load, and the highest stress concentration was identified at the inner load-path root region. A second design iteration introduced local slot-corner relief fillets and increased the critical root fillet radius to smooth the stress flow. Compared with the baseline, the final design reduced peak von Mises stress by 13.5%, equivalent elastic strain by 13.9%, and total deformation by 3.2%. Fatigue analysis under zero-based cyclic loading (0–300 N) showed that both designs remained in the high-cycle regime, but the optimized version improved the minimum fatigue safety factor by 15.7%. The study shows how small local geometry refinements can improve structural response without changing the overall load case.",
      v1Baseline: "V1 Baseline",
      v2FinalIteration: "V2 Final Iteration",
      toolsLabel: "Tools:",
      objectiveTitle: "Objective",
      objectiveText: "The aim of the study was to reduce stress concentration in the critical root region of the gripper finger, lower elastic strain, and improve fatigue behavior under the same loading and boundary conditions. The focus was not on changing the global form of the part, but on refining a few local geometric transitions along the load path.",
      scopeTitle: "Scope and Limitation",
      scopeText: "The study focused on the primary load-bearing finger body. Mating components were not fully reworked in this iteration, since the scope of the study was limited to comparative structural and fatigue response of the main part under identical boundary conditions.",
      modelSetupTitle: "Model and Analysis Setup",
      modelSetupText: "The part material was defined as Aluminum 6061-T6. Structural performance was evaluated in ANSYS using both Static Structural and Stress-Life Fatigue analysis. A 300 N load case was applied to the finger. Fatigue was assessed using zero-based cyclic loading (0 → 300 N → 0) with Goodman mean stress correction and Equivalent (von-Mises) stress as the fatigue stress component.",
      designVersionsTitle: "Design Versions",
      v1BaselineTitle: "V1 – Baseline",
      v1BaselineText: "The first version was the original finger geometry.",
      v2FinalTitle: "V2 – Final Iteration",
      v2FinalText: "Two local geometry refinements were introduced in the final version. R2.0 mm fillets were added to the two lower slot corners. The critical inner root fillet was increased from approximately R2.03 mm to R2.5 mm. These modifications were selected to smooth the local load path, reduce abrupt stress transitions, and relieve the hotspot identified in the baseline analysis.",
      staticResultsTitle: "Static Analysis Results",
      staticResultsIntro: "The redesigned geometry produced a measurable improvement under the same 300 N load case. Peak stress, equivalent elastic strain, and deformation all decreased in the final version.",
      staticTableTitle: "Static Results Table",
      tableMetric: "Metric",
      tableV1Baseline: "V1 Baseline",
      tableV2Final: "V2 Final",
      tableChange: "Change",
      metricEquivalentStress: "Equivalent Stress",
      metricTotalDeformation: "Total Deformation",
      metricDirectionalY: "Directional Deformation (Y)",
      metricElasticStrain: "Equivalent Elastic Strain",
      staticResultsConclusion: "The final V2 redesign reduced peak von Mises stress and equivalent elastic strain while also slightly decreasing deformation under the same 300 N load case. Although both versions remained in a high-cycle fatigue range of approximately 1e8 cycles, V2 increased the minimum fatigue safety factor by about 15.7%, making it the stronger final design candidate.",
      v1StressResultTitle: "V1 Baseline Equivalent (von-Mises) Stress Result",
      v2StressResultTitle: "V2 Final Equivalent (von-Mises) Stress Result",
      v1StrainResultTitle: "V1 Baseline Equivalent Elastic Strain Result",
      v2StrainResultTitle: "V2 Final Elastic Strain Result",
      fatigueResultsTitle: "Fatigue Analysis Results",
      fatigueResultsIntro: "Fatigue behaviour was evaluated using zero-based cyclic loading between 0 N and 300 N. Both versions remained in the high-cycle regime, so the difference between them did not appear strongly in the life and damage plots. The clearer distinction appeared in the fatigue safety factor.",
      fatigueTableTitle: "Fatigue Results Table",
      tableV1: "V1",
      tableV2: "V2",
      metricEstimatedLife: "Estimated Life",
      metricDamage1e6: "Damage @ 1e6 cycles",
      metricDamage1e8: "Damage @ 1e8 cycles",
      metricMinSafetyFactor: "Minimum Fatigue Safety Factor",
      fatigueResultsConclusion: "The fatigue results indicate that both geometries operate in a high-cycle regime at the selected load level. However, the final design improved the minimum fatigue safety factor by approximately 15.66%, which supports the structural improvements already observed in the static analysis.",
      v1SafetyTitle: "V1 Baseline Fatigue Safety Factor Result",
      v2SafetyTitle: "V2 Final Fatigue Safety Factor Result",
      discussionTitle: "Discussion",
      discussionText: "The baseline design was not weak. Even the original geometry already showed a high fatigue life under the selected loading scenario. For that reason, the redesign did not create a significant change in predicted life or damage. Instead, the benefit of the redesign was seen in the local stress redistribution. The critical hotspot was relieved, peak stress dropped, strain dropped, and the fatigue safety margin increased. The geometry was not completely changed. Instead, a few local transitions were improved, which resulted in a measurable improvement while preserving the original loading concept.",
      v1HotspotTitle: "V1 Baseline Stress Hotspot",
      v2HotspotTitle: "V2 Final Stress Hotspot",
      noteLabel: "Note.",
      noteText: "Both plots are shown with individually scaled contours. Comparison should be interpreted using the reported maximum stress values.",
      finalConclusionTitle: "Final Technical Conclusion",
      finalConclusionText: "Small local geometry changes improved the structural response under the same load, reducing stress, strain, and deformation while increasing the fatigue safety factor.",

      aboutTitle: "About",
      aboutText: "Mechanical engineer focused on mechanical design, CAE, and engineering analysis. This portfolio showcases selected projects in FEA, simulation, optimization, and mechanical design, with applications in manufacturing, automation, and robotics.",

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
      heroRole: "Maschinenbauingenieur | Mechanisches Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimierung | Automatisierung | Robotik",

      backLink: "← Zurück zu den Projekten",
      project1Title: "Projekt 1",
      project1MainTitle: "Strukturelle Optimierung eines Roboter-Greiffingers mit statischer und Ermüdungs-FEA",
      overviewTitle: "Projektübersicht",
      overviewText: "Dieses Projekt konzentrierte sich auf die strukturelle Optimierung eines Roboter-Greiffingers mithilfe statischer und Ermüdungs-Finite-Elemente-Analyse. Die Ausgangsgeometrie wurde unter einer Last von 300 N ausgewertet, und die höchste Spannungskonzentration wurde im inneren Wurzelbereich des Lastpfads identifiziert. Eine zweite Designiteration führte lokale Entlastungsradien an den Schlitzkanten ein und vergrößerte den kritischen inneren Wurzelradius, um den Spannungsverlauf zu glätten. Im Vergleich zur Ausgangsversion reduzierte die finale Version die maximale von-Mises-Spannung um 13,5 %, die äquivalente elastische Dehnung um 13,9 % und die Gesamtverformung um 3,2 %. Die Ermüdungsanalyse unter nullbasierter zyklischer Belastung (0–300 N) zeigte, dass beide Designs im High-Cycle-Bereich blieben, die optimierte Version jedoch den minimalen Ermüdungssicherheitsfaktor um 15,7 % verbesserte. Die Studie zeigt, wie kleine lokale Geometrieverfeinerungen das strukturelle Verhalten verbessern können, ohne den allgemeinen Lastfall zu ändern.",
      v1Baseline: "V1 Ausgangsversion",
      v2FinalIteration: "V2 Finale Iteration",
      toolsLabel: "Tools:",
      objectiveTitle: "Ziel",
      objectiveText: "Ziel der Studie war es, die Spannungskonzentration im kritischen Wurzelbereich des Greiffingers zu reduzieren, die elastische Dehnung zu verringern und das Ermüdungsverhalten unter denselben Last- und Randbedingungen zu verbessern. Der Fokus lag nicht darauf, die globale Form des Bauteils zu verändern, sondern einige lokale geometrische Übergänge entlang des Lastpfads zu verfeinern.",
      scopeTitle: "Umfang und Einschränkung",
      scopeText: "Die Studie konzentrierte sich auf den primären lasttragenden Fingerkörper. Die verbundenen Komponenten wurden in dieser Iteration nicht vollständig überarbeitet, da der Umfang der Studie auf den vergleichenden strukturellen und ermüdungsbezogenen Response des Hauptbauteils unter identischen Randbedingungen begrenzt war.",
      modelSetupTitle: "Modell- und Analyseaufbau",
      modelSetupText: "Das Bauteilmaterial wurde als Aluminium 6061-T6 definiert. Die strukturelle Leistung wurde in ANSYS sowohl mit Static Structural als auch mit Stress-Life Fatigue Analysis bewertet. Auf den Finger wurde ein Lastfall von 300 N angewendet. Die Ermüdung wurde unter nullbasierter zyklischer Belastung (0 → 300 N → 0) mit Goodman-Mittelspannungskorrektur und äquivalenter (von-Mises-)Spannung als Ermüdungsspannungskomponente bewertet.",
      designVersionsTitle: "Designversionen",
      v1BaselineTitle: "V1 – Ausgangsversion",
      v1BaselineText: "Die erste Version war die ursprüngliche Fingergeometrie.",
      v2FinalTitle: "V2 – Finale Iteration",
      v2FinalText: "In der finalen Version wurden zwei lokale Geometrieverfeinerungen eingeführt. An den beiden unteren Schlitzkanten wurden R2,0-mm-Radien hinzugefügt. Der kritische innere Wurzelradius wurde von ungefähr R2,03 mm auf R2,5 mm vergrößert. Diese Änderungen wurden ausgewählt, um den lokalen Lastpfad zu glätten, abrupte Spannungsübergänge zu reduzieren und den in der Ausgangsanalyse identifizierten Hotspot zu entlasten.",
      staticResultsTitle: "Ergebnisse der statischen Analyse",
      staticResultsIntro: "Die überarbeitete Geometrie zeigte unter demselben Lastfall von 300 N eine messbare Verbesserung. Maximale Spannung, äquivalente elastische Dehnung und Verformung nahmen in der finalen Version alle ab.",
      staticTableTitle: "Tabelle der statischen Ergebnisse",
      tableMetric: "Kennwert",
      tableV1Baseline: "V1 Ausgangsversion",
      tableV2Final: "V2 Finale Version",
      tableChange: "Änderung",
      metricEquivalentStress: "Äquivalente Spannung",
      metricTotalDeformation: "Gesamtverformung",
      metricDirectionalY: "Richtungsbezogene Verformung (Y)",
      metricElasticStrain: "Äquivalente elastische Dehnung",
      staticResultsConclusion: "Die finale V2-Überarbeitung reduzierte die maximale von-Mises-Spannung und die äquivalente elastische Dehnung und verringerte gleichzeitig die Verformung unter demselben Lastfall von 300 N leicht. Obwohl beide Versionen in einem High-Cycle-Ermüdungsbereich von ungefähr 1e8 Zyklen blieben, erhöhte V2 den minimalen Ermüdungssicherheitsfaktor um etwa 15,7 % und wurde damit zur stärkeren finalen Designoption.",
      v1StressResultTitle: "V1 Ausgangsversion Äquivalente (von-Mises-)Spannung Ergebnis",
      v2StressResultTitle: "V2 Finale Version Äquivalente (von-Mises-)Spannung Ergebnis",
      v1StrainResultTitle: "V1 Ausgangsversion Äquivalente elastische Dehnung Ergebnis",
      v2StrainResultTitle: "V2 Finale Version Elastische Dehnung Ergebnis",
      fatigueResultsTitle: "Ergebnisse der Ermüdungsanalyse",
      fatigueResultsIntro: "Das Ermüdungsverhalten wurde unter nullbasierter zyklischer Belastung zwischen 0 N und 300 N bewertet. Beide Versionen blieben im High-Cycle-Bereich, daher zeigte sich der Unterschied zwischen ihnen in den Lebensdauer- und Schadensdiagrammen nicht stark. Der deutlichere Unterschied zeigte sich im Ermüdungssicherheitsfaktor.",
      fatigueTableTitle: "Tabelle der Ermüdungsergebnisse",
      tableV1: "V1",
      tableV2: "V2",
      metricEstimatedLife: "Geschätzte Lebensdauer",
      metricDamage1e6: "Schaden bei 1e6 Zyklen",
      metricDamage1e8: "Schaden bei 1e8 Zyklen",
      metricMinSafetyFactor: "Minimaler Ermüdungssicherheitsfaktor",
      fatigueResultsConclusion: "Die Ermüdungsergebnisse zeigen, dass beide Geometrien beim gewählten Lastniveau in einem High-Cycle-Bereich arbeiten. Die finale Version verbesserte jedoch den minimalen Ermüdungssicherheitsfaktor um ungefähr 15,66 %, was die bereits in der statischen Analyse beobachteten strukturellen Verbesserungen unterstützt.",
      v1SafetyTitle: "V1 Ausgangsversion Ermüdungssicherheitsfaktor Ergebnis",
      v2SafetyTitle: "V2 Finale Version Ermüdungssicherheitsfaktor Ergebnis",
      discussionTitle: "Diskussion",
      discussionText: "Die Ausgangsversion war nicht schwach. Bereits die ursprüngliche Geometrie zeigte unter dem gewählten Lastszenario eine hohe Ermüdungslebensdauer. Aus diesem Grund führte die Überarbeitung nicht zu einer signifikanten Änderung der vorhergesagten Lebensdauer oder des Schadens. Stattdessen zeigte sich der Nutzen der Überarbeitung in der lokalen Spannungsumverteilung. Der kritische Hotspot wurde entlastet, die maximale Spannung sank, die Dehnung sank und die Ermüdungssicherheitsreserve stieg. Die Geometrie wurde nicht vollständig verändert. Stattdessen wurden einige lokale Übergänge verbessert, was zu einer messbaren Verbesserung führte, während das ursprüngliche Lastkonzept erhalten blieb.",
      v1HotspotTitle: "V1 Ausgangsversion Spannungs-Hotspot",
      v2HotspotTitle: "V2 Finale Version Spannungs-Hotspot",
      noteLabel: "Hinweis.",
      noteText: "Beide Darstellungen werden mit individuell skalierten Konturen gezeigt. Der Vergleich sollte anhand der angegebenen maximalen Spannungswerte interpretiert werden.",
      finalConclusionTitle: "Abschließende technische Schlussfolgerung",
      finalConclusionText: "Kleine lokale Geometrieänderungen verbesserten das strukturelle Verhalten unter derselben Last, reduzierten Spannung, Dehnung und Verformung und erhöhten gleichzeitig den Ermüdungssicherheitsfaktor.",

      aboutTitle: "Über mich",
      aboutText: "Maschinenbauingenieur mit Schwerpunkt auf mechanischem Design, CAE und technischer Analyse. Dieses Portfolio zeigt ausgewählte Projekte in FEA, Simulation, Optimierung und mechanischem Design mit Anwendungen in Fertigung, Automatisierung und Robotik.",

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
