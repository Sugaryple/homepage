// Internationalization (i18n) support
const translations = {
    en: {
        // Navigation
        products: "Products",
        philosophy: "Philosophy",
        contact: "Contact",
        
        // Hero Section
        heroTitle: "Building Apps for<br>a Better Daily Life",
        heroSubtitle: "Sugaryple develops applications with excellent UX that<br>everyone wants to use, contributing to society.",
        ctaProducts: "Explore Products",
        ctaPhilosophy: "Our Philosophy",
        
        // Products Section
        productsTitle: "Our Products",
        productsSubtitle: "Apps that make your daily life more convenient and enjoyable",
        safeQRDesc: "Scan QR codes and barcodes safely and quickly. Provides history management and various features.",
        moreProducts: "More Products",
        moreProductsDesc: "We're preparing new apps that will make your daily life more special.",
        comingSoon: "Coming Soon",
        
        // Philosophy Section
        philosophyTitle: "Our Philosophy",
        philosophySubtitle: "Good design should be for everyone",
        accessible: "Accessible to Everyone",
        accessibleDesc: "We pursue intuitive interfaces that anyone can easily use, regardless of age or technical level.",
        efficient: "Fast and Efficient",
        efficientDesc: "Your time is precious. We design to achieve desired results with minimal steps.",
        trustworthy: "Trustworthy",
        trustworthyDesc: "We prioritize privacy and data security, maintaining transparent policies.",
        impactTitle: "Positive Impact on Society",
        impactDesc: "We believe technology can make people's lives better.<br>Through accessible apps, we reduce the digital divide and create a world where everyone can enjoy the benefits of technology.",
        
        // Contact Section
        contactTitle: "Let's Create Together",
        contactDesc: "Want to join Sugaryple's journey?<br>Feel free to contact us anytime!",
        
        // Footer
        footerRights: "© 2025 Sugaryple. All rights reserved.",
        footerMade: "Made with ♥ for everyone"
    },
    ko: {
        // Navigation
        products: "제품",
        philosophy: "철학",
        contact: "연락처",
        
        // Hero Section
        heroTitle: "더 나은 일상을 위한<br>앱을 만듭니다",
        heroSubtitle: "Sugaryple은 누구나 사용하고 싶은 좋은 UX를 가진<br>애플리케이션을 개발하여 사회에 공헌합니다.",
        ctaProducts: "제품 둘러보기",
        ctaPhilosophy: "우리의 철학",
        
        // Products Section
        productsTitle: "우리의 제품",
        productsSubtitle: "일상을 더 편리하고 즐겁게 만드는 앱들",
        safeQRDesc: "QR코드와 바코드를 안전하고 빠르게 스캔하세요. 히스토리 관리와 다양한 기능을 제공합니다.",
        moreProducts: "더 많은 제품",
        moreProductsDesc: "여러분의 일상을 더 특별하게 만들 새로운 앱들을 준비하고 있습니다.",
        comingSoon: "Coming Soon",
        
        // Philosophy Section
        philosophyTitle: "우리의 철학",
        philosophySubtitle: "좋은 디자인은 모두를 위한 것이어야 합니다",
        accessible: "누구나 사용할 수 있는",
        accessibleDesc: "나이, 기술 수준에 관계없이 모든 사람이 쉽게 사용할 수 있는 직관적인 인터페이스를 추구합니다.",
        efficient: "빠르고 효율적인",
        efficientDesc: "사용자의 시간은 소중합니다. 최소한의 단계로 원하는 결과를 얻을 수 있도록 설계합니다.",
        trustworthy: "신뢰할 수 있는",
        trustworthyDesc: "개인정보 보호와 데이터 보안을 최우선으로 생각하며, 투명한 정책을 유지합니다.",
        impactTitle: "사회에 긍정적인 영향을",
        impactDesc: "우리는 기술이 사람들의 삶을 더 나아지게 만들 수 있다고 믿습니다.<br>접근성 높은 앱을 통해 디지털 격차를 줄이고, 모두가 기술의 혜택을 누릴 수 있는 세상을 만들어갑니다.",
        
        // Contact Section
        contactTitle: "함께 만들어가요",
        contactDesc: "Sugaryple의 여정에 함께하고 싶으신가요?<br>언제든 연락주세요!",
        
        // Footer
        footerRights: "© 2025 Sugaryple. All rights reserved.",
        footerMade: "Made with ♥ for everyone"
    },
    ja: {
        // Navigation
        products: "製品",
        philosophy: "理念",
        contact: "お問い合わせ",
        
        // Hero Section
        heroTitle: "より良い日常のための<br>アプリを作ります",
        heroSubtitle: "Sugarypleは誰もが使いたくなる優れたUXを持つ<br>アプリケーションを開発し、社会に貢献します。",
        ctaProducts: "製品を見る",
        ctaPhilosophy: "私たちの理念",
        
        // Products Section
        productsTitle: "私たちの製品",
        productsSubtitle: "日常をより便利で楽しくするアプリ",
        safeQRDesc: "QRコードとバーコードを安全かつ迅速にスキャンします。履歴管理と様々な機能を提供します。",
        moreProducts: "その他の製品",
        moreProductsDesc: "皆様の日常をより特別にする新しいアプリを準備しています。",
        comingSoon: "Coming Soon",
        
        // Philosophy Section
        philosophyTitle: "私たちの理念",
        philosophySubtitle: "良いデザインはすべての人のためのものであるべきです",
        accessible: "誰もが使える",
        accessibleDesc: "年齢や技術レベルに関係なく、誰もが簡単に使える直感的なインターフェースを追求します。",
        efficient: "速くて効率的",
        efficientDesc: "ユーザーの時間は貴重です。最小限のステップで望む結果を得られるよう設計します。",
        trustworthy: "信頼できる",
        trustworthyDesc: "プライバシーとデータセキュリティを最優先に考え、透明なポリシーを維持します。",
        impactTitle: "社会にポジティブな影響を",
        impactDesc: "私たちは技術が人々の生活をより良くできると信じています。<br>アクセシブルなアプリを通じて、デジタル格差を減らし、誰もが技術の恩恵を受けられる世界を作ります。",
        
        // Contact Section
        contactTitle: "一緒に作りましょう",
        contactDesc: "Sugarypleの旅に参加したいですか？<br>いつでもお気軽にご連絡ください！",
        
        // Footer
        footerRights: "© 2025 Sugaryple. All rights reserved.",
        footerMade: "Made with ♥ for everyone"
    }
};

