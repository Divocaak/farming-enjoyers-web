gsap.registerPlugin(ScrollTrigger);

gsap.to("#cloud", {
    x: "190vh",
    scrollTrigger: {
        scrub: 2,
        pin: "#cloud"
    }
});

gsap.to("#sun", {
    x: "190vh",
    scrollTrigger: {
        scrub: true,
        endTrigger: "#moonTrigger",
        end: "#moonTrigger 40%",
        pin: "#sun"
    }
});

gsap.to("#moon", {
    x: "190vh",
    scrollTrigger: {
        scrub: true,
        markers: true,
        trigger: "#moonTrigger",
        start: "#moonTrigger 80%",
        endTrigger: "#plantTrigger",
        end: "#plantTrigger center",
        pin: "#moon",
    }
});

ScrollTrigger.create({
    trigger: '#areaTrigger',
    endTrigger: '#last',
    start: 'center center',
    pin: "#area",
    onEnter: () => gsap.to("#area", {
        opacity: 1,
        x: 600,
    }),
    onLeaveBack: () => gsap.to("#area", {
        opacity: 0,
        x: -600,
    }),
})


ScrollTrigger.create({
    trigger: '#seedTrigger',
    endTrigger: "#last",
    start: 'center center',
    pin: "#seed",
    onEnter: () => gsap.to("#seed", {
        opacity: 1,
        x: 600,
    }),
    onLeaveBack: () => gsap.to("#seed", {
        opacity: 0,
        x: -600,
    }),
})

ScrollTrigger.create({
    trigger: '#moonTrigger',
    start: 'center center',
    onEnter: () => gsap.to("#seed", {
        opacity: 0,
    }),
    onEnterBack: () => gsap.to("#seed", {
        opacity: 1,
    })
})

ScrollTrigger.create({
    trigger: '#plantTrigger',
    endTrigger: '#last',
    start: 'center center',
    pin: "#plant",
    onEnter: () => gsap.to("#plant", {
        opacity: 1,
    }),
    onLeaveBack: () => gsap.to("#plant", {
        opacity: 0,
    }),
})

ScrollTrigger.create({
    trigger: "#moonTrigger",
    start: "#moonTrigger 80%",
    endTrigger: "#plantTrigger",
    end: "#plantTrigger center",
    onEnter: function() {
        gsap.to("#night", {
            opacity: .4,
        })
        gsap.to("#sky", {
            toggleClass: "nightSky"
        })
    },
    onLeave: function() {
        gsap.to("#night", {
            opacity: 0,
        })
        gsap.to("#sky", {
            toggleClass: "daySky"
        })
    },
    onEnterBack: function() {
        gsap.to("#night", {
            opacity: .4,
        })
        gsap.to("#sky", {
            toggleClass: "nightSky"
        })
    },
    onLeaveBack: function() {
        gsap.to("#night", {
            opacity: 0,
        })
        gsap.to("#sky", {
            toggleClass: "daySky"
        })
    },
})

ScrollTrigger.create({
    trigger: '#economyTrigger',
    endTrigger: '#last',
    start: 'center center',
    pin: "#money",
    onEnter: function() {
        gsap.to("#money", {
            opacity: 1,
        })
        gsap.to("#plant", {
            opacity: 0,
        })
    },
    onLeaveBack: function() {
        gsap.to("#money", {
            opacity: 0,
        })
        gsap.to("#plant", {
            opacity: 1,
        })
    }
})