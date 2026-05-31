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
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'visual-placeholder';
            placeholder.style.width = originalVisual.offsetWidth + 'px';
            placeholder.style.height = originalVisual.offsetHeight + 'px';
            project1.insertBefore(placeholder, originalVisual);
            
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
                absolute: true,
                onComplete: () => {
                    gsap.to(portalContentInner, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
                }
            });
        });

        closePortalBtn.addEventListener('click', () => {
            gsap.to(portalContentInner, { opacity: 0, y: 30, duration: 0.3, onComplete: () => {
                const visual = portalHero.querySelector('.project-visual');
                const state = Flip.getState(visual);
                
                const placeholder = project1.querySelector('.visual-placeholder');
                if (placeholder) {
                    placeholder.replaceWith(visual);
                } else {
                    project1.appendChild(visual);
                }
                
                visual.style.position = '';
                visual.style.inset = '';
                visual.style.width = '';
                visual.style.height = '';
                visual.style.borderRadius = '';
                visual.style.border = '';
                visual.style.zIndex = '';
                
                project1.style.overflow = 'visible';
                portalOverlay.classList.remove('active');
                
                Flip.from(state, {
                    duration: 0.8,
                    ease: 'power4.inOut',
                    absolute: false,
                    scale: true,
                    onComplete: () => {
                        project1.style.overflow = '';
                        portalOverlay.classList.add('hidden');
                        portalOverlay.scrollTo(0, 0);
                        document.body.style.overflow = '';
                    }
                });
            }});
        });
    }

    // CONCEPT 2: PORTAL 2 LOGIC (DropGen AI)
    const project2 = document.getElementById('project-2');
    const portalOverlay2 = document.getElementById('portal-overlay-2');
    const closePortalBtn2 = document.getElementById('closePortal2');
    const portalHero2 = document.getElementById('portalHero2');
    const portalContentInner2 = document.querySelector('.portal-content-inner-2');

    if (project2 && portalOverlay2 && window.Flip) {
        project2.addEventListener('click', () => {
            // Disable background scrolling
            document.body.style.overflow = 'hidden';

            portalOverlay2.classList.remove('hidden');
            
            const originalVisual = project2.querySelector('.project-visual');
            const state = Flip.getState(originalVisual);
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'visual-placeholder';
            placeholder.style.width = originalVisual.offsetWidth + 'px';
            placeholder.style.height = originalVisual.offsetHeight + 'px';
            project2.insertBefore(placeholder, originalVisual);
            
            portalHero2.appendChild(originalVisual);
            
            originalVisual.style.position = 'absolute';
            originalVisual.style.inset = '0';
            originalVisual.style.width = '100%';
            originalVisual.style.height = '100%';
            originalVisual.style.borderRadius = '0';
            originalVisual.style.border = 'none';
            originalVisual.style.zIndex = '1';
            
            portalOverlay2.classList.add('active');
            
            Flip.from(state, {
                duration: 0.8,
                ease: 'power4.inOut',
                absolute: true,
                onComplete: () => {
                    gsap.to(portalContentInner2, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
                }
            });
        });

        closePortalBtn2.addEventListener('click', () => {
            gsap.to(portalContentInner2, { opacity: 0, y: 30, duration: 0.3, onComplete: () => {
                const visual = portalHero2.querySelector('.project-visual');
                const state = Flip.getState(visual);
                
                const placeholder = project2.querySelector('.visual-placeholder');
                if (placeholder) {
                    placeholder.replaceWith(visual);
                } else {
                    project2.appendChild(visual);
                }
                
                visual.style.position = '';
                visual.style.inset = '';
                visual.style.width = '';
                visual.style.height = '';
                visual.style.borderRadius = '';
                visual.style.border = '';
                visual.style.zIndex = '';
                
                project2.style.overflow = 'visible';
                portalOverlay2.classList.remove('active');
                
                Flip.from(state, {
                    duration: 0.8,
                    ease: 'power4.inOut',
                    absolute: false,
                    scale: true,
                    onComplete: () => {
                        project2.style.overflow = '';
                        portalOverlay2.classList.add('hidden');
                        portalOverlay2.scrollTo(0, 0);
                        document.body.style.overflow = '';
                    }
                });
            }});
        });


    }


    // CONCEPT 3: PORTAL 3 LOGIC (AI Outreach System)
    const project3 = document.getElementById('project-3');
    const portalOverlay3 = document.getElementById('portal-overlay-3');
    const closePortalBtn3 = document.getElementById('closePortal3');
    const portalHero3 = document.getElementById('portalHero3');
    const portalContentInner3 = document.querySelector('.portal-content-inner-3');

    if (project3 && portalOverlay3 && window.Flip) {
        project3.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            portalOverlay3.classList.remove('hidden');
            
            const originalVisual = project3.querySelector('.project-visual');
            const state = Flip.getState(originalVisual);
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'visual-placeholder';
            placeholder.style.width = originalVisual.offsetWidth + 'px';
            placeholder.style.height = originalVisual.offsetHeight + 'px';
            project3.insertBefore(placeholder, originalVisual);
            
            portalHero3.appendChild(originalVisual);
            
            originalVisual.style.position = 'absolute';
            originalVisual.style.inset = '0';
            originalVisual.style.width = '100%';
            originalVisual.style.height = '100%';
            originalVisual.style.borderRadius = '0';
            originalVisual.style.border = 'none';
            originalVisual.style.zIndex = '1';
            
            portalOverlay3.classList.add('active');
            
            Flip.from(state, {
                duration: 0.8,
                ease: 'power4.inOut',
                absolute: true,
                onComplete: () => {
                    gsap.to(portalContentInner3, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
                }
            });
        });

        closePortalBtn3.addEventListener('click', () => {
            gsap.to(portalContentInner3, { opacity: 0, y: 30, duration: 0.3, onComplete: () => {
                const visual = portalHero3.querySelector('.project-visual');
                const state = Flip.getState(visual);
                
                const placeholder = project3.querySelector('.visual-placeholder');
                if (placeholder) {
                    placeholder.replaceWith(visual);
                } else {
                    project3.appendChild(visual);
                }
                
                visual.style.position = '';
                visual.style.inset = '';
                visual.style.width = '';
                visual.style.height = '';
                visual.style.borderRadius = '';
                visual.style.border = '';
                visual.style.zIndex = '';
                
                project3.style.overflow = 'visible';
                portalOverlay3.classList.remove('active');
                
                Flip.from(state, {
                    duration: 0.8,
                    ease: 'power4.inOut',
                    absolute: false,
                    scale: true,
                    onComplete: () => {
                        project3.style.overflow = '';
                        portalOverlay3.classList.add('hidden');
                        portalOverlay3.scrollTo(0, 0);
                        document.body.style.overflow = '';
                    }
                });
            }});
        });
    }


    // CONCEPT 4: PORTAL 4 LOGIC (Maestera AI Onboarding)
    const project4 = document.getElementById('project-4');
    const portalOverlay4 = document.getElementById('portal-overlay-4');
    const closePortalBtn4 = document.getElementById('closePortal4');
    const portalHero4 = document.getElementById('portalHero4');
    const portalContentInner4 = document.querySelector('.portal-content-inner-4');

    if (project4 && portalOverlay4 && window.Flip) {
        project4.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
            portalOverlay4.classList.remove('hidden');
            
            const originalVisual = project4.querySelector('.project-visual');
            const state = Flip.getState(originalVisual);
            // Create placeholder
            const placeholder = document.createElement('div');
            placeholder.className = 'visual-placeholder';
            placeholder.style.width = originalVisual.offsetWidth + 'px';
            placeholder.style.height = originalVisual.offsetHeight + 'px';
            project4.insertBefore(placeholder, originalVisual);
            
            portalHero4.appendChild(originalVisual);
            
            originalVisual.style.position = 'absolute';
            originalVisual.style.inset = '0';
            originalVisual.style.width = '100%';
            originalVisual.style.height = '100%';
            originalVisual.style.borderRadius = '0';
            originalVisual.style.border = 'none';
            originalVisual.style.zIndex = '1';
            
            portalOverlay4.classList.add('active');
            
            Flip.from(state, {
                duration: 0.8,
                ease: 'power4.inOut',
                absolute: true,
                onComplete: () => {
                    gsap.to(portalContentInner4, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' });
                }
            });
        });

        closePortalBtn4.addEventListener('click', () => {
            gsap.to(portalContentInner4, { opacity: 0, y: 30, duration: 0.3, onComplete: () => {
                const visual = portalHero4.querySelector('.project-visual');
                const state = Flip.getState(visual);
                
                const placeholder = project4.querySelector('.visual-placeholder');
                if (placeholder) {
                    placeholder.replaceWith(visual);
                } else {
                    project4.appendChild(visual);
                }
                
                visual.style.position = '';
                visual.style.inset = '';
                visual.style.width = '';
                visual.style.height = '';
                visual.style.borderRadius = '';
                visual.style.border = '';
                visual.style.zIndex = '';
                
                project4.style.overflow = 'visible';
                portalOverlay4.classList.remove('active');
                
                Flip.from(state, {
                    duration: 0.8,
                    ease: 'power4.inOut',
                    absolute: false,
                    scale: true,
                    onComplete: () => {
                        project4.style.overflow = '';
                        portalOverlay4.classList.add('hidden');
                        portalOverlay4.scrollTo(0, 0);
                        document.body.style.overflow = '';
                    }
                });
            }});
        });
    }
})();
