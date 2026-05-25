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
})();