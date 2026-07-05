const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const languageButtons = document.querySelectorAll("[data-lang]");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const whatsappMessages = {
  en: "Inquiry for interior design/furnishing",
  zh: "裝修查詢",
};

const translations = {
  en: {
    navStudio: "Studio",
    navServices: "Services",
    navWork: "Work",
    navCompleted: "VR Tour",
    navContact: "Contact",
    heroEyebrow: "Hong Kong Interior Design · Furnishing · Fitting",
    heroCopy:
      "Thoughtfully measured interiors for homes, offices, and hospitality spaces, from spatial planning to custom furniture and site fitting.",
    heroPrimary: "Start a Project",
    heroSecondary: "View Approach",
    stripDesign: "Interior Design",
    stripFurnishing: "Furnishing",
    stripFitting: "Fitting-Out",
    stripJoinery: "Custom Joinery",
    studioEyebrow: "Studio",
    studioTitle: "Design that respects the rhythm of Hong Kong living.",
    studioCopy:
      "Chron Atelier balances precision, material warmth, and practical construction knowledge. We shape interiors that work beautifully in compact city apartments, characterful homes, agile workplaces, and boutique commercial environments.",
    studioCn:
      "刻研設計專注室內設計、傢俬配置及裝修工程，從尺度、物料到現場細節，為每個空間建立清晰而耐看的秩序。",
    companyEyebrow: "Company Description",
    companyTitle: "A Hong Kong atelier for complete interior delivery.",
    companyCopyOne:
      "Chron Atelier | 刻研設計 is a Hong Kong based interior design, furnishing and fitting company. We provide integrated spatial planning, design development, furniture selection, custom joinery, fitting-out coordination, and finishing detail for residential and commercial projects.",
    companyCopyTwo:
      "Our work focuses on proportion, material harmony, practical storage, lighting comfort, and carefully resolved site execution, creating interiors that feel warm, refined, and genuinely usable in everyday Hong Kong life.",
    metricOne: "Concept to completion",
    metricTwo: "Custom furnishing plans",
    metricThree: "Site-aware fitting detail",
    servicesEyebrow: "Services",
    servicesTitle: "One studio for the full interior journey.",
    serviceOneTitle: "Interior Design",
    serviceOneCopy: "Layouts, mood direction, material palettes, lighting intent, and detailed drawings.",
    serviceTwoTitle: "Furnishing",
    serviceTwoCopy: "Loose furniture, built-ins, decorative lighting, finishes, and styling coordination.",
    serviceThreeTitle: "Fitting & Works",
    serviceThreeCopy: "Site measurement, contractor coordination, custom joinery, and finishing supervision.",
    workEyebrow: "Selected Directions",
    workTitle: "Refined spaces with a lived-in sense of proportion.",
    workOneType: "Residential",
    workOneTitle: "Warm minimal apartments with integrated storage.",
    workTwoType: "Furnishing",
    workTwoTitle: "Furniture schemes that make smaller rooms feel composed.",
    workThreeType: "Fitting-Out",
    workThreeTitle: "Clean construction details for daily use.",
    completedEyebrow: "Completed Project",
    completedTitle: "Explore a finished interior in VR.",
    completedCopy:
      "Step inside a completed Chron Atelier project through a 720 virtual tour and experience the layout, material palette, furniture placement, and fitted details in context.",
    completedButton: "Open VR Tour",
    completedPreview: "Virtual Project Walkthrough",
    processEyebrow: "Process",
    processTitle: "Clear steps, careful decisions.",
    processOneTitle: "Measure",
    processOneCopy: "We study the brief, site, dimensions, light, storage needs, and practical constraints.",
    processTwoTitle: "Compose",
    processTwoCopy: "We develop spatial direction, material language, furniture selections, and cost priorities.",
    processThreeTitle: "Build",
    processThreeCopy: "We coordinate drawings, fitting details, procurement, and site execution through handover.",
    contactEyebrow: "Book a Consultation",
    contactTitle: "Tell us about the space you want to shape.",
    contactCopy:
      "Based in Hong Kong, Chron Atelier works across residential and commercial interiors, furnishing packages, and fitting-out scopes.",
    contactEmailLabel: "Email",
    contactWhatsappLabel: "WhatsApp",
    formName: "Name",
    formEmail: "Email",
    formProject: "Project Type",
    formSelect: "Select one",
    formResidential: "Residential Interior",
    formCommercial: "Commercial Interior",
    formFurnishing: "Furnishing Package",
    formFitting: "Fitting-Out Works",
    formMessage: "Message",
    formSubmit: "Send Enquiry",
    footerCopy: "Hong Kong based interior design, furnishing and fitting company.",
  },
  zh: {
    navStudio: "設計室",
    navServices: "服務",
    navWork: "作品方向",
    navCompleted: "VR導覽",
    navContact: "聯絡",
    heroEyebrow: "香港室內設計 · 傢俬配置 · 裝修工程",
    heroCopy: "為住宅、辦公室及商業空間建立細緻而實用的室內方案，由空間規劃、訂製傢俬到現場施工一併照應。",
    heroPrimary: "開始項目",
    heroSecondary: "了解流程",
    stripDesign: "室內設計",
    stripFurnishing: "傢俬配置",
    stripFitting: "裝修工程",
    stripJoinery: "訂製木作",
    studioEyebrow: "設計室",
    studioTitle: "回應香港生活節奏的空間設計。",
    studioCopy: "Chron Atelier 刻研設計結合精準尺度、溫潤物料及實務工程經驗，為城市住宅、特色家居、靈活辦公室及精品商業空間塑造耐看而好用的室內環境。",
    studioCn: "我們重視比例、收納、光線、材質及施工細節，讓每個空間在日常使用中仍然保持清晰秩序與質感。",
    companyEyebrow: "公司簡介",
    companyTitle: "立足香港，完整跟進室內設計與工程落地。",
    companyCopyOne:
      "Chron Atelier | 刻研設計是一間香港室內設計、傢俬配置及裝修工程公司，提供空間規劃、設計深化、傢俬選配、訂製木作、裝修協調及收口細節等整合服務，適用於住宅及商業項目。",
    companyCopyTwo:
      "我們重視比例、物料協調、實用收納、燈光舒適度及現場施工細節，致力打造溫暖、精緻，並真正配合香港日常生活的室內空間。",
    metricOne: "由概念至落成",
    metricTwo: "訂製傢俬方案",
    metricThree: "貼合現場的施工細節",
    servicesEyebrow: "服務",
    servicesTitle: "由設計到落地，一間設計室完整跟進。",
    serviceOneTitle: "室內設計",
    serviceOneCopy: "平面規劃、風格方向、物料配搭、燈光概念及施工圖則。",
    serviceTwoTitle: "傢俬配置",
    serviceTwoCopy: "活動傢俬、入牆櫃、裝飾燈具、飾面及軟裝配置統籌。",
    serviceThreeTitle: "裝修及工程",
    serviceThreeCopy: "現場度尺、工程協調、訂製木作、收口細節及完工監督。",
    workEyebrow: "作品方向",
    workTitle: "有比例感、亦有生活溫度的細緻空間。",
    workOneType: "住宅",
    workOneTitle: "以收納整合與溫暖物料塑造簡約住宅。",
    workTwoType: "傢俬配置",
    workTwoTitle: "讓細小空間更完整、更從容的傢俬方案。",
    workThreeType: "裝修工程",
    workThreeTitle: "為日常使用而設的乾淨施工細節。",
    completedEyebrow: "完成項目",
    completedTitle: "以 VR 導覽走進完成項目。",
    completedCopy:
      "透過 720 虛擬導覽走進 Chron Atelier 刻研設計的完成項目，從空間動線、物料配搭、傢俬配置到裝修細節，感受實際落成效果。",
    completedButton: "開啟 VR 導覽",
    completedPreview: "完成項目虛擬導覽",
    processEyebrow: "流程",
    processTitle: "清晰步驟，細心決策。",
    processOneTitle: "度量",
    processOneCopy: "了解需求、場地、尺寸、光線、收納及實際限制。",
    processTwoTitle: "組構",
    processTwoCopy: "發展空間方向、物料語言、傢俬選項及預算優次。",
    processThreeTitle: "落地",
    processThreeCopy: "統籌圖則、施工細節、採購及現場執行，直至交付。",
    contactEyebrow: "預約諮詢",
    contactTitle: "告訴我們你想塑造的空間。",
    contactCopy: "刻研設計立足香港，承接住宅及商業室內設計、傢俬配置方案及裝修工程。",
    contactEmailLabel: "電郵",
    contactWhatsappLabel: "WhatsApp",
    formName: "姓名",
    formEmail: "電郵",
    formProject: "項目類型",
    formSelect: "請選擇",
    formResidential: "住宅室內設計",
    formCommercial: "商業室內設計",
    formFurnishing: "傢俬配置方案",
    formFitting: "裝修工程",
    formMessage: "項目內容",
    formSubmit: "送出查詢",
    footerCopy: "香港室內設計、傢俬配置及裝修工程公司。",
  },
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  whatsappLinks.forEach((link) => {
    link.href = `https://wa.me/85298065099?text=${encodeURIComponent(whatsappMessages[lang] || whatsappMessages.zh)}`;
  });

  localStorage.setItem("chronLanguageV2", lang);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

updateHeader();
setLanguage(localStorage.getItem("chronLanguageV2") || "zh");
window.addEventListener("scroll", updateHeader, { passive: true });
