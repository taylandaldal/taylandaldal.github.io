const translations = {
  index: {
    en: {
      heroTitle: "Taylan Daldal",
      heroRole: "Mechanical Engineer | Mechanical Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimization | Automation | Robotics",

      featuredTitle: "Featured Projects",
      card1Title: "Structural Optimization of a Robotic Gripper Finger Using Static and Fatigue FEA",
      card1Subtitle: "View project",
      card2Title: "Lightweight Design Iteration of a Camera On-Arm Mount for Machine Vision System Using Static and Modal Analysis",
      card2Subtitle: "View project",
      card3Title: "Project 3",
      card3Subtitle: "Will be added soon",

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
      card2Title: "Leichtbau-Designiteration einer On-Arm-Kamerahalterung für ein Machine-Vision-System mit statischer und modaler Analyse",
      card2Subtitle: "Projekt ansehen",
      card3Title: "Projekt 3",
      card3Subtitle: "Wird bald hinzugefügt",

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

  project3: {
    en: {
      heroTitle: "Taylan Daldal",
      heroRole: "Mechanical Engineer | Mechanical Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimization | Automation | Robotics",

      backLink: "← Back to Featured Projects",
      project3Title: "Project 3",
      project3Text: "Will be added soon.",

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
      project3Title: "Projekt 3",
      project3Text: "Wird bald hinzugefügt.",

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
      project2MainTitle: "Lightweight Design Iteration of a Camera On-Arm Mount for Machine Vision System Using Static and Modal Analysis",

      overviewTitle: "Project Overview",
      overviewText: "This project focused on a camera on-arm mount used to connect a machine vision camera to a robot arm. The study included the robot adapter and camera bracket assembly. A baseline model V1 was analyzed first, and then a lighter version of the robot adapter V2 was developed and checked again with the same analysis approach. The aim was to reduce mass without creating a clear penalty in stress, deformation, or modal behavior.",

      toolsLabel: "Tools:",
      referenceModelLabel: "Reference Model:",

      objectiveTitle: "Objective",
      objectiveText: "The main goal was to check whether the mount was structurally safe under the camera load and whether a lighter adapter could keep similar performance. The design change was limited to the robot adapter. The camera bracket was kept unchanged.",

      v1Baseline: "V1 Baseline",
      v2FinalIteration: "V2 Final Iteration",

      modelSetupTitle: "Model and Analysis Setup",
      modelSetupText: "The model was analyzed in ANSYS Mechanical using a concept-level setup. The camera mass was defined as 1 kg based on the Zivid 2+ M60 manufacturer datasheet and applied as a point mass at the camera mounting region. The robot-side mounting interface was fixed, and the contact between the adapter and the bracket was modeled as bonded. Static structural and modal analyses were used to compare the baseline and the final iteration.",

      analysisSetupTableTitle: "Analysis Setup",
      tableItem: "Item",
      tableValue: "Value",
      analysisItemMaterial: "Material",
      analysisItemAnalysedParts: "Analyzed parts",
      analysisValueAnalysedParts: "Robot Adapter + Camera Bracket",
      analysisItemOptimisedPart: "Optimized part",
      analysisValueOptimisedPart: "Robot Adapter only",
      analysisItemCameraRepresentation: "Camera representation",
      analysisValueCameraRepresentation: "1 kg point mass",
      analysisItemSupportCondition: "Support condition",
      analysisValueSupportCondition: "Fixed support at robot-side interface",
      analysisItemContact: "Contact",
      analysisValueContact: "Bonded contact between adapter and bracket",
      analysisItemAnalyses: "Analyses",
      analysisValueAnalyses: "Static Structural + Modal",
      analysisItemMeshStrategy: "Mesh strategy",
      analysisValueMeshStrategy: "2 mm global mesh, 1 mm local sizing at support and contact regions",

      designIterationTitle: "Design Iteration",
      designIterationText: "The iteration focused on removing material from low-stress regions of the robot adapter while keeping the mounting features, support region, and bracket interface. In the final V2 geometry, the wall thickness of the main outer circular section was reduced from 5.5 mm to 4.5 mm. In the upper cutout region, the spacing between the central rectangular cutout and the two side cutouts was reduced from 8 mm to 5 mm. As a result, the widths of the left and right cutouts were increased from 12 mm to 15 mm, allowing more material to be removed from that area. These changes increased the size of existing cutouts and reduced mass without changing the overall mounting concept. The final V2 model was then solved again in static and modal analyses and compared directly with the V1 baseline.",

      staticStructuralResultsTitle: "Static Structural Results",
      staticStructuralResultsIntro: "Both versions showed very low stress and very small deformation under the applied load case. The highest stress stayed in the upper transition region of the mount, but the values remained low in both models. The final V2 design reduced adapter mass while keeping the static response almost unchanged.",

      massStaticTableTitle: "Mass and Static Results",
      tableMetric: "Metric",
      tableV1Baseline: "V1 Baseline",
      tableV2Final: "V2 Final",
      tableChange: "Change",
      metricAdapterMass: "Robot Adapter Mass",
      metricMaxStress: "Max von Mises Stress",
      metricMaxDeformation: "Max Total Deformation",

      v1StressResultTitle: "V1 Baseline Equivalent (von-Mises) Stress Result",
      v2StressResultTitle: "V2 Final Equivalent (von-Mises) Stress Result",

      modalResultsTitle: "Modal Results",
      modalResultsIntro: "The first three natural frequencies stayed close after the iteration. The first mode remained above 187 Hz, and the general mode shapes stayed similar to the baseline. This means the lighter adapter kept the main dynamic behavior of the original design.",

      modalFreqTableTitle: "First Three Natural Frequencies",
      tableMode: "Mode",
      v1ModalTitle: "V1 Modal Analysis Result",
      v2ModalTitle: "V2 Final Modal Analysis Result",

      finalConclusionTitle: "Final Technical Conclusion",
      finalConclusionText: "The final V2 design reduced the robot adapter mass by 7.35% while keeping stress, deformation, and the first natural frequency very close to the baseline. The stress level remained low, deformation changed only slightly, and the modal response stayed in the same range. Based on this comparison, the lightweight iteration improved mass efficiency without changing the overall structural behavior.",

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
      project2MainTitle: "Leichtbau-Designiteration einer On-Arm-Kamerahalterung für ein Machine-Vision-System mit statischer und modaler Analyse",

      overviewTitle: "Projektübersicht",
      overviewText: "Dieses Projekt konzentrierte sich auf eine On-Arm-Kamerahalterung, die verwendet wird, um eine Machine-Vision-Kamera mit einem Roboterarm zu verbinden. Die Studie umfasste die Baugruppe aus Roboteradapter und Kamerahalter. Zunächst wurde ein Ausgangsmodell V1 analysiert, danach wurde eine leichtere Version des Roboteradapters V2 entwickelt und mit demselben Analyseansatz erneut geprüft. Ziel war es, die Masse zu reduzieren, ohne eine klare Verschlechterung bei Spannung, Verformung oder modalem Verhalten zu erzeugen.",

      toolsLabel: "Tools:",
      referenceModelLabel: "Referenzmodell:",

      objectiveTitle: "Ziel",
      objectiveText: "Das Hauptziel war zu prüfen, ob die Halterung unter der Kameralast strukturell sicher ist und ob ein leichterer Adapter eine ähnliche Leistung beibehalten kann. Die Designänderung war auf den Roboteradapter begrenzt. Der Kamerahalter blieb unverändert.",

      v1Baseline: "V1 Ausgangsversion",
      v2FinalIteration: "V2 Finale Iteration",

      modelSetupTitle: "Modell- und Analyseaufbau",
      modelSetupText: "Das Modell wurde in ANSYS Mechanical mit einem Konzept-Setup analysiert. Die Kameramasse wurde auf Grundlage des Herstellerdatenblatts der Zivid 2+ M60 mit 1 kg definiert und als Punktmasse im Kamerabefestigungsbereich aufgebracht. Die roboterseitige Befestigungsschnittstelle wurde fixiert, und der Kontakt zwischen Adapter und Halter wurde als bonded modelliert. Zur Gegenüberstellung der Ausgangsversion und der finalen Iteration wurden statische und modale Analysen verwendet.",

      analysisSetupTableTitle: "Analyse-Setup",
      tableItem: "Eintrag",
      tableValue: "Wert",
      analysisItemMaterial: "Material",
      analysisItemAnalysedParts: "Analysierte Teile",
      analysisValueAnalysedParts: "Roboteradapter + Kamerahalter",
      analysisItemOptimisedPart: "Optimiertes Teil",
      analysisValueOptimisedPart: "Nur Roboteradapter",
      analysisItemCameraRepresentation: "Kameradarstellung",
      analysisValueCameraRepresentation: "1 kg Punktmasse",
      analysisItemSupportCondition: "Randbedingung",
      analysisValueSupportCondition: "Feste Lagerung an der roboterseitigen Schnittstelle",
      analysisItemContact: "Kontakt",
      analysisValueContact: "Bonded-Kontakt zwischen Adapter und Halter",
      analysisItemAnalyses: "Analysen",
      analysisValueAnalyses: "Static Structural + Modal",
      analysisItemMeshStrategy: "Vernetzungsstrategie",
      analysisValueMeshStrategy: "2 mm globales Netz, 1 mm lokale Netzgröße an Lager- und Kontaktbereichen",

      designIterationTitle: "Designiteration",
      designIterationText: "Die Iteration konzentrierte sich darauf, Material aus Bereichen mit niedriger Spannung im Roboteradapter zu entfernen, während die Befestigungsmerkmale, der Lagerbereich und die Schnittstelle zum Halter beibehalten wurden. In der finalen V2-Geometrie wurde die Wandstärke des äußeren Hauptkreisbereichs von 5,5 mm auf 4,5 mm reduziert. Im oberen Ausschnittsbereich wurde der Abstand zwischen dem mittleren rechteckigen Ausschnitt und den beiden seitlichen Ausschnitten von 8 mm auf 5 mm reduziert. Dadurch wurden die Breiten der linken und rechten Ausschnitte von 12 mm auf 15 mm vergrößert, wodurch in diesem Bereich mehr Material entfernt werden konnte. Diese Änderungen vergrößerten bestehende Ausschnitte und reduzierten die Masse, ohne das grundlegende Befestigungskonzept zu verändern. Das finale V2-Modell wurde anschließend erneut in statischen und modalen Analysen gelöst und direkt mit der V1-Ausgangsversion verglichen.",

      staticStructuralResultsTitle: "Ergebnisse der statischen Strukturanalyse",
      staticStructuralResultsIntro: "Beide Versionen zeigten unter dem aufgebrachten Lastfall sehr geringe Spannungen und sehr kleine Verformungen. Die höchste Spannung blieb im oberen Übergangsbereich der Halterung, die Werte blieben jedoch in beiden Modellen niedrig. Das finale V2-Design reduzierte die Adaptermasse, während die statische Antwort nahezu unverändert blieb.",

      massStaticTableTitle: "Masse und statische Ergebnisse",
      tableMetric: "Kennwert",
      tableV1Baseline: "V1 Ausgangsversion",
      tableV2Final: "V2 Finale Version",
      tableChange: "Änderung",
      metricAdapterMass: "Masse des Roboteradapters",
      metricMaxStress: "Max. von-Mises-Spannung",
      metricMaxDeformation: "Max. Gesamtverformung",

      v1StressResultTitle: "V1 Ausgangsversion Äquivalente (von-Mises-)Spannung Ergebnis",
      v2StressResultTitle: "V2 Finale Version Äquivalente (von-Mises-)Spannung Ergebnis",

      modalResultsTitle: "Modale Ergebnisse",
      modalResultsIntro: "Die ersten drei Eigenfrequenzen blieben nach der Iteration nahe beieinander. Die erste Eigenform blieb über 187 Hz, und die allgemeinen Eigenformen blieben der Ausgangsversion ähnlich. Das bedeutet, dass der leichtere Adapter das wesentliche dynamische Verhalten des ursprünglichen Designs beibehielt.",

      modalFreqTableTitle: "Erste drei Eigenfrequenzen",
      tableMode: "Modus",
      v1ModalTitle: "V1 Modal Analysis Result",
      v2ModalTitle: "V2 Final Modal Analysis Result",

      finalConclusionTitle: "Abschließende technische Schlussfolgerung",
      finalConclusionText: "Das finale V2-Design reduzierte die Masse des Roboteradapters um 7,35 %, während Spannung, Verformung und die erste Eigenfrequenz sehr nahe an der Ausgangsversion blieben. Das Spannungsniveau blieb niedrig, die Verformung änderte sich nur geringfügig, und die modale Antwort blieb im gleichen Bereich. Auf Grundlage dieses Vergleichs verbesserte die Leichtbauiteration die Masseneffizienz, ohne das gesamte strukturelle Verhalten zu verändern.",

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
      project1MainTitle: "Local Stress Reduction of a Robotic Gripper Finger Using Static and Fatigue FEA",
      overviewTitle: "Project Overview",
      overviewText: "This project focused on the structural optimization of a robotic gripper finger using static and fatigue finite element analysis. The baseline geometry was evaluated under a 300 N load, and the highest stress concentration was identified at the inner load-path root region. A second design iteration introduced local slot-corner relief fillets and increased the critical root fillet radius to smooth the stress flow. Compared with the baseline, the final design reduced peak von Mises stress by 13.5%, equivalent elastic strain by 13.9%, and total deformation by 3.2%. Fatigue analysis under zero-based cyclic loading (0–300 N) showed that both designs remained in the high-cycle regime, but the optimized version improved the minimum fatigue safety factor by 15.7%. The study shows how small local geometry refinements can improve structural response without changing the overall load case.",
      v1Baseline: "V1 Baseline",
      v2FinalIteration: "V2 Final Iteration",
      toolsLabel: "Tools:",
      referenceModelLabel: "Reference Model:",
      objectiveTitle: "Objective",
      objectiveText: "The aim of the study was to reduce stress concentration in the critical root region of the gripper finger, lower elastic strain, and improve fatigue behavior under the same loading and boundary conditions. The focus was not on changing the global form of the part, but on refining a few local geometric transitions along the load path.",
      scopeTitle: "Scope and Limitation",
      scopeText: "The study focused on the primary load-bearing finger body. Mating components were not fully reworked in this iteration, since the scope of the study was limited to comparative structural and fatigue response of the main part under identical boundary conditions.",
      modelSetupTitle: "Model and Analysis Setup",
      modelSetupText: "The part material was defined as Aluminum 6061-T6. Structural performance was evaluated in ANSYS using both Static Structural and Stress-Life Fatigue analysis. A 300 N load case was applied to the finger. Fatigue was assessed using zero-based cyclic loading (0 → 300 N → 0) with Goodman mean stress correction and Equivalent (von-Mises) stress as the fatigue stress component.",
      analysisSetupTableTitle: "Analysis Setup",
      tableItem: "Item",
      tableValue: "Value",
      analysisItemMaterial: "Material",
      analysisItemAnalyzedPart: "Analyzed part",
      analysisValueAnalyzedPart: "Robotic gripper finger main body",
      analysisItemOptimizedPart: "Optimized part",
      analysisValueOptimizedPart: "Main finger body only",
      analysisItemSupportCondition: "Support condition",
      analysisValueSupportCondition: "Fixed support at the base interface",
      analysisItemLoadCondition: "Load condition",
      analysisValueLoadCondition: "300 N static load",
      analysisItemLoadApplication: "Load application",
      analysisValueLoadApplication: "Inner slot load-face region",
      analysisItemAnalyses: "Analyses",
      analysisValueAnalyses: "Static Structural + Fatigue",
      analysisItemMeshStrategy: "Mesh strategy",
      analysisValueMeshStrategy: "2 mm global mesh, 1 mm local sizing at critical regions, Span Angle Center: Fine, Smoothing: High",
      meshStudyTitle: "Mesh Convergence Study",
      meshStudyIntroText: "To assess the mesh sensitivity of the baseline-to-optimized comparison, three mesh configurations were tested on both the V1 and V2 geometries. In V1, the sharp edge at the load-application site produced a stress singularity, creating a non-physical stress concentration that increases indefinitely with mesh refinement.",
      meshTableColMesh: "Mesh",
      meshTableColGlobalLocalSize: "Global / Local Size",
      meshTableColV1PeakStress: "V1 Peak Stress",
      meshTableColV2PeakStress: "V2 Peak Stress",
      meshTableColStressReduction: "Stress Reduction",
      meshTableColV1TotalDef: "V1 Total Deformation",
      meshTableColV2TotalDef: "V2 Total Deformation",
      meshTableColDefReduction: "Deformation Reduction",
      meshRowCoarse: "Coarse",
      meshRowMedium: "Medium",
      meshRowFine: "Fine",
      meshStudyConclusionText: "A stress sensitivity of ~8.5% was observed between the medium and fine mesh configurations in V2. Since the primary V1 and V2 analyses were performed using identical mesh settings, the baseline-to-optimized comparison was carried out on a consistent numerical basis. Across all three mesh levels, V2 produced lower peak stress and lower total deformation than V1. The supplementary mesh sensitivity check also showed that V2 produced a more stable stress response under refinement than the singularity-prone V1 geometry. Total deformation showed good convergence across all three configurations, with a variation below 5%.",
      designVersionsTitle: "Design Versions",
      v1BaselineTitle: "V1 – Baseline",
      v1BaselineText: "The first version was the original finger geometry.",
      v2FinalTitle: "V2 – Final Iteration",
      v2FinalText: "Two local geometry refinements were introduced in the final version. R2.0 mm fillets were added to the two lower slot corners. The critical inner root fillet was increased from approximately R2.03 mm to R2.5 mm, which was the smallest radius that provided clear stress relief at the hotspot without conflicting with the adjacent slot geometry constraints. These modifications were selected to smooth the local load path, reduce abrupt stress transitions, and relieve the hotspot identified in the baseline analysis.",
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
      project1MainTitle: "Lokale Spannungsreduzierung eines Roboter-Greiffingers mit statischer und Ermüdungs-FEA",
      overviewTitle: "Projektübersicht",
      overviewText: "Dieses Projekt konzentrierte sich auf die strukturelle Optimierung eines Roboter-Greiffingers mithilfe statischer und Ermüdungs-Finite-Elemente-Analyse. Die Ausgangsgeometrie wurde unter einer Last von 300 N ausgewertet, und die höchste Spannungskonzentration wurde im inneren Wurzelbereich des Lastpfads identifiziert. Eine zweite Designiteration führte lokale Entlastungsradien an den Schlitzkanten ein und vergrößerte den kritischen inneren Wurzelradius, um den Spannungsverlauf zu glätten. Im Vergleich zur Ausgangsversion reduzierte die finale Version die maximale von-Mises-Spannung um 13,5 %, die äquivalente elastische Dehnung um 13,9 % und die Gesamtverformung um 3,2 %. Die Ermüdungsanalyse unter nullbasierter zyklischer Belastung (0–300 N) zeigte, dass beide Designs im High-Cycle-Bereich blieben, die optimierte Version jedoch den minimalen Ermüdungssicherheitsfaktor um 15,7 % verbesserte. Die Studie zeigt, wie kleine lokale Geometrieverfeinerungen das strukturelle Verhalten verbessern können, ohne den allgemeinen Lastfall zu ändern.",
      v1Baseline: "V1 Ausgangsversion",
      v2FinalIteration: "V2 Finale Iteration",
      toolsLabel: "Tools:",
      referenceModelLabel: "Referenzmodell:",
      objectiveTitle: "Ziel",
      objectiveText: "Ziel der Studie war es, die Spannungskonzentration im kritischen Wurzelbereich des Greiffingers zu reduzieren, die elastische Dehnung zu verringern und das Ermüdungsverhalten unter denselben Last- und Randbedingungen zu verbessern. Der Fokus lag nicht darauf, die globale Form des Bauteils zu verändern, sondern einige lokale geometrische Übergänge entlang des Lastpfads zu verfeinern.",
      scopeTitle: "Umfang und Einschränkung",
      scopeText: "Die Studie konzentrierte sich auf den primären lasttragenden Fingerkörper. Die verbundenen Komponenten wurden in dieser Iteration nicht vollständig überarbeitet, da der Umfang der Studie auf den vergleichenden strukturellen und ermüdungsbezogenen Response des Hauptbauteils unter identischen Randbedingungen begrenzt war.",
      modelSetupTitle: "Modell- und Analyseaufbau",
      modelSetupText: "Das Bauteilmaterial wurde als Aluminium 6061-T6 definiert. Die strukturelle Leistung wurde in ANSYS sowohl mit Static Structural als auch mit Stress-Life Fatigue Analysis bewertet. Auf den Finger wurde ein Lastfall von 300 N angewendet. Die Ermüdung wurde unter nullbasierter zyklischer Belastung (0 → 300 N → 0) mit Goodman-Mittelspannungskorrektur und äquivalenter (von-Mises-)Spannung als Ermüdungsspannungskomponente bewertet.",
      analysisSetupTableTitle: "Analyse-Setup",
      tableItem: "Eintrag",
      tableValue: "Wert",
      analysisItemMaterial: "Material",
      analysisItemAnalyzedPart: "Analysiertes Teil",
      analysisValueAnalyzedPart: "Hauptkörper des Robotergreifer-Fingers",
      analysisItemOptimizedPart: "Optimiertes Teil",
      analysisValueOptimizedPart: "Nur Hauptkörper des Fingers",
      analysisItemSupportCondition: "Randbedingung",
      analysisValueSupportCondition: "Feste Lagerung an der Basisschnittstelle",
      analysisItemLoadCondition: "Lastbedingung",
      analysisValueLoadCondition: "300 N statische Last",
      analysisItemLoadApplication: "Lastaufbringung",
      analysisValueLoadApplication: "Innenliegender Schlitzbereich der Lastfläche",
      analysisItemAnalyses: "Analysen",
      analysisValueAnalyses: "Static Structural + Fatigue",
      analysisItemMeshStrategy: "Vernetzungsstrategie",
      analysisValueMeshStrategy: "2 mm globales Netz, 1 mm lokale Netzgröße in kritischen Bereichen, Span Angle Center: Fine, Smoothing: High",
      meshStudyTitle: "Netzkonvergenzstudie",
      meshStudyIntroText: "Zur Beurteilung der Netzeempfindlichkeit des Vergleichs zwischen Ausgangs- und Optimierungsvariante wurden drei Netzkonfigurationen sowohl an der V1- als auch an der V2-Geometrie getestet. In V1 erzeugte die scharfe Kante an der Lastaufbringungsstelle eine Spannungssingularität, was zu einer nichtphysikalischen Spannungskonzentration führt, die mit zunehmender Netzverfeinerung unbegrenzt ansteigt.",
      meshTableColMesh: "Netz",
      meshTableColGlobalLocalSize: "Globale / lokale Größe",
      meshTableColV1PeakStress: "V1 maximale Spannung",
      meshTableColV2PeakStress: "V2 maximale Spannung",
      meshTableColStressReduction: "Spannungsreduzierung",
      meshTableColV1TotalDef: "V1 Gesamtverformung",
      meshTableColV2TotalDef: "V2 Gesamtverformung",
      meshTableColDefReduction: "Verformungsreduzierung",
      meshRowCoarse: "Grob",
      meshRowMedium: "Mittel",
      meshRowFine: "Fein",
      meshStudyConclusionText: "Zwischen den mittleren und feinen Netzkonfigurationen in V2 wurde eine Spannungsempfindlichkeit von etwa 8,5 % beobachtet. Da die primären V1- und V2-Analysen mit identischen Netzeinstellungen durchgeführt wurden, erfolgte der Vergleich zwischen Ausgangs- und Optimierungsvariante auf konsistenter numerischer Basis. Über alle drei Netzstufen hinweg erzeugte V2 niedrigere maximale Spannungen und eine geringere Gesamtverformung als V1. Die ergänzende Netzeempfindlichkeitsprüfung zeigte außerdem, dass V2 unter Verfeinerung ein stabileres Spannungsverhalten erzeugte als die singularitätsanfällige V1-Geometrie. Die Gesamtverformung zeigte über alle drei Konfigurationen eine gute Konvergenz mit einer Abweichung von unter 5 %.",
      designVersionsTitle: "Designversionen",
      v1BaselineTitle: "V1 – Ausgangsversion",
      v1BaselineText: "Die erste Version war die ursprüngliche Fingergeometrie.",
      v2FinalTitle: "V2 – Finale Iteration",
      v2FinalText: "In der finalen Version wurden zwei lokale Geometrieverfeinerungen eingeführt. An den beiden unteren Schlitzkanten wurden R2,0-mm-Radien hinzugefügt. Der kritische innere Wurzelradius wurde von ungefähr R2,03 mm auf R2,5 mm vergrößert. Dieser Wert war der kleinste Radius, der eine klare Spannungsentlastung am Hotspot ermöglichte, ohne mit den benachbarten Geometriebeschränkungen des Schlitzes zu kollidieren. Diese Änderungen wurden ausgewählt, um den lokalen Lastpfad zu glätten, abrupte Spannungsübergänge zu reduzieren und den in der Ausgangsanalyse identifizierten Hotspot zu entlasten.",
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