// Get saved language or default to English
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Function to update all text elements
function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update language selector
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.value = lang;
    }
    
    // Update page title and meta description
    updatePageMeta(lang);
}

// Update page meta information
function updatePageMeta(lang) {
    const titles = {
        en: "Sugaryple - Building Apps for a Better Daily Life",
        ko: "Sugaryple - 더 나은 일상을 위한 앱을 만듭니다",
        ja: "Sugaryple - より良い日常のためのアプリを作ります"
    };
    
    const descriptions = {
        en: "Sugaryple develops applications with excellent UX that everyone wants to use, contributing to society.",
        ko: "Sugaryple은 누구나 사용하고 싶은 좋은 UX를 가진 애플리케이션을 개발하여 사회에 공헌합니다.",
        ja: "Sugarypleは誰もが使いたくなる優れたUXを持つアプリケーションを開発し、社会に貢献します。"
    };
    
    document.title = titles[lang];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptions[lang];
    }
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const isOpen = navMenu.classList.contains('active');
        mobileMenuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section:not(.hero), .product-card, .philosophy-card').forEach(el => {
    observer.observe(el);
});

// Navbar Background on Scroll with Logo Animation
const navbar = document.querySelector('.navbar');
const logoSvg = document.querySelector('.logo-svg');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
        // Smooth logo size transition
        if (logoSvg) {
            logoSvg.style.transition = 'height 0.3s ease';
        }
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Coming Soon Email Notifications
document.querySelectorAll('.notify-button').forEach(button => {
    button.addEventListener('click', () => {
        // 실제로는 이메일 수집 모달이나 폼을 표시
        alert('출시 알림을 받으실 이메일을 입력해주세요.');
    });
});

// Add CSS for mobile menu and animations
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: var(--bg-white);
            flex-direction: column;
            padding: 40px 20px;
            transition: right 0.3s ease;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            right: 0;
        }
        
        .nav-menu li {
            width: 100%;
            text-align: center;
            padding: 10px 0;
        }
        
        .nav-menu a {
            display: block;
            padding: 10px;
            font-size: 18px;
        }
    }
    
    .navbar.scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    /* Initial state for animations */
    section:not(.hero):not(.fade-in-up),
    .product-card:not(.fade-in-up),
    .philosophy-card:not(.fade-in-up) {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
`;
document.head.appendChild(style);

// Logo Animation on Load
window.addEventListener('load', () => {
    const logo = document.querySelector('.logo');
    const logoSvg = document.querySelector('.logo-svg');
    
    if (logo) {
        // Add loaded class for animations
        setTimeout(() => {
            logo.classList.add('logo-loaded');
        }, 100);
    }
    
    if (logoSvg) {
        logoSvg.style.animation = 'fadeInUp 0.8s ease-out';
    }
});

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Product Card Hover Effect
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Hide social links without real URLs
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        const href = link.getAttribute('href');
        // href가 #이거나 비어있으면 링크 숨기기
        if (!href || href === '#' || href.trim() === '') {
            link.style.display = 'none';
        }
    });
    
    // 모든 소셜 링크가 숨겨진 경우 social-links 컨테이너도 숨기기
    const socialLinksContainer = document.querySelector('.social-links');
    if (socialLinksContainer) {
        const visibleLinks = socialLinksContainer.querySelectorAll('a:not([style*="display: none"])');
        if (visibleLinks.length === 0) {
            socialLinksContainer.style.display = 'none';
        }
    }
    
    // Initialize language on page load
    updateLanguage(currentLang);
    
    // Language selector event listener
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }
});
