/**
 * VORTEXON GAMES — Interactive Frontend Controller
 * Particle system, i18n engine, scroll reveals, form handling
 */
(function () {
    'use strict';

    // ─── PARTICLES ───────────────────────────────────────
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let w, h;

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function Particle() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.r = Math.random() * 1.5 + 0.3;
            this.alpha = Math.random() * 0.4 + 0.1;
            // color: lime green or cyan
            this.color = Math.random() > 0.7 ? '164,227,18' : '130,160,200';
        }

        for (let i = 0; i < 60; i++) particles.push(new Particle());

        function drawParticles() {
            ctx.clearRect(0, 0, w, h);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
                ctx.fill();
            });
            // draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(255,255,255,${0.03 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }
        drawParticles();
    }

    // ─── i18n TRANSLATION ENGINE ─────────────────────────
    let lang = 'TR';

    const T = {
        'nav.home':       { TR: 'Ana Sayfa',           EN: 'Home' },
        'nav.blackshift': { TR: 'The Black Shift',     EN: 'The Black Shift' },
        'nav.games':      { TR: 'Oyunlarımız',         EN: 'Our Games' },
        'nav.team':       { TR: 'Ekip',                EN: 'Team' },
        'nav.contact':    { TR: 'İletişim',            EN: 'Contact' },

        'hero.badge':  { TR: 'Batı Karadeniz Game Jam — 1. Ödül',        EN: '1st Place — Batı Karadeniz Game Jam' },
        'hero.title1': { TR: 'Hikayeleri Yapay Zeka ile',                 EN: 'Redefining Stories' },
        'hero.title2': { TR: 'Yeniden Tanımlıyoruz',                     EN: 'Through Local AI' },
        'hero.desc':   { TR: 'Vortexon Studios olarak, oyuncunun her kararını analiz eden ve tehditlerle karşılık veren yerel yapay zeka mekaniğiyle oyun tarihinde bir ilke imza atıyoruz. İlk katıldığımız Game Jam\'de şampiyonluk kazandık.',
                         EN: 'At Vortexon Studios, we\'re making history with a local AI that analyzes every player decision and responds with threats. We won 1st place in the very first game jam we entered.' },
        'hero.cta1':   { TR: 'Projemizi Keşfet',      EN: 'Discover Our Project' },
        'hero.cta2':   { TR: 'Yatırımcı Portalı',     EN: 'Investor Portal' },

        'bs.tag':       { TR: 'Yatırımcı Odağı — Başyapıtımız',         EN: 'Investor Spotlight — Our Masterpiece' },
        'bs.devstatus': { TR: 'Aktif Geliştirme',                        EN: 'In Development' },
        'bs.award':     { TR: 'Game Jam 1.si',                           EN: 'Game Jam Winner' },
        'bs.aibadge':   { TR: 'Dünyada Bir İlk — Yerel AI Motoru',      EN: 'A World First — Local AI Engine' },
        'bs.headline':  { TR: 'Senin Seçimlerin, Onun Tehditleri.',      EN: 'Your Choices, Its Threats.' },
        'bs.desc1':     { TR: 'Oyun dünyasında daha önce hiç denenmemiş bir yerel yapay zeka entegrasyonu. AI, oyun boyunca seçimlerinizi, duygusal tepkilerinizi ve karakter davranışlarınızı gerçek zamanlı analiz eder.',
                          EN: 'A local AI integration never attempted before in gaming. The AI analyzes your choices, emotional reactions, and character behavior in real-time throughout the game.' },
        'bs.feat.title': { TR: 'Tehdit Eden AI Mekaniği',               EN: 'Threat-Driven AI Mechanics' },
        'bs.feat.desc':  { TR: 'Local AI davranışlarınızı analiz ederek sizi tehdit eder, manipüle eder ve öngörülemeyen görevler verir. Hikayenin başı belli — sonu sizin duygusal kimliğinize göre şekillenir.',
                           EN: 'The local AI analyzes your behavior to threaten, manipulate, and assign unpredictable quests. The story has a set beginning — the ending is shaped entirely by your emotional profile.' },
        'bs.stat1':     { TR: 'İlk Game Jam\'de Birincilik',            EN: '1st Place in Debut Jam' },
        'bs.stat2':     { TR: 'Dinamik Hikaye Sonu',                    EN: 'Dynamic Story Endings' },
        'bs.stat3':     { TR: 'Yerel AI — İnternet Gereksiz',           EN: 'Offline Local AI Core' },
        'bs.cta':       { TR: 'Pitch Deck & Yatırım Dosyası Al',       EN: 'Request Investor Pitch Deck' },

        'games.tag':    { TR: 'Stüdyo Portföyü',      EN: 'Studio Portfolio' },
        'games.title':  { TR: 'Oyunlarımız',           EN: 'Our Games' },
        'g1.status':    { TR: 'Çıkış Yaptı',           EN: 'Released' },
        'g1.dev':       { TR: 'Solo Geliştirici: Emirhan K.',           EN: 'Solo Developer: Emirhan K.' },
        'g1.desc':      { TR: 'Enflasyon uçuyor, müşteriler isyanda ve dükkân yanıyor! Ekonomik kriz ve toplumsal kaosun ortasında bir market yönetim ve hayatta kalma simülasyonu. 150+ absürt kriz mekaniği.',
                          EN: 'Inflation is soaring, customers are rioting, and the store is on fire! A market management & survival sim amid economic crisis and social chaos. 150+ absurd crisis mechanics.' },
        'g.steam':      { TR: 'Steam\'de İncele',      EN: 'View on Steam' },
        'g2.status':    { TR: '2026\'da Çıkacak',      EN: 'Coming 2026' },
        'g2.dev':       { TR: 'Abdullah K. & Emirhan K.',               EN: 'Abdullah K. & Emirhan K.' },
        'g2.desc':      { TR: '1892 Sivas\'ında geçen anlatı odaklı tarihi drama. Genç Ahmet\'in ailesi, aşkı ve vatanı arasında kalan hayatında her seçimin duygusal bir bedeli var.',
                          EN: 'A narrative-driven historical drama set in Sivas, 1892. Every choice in young Ahmet\'s life — caught between family, love, and homeland — carries an emotional cost.' },
        'g.wishlist':   { TR: 'İstek Listesine Ekle',  EN: 'Add to Wishlist' },
        'g3.status':    { TR: 'Yakında',                EN: 'Coming Soon' },
        'g3.dev':       { TR: 'Abdullah K. & Emirhan K.',               EN: 'Abdullah K. & Emirhan K.' },
        'g3.desc':      { TR: 'Telefonunuza gelen tek bir mesajla sıradan vardiya karabasan olur. Dünyada bir ilk: yerel AI, her kararınıza göre sizi tehdit eden, manipüle eden psikolojik bir gerilim deneyimi.',
                          EN: 'A single message on your phone turns an ordinary shift into a nightmare. A world first: a local AI that dynamically threatens and manipulates you based on every decision you make.' },
        'bs.steam':     { TR: 'Steam\'de İncele',       EN: 'View on Steam' },

        'team.tag':     { TR: 'Arkasındaki İsimler',   EN: 'The People Behind' },
        'team.title':   { TR: 'Ekibimiz',              EN: 'Our Team' },
        't1.role':      { TR: 'Kurucu & Oyun AI Geliştiricisi',              EN: 'Founder & Game AI Developer' },
        't1.bio':       { TR: 'Vortexon Studios kurucusu. Market is Fine\'ı tek başına geliştirip Steam\'de yayınladı. Vatan ve The Black Shift\'in hikaye dünyasının yaratıcısı, teknik mimarı, motor programcısı ve oyun içi yapay zeka sistemlerinin geliştiricisi.',
                          EN: 'Founder of Vortexon Studios. Solo-developed and published Market is Fine on Steam. Creator of the story worlds, technical architect, engine programmer, and in-game AI systems developer for Vatan and The Black Shift.' },
        't2.role':      { TR: 'Kreatif Direktör & Oyun AI Geliştiricisi', EN: 'Creative Director & Game AI Developer' },
        't2.bio':       { TR: 'Stüdyonun yaratıcı beyni ve fikir üreticisi. Oyun tasarımı, konsept geliştirme ve yaratıcı yönlendirmeden sorumlu. Vatan ve The Black Shift\'in diyalogları ve yapay zeka davranış sistemlerinin tasarımcısı.',
                          EN: 'The creative brain and idea generator of the studio. Responsible for game design, concept development, and creative direction. Designer of the dialogues and AI behavior systems for Vatan and The Black Shift.' },

        'contact.tag':   { TR: 'Yatırımcı İlişkileri',  EN: 'Investor Relations' },
        'contact.title': { TR: 'İletişime Geçin',       EN: 'Get in Touch' },
        'contact.desc':  { TR: 'The Black Shift projemiz için yatırım ortaklıklarına açığız. Bizimle iletişime geçin ve oyun tarihindeki ilk davranışsal AI devriminde pay sahibi olun.',
                           EN: 'We\'re open to investment partnerships for The Black Shift. Contact us and become a stakeholder in gaming\'s first behavioral AI revolution.' },
        'form.name':     { TR: 'Ad Soyad / Şirket',     EN: 'Name / Company' },
        'form.email':    { TR: 'E-Posta',               EN: 'Email' },
        'form.subject':  { TR: 'Konu',                  EN: 'Subject' },
        'form.opt1':     { TR: 'The Black Shift Yatırım Fırsatları',    EN: 'The Black Shift Investment' },
        'form.opt2':     { TR: 'Pitch Deck Talebi',                     EN: 'Pitch Deck Request' },
        'form.opt3':     { TR: 'Yayıncılık / Ortaklık',                 EN: 'Publishing / Partnership' },
        'form.opt4':     { TR: 'Diğer',                                 EN: 'Other' },
        'form.msg':      { TR: 'Mesajınız',             EN: 'Your Message' },
        'form.submit':   { TR: 'Gönder & Pitch Deck Al', EN: 'Submit & Get Pitch Deck' },

        'footer.copy':  { TR: '© 2026 Vortexon Studios. Tüm hakları saklıdır.',
                          EN: '© 2026 Vortexon Studios. All rights reserved.' },
        'toast.title':  { TR: 'Mesaj gönderildi!',     EN: 'Message sent!' },
        'toast.desc':   { TR: 'Pitch Deck ile birlikte en kısa sürede döneceğiz.',
                          EN: 'We\'ll get back to you shortly with our Pitch Deck.' },
    };

    function applyLang() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!T[key]) return;
            el.classList.add('i18n-fade');
            setTimeout(() => {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // skip
                } else if (el.tagName === 'OPTION') {
                    el.textContent = T[key][lang];
                } else {
                    el.textContent = T[key][lang];
                }
                el.classList.remove('i18n-fade');
            }, 200);
        });
    }

    const langBtn = document.getElementById('lang-btn');
    const langCurrent = document.getElementById('lang-current');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            lang = lang === 'TR' ? 'EN' : 'TR';
            langCurrent.textContent = lang === 'TR' ? 'EN' : 'TR';
            document.documentElement.lang = lang.toLowerCase();
            applyLang();
        });
    }

    // ─── NAVBAR SCROLL ───────────────────────────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ─── MOBILE MENU ─────────────────────────────────────
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // ─── ACTIVE NAV ON SCROLL ────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const allNavLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                allNavLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-10% 0px -50% 0px' });

    sections.forEach(s => navObserver.observe(s));

    // ─── SCROLL REVEAL ───────────────────────────────────
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        revealObserver.observe(el);
    });

    // ─── SMOOTH SCROLL ───────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ─── FORM HANDLING ───────────────────────────────────
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>' + (lang === 'TR' ? 'Gönderiliyor...' : 'Sending...') + '</span>';

            const data = new FormData(form);
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    btn.disabled = false;
                    btn.innerHTML = originalHTML;
                    form.reset();
                    if (toast) {
                        toast.classList.add('show');
                        setTimeout(() => toast.classList.remove('show'), 5000);
                    }
                } else {
                    response.json()
                    .then(errData => {
                        btn.disabled = false;
                        btn.innerHTML = originalHTML;
                        if (errData && errData.errors) {
                            alert(errData.errors.map(error => error.message).join(", "));
                        } else {
                            alert(lang === 'TR' ? 'Bir hata oluştu.' : 'Oops! There was a problem submitting your form');
                        }
                    })
                    .catch(() => {
                        btn.disabled = false;
                        btn.innerHTML = originalHTML;
                        alert(lang === 'TR' ? 'Form bulunamadı veya sunucu hatası oluştu.' : 'Form not found or a server error occurred.');
                    });
                }
            })
            .catch(error => {
                btn.disabled = false;
                btn.innerHTML = originalHTML;
                alert(lang === 'TR' ? 'Bağlantı hatası oluştu.' : 'Oops! Connection error occurred');
            });
        });
    }
})();
