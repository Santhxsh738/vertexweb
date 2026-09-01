// --- Multi-Language Dictionary Support ---
const translations = {
    en: {
        nav_home: "Home", nav_about: "About", nav_services: "Services", nav_portfolio: "Portfolio", 
        nav_student: "Student Offer", nav_pricing: "Pricing", nav_blog: "Blog", nav_admin: "Admin", nav_contact: "Contact",
        hero_title: "Engineering Next-Gen <span>Digital Architectures</span>",
        hero_desc: "We deliver robust, lightning-fast, and conversion-optimized web solutions designed to scale modern brands, enterprises, and student initiatives.",
        btn_quote: "Request a Free Quote", btn_case: "Explore Case Studies",
        stat_1: "Completed Deployments", stat_2: "Active Enterprise Partners", stat_3: "Core Technologies", stat_4: "Client Retention Score",
        wel_badge: "✨ ENTERPRISE DIGITAL EXPERIENCE",
        wel_title: "Welcome to <span>VertexWeb</span>",
        wel_desc: "Where advanced engineering meets cinematic digital design. We build high-performance web systems that scale your brand to global standards.",
        wel_btn1: "Start Your Project 🚀",
        wel_btn2: "Explore Works",
        vid_title: "Welcome to <span>VertexWeb</span>",
        vid_sub: "Architecting Next-Gen Solutions",
        live_ind: "LIVE DEMO PREVIEW",
        sound_btn: "🔇 Unmute Sound",
        ent_title: "Enterprise Solutions",
        ent_desc: "Built for maximum performance, security, and market impact.",
        serv1_title: "Conversion Landing Pages",
        serv1_desc: "High-velocity layouts meticulously crafted for marketing campaigns and product launches.",
        serv2_title: "Enterprise Web Portals",
        serv2_desc: "Scalable multi-page corporate architectures built to dominate regional and global markets.",
        serv3_title: "Academic & Student Support",
        serv3_desc: "Custom code infrastructure, comprehensive documentation, and flawless lab record execution.",
        footer_copy: "&copy; 2026 VERTEXWEB Enterprise. Architecture • Engineering • Scale. All Rights Reserved.",
        footer_privacy: "Privacy Policy", footer_terms: "Terms of Service", footer_refund: "Refund Policy"
    },
    ta: {
        nav_home: "முகப்பு", nav_about: "எங்களை பற்றி", nav_services: "சேவைகள்", nav_portfolio: "போர்ட்ஃபோலியோ", 
        nav_student: "மாணவர் சலுகை", nav_pricing: "விலைப்பட்டியல்", nav_blog: "வலைப்பதிவு", nav_admin: "நிர்வாகம்", nav_contact: "தொடர்புக்கு",
        hero_title: "நவீன <span>டிஜிட்டல் கட்டமைப்புகளை</span> உருவாக்குகிறோம்",
        hero_desc: "வணிகங்கள் மற்றும் மாணவர்களின் வளர்ச்சிக்காக வேகமான மற்றும் உயர் செயல்திறன் கொண்ட வலை தீர்வுகளை நாங்கள் வழங்குகிறோம்.",
        btn_quote: "இலவச மேற்கோளைப் பெறுங்கள்", btn_case: "வழக்குகளைப் பார்க்கவும்",
        stat_1: "நிறைவுற்ற திட்டங்கள்", stat_2: "வணிக கூட்டாளிகள்", stat_3: "முக்கிய தொழில்நுட்பங்கள்", stat_4: "வாடிக்கையாளர் திருப்தி",
        wel_badge: "✨ நிறுவன டிஜிட்டல் அனுபவம்",
        wel_title: "வரவேற்கிறோம் <span>VertexWeb</span>",
        wel_desc: "மேம்பட்ட இன்ஜினியரிங் மற்றும் சினிமாடிக் டிஜிட்டல் வடிவமைப்பு சந்திக்கும் இடம். உலகளாவிய தரத்திற்கு உங்கள் பிராண்டை உயர்த்துகிறோம்.",
        wel_btn1: "உங்கள் திட்டத்தைத் தொடங்குங்கள் 🚀",
        wel_btn2: "வேலைகளை ஆராயுங்கள்",
        vid_title: "வரவேற்கிறோம் <span>VertexWeb</span>",
        vid_sub: "அடுத்த தலைமுறை தீர்வுகளை உருவாக்குகிறோம்",
        live_ind: "நேலை முன்னோட்டம்",
        sound_btn: "🔇 ஒலியை இயக்கு",
        ent_title: "நிறுவன தீர்வுகள்",
        ent_desc: "அதிகபட்ச செயல்திறன், பாதுகாப்பு மற்றும் சந்தை தாக்கத்திற்காக கட்டமைக்கப்பட்டுள்ளது.",
        serv1_title: "மாற்று லேண்டிங் பக்கங்கள்",
        serv1_desc: "மார்க்கெட்டிங் பிரச்சாரங்கள் மற்றும் தயாரிப்பு வெளியீடுகளுக்காக கவனமாக வடிவமைக்கப்பட்ட தளவமைப்புகள்.",
        serv2_title: "நிறுவன வலை போர்ட்டல்கள்",
        serv2_desc: "பிராந்திய மற்றும் உலகளாவிய சந்தைகளில் ஆதிக்கம் செலுத்த கட்டமைக்கப்பட்ட கார்ப்பரேட் கட்டமைப்புகள்.",
        serv3_title: "கல்வி மற்றும் மாணவர் ஆதரவு",
        serv3_desc: "தனிப்பயன் குறியீடு உள்கட்டமைப்பு மற்றும் விரிவான ஆவணப்படுத்தல்.",
        footer_copy: "&copy; 2026 VERTEXWEB. வடிவமைப்பு • மேம்பாடு • டெலிவரி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
        footer_privacy: "தனியுரிமைக் கொள்கை", footer_terms: "விதிமுறைகள்", footer_refund: "ரீஃபண்ட் கொள்கை"
    },
    hi: {
        nav_home: "होम", nav_about: "हमारे बारे में", nav_services: "सेवाएं", nav_portfolio: "पोर्टफोलियो", 
        nav_student: "छात्र प्रस्ताव", nav_pricing: "मूल्य निर्धारण", nav_blog: "ब्लॉग", nav_admin: "एडमिन", nav_contact: "संपर्क करें",
        hero_title: "अगली पीढ़ी के <span>डिजिटल आर्किटेक्चर</span> का निर्माण",
        hero_desc: "हम आधुनिक ब्रांडों और उद्यमों को आगे बढ़ाने के लिए तेज़ और उच्च-प्रदर्शन वाले वेब समाधान प्रदान करते हैं।",
        btn_quote: "मुफ्त报价 का अनुरोध करें", btn_case: "केस स्टडी देखें",
        stat_1: "पूर्ण प्रोजेक्ट्स", stat_2: "सक्रिय पार्टनर्स", stat_3: "मुख्य तकनीकें", stat_4: "संतुष्टि स्कोर",
        wel_badge: "✨ एंटरप्राइज़ डिजिटल अनुभव",
        wel_title: "स्वागत है <span>VertexWeb</span> पर",
        wel_desc: "जहां उन्नत इंजीनियरिंग सिनेमाई डिजिटल डिज़ाइन से मिलती है।",
        wel_btn1: "अपना प्रोजेक्ट शुरू करें 🚀",
        wel_btn2: "कार्य देखें",
        vid_title: "स्वागत है <span>VertexWeb</span>",
        vid_sub: "अगली पीढ़ी के समाधान तैयार करना",
        live_ind: "लाइव पूर्वावलोकन",
        sound_btn: "🔇 आवाज़ चालू करें",
        ent_title: "एंटरप्राइज़ समाधान",
        ent_desc: "अधिकतम प्रदर्शन और सुरक्षा के लिए निर्मित।",
        serv1_title: "कन्वर्जन लैंडिंग पेजेस",
        serv1_desc: "मार्केटिंग अभियानों के लिए सावधानीपूर्वक तैयार किए गए लेआउट।",
        serv2_title: "एंटरप्राइज़ वेब पोर्टल्स",
        serv2_desc: "वैश्विक बाजारों पर हावी होने के लिए निर्मित कॉर्पोरेट आर्किटेक्चर।",
        serv3_title: "शैक्षणिक और छात्र सहायता",
        serv3_desc: "कस्टम कोड बुनियादी ढांचा और व्यापक प्रलेखन।",
        footer_copy: "&copy; 2026 VERTEXWEB Enterprise. सर्वाधिकार सुरक्षित।",
        footer_privacy: "गोपनीयता नीति", footer_terms: "सेवा की शर्तें", footer_refund: "रिफंड नीति"
    },
    es: {
        nav_home: "Inicio", nav_about: "Sobre Nosotros", nav_services: "Servicios", nav_portfolio: "Portafolio", 
        nav_student: "Oferta Estudiantil", nav_pricing: "Precios", nav_blog: "Blog", nav_admin: "Admin", nav_contact: "Contacto",
        hero_title: "Ingeniería de <span>Arquitecturas Digitales</span> de Próxima Generación",
        hero_desc: "Ofrecemos soluciones web rápidas y optimizadas para escalar marcas modernas y empresas.",
        btn_quote: "Solicitar Cotización", btn_case: "Explorar Casos",
        stat_1: "Despliegues", stat_2: "Socios Activos", stat_3: "Tecnologías", stat_4: "Retención",
        wel_badge: "✨ EXPERIENCIA DIGITAL EMPRESARIAL",
        wel_title: "Bienvenido a <span>VertexWeb</span>",
        wel_desc: "Donde la ingeniería avanzada se une al diseño digital cinematográfico.",
        wel_btn1: "Inicia tu Proyecto 🚀",
        wel_btn2: "Explorar Trabajos",
        vid_title: "Bienvenido a <span>VertexWeb</span>",
        vid_sub: "Arquitectura de Soluciones",
        live_ind: "VISTA PREVIA",
        sound_btn: "🔇 Activar Sonido",
        ent_title: "Soluciones Empresariales",
        ent_desc: "Construido para el máximo rendimiento y seguridad.",
        serv1_title: "Páginas de Aterrizaje",
        serv1_desc: "Diseños de alta velocidad elaborados para campañas.",
        serv2_title: "Portales Web Empresariales",
        serv2_desc: "Arquitecturas corporativas escalables.",
        serv3_title: "Soporte Académico y Estudiantil",
        serv3_desc: "Infraestructura de código personalizado.",
        footer_copy: "&copy; 2026 VERTEXWEB Enterprise. Todos los derechos reservados.",
        footer_privacy: "Política de Privacidad", footer_terms: "Términos de Servicio", footer_refund: "Política de Reembolso"
    },
    fr: {
        nav_home: "Accueil", nav_about: "À Propos", nav_services: "Services", nav_portfolio: "Portfolio", 
        nav_student: "Offre Étudiante", nav_pricing: "Tarifs", nav_blog: "Blog", nav_admin: "Admin", nav_contact: "Contact",
        hero_title: "Ingénierie d'<span>Architectures Numériques</span> de Nouvelle Génération",
        hero_desc: "Nous fournissons des solutions web rapides et optimisées pour faire évoluer les marques modernes.",
        btn_quote: "Demander un Devis", btn_case: "Voir les Cas",
        stat_1: "Projets Réalisés", stat_2: "Partenaires", stat_3: "Technologies", stat_4: "Satisfaction",
        wel_badge: "✨ EXPÉRIENCE NUMÉRIQUE",
        wel_title: "Bienvenue sur <span>VertexWeb</span>",
        wel_desc: "Où l'ingénierie de pointe rencontre le design numérique.",
        wel_btn1: "Démarrer votre Projet 🚀",
        wel_btn2: "Explorer les Travaux",
        vid_title: "Bienvenue sur <span>VertexWeb</span>",
        vid_sub: "Solutions de nouvelle génération",
        live_ind: "APERÇU EN DIRECT",
        sound_btn: "🔇 Activer le Son",
        ent_title: "Solutions d'Entreprise",
        ent_desc: "Conçu pour des performances maximales.",
        serv1_title: "Pages de Destination",
        serv1_desc: "Mises en page ultra-rapides pour campagnes.",
        serv2_title: "Portails Web d'Entreprise",
        serv2_desc: "Architectures d'entreprise évolutives.",
        serv3_title: "Support Académique",
        serv3_desc: "Infrastructure de code personnalisée.",
        footer_copy: "&copy; 2026 VERTEXWEB Enterprise. Tous droits réservés.",
        footer_privacy: "Politique de Confidentialité", footer_terms: "Conditions d'Utilisation", footer_refund: "Politique de Remboursement"
    },
    de: {
        nav_home: "Startseite", nav_about: "Über uns", nav_services: "Dienstleistungen", nav_portfolio: "Portfolio", 
        nav_student: "Studierenden-Angebot", nav_pricing: "Preise", nav_blog: "Blog", nav_admin: "Admin", nav_contact: "Kontakt",
        hero_title: "Entwicklung von <span>Digitalen Architekturen</span> der nächsten Generation",
        hero_desc: "Wir liefern robuste, ultraschnelle Web-Lösungen zur Skalierung moderner Marken und Unternehmen.",
        btn_quote: "Kostenloses Angebot", btn_case: "Fallstudien",
        stat_1: "Projekte", stat_2: "Partner", stat_3: "Technologien", stat_4: "Zufriedenheit",
        wel_badge: "✨ UNTERNEHMENS-DIGITALERLEBNIS",
        wel_title: "Willkommen bei <span>VertexWeb</span>",
        wel_desc: "Wo fortgeschrittene Technik auf cineastisches Design trifft.",
        wel_btn1: "Projekt Starten 🚀",
        wel_btn2: "Arbeiten Erkunden",
        vid_title: "Willkommen bei <span>VertexWeb</span>",
        vid_sub: "Architektur von Lösungen",
        live_ind: "LIVE-VORSCHAU",
        sound_btn: "🔇 Ton Einschalten",
        ent_title: "Unternehmenslösungen",
        ent_desc: "Für maximale Leistung und Sicherheit entwickelt.",
        serv1_title: "Landing Pages",
        serv1_desc: "High-Speed-Layouts für Marketingkampagnen.",
        serv2_title: "Unternehmens-Webportale",
        serv2_desc: "Skalierbare Unternehmensarchitekturen.",
        serv3_title: "Akademischer Support",
        serv3_desc: "Benutzerdefinierte Code-Infrastruktur.",
        footer_copy: "&copy; 2026 VERTEXWEB Enterprise. Alle Rechte vorbehalten.",
        footer_privacy: "Datenschutz", footer_terms: "Nutzungsbedingungen", footer_refund: "Rückerstattungsrichtlinie"
    }
};

