import type { ui as en } from "./en";

// Partial: any key missing here falls back to the English string (see
// useTranslations in ./utils) instead of requiring a translation up front.
export const ui: Partial<Record<keyof typeof en, string>> = {
  // ── Layout / Meta ──
  "meta.defaultDescription":
    "epanet-js: EPANET en tu navegador — comienza a modelar redes de agua ahora, sin descargas.",
  "meta.defaultTitle":
    "epanet-js: EPANET en tu navegador — comienza a modelar redes de agua ahora, sin descargas",
  "meta.titleSuffix": "epanet-js",
  "meta.ogAltHome": "Captura de pantalla de la página de inicio de epanet-js",

  // ── Navbar ──
  "nav.home": "Inicio",
  "nav.solutions": "Soluciones",
  "nav.whoItsFor": "Para quién",
  "nav.resources": "Recursos",
  "nav.pricing": "Precios",
  "nav.blog": "Blog",
  "nav.resources.security.label": "Seguridad",
  "nav.resources.security.description":
    "Cómo mantenemos tus datos privados y bajo tu control",
  "nav.resources.blog.label": "Blog",
  "nav.resources.blog.description":
    "Novedades de producto y modelado de agua",
  "nav.resources.caseStudies.label": "Casos de estudio",
  "nav.resources.caseStudies.description": "Cómo utilizan epanet-js los profesionales",
  "nav.resources.compare.label": "Comparar",
  "nav.resources.compare.description": "epanet-js frente a las herramientas tradicionales",
  "nav.resources.roadmap.label": "Hoja de ruta",
  "nav.resources.helpCenter.label": "Centro de ayuda",
  "nav.resources.toolkit.label": "Herramientas",

  "nav.solutions.heading.build": "Crea tu modelo",
  "nav.solutions.heading.use": "Usa tu modelo",
  "nav.solutions.modelBuild.label": "Construcción de modelo",
  "nav.solutions.modelBuild.description":
    "Crea modelos operativos a partir de tus datos GIS y de activos",
  "nav.solutions.fieldPlanning.label": "Campañas en la red",
  "nav.solutions.fieldPlanning.description":
    "Diseña las inspecciones sobre el terreno que hagan tu modelo fiable",
  "nav.solutions.demandAnalysis.label": "Análisis de la demanda",
  "nav.solutions.demandAnalysis.description":
    "Crea una imagen precisa de la demanda en toda tu red",
  "nav.solutions.calibration.label": "Calibración",
  "nav.solutions.calibration.description":
    "Ajuste guiado para que tu modelo coincida con las mediciones reales",
  "nav.solutions.modelImport.label": "Importación de modelos",
  "nav.solutions.modelImport.description":
    "Trae un modelo existente de otra plataforma",
  "nav.solutions.planning.label": "Planificación",
  "nav.solutions.planning.description":
    "Planifica tu red y tus inversiones con años de antelación",
  "nav.solutions.operationalModeling.label": "Modelado operativo",
  "nav.solutions.operationalModeling.description":
    "Mira cómo responde tu red antes de realizar cualquier cambio",
  "nav.solutions.waterQuality.label": "Calidad del agua",
  "nav.solutions.waterQuality.description":
    "Rastrea la edad del agua, el origen y el cloro en toda la red",
  "nav.solutions.fireFlow.label": "Caudal de incendio",
  "nav.solutions.fireFlow.description":
    "Encuentra el caudal disponible y la capacidad en toda tu red",
  "nav.solutions.valveCriticality.label": "Criticidad de válvulas",
  "nav.solutions.valveCriticality.description":
    "Encuentra las válvulas que aíslan cada parte de la red",

  "nav.whoItsFor.utilities.label": "Empresas de agua",
  "nav.whoItsFor.utilities.description":
    "Toma el control de tu red y de tu modelo",
  "nav.whoItsFor.consultants.label": "Consultoras",
  "nav.whoItsFor.consultants.description":
    "Crea modelos más rápido y ofrece mejores resultados a cada cliente",
  "nav.whoItsFor.education.label": "Educación",
  "nav.whoItsFor.education.description":
    "Aprende con las herramientas reales que se utilizan en el sector",
  "nav.whoItsFor.humanitarianNgos.label": "Ayuda humanitaria y ONGs",
  "nav.whoItsFor.humanitarianNgos.description":
    "Herramientas clave para proyectos de agua humanitarios",

  "nav.compare.infowater.label": "epanet-js vs InfoWater",
  "nav.compare.infowater.description":
    "Comparativa de epanet-js con Autodesk InfoWater Pro",
  "nav.compare.watercadWatergems.label":
    "epanet-js vs WaterCAD/WaterGEMS",
  "nav.compare.watercadWatergems.description":
    "Comparativa de epanet-js con Bentley OpenFlows WaterCAD y WaterGEMS",
  "nav.compare.infoworksWsPro.label": "epanet-js vs InfoWorks WS Pro",
  "nav.compare.infoworksWsPro.description":
    "Comparativa de epanet-js con Autodesk InfoWorks WS Pro",
  "nav.language.es": "Cambiar a español",
  "nav.language.en": "Switch to English",
  "nav.launch": "Abrir epanet-js",

  // ── Hero ──
  "hero.brand": "epanet-js",
  "hero.titlePart1": "El EPANET de siempre: moderno, mejorado y ",
  "hero.titleHighlight": "directamente en tu navegador",
  "hero.description":
    "Sin instalaciones. Sin depender de la nube. Modela tus redes hidráulicas de forma rápida y local, con la seguridad del motor en el que confías",
  "hero.cta": "Empezar a modelar. Sin registro",
  "hero.ctaSecondary": "Solicitar demo",

  // ── User Dilemma ──
  "dilemma.title": "El dilema del usuario de EPANET",
  "dilemma.bullet1":
    "El EPANET clásico es potente, pero también <strong>rígido y obsoleto</strong>. Acabas dependiendo de trucos y rodeos: un proceso lento e incómodo.",
  "dilemma.bullet2":
    "Las grandes plataformas comerciales parecen modernas, pero son <strong>costosas y están saturadas de funciones</strong> que realmente no necesitas cuando sólo buscas analizar tu red con rapidez.",
  "dilemma.bullet3":
    "Existen herramientas web modernas, pero <strong>te obligan a subir tus datos a la nube</strong>, lo que compromete la privacidad y el cumplimiento de normativas. Además, suelen quedarse cortas para quienes realizan planificación y análisis a largo plazo.",
  "dilemma.closing":
    "No deberías tener que elegir entre velocidad, seguridad y un precio justo solo para poder comprender y gestionar tus redes hidráulicas.",
  "dilemma.imgAlt1": "Interfaz antigua de EPANET",
  "dilemma.imgAlt2": "Aplicación de modelado compleja",

  // ── Features ──
  "features.heading":
    "epanet-js te da control total con una experiencia EPANET local y basada en el navegador",
  "features.subheading":
    "Modela con rapidez, seguridad con guardado local y una interfaz más fluida —con la fiabilidad del motor EPANET de siempre.",

  "features.dataControl.title": "Tus datos, bajo tu control",
  "features.dataControl.p1":
    "epanet-js trabaja directamente con los archivos en tu equipo; la nube es totalmente opcional. Por defecto, tus proyectos se ejecutan y guardan en local, garantizándote privacidad y seguridad total.",
  "features.dataControl.p2": "Usa la nube solo cuando tú decidas.",

  "features.enhanced.title": "El EPANET que conoces, mejorado",
  "features.enhanced.p1":
    "epanet-js conserva la potencia del original, pero con una experiencia mucho más ágil —con mejoras modernas como deshacer/rehacer, elevaciones automáticas, dibujo rápido de elementos y mapas base como vista satelital.",
  "features.enhanced.p2":
    "Importa tu red o créala desde cero con herramientas intuitivas que facilitan dibujar, conectar y editar.",
  "features.enhanced.p3":
    "Todo lo que necesitas para ser más productivo, sin curva de aprendizaje.",

  "features.built.title":
    "Diseñado para trabajar, no para pelearte con el software",
    "features.built.item1Bold": "Diseño visual e intuitivo.",
  "features.built.item1":
    " Añade nodos, tuberías y tanques con un solo clic. Las uniones y elevaciones se calculan automáticamente.",
  "features.built.item2Bold": "Simulaciones al instante.",
  "features.built.item2": " Pulsa Mayús+Intro y obtén resultados. Así de simple.",
  "features.built.item3Bold": "Visualización de datos inmediata.",
  "features.built.item3":
    " Revisa presiones, caudales y velocidades de un vistazo gracias a la codificación por colores.",
  "features.built.item4Bold": "Experimenta sin miedo.",
  "features.built.item4": " ¡Por fin existe el \"Deshacer/Rehacer\"! Olvídate de empezar de cero por un error.",
  "features.built.item5Bold": "Mapas satelitales integrados.",
  "features.built.item5": " Dibuja y analiza tus redes directamente sobre el terreno real.",
  "features.built.item6Bold": "Compatibilidad nativa con EPANET.",
  "features.built.item6":
    " Abre y guarda archivos .inp directamente —sin necesidad de conversiones",
  "features.built.item7Bold": "Multiplataforma.",
  "features.built.item7":
    " Funciona en Mac, Linux y Windows. Solo necesitas un navegador moderno: adiós a las instalaciones y máquinas virtuales.",

  "features.whoFor.title": "¿Para quién está pensado epanet-js?",
  "features.whoFor.utilities.bold": "Consultoras y empresas de gestión de aguas",
  "features.whoFor.utilities":
    "Diseña rápido, ejecuta localmente. Todo lo que necesitas para hacer el trabajo, sin funciones innecesarias.",
  "features.whoFor.educators.bold": "Profesores y educadores",
  "features.whoFor.educators":
    "Enseña conceptos hidráulicos, no informática. Tus alumnos podrán dibujar redes reales y simular en cuestión de minutos —no en horas.",
  "features.whoFor.students.bold": "Estudiantes e ingenieros junior",
  "features.whoFor.students":
    "Céntrate en aprender ingeniería, no en descifrar un software antiguo. Con \"deshacer/rehacer\", elevaciones automáticas y una visualización clara, epanet-js está diseñado para ayudarte a aprender modelado hidráulico rápidamente.",
  "features.whoFor.imgAlt": "Área de estudio de red de agua",

  // ── Newsletter CTA (top) ──
  "newsletterCta.heading": "Modela redes hidráulicas al instante",
  "newsletterCta.subheading":
    "Sin configuración ni descargas —accede directamente desde tu navegador.",
  "newsletterCta.button": "Empezar a modelar",

  // ── Open Source ──
  "opensource.heading1": "EPANET se merece más. Tú también",
  "opensource.p1":
    "EPANET fue un regalo para la industria —modelado hidráulico gratuito y de código abierto para todos. Sin embargo, los proveedores comerciales se aprovecharon de esa base, privatizaron las mejoras y dejaron de lado a la comunidad.",
  "opensource.p2":
    "epanet-js es nuestra respuesta: una herramienta de modelado hidráulico más rápida, sencilla y accesible. Protegemos tu privacidad y aseguramos el futuro del código abierto en la ingeniería hidráulica.",
  "opensource.p3":
    "Estamos orgullosos de escribir este nuevo capítulo... y esto es solo el principio.",
  "opensource.imgAlt1": "Logo de la EPA",

  "opensource.heading2": "Cuando apoyas epanet-js, apoyas EPANET.",
  "opensource.support.p1":
    "Al adquirir las funciones avanzadas de epanet-js, estás invirtiendo en el desarrollo de código abierto de EPANET.",
  "opensource.support.p2":
    "Nuestro modelo de código abierto equilibra innovación y accesibilidad:",
  "opensource.support.item1Pre": "",
  "opensource.support.item1Link": "Código fuente",
  "opensource.support.item1Post": " público desde el primer día.",
  "opensource.support.item2Pre":
    "Todo nuestro código pasa automáticamente a licencia MIT después de dos años bajo nuestra ",
  "opensource.support.item2Link": "Licencia Funcional de Código Fuente (FSL)",
  "opensource.support.item2Post": ".",
  "opensource.support.p3":
    "Cualquiera puede construir sobre nuestro código. Este periodo de dos años nos da los recursos para seguir innovando hoy, mientras aseguramos que la tecnología será libre para siempre.",
  "opensource.support.p4":
    "Tu apoyo hace que el modelado hidráulico sea más accesible para toda la comunidad.",
  "opensource.imgAlt2": "Código fuente de epanet-js en GitHub",

  // ── Pricing ──
  "pricing.heading":
    "Precios simples y transparentes para todo tipo de modelador.",
  "pricing.subheading": "Elige el plan que mejor se adapta a ti",
  "pricing.billedMonthly": "Mensual",
  "pricing.billedYearly": "Anual",

  "pricing.modelBuilderTooltip":
    "El nuevo constructor de modelos Pro añade año y materiales de tubería, preservación de proyección y múltiples idiomas, con atributos personalizados y valores nulos próximamente. El constructor básico se mantiene solo para mantenimiento.",

  "pricing.free.name": "Free",
  "pricing.free.titleDescription": "Para todos",
  "pricing.free.description": "",
  "pricing.free.feature1": "Modelo EPANET en web",
  "pricing.free.feature2": "Constructor de modelos básico",
  "pricing.free.feature3": "Vista de mapa y satelital",
  "pricing.free.feature4": "Elevaciones automáticas",
  "pricing.free.feature5": "Sin límite de tamaño",
  "pricing.free.feature6": "Soporte de la comunidad",
  "pricing.free.button": "Abrir epanet-js ahora",

  "pricing.pro.name": "Pro",
  "pricing.pro.titleDescription": "Modelado avanzado y escenarios",
  "pricing.pro.description": "Licencia individual",
  "pricing.pro.featureSubtitle": "Todo lo de Free, y:",
  "pricing.pro.feature1": "Escenarios",
  "pricing.pro.feature2": "Constructor de modelos Pro",
  "pricing.pro.feature3": "Soporte profesional",
  "pricing.pro.feature4": "Atributos personalizados",
  "pricing.pro.feature5": "Mapas personalizados",
  "pricing.pro.feature6": "Fuentes de elevación personalizadas",
  "pricing.pro.comingSoonSubtitle": "Próximamente:",
  "pricing.pro.comingSoon1": "Almacenamiento en la nube",
  "pricing.pro.comingSoon2": "Recuperación a un estado anterior - 30 días",
  "pricing.pro.comingSoon3": "Análisis de demandas",
  "pricing.pro.button": "Obtener Pro",
  "pricing.pro.popular": "Más popular",

  "pricing.teams.name": "Teams",
  "pricing.teams.titleDescription": "Control centralizado y colaboración",
  "pricing.teams.description": "Licencia compartida flotante",
  "pricing.teams.tooltip": "Mínimo 2 licencias",
  "pricing.teams.baseCost": "Coste base",
  "pricing.teams.perUser": "Usuario",
  "pricing.teams.featureSubtitle": "Todo lo de Pro, y:",
  "pricing.teams.feature1": "Soporte prioritario",
  "pricing.teams.feature2": "Gestión de licencias de usuario",
  "pricing.teams.feature3": "Pago mediante factura",
  "pricing.teams.comingSoonSubtitle": "Próximamente:",
  "pricing.teams.comingSoon1": "Almacenamiento de equipo",
  "pricing.teams.comingSoon2": "Recuperación a un estado anterior - 90 días",
  "pricing.teams.comingSoon3": "Compartir modelos",
  "pricing.teams.button": "Obtener Teams",
  "pricing.teams.comingSoonBadge": "Próximamente",

  "pricing.questions.text": "¿Tienes preguntas? ",
  "pricing.questions.email": "Envíanos un email",
  "pricing.questions.or": " o ",
  "pricing.questions.call": "agenda una llamada",

  "pricing.special.heading": "Acceso especial para uso personal y educativo",
  "pricing.special.subheading":
    "Disponible para proyectos no comerciales, aprendizaje y trabajo estudiantil.",

  "pricing.personal.name": "Personal",
  "pricing.personal.description": "Pruébalo tú mismo.",
  "pricing.personal.limitationSubtitle": "Todo lo de Pro, pero:",
  "pricing.personal.limitation1": "Sin constructor de modelos Pro",
  "pricing.personal.limitation2": "Sin soporte profesional",
  "pricing.personal.limitation3": "Uso no comercial",
  "pricing.personal.button": "Comprar acceso personal",

  "pricing.education.name": "Education",
  "pricing.education.description": "Aprende con epanet-js.",
  "pricing.education.limitationSubtitle": "¡Todo lo de Personal gratis!",
  "pricing.education.limitation1": "Requiere email de estudiante",
  "pricing.education.limitation2": "Uso no comercial",
  "pricing.education.button": "Usar email de estudiante",

  "pricing.comingSoon": "Próximamente.",
  "pricing.suffix.month": "mes",
  "pricing.suffix.monthShort": "mes",
  "pricing.suffix.year": "año",
  "pricing.suffix.yearShort": "año",

  // ── Pricing comparison table ──
  "pricingTable.heading": "Compara los planes",
  "pricingTable.subheading": "Todo lo que incluye cada plan.",
  "pricingTable.featureSrLabel": "Característica",
  "pricingTable.includedAriaLabel": "Incluido",
  "pricingTable.notIncludedAriaLabel": "No incluido",
  "pricingTable.comingSoonBadge": "Próximamente",
  "pricingTable.showFullComparison": "Mostrar comparación completa",
  "pricingTable.showLess": "Mostrar menos",
  "pricingTable.freeButtonText": "Abrir epanet-js",
  "pricingTable.simulation.title": "Simulación",
  "pricingTable.simulation.feature1": "Motor EPANET Toolkit 2.3.5",
  "pricingTable.simulation.feature2": "Simulación en estado estacionario y período extendido (EPS)",
  "pricingTable.simulation.feature3": "Demandas dependientes de la presión (PDD)",
  "pricingTable.simulation.feature4": "Controles simples y basados en reglas",
  "pricingTable.simulation.feature5": "Análisis de calidad del agua (químico, edad, trazas)",
  "pricingTable.simulation.feature6": "Análisis de consumo energético",
  "pricingTable.simulation.feature7": "Fórmulas de pérdida de carga (H-W, D-W, C-M)",
  "pricingTable.networkEditing.title": "Edición de red",
  "pricingTable.networkEditing.feature1": "Dibujo fácil de elementos en el mapa",
  "pricingTable.networkEditing.feature2": "Ajuste a nodos (snap) y división de tuberías",
  "pricingTable.networkEditing.feature3": "Fusión y sustitución de nodos",
  "pricingTable.networkEditing.feature4": "Redibujar e invertir líneas de conexión",
  "pricingTable.networkEditing.feature5": "Personalizar valores por defecto al dibujar tuberías",
  "pricingTable.networkEditing.feature6": "Topología activa: desactivar y reactivar elementos",
  "pricingTable.networkEditing.feature7": "Edición de atributos por lotes",
  "pricingTable.networkEditing.feature8": "Búsqueda de elementos",
  "pricingTable.customerPoints.title": "Puntos de consumo (clientes)",
  "pricingTable.customerPoints.feature1": "Añadir, editar, mover y eliminar puntos de consumo",
  "pricingTable.customerPoints.feature2": "Importar desde Shapefile o GeoJSON",
  "pricingTable.customerPoints.feature3": "Asignación de demanda",
  "pricingTable.customerPoints.feature4": "Asignación basada en reglas",
  "pricingTable.customerPoints.feature5": "Asignación por zonas",
  "pricingTable.customerPoints.feature6": "Tabla de datos de puntos de consumo",
  "pricingTable.elementProperties.title": "Propiedades de los elementos",
  "pricingTable.elementProperties.feature1": "Definir bombas en el panel de elementos o desde la biblioteca (curvas de 1 punto, 3 puntos y multipunto)",
  "pricingTable.elementProperties.feature2": "Definir la capacidad del tanque en el panel de elementos (diámetro o curva de volumen)",
  "pricingTable.elementProperties.feature3": "Controles de bomba (por nivel o tiempo) en el panel de elementos",
  "pricingTable.elementProperties.feature4": "Año y materiales de tubería",
  "pricingTable.elementProperties.feature5": "Atributos personalizados",
  "pricingTable.dataLibraries.title": "Bibliotecas de datos",
  "pricingTable.dataLibraries.feature1": "Biblioteca de curvas",
  "pricingTable.dataLibraries.feature2": "Biblioteca de patrones (patrones de series temporales)",
  "pricingTable.dataLibraries.feature3": "Biblioteca de definición de tuberías",
  "pricingTable.dataLibraries.feature4": "Asignar rugosidad por material y edad",
  "pricingTable.dataLibraries.feature5": "Conjuntos de selección guardados",
  "pricingTable.dataExchange.title": "Intercambio de datos",
  "pricingTable.dataExchange.feature1": "Importación y exportación de archivos .INP",
  "pricingTable.dataExchange.feature2": "Formato de proyecto epanet-js (.ejsdb)",
  "pricingTable.dataExchange.feature3": "Sistemas de coordenadas y proyecciones personalizados",
  "pricingTable.dataExchange.feature4": "Cuadrícula X-Y simple (modelos no georreferenciados)",
  "pricingTable.dataExchange.feature5": "Datos de elevación",
  "pricingTable.dataExchange.feature6": "Mapbox Terrain DTM",
  "pricingTable.dataExchange.feature7": "GeoTIFF",
  "pricingTable.dataExchange.feature8": "Exportar datos de elementos (Shapefile, CSV, XLSX, GeoJSON)",
  "pricingTable.dataExchange.feature9": "Exportar resultados de simulación (CSV, XLSX)",
  "pricingTable.dataExchange.feature10": "Importación y exportación de modelos de terceros",
  "pricingTable.resultsVisualization.title": "Resultados y visualización",
  "pricingTable.resultsVisualization.feature1": "Visualización de mapa",
  "pricingTable.resultsVisualization.feature2": "Selección de mapa base (satélite, calles, relieve)",
  "pricingTable.resultsVisualization.feature3": "Servidor de teselas personalizado (XYZ, Mapbox, TileJSON)",
  "pricingTable.resultsVisualization.feature4": "Capas de archivos vectoriales personalizados (GeoJSON, Shapefile)",
  "pricingTable.resultsVisualization.feature5": "Capas de fondo locales",
  "pricingTable.resultsVisualization.feature6": "Rastreo aguas arriba y aguas abajo",
  "pricingTable.resultsVisualization.feature7": "Simbología del mapa (presión, caudal, demanda, carga, rugosidad, diámetro, elevación)",
  "pricingTable.resultsVisualization.feature8": "Flechas de dirección del caudal",
  "pricingTable.resultsVisualization.feature9": "Ajustes de tamaño y visibilidad de nodos",
  "pricingTable.resultsVisualization.feature10": "Gráficos de datos de series temporales",
  "pricingTable.resultsVisualization.feature11": "Gráfico rápido en el panel de elementos",
  "pricingTable.resultsVisualization.feature12": "Gráficos personalizados con múltiples elementos",
  "pricingTable.resultsVisualization.feature13": "Tablas de datos de elementos",
  "pricingTable.resultsVisualization.feature14": "Vista de perfil (Hydraulic Grade Line)",
  "pricingTable.resultsVisualization.feature15": "Polígonos de zona: importar y visualizar",
  "pricingTable.networkReviewAnalysis.title": "Revisión y análisis de la red",
  "pricingTable.networkReviewAnalysis.feature1": "Rastreo de límites y selección",
  "pricingTable.networkReviewAnalysis.feature2": "Revisión de la red",
  "pricingTable.networkReviewAnalysis.feature3": "Activos huérfanos",
  "pricingTable.networkReviewAnalysis.feature4": "Verificación de proximidad",
  "pricingTable.networkReviewAnalysis.feature5": "Cruces de tuberías",
  "pricingTable.networkReviewAnalysis.feature6": "Rastreo de conectividad",
  "pricingTable.networkReviewAnalysis.feature7": "Comprobación de atributos faltantes o no válidos",
  "pricingTable.networkReviewAnalysis.feature8": "Rugosidad de las tuberías",
  "pricingTable.networkReviewAnalysis.feature9": "Niveles de tanques",
  "pricingTable.networkReviewAnalysis.feature10": "Curvas de bombas",
  "pricingTable.networkReviewAnalysis.feature11": "Puntos de consumo sin asignar",
  "pricingTable.networkReviewAnalysis.feature12": "Análisis de criticidad de válvulas",
  "pricingTable.scenarioManagement.title": "Gestión de escenarios",
  "pricingTable.scenarioManagement.feature1": "Crear y cambiar entre escenarios",
  "pricingTable.scenarioManagement.feature2": "Comparar diferencias entre escenarios (se resaltan los atributos cambiados)",
  "pricingTable.scenarioManagement.feature3": "Comparar resultados de simulación entre escenarios",
  "pricingTable.scenarioManagement.feature4": "Escenarios, control de versiones e historial del modelo",
  "pricingTable.scenarioManagement.feature5": "Guardar escenarios en el modelo / nube",
  "pricingTable.modelBuilding.title": "Construcción de modelos",
  "pricingTable.modelBuilding.feature1": "Importación de modelos GIS (básico)",
  "pricingTable.modelBuilding.feature2": "Importación de modelos GIS (Pro)",
  "pricingTable.modelBuilding.feature3": "Conservar proyección original",
  "pricingTable.modelBuilding.feature4": "Búsqueda de atributos en el mapeo de campos",
  "pricingTable.modelBuilding.feature5": "Construcción del modelo en tu propio idioma",
  "pricingTable.teamCollaboration.title": "Colaboración en equipo",
  "pricingTable.teamCollaboration.feature1": "Soporte para múltiples idiomas",
  "pricingTable.teamCollaboration.feature2": "Múltiples miembros del equipo",
  "pricingTable.teamCollaboration.feature3": "Acceso de usuarios invitados y ajustes de privacidad",
  "pricingTable.teamCollaboration.feature4": "Gestión de la organización",

  // ── FAQ ──
  "faq.heading": "Preguntas frecuentes",
  "faq.subheading": "Encuentra respuestas a preguntas comunes sobre epanet-js.",
  "faq.q1": "¿Qué es epanet-js?",
  "faq.a1":
    "epanet-js es una herramienta moderna de modelado hidráulico impulsada por el motor EPANET. Diseña, simula y analiza redes de distribución directamente en tu navegador, sin necesidad de instalar nada.",
  "faq.q2": "¿Mis datos están seguros con epanet-js?",
  "faq.a2":
    "¡Sí! epanet-js sigue un enfoque local por defecto. Esto significa que los datos de tu proyecto se guardan directamente en tu equipo, nunca en nuestros servidores. Así garantizamos que la información sensible de tus redes se mantenga privada y bajo tu control.",
  "faq.a2Link": "Más sobre la filosofía local por defecto.",
  "faq.q3": "¿Necesito crear una cuenta para usar epanet-js?",
  "faq.a3":
    "No. Puedes comenzar a usar epanet-js inmediatamente sin crear una cuenta ni iniciar sesión. Simplemente abre la aplicación para empezar a modelar.",
  "faq.q4": "¿Puedo importar archivos EPANET existentes?",
  "faq.a4":
    "Sí, epanet-js permite importar archivos .inp del EPANET de escritorio. Puedes migrar tus proyectos existentes a nuestra plataforma web sin problemas.",
  "faq.q5": "¿Funciona epanet-js en Mac?",
  "faq.a5":
    "¡Sí! epanet-js funciona en todos los navegadores modernos, incluyendo Chrome, Firefox, Safari y Edge. Como se ejecuta en un navegador web, epanet-js funciona perfectamente en macOS, Windows y Linux. Es una excelente opción si has tenido problemas para instalar el EPANET tradicional en Mac. Para una mejor experiencia, recomendamos usar la última versión de tu navegador preferido.",
  "faq.q6": "¿Es epanet-js de código abierto?",
  "faq.a6Pre":
    "Sí. Nuestro código es público desde el primer día. Simplemente aplicamos un periodo de transición de dos años: pasado ese tiempo, cada versión se convierte automáticamente en código abierto total (MIT). Este modelo nos permite financiar un desarrollo sostenible para epanet-js y, a su vez, impulsar todo el ecosistema EPANET. Descubre ",
  "faq.a6Link1": "por qué lo hacemos",
  "faq.a6Mid": " y ",
  "faq.a6Link2": "cómo funciona la licencia FSL.",
  "faq.q7": "¿Cómo obtengo soporte si tengo preguntas?",
  "faq.a7":
    "El soporte se adapta a tu plan. La versión gratuita incluye acceso a la documentación y a los foros de la comunidad. Los usuarios de pago cuentan con soporte prioritario por email. Y los usuarios del plan educativo tienen acceso a recursos didácticos especiales para sus clases.",

  // ── Pricing page FAQ (faq.astro) ──
  "pricingFaq.heading": "Preguntas frecuentes",
  "pricingFaq.subheading":
    "Encuentra respuestas a preguntas comunes sobre epanet-js",
  "pricingFaq.q0": "¿Puedes completar nuestros formularios de alta de proveedor o ayudarnos a crear una orden de compra (PO)?",
  "pricingFaq.a0": `Trabajamos directamente con clientes del plan Enterprise para completar el papeleo de alta de proveedores y dar soporte a flujos de trabajo personalizados de órdenes de compra (PO).
    <br><br>Nuestro plan Pro está diseñado para ser completamente de autoservicio. Al eliminar la carga administrativa asociada a las compras tradicionales gestionadas por un equipo de ventas, podemos trasladarte ese ahorro directamente a ti a través de precios de suscripción más bajos. Para los planes Teams, podemos ayudarte con los formularios de proveedores y los requisitos de PO en función de un compromiso mínimo de licencias o años de contrato.
    <br><br>Si quieres comprobar la elegibilidad de tu plan o necesitas los datos de facturación estándar de nuestra empresa para rellenar tus formularios internos rápidamente, envíanos un <a href="mailto:sales@epanetjs.com" class="text-indigo-600 hover:text-indigo-800 underline hover:no-underline">email</a> o <a href="https://cal.com/epanet-js/" class="text-indigo-600 hover:text-indigo-800 underline hover:no-underline">reserva una llamada</a>.`,
  "pricingFaq.q1": "¿Qué es epanet-js?",
  "pricingFaq.a1":
    "epanet-js es una herramienta moderna de modelado hidráulico impulsada por el motor EPANET. Diseña, simula y analiza redes de distribución directamente en tu navegador, sin necesidad de instalar nada.",
  "pricingFaq.q2": "¿Mis datos están seguros con epanet-js?",
  "pricingFaq.a2":
    "¡Sí! epanet-js sigue un enfoque local por defecto. Esto significa que los datos de tu proyecto se guardan directamente en tu equipo, nunca en nuestros servidores. Así garantizamos que la información sensible de tus redes se mantenga privada y bajo tu control. Más sobre la filosofía <a href='https://help.epanetjs.com/Understanding-the-local-first-approach-2a1e18c9f0f681d881d0c0f0b24ff032' class='text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors'>local por defecto</a>.",
  "pricingFaq.q3": "¿Necesito crear una cuenta para usar epanet-js?",
  "pricingFaq.a3":
    "No. Puedes comenzar a usar epanet-js inmediatamente sin crear una cuenta ni iniciar sesión. Simplemente abre la aplicación para empezar a modelar.",
  "pricingFaq.q4": "¿Puedo importar archivos EPANET existentes?",
  "pricingFaq.a4":
    "Sí, epanet-js permite importar archivos .inp del EPANET de escritorio. Puedes migrar tus proyectos existentes a nuestra plataforma web sin problemas.",
  "pricingFaq.q5": "¿Funciona epanet-js en Mac?",
  "pricingFaq.a5":
    "¡Sí! epanet-js funciona en todos los navegadores modernos, incluyendo Chrome, Firefox, Safari y Edge. Como se ejecuta en un navegador web, epanet-js funciona perfectamente en macOS, Windows y Linux. Es una excelente opción si has tenido problemas para instalar el EPANET tradicional en Mac. Para una mejor experiencia, recomendamos usar la última versión de tu navegador preferido.",
  "pricingFaq.q6": "¿Es epanet-js de código abierto?",
  "pricingFaq.a6":
    "Sí. Nuestro código es público desde el primer día. Simplemente aplicamos un periodo de transición de dos años: pasado ese tiempo, cada versión se convierte automáticamente en código abierto total (MIT). Este modelo nos permite financiar un desarrollo sostenible para epanet-js y, a su vez, impulsar todo el ecosistema EPANET. Descubre <a href='https://epanetjs.com/#why-we-built-epanet-js' class='text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors'>por qué lo hacemos</a> y <a href='https://fsl.software/' class='text-blue-600 hover:text-blue-800 underline hover:no-underline transition-colors'>cómo funciona la licencia FSL</a>.",
  "pricingFaq.q7": "¿Cómo obtengo soporte si tengo preguntas?",
  "pricingFaq.a7":
    "El soporte se adapta a tu plan. La versión gratuita incluye acceso a la documentación y a los foros de la comunidad. Los usuarios de pago cuentan con soporte prioritario por email. Y los usuarios del plan educativo tienen acceso a recursos didácticos especiales para sus clases.",

  "pricingFaq.q8": "¿Puedes completar el cuestionario de seguridad de nuestra organización?",
  "pricingFaq.a8": `Completamos cuestionarios de seguridad para nuestros clientes del plan Enterprise.
    <p class="mt-3">
    Los planes Free, Pro y Teams son de autoservicio, por lo que esperamos que tu propio equipo realice su revisión de seguridad interna. Para facilitaros el proceso al máximo, disponemos de un cuestionario de seguridad genérico con respuestas a las preguntas que otras empresas de servicios públicos e ingeniería nos han planteado anteriormente, de modo que podáis rellenar vuestros propios formularios internos rápidamente. Si hay alguna pregunta que no esté cubierta, envíanos un <a href="mailto:support@epanetjs.com" class="text-indigo-600 hover:text-indigo-800 underline hover:no-underline">email</a> o <a href="https://cal.com/epanet-js/" class="text-indigo-600 hover:text-indigo-800 underline hover:no-underline">reserva una llamada</a>.</p>
    <p class="mt-3">Para obtener una visión completa de cómo gestionamos la seguridad y la privacidad de los datos, consulta nuestra <a href="/security" class="text-indigo-600 hover:text-indigo-800 underline hover:no-underline">página de seguridad</a>.</p>`,
  "pricingFaq.q9": "Si epanet-js se ejecuta en un navegador web, ¿cómo es que mis datos no se suben a internet?",
  "pricingFaq.a9": `epanet-js está diseñado con un enfoque local-first (prioridad local). El navegador actúa como un entorno de ejecución seguro, de manera muy parecida a un sistema operativo de escritorio: cuando cargas la aplicación a través de HTTPS, toda la aplicación, incluido el motor de simulación EPANET compilado en WebAssembly, se descarga en la caché de tu navegador y se ejecuta en la propia CPU y memoria de tu máquina dentro del entorno aislado (sandbox) del navegador, con un rendimiento casi idéntico al nativo de escritorio.
    <p class="mt-3">Los archivos del proyecto se leen y escriben en tu disco duro o unidad de red a través de las API de acceso a archivos locales del navegador, y los resultados de la simulación se guardan de forma local. Ni los datos de tu infraestructura ni los de tus clientes salen de tu ordenador. Esto también ahorra ancho de banda, ya que los archivos de modelos pesados nunca se transmiten, suben o descargan. Una vez que la página ha cargado, puedes desconectarte de internet por completo y seguir trabajando.</p>
    <p class="mt-3">Para obtener una visión completa de cómo gestionamos la seguridad y la privacidad de los datos, consulta nuestra <a href="/security" class="text-indigo-600 hover:text-indigo-800 underline hover:no-underline">página de seguridad</a>.</p>`,

  // ── CTA Just Open ──
  "ctaOpen.heading": "Abre tu navegador y empieza a modelar",
  "ctaOpen.subheading": "Sin instalación. Sin registro. Sin depender de la nube.",
  "ctaOpen.button": "Empezar a modelar",

  // ── Why We Built ──
  "whyBuilt.heading": "Por qué creamos epanet-js",
  "whyBuilt.luke": "Luke Butler",
  "whyBuilt.sam": "Sam Payá",
  "whyBuilt.cofounder": "Cofundador",
  "whyBuilt.productEngineer": "Ingeniero de producto",
  "whyBuilt.productEngineerFem": "Ingeniera de producto",
  "whyBuilt.productDesigner": "Diseñadora de producto",
  "whyBuilt.lukeAlt": "Luke Butler - Cofundador",
  "whyBuilt.samAlt": "Sam - Cofundador",
  "whyBuilt.p1":
    "Quizá no lo sepas, pero durante décadas, la EPA ha ofrecido al sector un recurso de valor incalculable: EPANET, el software de modelado hidráulico gratuito y de código abierto. De hecho, es muy probable que el software comercial que usas hoy esté basado en el motor de EPANET.",
  "whyBuilt.p2":
    "El problema es que, lejos de devolver el favor a la comunidad Open Source como hacen otras industrias, los grandes proveedores aprovecharon ese código libre, crearon herramientas privadas sobre el motor y blindaron sus mejoras con patentes y licencias cerradas.",
  "whyBuilt.p3":
    "Algunos incluso presionaron a la EPA para que se limitase a desarrollar el motor, frenando así cualquier intento de mejorar la interfaz o la experiencia de usuario para el resto del mundo.",
  "whyBuilt.p4":
    "El resultado: hoy te cobran precios desorbitados por usar su software, mientras el EPANET original se queda obsoleto, perjudicando a empresas pequeñas, ingenieros y educadores.",
  "whyBuilt.p5":
    "En epanet-js creemos que esto no debería ser así y nos hemos propuesto cambiarlo. Nuestra misión es mejorar la experiencia de toda la comunidad de modelado hidráulico.",
  "whyBuilt.p6":
    "Por eso creamos epanet-js bajo licencia FSL: para ofrecerte una herramienta asequible y fácil de usar que, además, garantice un futuro sostenible para el desarrollo de EPANET.",
  "whyBuilt.p7": "Apoya a EPANET usando un software que también invierte en él.",

  // ── Bottom CTA ──
  "bottomCta.heading": "Un futuro mejor para el modelado de agua.",
  "bottomCta.subheading":
    "Sencillo, rápido y eficaz desde el primer minuto. Diseñado para funcionar al instante, sin configuraciones.",
  "bottomCta.button": "Empezar a modelar",

  // ── Middle CTA (newsletter form) ──
  "middleCta.heading": "Mantente al día",
  "middleCta.subheading":
    "Suscríbete para recibir actualizaciones, consejos y noticias sobre epanet-js y modelado hidráulico.",
  "middleCta.placeholder": "Tu email aquí",
  "middleCta.button": "Apuntarme",
  "middleCta.privacy":
    "Respetamos tu privacidad. Puedes darte de baja cuando quieras.",

  // ── Footer ──
  "footer.newsletter.heading": "Mantente al día",
  "footer.newsletter.subheading":
    "Suscríbete para recibir actualizaciones, consejos y noticias sobre epanet-js y modelado hidráulico.",
  "footer.newsletter.placeholder": "Tu email aquí",
  "footer.newsletter.button": "Apuntarme",
  "footer.newsletter.subscribing": "Apuntándote...",
  "footer.newsletter.success":
    "¡Hecho! Revisa tu email para confirmar tu dirección.",
  "footer.newsletter.errorPrefix": "Ocurrió un error: ",
  "footer.newsletter.errorFallback": "Por favor, inténtalo más tarde.",
  "footer.newsletter.errorGeneric":
    "Ocurrió un error. Por favor, inténtalo más tarde.",
  "footer.newsletter.privacy":
    "Respetamos tu privacidad. Puedes darte de baja cuando quieras.",

  "footer.product": "Producto",
  "footer.features": "Funciones",
  "footer.pricing": "Precios",
  "footer.faq": "Preguntas frecuentes",

  "footer.community": "Comunidad",
  "footer.helpCenter": "Centro de ayuda",
  "footer.roadmap": "Hoja de ruta",
  "footer.github": "GitHub",
  "footer.toolkit": "Toolkit",
  "footer.blog": "Blog",

  "footer.company": "Empresa",
  "footer.about": "Acerca de",
  "footer.contact": "Contáctanos",
  "footer.terms": "Términos y condiciones",
  "footer.privacy": "Política de privacidad",
  "footer.cookies": "Política de cookies",

  "footer.copyright": "Todos los derechos reservados.",

  // ── Pricing page title ──
  "page.pricing.title": "Precios",
  // ── Security page ──
  "page.security.title": "Seguridad",
  "page.security.description": "Tú decides dónde residen los datos de tus modelos: por defecto en tu máquina, compartidos a través de nuestra nube, en un almacenamiento que tú gestiones o desplegados en servidores propios",
  "security.hero.title": "Seguridad y privacidad por diseño",
  "security.hero.subtitle": "Tus datos, tus reglas. Te damos el control absoluto sobre cómo se mantiene segura la información de tus clientes y los datos de tu infraestructura",
  "security.hero.primaryCta": "Contactar con nosotros",
  "security.hero.secondaryCta": "Ver política de privacidad",
  "security.badge.teams": "Teams",
  "security.badge.enterprise": "Enterprise",
  "security.setups.heading": "Elige tu configuración",
  "security.setups.subheading": "Desde almacenar los archivos completamente en tu máquina local hasta ejecutar todo dentro de tu propia red corporativa, selecciona la opción que mejor se adapte a las políticas de seguridad y cumplimiento corporativo.",
  "security.setups.localFiles.title": "Trabajar en tu equipo",
  "security.setups.localFiles.description": "100% local, sin nube. Archivos en tu sistema de archivos, compartidos de la forma en que ya lo haces.",
  "security.setups.cloudSharing.title": "Comparte modelos a través de la nube",
  "security.setups.cloudSharing.description": "Una copia sincronizada del modelo, gestión de roles, cifrado en tránsito.",
  "security.setups.yourStorage.title": "Trae tu propio almacenamiento",
  "security.setups.yourStorage.description": "Aplicación alojada por nosotros con almacenamiento en tu propia nube.",
  "security.setups.onPremises.title": "Despliegue en servidores propios",
  "security.setups.onPremises.description": "Toda la aplicación ejecutándose de forma aislada dentro de tu red.",
  "security.localFiles.heading": "Trabajar en tu equipo",
  "security.localFiles.subheading": "Por defecto, tus proyectos de modelado hidráulico se crean, ejecutan y guardan completamente en tu máquina. Nunca se sube nada a nuestros servidores.",
  "security.localFiles.projectFiles.title": "Los archivos de proyecto permanecen en tu almacenamiento local",
  "security.localFiles.projectFiles.body1": "Un modelo de epanet-js es simplemente un archivo en tu disco duro o unidad de red, igual que los archivos de proyecto utilizados en otros paquetes de software de modelización tradicionales como InfoWorks, WaterGEMS e InfoWater.",
  "security.localFiles.projectFiles.body2": "Aunque la aplicación se carga a través de HTTPS, tu modelo no se mueve de su sitio y las simulaciones se ejecutan completamente en tu navegador. Ni los datos de tu red ni los de tus clientes tocan jamás nuestros servidores; una vez cargada, puedes incluso desconectarte de internet y trabajar completamente sin conexión.",
  "security.localFiles.shareModels.title": "Comparte modelos de la forma en que ya lo haces",
  "security.localFiles.shareModels.body1": "Envía un modelo por email a un compañero, colócalo en una unidad compartida o cópialo en una memoria USB. Quien reciba el archivo lo abrirá y continuará donde lo dejaste.",
  "security.localFiles.shareModels.body2": "Sin nuevos canales de datos, las políticas de seguridad actuales de tu empresa se cumplen por defecto.",
  "security.localFiles.openSource.title": "Código abierto que puedes inspeccionar",
  "security.localFiles.openSource.body1": "No tienes por qué creernos ciegamente. El código fuente de epanet-js es público desde el primer día bajo la Functional Source License y pasa a ser totalmente de código abierto (MIT) después de dos años.",
  "security.localFiles.openSource.body2": "Puedes revisar en detalle cómo maneja la aplicación tus datos. Explora el <a href=\"https://github.com/epanet-js/epanet-js\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\" target=\"_blank\" rel=\"noopener noreferrer\">repositorio</a> para auditar el código tú mismo.",
  "security.localFiles.openSource.mediaAlt": "EN - The public epanet-js source repository on GitHub.",
  "security.ctaNoCloud.heading": "¿No necesitas la nube? Todo listo.",
  "security.ctaNoCloud.subheading": "Las funciones en la nube son totalmente opcionales y se activan por cada proyecto de forma individual. Si decides no activarlas nunca, la información de tu infraestructura y los datos de tus clientes permanecerán 100% aislados en tu máquina. Si buscas espacios de trabajo compartidos en la nube o un despliegue empresarial dedicado, sigue leyendo para ver cómo funcionan.",
  "security.cloudSharing.heading": "Comparte modelos a través de la nube",
  "security.cloudSharing.subheading": "Cuando un equipo quiere que un mismo modelo esté disponible en varios dispositivos y para varias personas, los proyectos en la nube mantienen cada copia sincronizada. Activar la nube para un proyecto no cambia nada para los demás, que siguen siendo totalmente locales.",
  "security.cloudSharing.syncedTruth.title": "Una única fuente de verdad sincronizada",
  "security.cloudSharing.syncedTruth.body1": "Un proyecto en la nube tiene una única fuente de verdad. Cada dispositivo trabaja sobre la misma copia, por lo que nadie tiene que buscar la versión actual del modelo entre hilos de email.",
  "security.cloudSharing.syncedTruth.body2": "Por defecto, el punto de sincronización es nuestra nube gestionada y segura, lo que te permite elegir la región de datos que cumpla con tus requisitos locales de conformidad. Para los equipos empresariales, también existe la opción de alojar y controlar tus propios datos por completo.",
  "security.cloudSharing.dataRegion.title": "Selecciona tu región de datos",
  "security.cloudSharing.dataRegion.body1": "Tú decides qué región geográfica gestiona tus datos. Cuando un usuario sube o sincroniza un modelo, esos datos permanecen enteramente dentro de la región seleccionada.",
  "security.cloudSharing.dataRegion.body2": "Esto garantiza que tu equipo cumpla estrictamente con los mandatos locales de residencia de datos y privacidad.",
  "security.cloudSharing.workspaceRoles.title": "Los roles del espacio de trabajo controlan quién puede abrirlo",
  "security.cloudSharing.workspaceRoles.body1": "Los modelos almacenados en la nube pertenecen a tu espacio de trabajo y el acceso a ellos es explícito. Cada miembro tiene un rol: los editores pueden modificar un modelo, los lectores solo pueden consultarlo.",
  "security.cloudSharing.workspaceRoles.body2": "Invita a un compañero por email, cambia su rol o elimínalo del espacio de trabajo, y su acceso cambiará de inmediato. Nadie fuera de tu espacio de trabajo puede ver tu modelo.",
  "security.cloudSharing.encryption.title": "Cifrado en tránsito y en reposo",
  "security.cloudSharing.encryption.body1": "La seguridad de los datos se aplica en cada etapa. Todo lo que se mueve entre tu máquina y epanet-js viaja a través de HTTPS y se cifra con TLS.",
  "security.cloudSharing.encryption.body2": "Para los proyectos en la nube, cualquier dato del modelo almacenado en nuestros servidores se cifra completamente en reposo utilizando el estándar de la industria (AES-256). Esto cubre tanto la propia aplicación como cualquier dato de proyecto que decidas sincronizar.",
  "security.yourStorage.heading": "Trae tu propio almacenamiento",
  "security.yourStorage.body1": "Conserva la propiedad absoluta de tus datos sin la carga que supone alojar el software. Bajo esta opción empresarial, nosotros alojamos y gestionamos la aplicación, pero los archivos de tu proyecto se escriben directamente en el propio almacenamiento de objetos en la nube de tu organización, como Amazon S3, Azure Blob Storage o cualquier servicio compatible con S3.",
  "security.yourStorage.body2": "Para configurar tu propia capa de almacenamiento, envíanos un email a <a href=\"mailto:sales@epanetjs.com\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">sales@epanetjs.com</a> o <a href=\"https://cal.com/epanet-js/\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">reserva una llamada</a>.",
  "security.yourStorage.hostApp.title": "Nosotros alojamos la app, tú te quedas con los datos",
  "security.yourStorage.hostApp.body1": "Dispones de una aplicación web totalmente gestionada y actualizada por nosotros, sin que tu equipo necesite levantar ni mantener servidores. Todas las lecturas y escrituras de modelos se enrutan directamente a los entornos de almacenamiento que tú controlas.",
  "security.yourStorage.hostApp.body2": "Debido a que la capa de datos reside dentro de tu propia cuenta de nube corporativa, la retención de datos, las regiones geográficas de residencia y las políticas de acceso las estableces completamente tú. Nosotros operamos la interfaz de la aplicación; nunca retenemos tus datos.",
  "security.onPremises.heading": "Despliegue en servidores propios",
  "security.onPremises.body1": "Para una soberanía total de los datos y entornos aislados (air-gapped), toda la plataforma de epanet-js —tanto la aplicación como la capa de datos— puede desplegarse directamente dentro de tu infraestructura corporativa. Esta opción está diseñada para organizaciones que requieren un aislamiento de red completo.",
  "security.onPremises.body2": "Para hablar de un despliegue en servidores propios para tu organización, envíanos un email a <a href=\"mailto:sales@epanetjs.com\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">sales@epanetjs.com</a> o <a href=\"https://cal.com/epanet-js/\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">reserva una llamada</a>.",
  "security.onPremises.firewall.title": "Control total detrás de tu cortafuegos",
  "security.onPremises.firewall.body1": "La plataforma se ejecuta completamente en tus propios servidores, detrás de tu perímetro de seguridad y estrictamente bajo tu propio gobierno de TI.",
  "security.onPremises.firewall.body2": "Un despliegue en local garantiza que todo el tráfico de la aplicación, los modelos hidráulicos y los datos privados de los clientes permanezcan totalmente autocontenidos dentro del límite de tu red, con cero dependencias de datos externos o necesidad de acceso a internet.",
  "security.faq.heading": "Preguntas frecuentes",
  "security.faq.q0": "¿Podéis rellenar el cuestionario de seguridad de nuestra organización?",
  "security.faq.a0": "Completamos cuestionarios de seguridad para nuestros clientes Enterprise.<p class=\"mt-3\">Los planes Free, Pro y Teams requieren gestión autónoma por tu parte, y esperamos que tu organización realice su propia revisión interna de seguridad. Para facilitar esto al máximo, contamos con un cuestionario de seguridad estándar con respuestas a las preguntas que las empresas de servicios públicos e ingeniería nos han planteado anteriormente, de modo que puedas rellenar tus propios formularios internos rápidamente. Si alguna pregunta no está cubierta, envíanos un <a href=\"mailto:support@epanetjs.com\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">email</a> o <a href=\"https://cal.com/epanet-js/\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">reserva una llamada</a>.</p>",
  "security.faq.q1": "Si epanet-js se ejecuta en un navegador web, ¿cómo es que mis datos no se suben a internet?",
  "security.faq.a1": "epanet-js está desarrollado bajo el principio de \"prioridad local\" (local-first). El navegador actúa como un entorno de ejecución seguro, de forma muy parecida al sistema operativo de un ordenador de escritorio: cuando cargas la app a través de HTTPS, la aplicación completa, incluido el motor de simulación EPANET compilado en WebAssembly, se descarga en la caché de tu navegador y se ejecuta en la CPU y memoria de tu propia máquina dentro del entorno aislado (sandbox) del navegador, con un rendimiento casi nativo de escritorio.<p class=\"mt-3\">Los archivos de proyecto se leen y se escriben en tu disco duro o unidad de red a través de las API de acceso a archivos locales del navegador, y los resultados de la simulación se guardan localmente. Ni los datos de tu infraestructura ni los de tus clientes salen de tu ordenador. También ahorra ancho de banda, ya que los archivos de modelos pesados nunca se transmiten, suben ni descargan. Una vez que la página se ha cargado, puedes desconectarte de internet por completo y seguir trabajando.</p>",
  "security.faq.q2": "Cuando abro un modelo, ¿el navegador web obtiene acceso a todo mi disco duro?",
  "security.faq.a2": "No. epanet-js utiliza la File System Access API del navegador. Cuando abres un proyecto, el navegador muestra el selector de archivos nativo del sistema, y a la aplicación se le concede acceso de lectura y escritura únicamente al archivo o carpeta específicos que elijas. No puede ver el resto de tu disco duro, tu sistema operativo ni tus carpetas compartidas en red.",
  "security.faq.q3": "¿Utilizáis mis modelos hidráulicos o los datos de mis clientes para entrenar modelos de IA?",
  "security.faq.a3": "No. Nunca utilizamos tus archivos de proyecto, esquemas de red o datos de clientes para entrenar modelos de aprendizaje automático o inteligencia artificial. En el caso de los proyectos locales, no podríamos hacerlo aunque quisiéramos: los datos nunca nos llegan. En los proyectos en la nube y Enterprise, tus datos pertenecen a tu organización y se tratan como confidenciales.",
  "security.faq.q4": "¿Qué regiones de datos están disponibles para los proyectos sincronizados en la nube?",
  "security.faq.a4": "Ofrecemos regiones de datos en EE. UU., Europa y Asia-Pacífico. Cuando configuras un espacio de trabajo en la nube, eliges la región que se adapte a tus requisitos normativos, como el RGPD o los mandatos regionales de infraestructuras críticas. Tus datos se quedan fijados en esa región y nunca se replican ni se enrutan a través de fronteras geográficas.",
  "security.faq.q5": "¿Admite epanet-js la autenticación de doble factor (MFA / 2FA)?",
  "security.faq.a5": "Sí. Utilizamos Clerk para la gestión de identidades, que admite la autenticación de doble factor mediante aplicaciones de autenticación (Google Authenticator, Microsoft Authenticator, 1Password) y códigos de verificación por SMS. Los administradores del espacio de trabajo en el plan Teams también pueden exigir el uso de MFA a todo el equipo, de modo que cada miembro la tenga activada antes de acceder a los proyectos compartidos en la nube.",
  "security.faq.q6": "¿Aceptáis el inicio de sesión único (SSO) para gestionar el acceso de los equipos?",
  "security.faq.a6": "Sí, en nuestras configuraciones Enterprise (trae tu propio almacenamiento y servidores propios). Permitimos la federación de identidades a través de SAML 2.0 y OIDC, de modo que tu departamento de TI puede conectar epanet-js a tu proveedor de identidad corporativo —como Microsoft Entra ID, Okta, Ping Identity o Google Workspace— y gestionar el aprovisionamiento de usuarios, los roles del espacio de trabajo y el control de acceso a través de tus flujos de trabajo actuales.",
  "security.faq.q7": "¿Qué proveedores de almacenamiento de objetos en la nube soportáis en el plan \"Trae tu propio almacenamiento\"?",
  "security.faq.a7": "La capa de almacenamiento es independiente del proveedor. Ofrecemos compatibilidad con cualquier almacenamiento de objetos en la nube estándar o servicio compatible con S3, incluidos Amazon S3, Azure Blob Storage, Google Cloud Storage y opciones autoalojadas como MinIO. Tu equipo de TI mantiene el control total de las claves de cifrado y las políticas de acceso en los contenedores de almacenamiento (\"buckets\").",
  "security.faq.q8": "¿Cómo recibimos las actualizaciones de software y seguridad si hacemos un despliegue en servidores propios?",
  "security.faq.a8": "Trabajamos con tu equipo de infraestructura de TI para establecer una ruta de actualización que se adapte al gobierno de tu red. Esto puede abarcar desde actualizaciones automáticas del registro de contenedores hasta transferencias manuales de paquetes en entornos aislados (air-gapped) si tu red no tiene conectividad externa a internet.",
  "security.ctaFoundIssue.heading": "¿Has encontrado un problema de seguridad?",
  "security.ctaFoundIssue.subheading": "Nos tomamos muy en serio los informes de seguridad. Si crees que has encontrado una vulnerabilidad, envíanos un email y colaboraremos contigo para investigarla y resolverla.",
  "security.ctaFoundIssue.primaryCta": "Enviar un email",
  "security.ctaFoundIssue.footer": "Para preguntas sobre cómo manejamos tus datos, consulta nuestra <a href=\"/privacy-policy\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">Política de Privacidad</a> y nuestra <a href=\"/cookies-policy\" class=\"text-indigo-600 hover:text-indigo-800 underline hover:no-underline\">Política de Cookies</a>.",
  "security.ctaQuestions.heading": "¿Preguntas sobre seguridad o conformidad?",
  "security.ctaQuestions.subheading": "Habla con nosotros sobre cuestionarios de seguridad, almacenamiento gestionado por el cliente o despliegues en local. Estaremos encantados de ayudarte.",
  "security.ctaQuestions.primaryCta": "Reservar una llamada",
  "security.ctaQuestions.secondaryCta": "Enviar un email",

  // ── Demo diagrams (src/components/demos/) ──
  "diagrams.localFirstFlow.ariaLabel":
    "Diagrama: la aplicación epanet-js se carga desde la nube, tu archivo .inp permanece en tu dispositivo, y la simulación sigue funcionando si se pierde la conexión.",
  "diagrams.localFirstFlow.caption1": "La aplicación se carga",
  "diagrams.localFirstFlow.caption2": "El dispositivo se queda sin conexión",
  "diagrams.localFirstFlow.caption3": "Cargas tu archivo local",
  "diagrams.localFirstFlow.caption4": "La simulación se ejecuta en local",
  "diagrams.localFirstFlow.runningSimulation": "Ejecutando simulación...",
  "diagrams.localFirstFlow.simulationSuccessful": "Simulación completada",

  "diagrams.fileTransfer.ariaLabel":
    "Diagrama: un archivo de modelo se mueve entre dos ordenadores por email, unidad de red o USB, sin ninguna nube de por medio.",
  "diagrams.fileTransfer.officeDesktop": "Ordenador de oficina",
  "diagrams.fileTransfer.siteLaptop": "Portátil de campo",
  "diagrams.fileTransfer.email": "Email",
  "diagrams.fileTransfer.network": "Red",
  "diagrams.fileTransfer.usb": "USB",
  "diagrams.fileTransfer.footer": "Comparte tu modelo como cualquier otro archivo",

  "diagrams.cloudOptional.ariaLabel":
    "Diagrama: un modelo se sincroniza a través de una nube, gestionada por nosotros o autoalojada, con tres dispositivos y de vuelta.",
  "diagrams.cloudOptional.office": "Oficina",
  "diagrams.cloudOptional.site": "Campo",
  "diagrams.cloudOptional.captionLine1": "Nuestra nube,",
  "diagrams.cloudOptional.captionLine2": "o la tuya.",

  "diagrams.teamAccess.ariaLabel":
    "Panel de acceso del equipo: una lista de miembros con roles individuales, una invitación en curso, y el rol de un miembro cambiando de editor a lector.",
  "diagrams.teamAccess.heading": "Acceso del equipo",
  "diagrams.teamAccess.role.editor": "Editor",
  "diagrams.teamAccess.role.viewer": "Lector",
  "diagrams.teamAccess.inviteSent": "Invitación enviada",
  "diagrams.teamAccess.footer": "4 plazas · roles por miembro",

  "diagrams.dataRegions.ariaLabel":
    "Diagrama: tres regiones de datos, Europa, Estados Unidos y Asia-Pacífico, cada una ejecutando la aplicación epanet-js junto a su propio almacenamiento de modelos y entregando modelos a los usuarios de esa región sin salir de ella.",
  "diagrams.dataRegions.europe": "Europa",
  "diagrams.dataRegions.unitedStates": "Estados Unidos",
  "diagrams.dataRegions.asiaPacific": "Asia-Pacífico",
  "diagrams.dataRegions.europeanUsers": "Usuarios europeos",
  "diagrams.dataRegions.americanUsers": "Usuarios estadounidenses",
  "diagrams.dataRegions.asiaPacificUsers": "Usuarios de Asia-Pacífico",
  "diagrams.dataRegions.models": "Modelos",
  "diagrams.dataRegions.footer": "Los modelos se almacenan y se sirven en la región que elijas",

  "diagrams.encryptedTransit.ariaLabel":
    "Diagrama: el tráfico entre tu máquina y el servicio de epanet-js se cifra en tránsito mediante HTTPS y TLS.",
  "diagrams.encryptedTransit.yourMachine": "Tu máquina",
  "diagrams.encryptedTransit.footer": "Todo el tráfico se cifra en tránsito",

  "diagrams.cloudYourStorage.ariaLabel":
    "Diagrama: nosotros ejecutamos la aplicación epanet-js, y los datos del modelo se leen y se escriben en un almacenamiento que gestiona tu organización, como tu propio bucket de S3.",
  "diagrams.cloudYourStorage.appName": "App epanet-js",
  "diagrams.cloudYourStorage.weHostIt": "Nosotros la alojamos y actualizamos",
  "diagrams.cloudYourStorage.yourStorage": "Tu almacenamiento",
  "diagrams.cloudYourStorage.s3Bucket": "Bucket de S3 que tú gestionas",
  "diagrams.cloudYourStorage.readsAndWrites": "Lecturas y escrituras del modelo",
  "diagrams.cloudYourStorage.footer": "Tu región · Tu retención · Tu acceso",

  "diagrams.onPremDeployment.ariaLabel":
    "Diagrama: un despliegue en servidores propios con tus usuarios, la aplicación epanet-js y los datos del modelo, todo dentro de tu propia red.",
  "diagrams.onPremDeployment.yourUsers": "Tus usuarios",
  "diagrams.onPremDeployment.appName": "App epanet-js",
  "diagrams.onPremDeployment.modelData": "Datos del modelo",
  "diagrams.onPremDeployment.yourNetwork": "Tu red",
  "diagrams.onPremDeployment.footer": "Se ejecuta enteramente en tu propia infraestructura",
} as const;
