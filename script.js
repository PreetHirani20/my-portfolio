(function() {
    'use strict';
    
    // Disable scroll during load
    document.body.style.overflow = 'hidden';
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('loading');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => {
                    document.body.style.overflow = '';
                    // re-trigger scroll update just in case
                    ScrollTrigger.refresh();
                }, 800);
            }
        }, 2500);
    });

    const EASE = 'power4.out';

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    // SIMPLE DOT CURSOR (NO HOVER EFFECTS)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    const dot = document.getElementById('cursorDot');
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouch && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        });

        document.addEventListener('mouseleave', () => dot.style.opacity = '0');
        document.addEventListener('mouseenter', () => dot.style.opacity = '1');
    } else {
        if(dot) dot.style.display = 'none';
    }

    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }, opacity: 0, y: 60, duration: 0.9, ease: EASE });
    });
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.from(item, { scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none none' }, opacity: 0, x: -40, duration: 0.8, ease: EASE });
    });
    gsap.utils.toArray('.tech-orb').forEach((orb) => {
        gsap.from(orb, { 
            scrollTrigger: { trigger: orb, start: 'top 90%', toggleActions: 'play none none none' }, 
            opacity: 0, scale: 0.8, duration: 0.5, ease: EASE 
        });
    });
    gsap.utils.toArray('.arch-cap').forEach((cap, i) => {
        gsap.from(cap, { scrollTrigger: { trigger: cap, start: 'top 88%', toggleActions: 'play none none none' }, opacity: 0, x: -30, duration: 0.7, ease: EASE });
    });
    // CONCEPT 1: PORTAL LOGIC
    const project1 = document.getElementById('project-1');
    const portalOverlay = document.getElementById('portal-overlay');
    const closePortalBtn = document.getElementById('closePortal');
    const portalHero = document.getElementById('portalHero');
    const portalContentInner = document.querySelector('.portal-content-inner');

    if (project1 && portalOverlay && window.Flip) {
        project1.addEventListener('click', () => {
            // Disable background scrolling
            document.body.style.overflow = 'hidden';

            portalOverlay.classList.remove('hidden');
            
            const originalVisual = project1.querySelector('.project-visual');
            const state = Flip.getState(originalVisual);
            
            portalHero.appendChild(originalVisual);
            
            originalVisual.style.position = 'absolute';
            originalVisual.style.inset = '0';
            originalVisual.style.width = '100%';
            originalVisual.style.height = '100%';
            originalVisual.style.borderRadius = '0';
            originalVisual.style.border = 'none';
            originalVisual.style.zIndex = '1';
            
            portalOverlay.classList.add('active');
            
            Flip.from(state, {
                duration: 0.8,
                ease: 'power4.inOut',
                onComplete: () => {
                    gsap.to(portalContentInner, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
                }
            });
        });

        closePortalBtn.addEventListener('click', () => {
            gsap.to(portalContentInner, { opacity: 0, y: 30, duration: 0.3, onComplete: () => {
                const visual = portalHero.querySelector('.project-visual');
                const state = Flip.getState(visual);
                
                project1.appendChild(visual); 
                
                visual.style.position = '';
                visual.style.inset = '';
                visual.style.width = '';
                visual.style.height = '';
                visual.style.borderRadius = '';
                visual.style.border = '';
                visual.style.zIndex = '';
                
                portalOverlay.classList.remove('active');
                
                Flip.from(state, {
                    duration: 0.8,
                    ease: 'power4.inOut',
                    onComplete: () => {
                        portalOverlay.classList.add('hidden');
                        portalOverlay.scrollTo(0, 0);
                        document.body.style.overflow = '';
                    }
                });
            }});
        });
    }

    // CONCEPT 3: DRAWER LOGIC
    const project2 = document.getElementById('project-2');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const closeDrawerBtn = document.getElementById('closeDrawer');

    if (project2 && drawerOverlay) {
        project2.addEventListener('click', () => {
            drawerOverlay.classList.remove('hidden');
            requestAnimationFrame(() => {
                document.body.classList.add('drawer-open');
                drawerOverlay.classList.add('active');
            });
        });

        closeDrawerBtn.addEventListener('click', () => {
            document.body.classList.remove('drawer-open');
            drawerOverlay.classList.remove('active');
            setTimeout(() => {
                drawerOverlay.classList.add('hidden');
            }, 600);
        });
    }

})();