// --- Apply Language Globally ---
function setLanguage(lang) {
    localStorage.setItem('vertex_lang', lang);
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// --- Initialize Language & Theme on Startup ---
window.addEventListener('DOMContentLoaded', () => {
    // Language Setup
    const savedLang = localStorage.getItem('vertex_lang') || 'en';
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = savedLang;
        langSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    setLanguage(savedLang);

    // Theme Setup
    const savedTheme = localStorage.getItem('vertex_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
});

// --- Theme Toggle Button ---
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('vertex_theme', newTheme);
    });
}

// --- Search Modal ---
const searchModal = document.getElementById('searchModal');
const searchBtn = document.getElementById('searchBtn');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => { 
        searchModal.style.display = 'flex'; 
        if(searchInput) searchInput.focus(); 
    });
    
    if(closeSearch) {
        closeSearch.addEventListener('click', () => { searchModal.style.display = 'none'; });
    }
    
    window.addEventListener('click', (e) => { 
        if (e.target === searchModal) searchModal.style.display = 'none'; 
    });

    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.search-result-item').forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(term) ? 'block' : 'none';
            });
        });
    }
}

// --- PWA Simulation ---
const installPwaBtn = document.getElementById('installPwaBtn');
if (installPwaBtn) {
    installPwaBtn.addEventListener('click', () => {
        alert('📱 PWA Installed! VertexWeb is now accessible as a mobile app.');
    });
}

// --- Scroll to Top ---
const topBtn = document.getElementById('topBtn');
if (topBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            topBtn.style.display = 'flex';
        } else {
            topBtn.style.display = 'none';
        }
    });

    topBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Consultation Form Submission ---
const consultationForm = document.getElementById('consultationForm');
if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🎉 Strategy session booked successfully! We will contact you shortly.');
        consultationForm.reset();
    });
}

// --- Newsletter Subscription ---
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('🚀 Thank you for subscribing to VertexWeb Insights!');
        newsletterForm.reset();
    });
}