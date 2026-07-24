/* Gayatri Herbals — Lenis smooth scrolling + extra GSAP animations.
   Loads after gsap/ScrollTrigger/main.js (ScrollTrigger already registered there). */

(function () {
    if (typeof Lenis === "undefined" || typeof gsap === "undefined") return;

    /* Lenis + ScrollTrigger, kept in sync via the GSAP ticker */
    var lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true
    });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    window.lenis = lenis;

    /* Same-page anchor links glide through Lenis instead of jumping */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        a.addEventListener("click", function (e) {
            var target = document.querySelector(id);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, { offset: -20, duration: 1.4 });
        });
    });

    /* Product page hero entrance (no AOS there) */
    var pv = document.querySelector(".section-banner-product");
    if (pv) {
        gsap.from(pv.querySelector(".box-img-50-50"), {
            x: -60, autoAlpha: 0, duration: 1, ease: "power3.out", delay: 0.15
        });
        gsap.from(pv.querySelectorAll(".box-text-50-50 > *"), {
            y: 40, autoAlpha: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.3
        });
    }

    /* Subtle scroll parallax on the value-chain images.
       (Product cards are skipped on purpose — their hover zoom is CSS transform.) */
    if (window.matchMedia("(min-width: 992px)").matches) {
        gsap.utils.toArray(".box-img-item-culture img").forEach(function (img) {
            gsap.fromTo(img,
                { yPercent: -6, scale: 1.12 },
                {
                    yPercent: 6,
                    scale: 1.12,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
        });
    }

    /* Bottom marquee: slight scroll-velocity skew for a lively feel */
    var marquee = document.querySelector(".section-marquesine-bottom .marquee_text");
    if (marquee) {
        var proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(marquee, "skewX", "deg"),
            clamp = gsap.utils.clamp(-6, 6);
        ScrollTrigger.create({
            onUpdate: function (self) {
                var skew = clamp(self.getVelocity() / -400);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {
                        skew: 0, duration: 0.7, ease: "power3",
                        overwrite: true,
                        onUpdate: function () { skewSetter(proxy.skew); }
                    });
                }
            }
        });
    }
})();
