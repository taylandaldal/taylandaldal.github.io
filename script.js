const translations = {
  index: {
    en: {
      heroTitle: "Taylan Daldal",
      heroRole: "Mechanical Engineer | Mechanical Design & CAE",
      heroSub: "FEA | SolidWorks | Ansys | Optimization | Automation | Robotics",

      featuredTitle: "Featured Projects",
      card1Title: "Local Stress Reduction of a Robotic Gripper Finger Using Static and Fatigue FEA",
      card1Metric: "Peak stress reduced by 13.5%, fatigue safety factor improved by 15.7%",
      card1Subtitle: "View project",
      card2Title: "Lightweight Design Iteration of a Camera On-Arm Mount for Machine Vision System Using Static and Modal Analysis",
      card2Metric: "7.35% mass reduction with <1% change in stress and modal response",
      card2Subtitle: "View project",
      card3Title: "Topology-Based Lightweight Redesign of a Robotic Arm Link Using Static and Buckling FEA",
      card3Metric: "26.22% mass reduction while retaining structural and buckling stability",
      card3Subtitle: "View project",

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
      card1Title: "Lokale Spannungsreduzierung eines Roboter-Greiffingers mit statischer und Ermüdungs-FEA",
      card1Metric: "Maximale Spannung um 13,5 % reduziert, Ermüdungssicherheitsfaktor um 15,7 % verbessert",
      card1Subtitle: "Projekt ansehen",
      card2Title: "Leichtbau-Designiteration einer On-Arm-Kamerahalterung für ein Machine-Vision-System mit statischer und modaler Analyse",
      card2Metric: "7,35 % Massenreduzierung bei <1 % Änderung von Spannung und modalem Verhalten",
      card2Subtitle: "Projekt ansehen",
      card3Title: "Topologiebasierte Leichtbau-Neukonstruktion eines Roboterarmglieds mit statischer und Knick-FEA",
      card3Metric: "26,22 % Massenreduzierung bei erhaltener Struktur- und Knickstabilität",
      card3Subtitle: "Projekt ansehen",

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
      project3MainTitle: "Topology-Based Lightweight Redesign of a Robotic Arm Link Using Static and Buckling FEA",

      overviewTitle: "Project Overview",
      overviewText: "This project focused on the lightweight redesign of a robot arm link using static structural analysis, eigenvalue buckling analysis, and topology optimization. The original V1 geometry was first evaluated under the selected loading and boundary conditions. After the baseline analysis, topology optimization was used to identify the main load-transfer regions and the lower-density areas where material could be removed.",
      overviewText2: "The final V2 design was created based on the topology result. The topology output was not used directly as the final CAD geometry because it produced an irregular mesh-based shape. Instead, it was used as a load-path guide to create a cleaner and manufacturable redesign with controlled cutouts and preserved interface regions.",

      toolsLabel: "Tools:",
      referenceModelLabel: "Reference Model:",

      objectiveTitle: "Objective",
      objectiveText: "The main goal was to reduce the mass of the robot arm link while keeping the static response and buckling stability within a safe range. The redesign focused on removing material from low-density regions suggested by topology optimization, while keeping the main hub, wrist-end interface, support region, and load-transfer paths intact.",

      v1Baseline: "V1 Baseline",
      v2FinalIteration: "V2 Final Iteration",

      scopeTitle: "Scope and Limitation",
      scopeText: "The study focused on the main robot arm link body. The surrounding robot assembly, bearings, bolts, and detailed contact behavior were not fully modeled in this iteration. The purpose was to compare the original and redesigned arm link under identical boundary conditions and evaluate whether the V2 geometry could reduce mass without creating an unacceptable penalty in static stress, deformation, or buckling stability.",
      scopeText2: "Eigenvalue buckling was used as a stability check. The buckling result was interpreted as a comparative indicator between V1 and V2 rather than as a full nonlinear collapse prediction.",

      modelSetupTitle: "Model and Analysis Setup",
      modelSetupText: "The model was analyzed in ANSYS Mechanical using Static Structural, Topology Optimization, and Eigenvalue Buckling analyses. Standard Earth gravity was included. A 2g dynamic load factor was applied to all inertial loads to account for operational accelerations. The wrist-side remote force was calculated from the combined mass of the wrist, revolver, and maximum payload package. The wrist mass was 5.168 kg, the revolver mass was 6.744 kg, and the maximum payload package was taken as 20 kg based on the KUKA datasheet, giving a total supported mass of 31.912 kg. This resulted in 31.912 kg × 9.81 m/s² × 2 ≈ 626 N. Servo motor masses were estimated from manufacturer datasheets and converted in the same way, resulting in remote forces of 491 N for the large servo, 274 N for 2 standard servos mounted in the same area, and 137 N for 1 standard servo mounted separately.",

      analysisSetupTableTitle: "Analysis Setup",
      tableItem: "Item",
      tableValue: "Value",
      analysisItemMaterial: "Material",
      analysisItemAnalyzedPart: "Analyzed part",
      analysisValueAnalyzedPart: "Robot arm link",
      analysisItemOptimizedPart: "Optimized part",
      analysisValueOptimizedPart: "Main arm link body",
      analysisItemSupportCondition: "Support condition",
      analysisValueSupportCondition: "Remote displacement at the fixed interface",
      analysisItemLoadCondition: "Load condition",
      analysisValueLoadCondition: "Standard Earth gravity + remote force inputs from wrist and servo motor masses",
      analysisItemMainWristLoad: "Main wrist-side load",
      analysisItemServoLoadDefinition: "Servo load definition",
      analysisValueServoLoadDefinition: "Servo masses estimated from datasheets and converted into remote forces",
      analysisItemDynamicLoadFactor: "Dynamic load factor",
      analysisItemAnalyses: "Analyses",
      analysisValueAnalyses: "Static Structural + Topology Optimization + Eigenvalue Buckling",
      analysisItemStaticMeshLevels: "Static mesh levels",
      analysisItemBucklingSetup: "Buckling setup",
      analysisValueBucklingSetup: "First three positive buckling modes",

      topologyOptimizationTitle: "Topology Optimization",
      topologyOptimizationIntro: "Topology optimization was performed after the baseline static setup was completed. The objective was to minimize compliance with a 50% mass retention target. The result showed that the main load paths were carried through the upper and lower structural regions, while the middle and rear body regions had lower-density areas that could be reduced.",
      topologySettingsTableTitle: "Topology Settings",
      topologyTableColSetting: "Topology Setting",
      topologyObjective: "Objective",
      topologyMassRetentionTarget: "Mass retention target",
      topologyMaximumIterations: "Maximum iterations",
      topologyConvergenceAccuracy: "Convergence accuracy",
      topologyFinalIteration: "Final iteration",
      topologyRetainedMass: "Retained mass at 0.5 threshold",
      topologyRetainedMassRatio: "Retained mass ratio at 0.5 threshold",
      topologyGuideText: "The topology result was used as a design guide rather than a direct CAD output.",

      designIterationTitle: "Design Iteration",
      designIterationText: "The V1 model was the original robot arm link geometry. It had a continuous main body between the large hub region and the wrist-end cylindrical interface. The baseline geometry was structurally safe under the selected static load case, but it also contained material in regions where the topology result later indicated lower contribution to the main load path.",
      designIterationText2: "The V2 design introduced controlled material removal from the middle and rear body regions of the arm link. The large hub, wrist-end interface, fixed support region, and main upper and lower load paths were preserved. The wrist-end cylindrical interface was also slightly refined by reducing the secondary outer cylinder diameter, while keeping the wrist-side load transfer region and connection geometry intact. The redesign avoided copying the irregular topology shape directly and instead translated the result into cleaner cutouts with smoother transitions.",

      massReductionText: "The final V2 geometry reduced the mass from 34,438.78 g to 25,408.36 g, corresponding to a 26.22% mass reduction.",
      massComparisonTableTitle: "Mass Comparison",
      tableMetric: "Metric",
      tableV1Baseline: "V1 Baseline",
      tableV2Final: "V2 Final",
      tableChange: "Change",
      metricMass: "Mass",
      metricVolume: "Volume",
      metricSurfaceArea: "Surface area",
      massComparisonConclusion: "The final V2 design removed 9,030.42 g of material while preserving the main connection and load-transfer regions of the original arm link.",

      meshStudyTitle: "Mesh Convergence Study",
      meshStudyIntroText: "To assess mesh sensitivity, three mesh configurations were tested for both the V1 baseline and the V2 final geometry. The stress, total deformation, and elastic strain values were compared across coarse, medium, and fine meshes. The fine mesh results were selected as the final static values for both designs.",
      v1StaticMeshConvergenceTitle: "V1 Static Mesh Convergence",
      meshTableColMesh: "Mesh",
      meshTableColGlobalLocalSize: "Global / Local Size",
      meshTableColMaxStress: "Max von Mises Stress",
      meshTableColMaxDeformation: "Max Total Deformation",
      meshTableColMaxElasticStrain: "Max Elastic Strain",
      meshRowCoarse: "Coarse",
      meshRowMedium: "Medium",
      meshRowFine: "Fine",
      v1MeshConclusionText: "Between the medium and fine meshes, the V1 stress changed by 2.68%, deformation changed by 0.018%, and elastic strain changed by 2.78%.",
      v2StaticMeshConvergenceTitle: "V2 Static Mesh Convergence",
      v2MeshConclusionText: "Between the medium and fine meshes, the V2 stress changed by 1.35%, deformation changed by 0.044%, and elastic strain changed by 1.31%. These results indicate that the final V2 static solution was stable under mesh refinement. Buckling analysis was performed using the same mesh configuration as the static analysis to maintain consistency across analyses. Mesh sensitivity for the static solution was verified separately.",

      staticStructuralResultsTitle: "Static Structural Results",
      staticStructuralResultsIntro: "The final V2 design reduced mass significantly, but stress and deformation increased compared with the V1 baseline. This was expected because material was removed from the structure. Even after the redesign, the final stress and deformation values remained low under the selected load case.",
      staticResultsTableTitle: "Static Results",
      metricMaxVonMisesStress: "Max von Mises Stress",
      metricMaxTotalDeformation: "Max Total Deformation",
      metricMaxElasticStrain: "Max Elastic Strain",
      staticResultsConclusion: "Although the percentage increase in stress is large, the absolute value remained low. The maximum von Mises stress in V2 was 6.1475 MPa, corresponding to approximately 1.2% of the 7075-T6 yield strength of 503 MPa. The structural safety margin remained large.",

      v1StressResultTitle: "V1 Baseline Equivalent (von-Mises) Stress Result",
      v2StressResultTitle: "V2 Final Equivalent (von-Mises) Stress Result",

      bucklingResultsTitle: "Buckling Analysis Results",
      bucklingResultsIntro: "Eigenvalue buckling analysis was performed as a stability check for both V1 and V2. Negative load multipliers were disabled, and the first three positive buckling modes were extracted. This made the V1 and V2 buckling comparison cleaner and easier to interpret.",
      bucklingResultsTableTitle: "Buckling Load Multipliers",
      tableMode: "Mode",
      tableV1LoadMultiplier: "V1 Load Multiplier",
      tableV2LoadMultiplier: "V2 Load Multiplier",
      bucklingResultsText: "The first buckling load multiplier decreased from 20,303 in V1 to 2,970.6 in V2. This is a large reduction, but the V2 value remained far above 1, which indicates that the redesigned arm link still had a large buckling stability margin under the applied load case.",
      bucklingResultsText2: "Although the buckling load multiplier decreased by 85% relative to the baseline, the V2 value of 2,970.6 remains far beyond any realistic operational loading scenario, confirming the structural viability of the topology-optimized geometry.",
      v1BucklingResultTitle: "V1 Baseline Buckling Result",
      v2BucklingResultTitle: "V2 Final Buckling Result",

      discussionTitle: "Discussion",
      discussionText: "The V1 baseline was not structurally weak. It showed low stress, very small deformation, and a very high buckling load multiplier under the selected load case. The purpose of the redesign was not to fix a failed part, but to improve mass efficiency while keeping the structural response within a safe range.",
      discussionText2: "The topology result helped identify where material had lower structural contribution. Based on this, the V2 design removed material mainly from the middle and rear body regions while keeping the main hub, wrist-end interface, and upper and lower load paths. As expected, the V2 design showed higher stress and deformation than V1, but the final values remained low.",
      discussionText3: "The buckling multiplier decreased significantly after material removal, which confirms that the lightweight cutouts reduced the global stiffness of the arm link. However, the first V2 buckling multiplier remained at 2,970.6, so buckling was not a limiting issue for the selected load case.",

      finalConclusionTitle: "Final Technical Conclusion",
      finalConclusionText: "The final V2 robot arm link achieved a 26.22% mass reduction compared with the V1 baseline. Static mesh convergence showed stable results, with the medium-to-fine difference remaining below 1.5% for stress, deformation, and elastic strain in the V2 model. The final V2 stress increased to 6.1475 MPa, but the absolute value remained low for the selected material and load case. At 6.1475 MPa, the final stress represented approximately 1.2% of the material yield strength, confirming a large structural safety margin.",
      finalConclusionText2: "The first buckling load multiplier decreased from 20,303 to 2,970.6 after material removal. Despite this reduction, the value remained far above the critical threshold of 1.",
      finalConclusionText3: "Based on the static and buckling checks, the topology-based V2 design improved mass efficiency while maintaining a large structural stability margin.",

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
      project3MainTitle: "Topologiebasierte Leichtbau-Neukonstruktion eines Roboterarmglieds mit statischer und Knick-FEA",

      overviewTitle: "Projektübersicht",
      overviewText: "Dieses Projekt konzentrierte sich auf die Leichtbau-Neukonstruktion eines Roboterarmglieds mithilfe statischer Strukturanalyse, Eigenwert-Knickanalyse und Topologieoptimierung. Die ursprüngliche V1-Geometrie wurde zunächst unter den gewählten Last- und Randbedingungen bewertet. Nach der Ausgangsanalyse wurde die Topologieoptimierung genutzt, um die wichtigsten Lastpfade und Bereiche mit geringerer Dichte zu identifizieren, in denen Material entfernt werden konnte.",
      overviewText2: "Das finale V2-Design wurde auf Grundlage des Topologieergebnisses erstellt. Das Topologieergebnis wurde nicht direkt als finale CAD-Geometrie verwendet, da es eine unregelmäßige, netzbasierte Form erzeugte. Stattdessen diente es als Lastpfad-Orientierung für eine sauberere und fertigungsgerechtere Neukonstruktion mit kontrollierten Ausschnitten und erhaltenen Schnittstellenbereichen.",

      toolsLabel: "Tools:",
      referenceModelLabel: "Referenzmodell:",

      objectiveTitle: "Ziel",
      objectiveText: "Das Hauptziel war, die Masse des Roboterarmglieds zu reduzieren und gleichzeitig die statische Antwort und die Knickstabilität in einem sicheren Bereich zu halten. Die Neukonstruktion konzentrierte sich darauf, Material aus Bereichen mit geringer Dichte zu entfernen, die durch die Topologieoptimierung vorgeschlagen wurden, während Hauptnabe, Handgelenk-Schnittstelle, Lagerbereich und Lastpfade erhalten blieben.",

      v1Baseline: "V1 Ausgangsversion",
      v2FinalIteration: "V2 Finale Iteration",

      scopeTitle: "Umfang und Einschränkung",
      scopeText: "Die Studie konzentrierte sich auf den Hauptkörper des Roboterarmglieds. Die umliegende Roboterbaugruppe, Lager, Schrauben und das detaillierte Kontaktverhalten wurden in dieser Iteration nicht vollständig modelliert. Ziel war es, das ursprüngliche und das neu konstruierte Armglied unter identischen Randbedingungen zu vergleichen und zu bewerten, ob die V2-Geometrie die Masse reduzieren kann, ohne eine unakzeptable Verschlechterung bei statischer Spannung, Verformung oder Knickstabilität zu erzeugen.",
      scopeText2: "Die Eigenwert-Knickanalyse wurde als Stabilitätsprüfung verwendet. Das Knickergebnis wurde als vergleichender Indikator zwischen V1 und V2 interpretiert und nicht als vollständige nichtlineare Kollapsvorhersage.",

      modelSetupTitle: "Modell- und Analyseaufbau",
      modelSetupText: "Das Modell wurde in ANSYS Mechanical mit Static Structural, Topology Optimization und Eigenvalue Buckling analysiert. Die Standard-Erdgravitation wurde berücksichtigt. Ein dynamischer Lastfaktor von 2g wurde auf alle Trägheitslasten angewendet, um Betriebsbeschleunigungen abzubilden. Die handgelenkseitige Remote Force wurde aus der kombinierten Masse von Handgelenk, Revolver und maximalem Nutzlastpaket berechnet. Die Handgelenkmasse betrug 5,168 kg, die Revolvermasse 6,744 kg, und das maximale Nutzlastpaket wurde auf Basis des KUKA-Datenblatts mit 20 kg angesetzt. Daraus ergab sich eine unterstützte Gesamtmasse von 31,912 kg. Dies führte zu 31,912 kg × 9,81 m/s² × 2 ≈ 626 N. Die Servomotormassen wurden aus Herstellerdatenblättern abgeschätzt und auf die gleiche Weise in Remote Forces umgerechnet. Daraus ergaben sich 491 N für den großen Servo, 274 N für 2 Standardservos im selben Bereich und 137 N für 1 separat montierten Standardservo.",

      analysisSetupTableTitle: "Analyse-Setup",
      tableItem: "Eintrag",
      tableValue: "Wert",
      analysisItemMaterial: "Material",
      analysisItemAnalyzedPart: "Analysiertes Teil",
      analysisValueAnalyzedPart: "Roboterarmglied",
      analysisItemOptimizedPart: "Optimiertes Teil",
      analysisValueOptimizedPart: "Hauptkörper des Armglieds",
      analysisItemSupportCondition: "Randbedingung",
      analysisValueSupportCondition: "Remote Displacement an der festen Schnittstelle",
      analysisItemLoadCondition: "Lastbedingung",
      analysisValueLoadCondition: "Standard-Erdgravitation + Remote-Force-Eingaben aus Handgelenk- und Servomotormassen",
      analysisItemMainWristLoad: "Hauptlast an der Handgelenkseite",
      analysisItemServoLoadDefinition: "Definition der Servolasten",
      analysisValueServoLoadDefinition: "Servomassen aus Datenblättern abgeschätzt und in Remote Forces umgerechnet",
      analysisItemDynamicLoadFactor: "Dynamischer Lastfaktor",
      analysisItemAnalyses: "Analysen",
      analysisValueAnalyses: "Static Structural + Topology Optimization + Eigenvalue Buckling",
      analysisItemStaticMeshLevels: "Statische Netzstufen",
      analysisItemBucklingSetup: "Knick-Setup",
      analysisValueBucklingSetup: "Erste drei positive Knickmoden",

      topologyOptimizationTitle: "Topologieoptimierung",
      topologyOptimizationIntro: "Die Topologieoptimierung wurde durchgeführt, nachdem das statische Ausgangs-Setup abgeschlossen war. Ziel war es, die Nachgiebigkeit mit einem Massenerhaltungsziel von 50 % zu minimieren. Das Ergebnis zeigte, dass die Hauptlastpfade durch die oberen und unteren Strukturregionen verlaufen, während die mittleren und hinteren Körperbereiche Zonen mit geringerer Dichte aufweisen, die reduziert werden konnten.",
      topologySettingsTableTitle: "Topologieeinstellungen",
      topologyTableColSetting: "Topologieeinstellung",
      topologyObjective: "Ziel",
      topologyMassRetentionTarget: "Massenerhaltungsziel",
      topologyMaximumIterations: "Maximale Iterationen",
      topologyConvergenceAccuracy: "Konvergenzgenauigkeit",
      topologyFinalIteration: "Finale Iteration",
      topologyRetainedMass: "Erhaltene Masse bei 0,5-Schwelle",
      topologyRetainedMassRatio: "Erhaltener Massenanteil bei 0,5-Schwelle",
      topologyGuideText: "Das Topologieergebnis wurde als Designleitfaden verwendet und nicht als direkter CAD-Output.",

      designIterationTitle: "Designiteration",
      designIterationText: "Das V1-Modell war die ursprüngliche Geometrie des Roboterarmglieds. Es hatte einen durchgehenden Hauptkörper zwischen der großen Nabenregion und der zylindrischen Schnittstelle am Handgelenkende. Die Ausgangsgeometrie war unter dem gewählten statischen Lastfall strukturell sicher, enthielt jedoch auch Material in Bereichen, in denen das Topologieergebnis später einen geringeren Beitrag zum Hauptlastpfad zeigte.",
      designIterationText2: "Das V2-Design führte eine kontrollierte Materialentfernung aus den mittleren und hinteren Körperbereichen des Armglieds ein. Die große Nabe, die handgelenkseitige Schnittstelle, der feste Lagerbereich sowie die oberen und unteren Hauptlastpfade wurden erhalten. Die zylindrische Schnittstelle am Handgelenkende wurde zusätzlich leicht verfeinert, indem der sekundäre Außenzylinderdurchmesser reduziert wurde, während die handgelenkseitige Lastübertragungsregion und die Verbindungsgeometrie erhalten blieben. Die Neukonstruktion kopierte die unregelmäßige Topologieform nicht direkt, sondern übersetzte das Ergebnis in sauberere Ausschnitte mit glatteren Übergängen.",

      massReductionText: "Die finale V2-Geometrie reduzierte die Masse von 34.438,78 g auf 25.408,36 g, was einer Massenreduzierung von 26,22 % entspricht.",
      massComparisonTableTitle: "Massenvergleich",
      tableMetric: "Kennwert",
      tableV1Baseline: "V1 Ausgangsversion",
      tableV2Final: "V2 Finale Version",
      tableChange: "Änderung",
      metricMass: "Masse",
      metricVolume: "Volumen",
      metricSurfaceArea: "Oberfläche",
      massComparisonConclusion: "Das finale V2-Design entfernte 9.030,42 g Material, während die Hauptverbindungs- und Lastübertragungsbereiche des ursprünglichen Armglieds erhalten blieben.",

      meshStudyTitle: "Netzkonvergenzstudie",
      meshStudyIntroText: "Zur Beurteilung der Netzsensitivität wurden drei Netzkonfigurationen sowohl für die V1-Ausgangsversion als auch für die finale V2-Geometrie getestet. Spannung, Gesamtverformung und elastische Dehnung wurden über grobe, mittlere und feine Netze hinweg verglichen. Die feinen Netzergebnisse wurden als finale statische Werte für beide Designs ausgewählt.",
      v1StaticMeshConvergenceTitle: "V1 statische Netzkonvergenz",
      meshTableColMesh: "Netz",
      meshTableColGlobalLocalSize: "Globale / lokale Größe",
      meshTableColMaxStress: "Max. von-Mises-Spannung",
      meshTableColMaxDeformation: "Max. Gesamtverformung",
      meshTableColMaxElasticStrain: "Max. elastische Dehnung",
      meshRowCoarse: "Grob",
      meshRowMedium: "Mittel",
      meshRowFine: "Fein",
      v1MeshConclusionText: "Zwischen mittlerem und feinem Netz änderte sich die V1-Spannung um 2,68 %, die Verformung um 0,018 % und die elastische Dehnung um 2,78 %.",
      v2StaticMeshConvergenceTitle: "V2 statische Netzkonvergenz",
      v2MeshConclusionText: "Zwischen mittlerem und feinem Netz änderte sich die V2-Spannung um 1,35 %, die Verformung um 0,044 % und die elastische Dehnung um 1,31 %. Diese Ergebnisse zeigen, dass die finale statische V2-Lösung unter Netzverfeinerung stabil war. Die Knickanalyse wurde mit derselben Netzkonfiguration wie die statische Analyse durchgeführt, um die Konsistenz zwischen den Analysen zu erhalten. Die Netzsensitivität der statischen Lösung wurde separat verifiziert.",

      staticStructuralResultsTitle: "Ergebnisse der statischen Strukturanalyse",
      staticStructuralResultsIntro: "Das finale V2-Design reduzierte die Masse deutlich, aber Spannung und Verformung stiegen im Vergleich zur V1-Ausgangsversion an. Dies war zu erwarten, da Material aus der Struktur entfernt wurde. Auch nach der Neukonstruktion blieben die finalen Spannungs- und Verformungswerte unter dem gewählten Lastfall niedrig.",
      staticResultsTableTitle: "Statische Ergebnisse",
      metricMaxVonMisesStress: "Max. von-Mises-Spannung",
      metricMaxTotalDeformation: "Max. Gesamtverformung",
      metricMaxElasticStrain: "Max. elastische Dehnung",
      staticResultsConclusion: "Obwohl die prozentuale Spannungszunahme groß ist, blieb der absolute Wert niedrig. Die maximale von-Mises-Spannung in V2 betrug 6,1475 MPa, was ungefähr 1,2 % der Streckgrenze von 7075-T6 mit 503 MPa entspricht. Die strukturelle Sicherheitsreserve blieb groß.",

      v1StressResultTitle: "V1 Ausgangsversion äquivalente (von-Mises-)Spannung",
      v2StressResultTitle: "V2 Finale Version äquivalente (von-Mises-)Spannung",

      bucklingResultsTitle: "Ergebnisse der Knickanalyse",
      bucklingResultsIntro: "Die Eigenwert-Knickanalyse wurde als Stabilitätsprüfung für V1 und V2 durchgeführt. Negative Lastmultiplikatoren wurden deaktiviert, und die ersten drei positiven Knickmoden wurden extrahiert. Dadurch wurde der Knickvergleich zwischen V1 und V2 klarer und leichter interpretierbar.",
      bucklingResultsTableTitle: "Knicklastmultiplikatoren",
      tableMode: "Modus",
      tableV1LoadMultiplier: "V1 Lastmultiplikator",
      tableV2LoadMultiplier: "V2 Lastmultiplikator",
      bucklingResultsText: "Der erste Knicklastmultiplikator sank von 20.303 in V1 auf 2.970,6 in V2. Dies ist eine deutliche Reduzierung, aber der V2-Wert blieb weit über 1. Das zeigt, dass das neu konstruierte Armglied unter dem angewendeten Lastfall weiterhin eine große Knickstabilitätsreserve hatte.",
      bucklingResultsText2: "Obwohl der Knicklastmultiplikator relativ zur Ausgangsversion um 85 % sank, liegt der V2-Wert von 2.970,6 weiterhin weit über einem realistischen Betriebslastniveau. Dies bestätigt die strukturelle Tragfähigkeit der topologieoptimierten Geometrie.",
      v1BucklingResultTitle: "V1 Ausgangsversion Knickergebnis",
      v2BucklingResultTitle: "V2 Finale Version Knickergebnis",

      discussionTitle: "Diskussion",
      discussionText: "Die V1-Ausgangsversion war nicht strukturell schwach. Sie zeigte niedrige Spannungen, sehr kleine Verformungen und einen sehr hohen Knicklastmultiplikator unter dem gewählten Lastfall. Ziel der Neukonstruktion war nicht, ein fehlerhaftes Bauteil zu korrigieren, sondern die Masseneffizienz zu verbessern und gleichzeitig die strukturelle Antwort in einem sicheren Bereich zu halten.",
      discussionText2: "Das Topologieergebnis half zu erkennen, wo Material einen geringeren strukturellen Beitrag leistete. Darauf basierend entfernte das V2-Design Material hauptsächlich aus den mittleren und hinteren Körperbereichen, während Hauptnabe, handgelenkseitige Schnittstelle sowie obere und untere Lastpfade erhalten blieben. Wie erwartet zeigte das V2-Design höhere Spannung und Verformung als V1, aber die finalen Werte blieben niedrig.",
      discussionText3: "Der Knickmultiplikator sank nach der Materialentfernung deutlich, was bestätigt, dass die Leichtbauausschnitte die globale Steifigkeit des Armglieds reduzierten. Der erste V2-Knickmultiplikator blieb jedoch bei 2.970,6, sodass Knicken unter dem gewählten Lastfall kein begrenzender Faktor war.",

      finalConclusionTitle: "Abschließende technische Schlussfolgerung",
      finalConclusionText: "Das finale V2-Roboterarmglied erreichte eine Massenreduzierung von 26,22 % im Vergleich zur V1-Ausgangsversion. Die statische Netzkonvergenz zeigte stabile Ergebnisse, wobei die Differenz zwischen mittlerem und feinem Netz im V2-Modell für Spannung, Verformung und elastische Dehnung unter 1,5 % blieb. Die finale V2-Spannung stieg auf 6,1475 MPa, der absolute Wert blieb jedoch für das gewählte Material und den Lastfall niedrig. Bei 6,1475 MPa entsprach die finale Spannung ungefähr 1,2 % der Streckgrenze des Materials, was eine große strukturelle Sicherheitsreserve bestätigt.",
      finalConclusionText2: "Der erste Knicklastmultiplikator sank nach der Materialentfernung von 20.303 auf 2.970,6. Trotz dieser Reduzierung blieb der Wert weit über dem kritischen Schwellenwert von 1.",
      finalConclusionText3: "Auf Grundlage der statischen und knickbezogenen Prüfungen verbesserte das topologiebasierte V2-Design die Masseneffizienz und behielt gleichzeitig eine große strukturelle Stabilitätsreserve bei.",

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
      analysisValueMeshStrategy: "2 mm global mesh, 1 mm local sizing at critical regions, Span Angle Center: Fine, Smoothing: High",

      meshStudyTitle: "Mesh Convergence Study",
      meshStudyIntroText: "To assess the mesh sensitivity of the final V2 design, three mesh configurations were tested for both static and modal analysis. Peak stress, total deformation, and the first three natural frequencies remained close across the coarse, medium, and fine meshes. Between the medium and fine meshes, the stress difference stayed around 1.1%, total deformation changed by about 0.5%, and the first natural frequency changed by less than 0.5%. These results indicate that the selected mesh strategy provides a stable numerical basis for the reported static and modal results.",
      meshTableColMesh: "Mesh",
      meshTableColGlobalLocalSize: "Global / Local Size",
      meshTableColPeakStress: "Peak Stress",
      meshTableColTotalDef: "Total Deformation",
      meshTableColMode1: "Mode 1",
      meshTableColMode2: "Mode 2",
      meshTableColMode3: "Mode 3",
      meshRowCoarse: "Coarse",
      meshRowMedium: "Medium",
      meshRowFine: "Fine",

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
      modalResultsIntro: "The first three natural frequencies stayed close after the iteration. The first mode remained above 187 Hz, and the general mode shapes stayed similar to the baseline. This means the lighter adapter kept the main dynamic behavior of the original design. The modal analysis was used as a design validation check to confirm that the first natural frequency remained in the same range after mass reduction. No specific operational excitation frequency was available for this concept-level study, so the modal check was used to verify that the lightweight iteration did not introduce a significant dynamic penalty relative to the baseline.",

      modalFreqTableTitle: "First Three Natural Frequencies",
      tableMode: "Mode",
      v1ModalTitle: "V1 Modal Analysis Result",
      v2ModalTitle: "V2 Final Modal Analysis Result",

      inertialStudyTitle: "Inertial Load Study",
      inertialStudyIntroText: "To extend the concept-level validation, an additional combined gravity and inertial load check was performed on the final V2 design. Standard Earth gravity was kept active, and a 3g acceleration input (29,419.8 mm/s²) was applied in selected global directions as a conservative assumption representing rapid robot motion during operation. Equivalent stress and total deformation were evaluated for each case. Among the investigated cases, the +Y input direction produced the highest stress and deformation and was therefore treated as the worst-case inertial loading condition in this study.",
      inertialTableColLoadCase: "Load Case",
      inertialTableColDirection: "Direction",
      inertialTableColMaxStress: "Max Stress",
      inertialTableColMaxDeformation: "Max Total Deformation",
      inertialRowGravityOnly: "Gravity only",
      inertialRowGravity3g: "Gravity + 3g",
      inertialRowWorstCase: "Worst case",
      inertialStudyConclusionText: "The additional inertial load check showed that the final V2 design remained well below the 276 MPa yield strength of Aluminum 6061-T6 in all investigated cases. While the inertial load cases produced a higher response than the gravity-only baseline, the stress level remained low and the part retained a large structural margin. These results support the use of the lightweight V2 design as a concept-level camera adapter iteration under combined gravity and inertial loading conditions.",

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
      analysisValueMeshStrategy: "2 mm globales Netz, 1 mm lokale Netzgröße in kritischen Bereichen, Span Angle Center: Fine, Smoothing: High",

      meshStudyTitle: "Netzkonvergenzstudie",
      meshStudyIntroText: "Zur Beurteilung der Netzeempfindlichkeit des finalen V2-Designs wurden drei Netzkonfigurationen sowohl für die statische als auch für die modale Analyse getestet. Maximale Spannung, Gesamtverformung und die ersten drei Eigenfrequenzen blieben über grobe, mittlere und feine Netze hinweg nahe beieinander. Zwischen dem mittleren und dem feinen Netz lag die Spannungsdifferenz bei etwa 1,1 %, die Gesamtverformung änderte sich um etwa 0,5 %, und die erste Eigenfrequenz änderte sich um weniger als 0,5 %. Diese Ergebnisse zeigen, dass die gewählte Netzstrategie eine stabile numerische Grundlage für die berichteten statischen und modalen Ergebnisse liefert.",
      meshTableColMesh: "Netz",
      meshTableColGlobalLocalSize: "Globale / lokale Größe",
      meshTableColPeakStress: "Maximale Spannung",
      meshTableColTotalDef: "Gesamtverformung",
      meshTableColMode1: "Modus 1",
      meshTableColMode2: "Modus 2",
      meshTableColMode3: "Modus 3",
      meshRowCoarse: "Grob",
      meshRowMedium: "Mittel",
      meshRowFine: "Fein",

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
      modalResultsIntro: "Die ersten drei Eigenfrequenzen blieben nach der Iteration nahe beieinander. Die erste Eigenform blieb über 187 Hz, und die allgemeinen Eigenformen blieben der Ausgangsversion ähnlich. Das bedeutet, dass der leichtere Adapter das wesentliche dynamische Verhalten des ursprünglichen Designs beibehielt. Die modale Analyse wurde als Design-Validierungsprüfung verwendet, um zu bestätigen, dass die erste Eigenfrequenz nach der Massenreduzierung im gleichen Bereich blieb. Für diese konzeptbezogene Studie lag keine spezifische betriebliche Anregungsfrequenz vor, daher wurde die modale Prüfung genutzt, um zu verifizieren, dass die Leichtbauiteration im Vergleich zur Ausgangsversion keinen signifikanten dynamischen Nachteil einführte.",

      modalFreqTableTitle: "Erste drei Eigenfrequenzen",
      tableMode: "Modus",
      v1ModalTitle: "V1 Modal Analysis Result",
      v2ModalTitle: "V2 Final Modal Analysis Result",

      inertialStudyTitle: "Trägheitslaststudie",
      inertialStudyIntroText: "Zur Erweiterung der konzeptbezogenen Validierung wurde eine zusätzliche kombinierte Schwerkraft- und Trägheitslastprüfung am finalen V2-Design durchgeführt. Die Standard-Erdschwerkraft blieb aktiv, und ein 3g-Beschleunigungseingang (29.419,8 mm/s²) wurde in ausgewählten globalen Richtungen als konservative Annahme für schnelle Roboterbewegungen im Betrieb aufgebracht. Für jeden Fall wurden äquivalente Spannung und Gesamtverformung ausgewertet. Unter den untersuchten Fällen erzeugte die +Y-Eingangsrichtung die höchste Spannung und Verformung und wurde daher in dieser Studie als Worst-Case-Trägheitslastbedingung behandelt.",
      inertialTableColLoadCase: "Lastfall",
      inertialTableColDirection: "Richtung",
      inertialTableColMaxStress: "Max. Spannung",
      inertialTableColMaxDeformation: "Max. Gesamtverformung",
      inertialRowGravityOnly: "Nur Schwerkraft",
      inertialRowGravity3g: "Schwerkraft + 3g",
      inertialRowWorstCase: "Worst Case",
      inertialStudyConclusionText: "Die zusätzliche Trägheitslastprüfung zeigte, dass das finale V2-Design in allen untersuchten Fällen deutlich unter der Streckgrenze von 276 MPa für Aluminum 6061-T6 blieb. Obwohl die Trägheitslastfälle eine höhere Antwort als die reine Schwerkraft-Basis erzeugten, blieb das Spannungsniveau niedrig und das Bauteil behielt eine große strukturelle Reserve. Diese Ergebnisse unterstützen die Verwendung des leichten V2-Designs als konzeptbezogene Kameraadapter-Iteration unter kombinierten Schwerkraft- und Trägheitslastbedingungen.",

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

      designVersionsTitle: "Design Iteration",
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
      heroSub: "FEA | SolidWorks | Ansys | Optimierung | Robotik",

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

      designVersionsTitle: "Designiteration",
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
