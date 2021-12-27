gsap.registerPlugin(ScrollTrigger);

/* gsap.to(".square", {
    x: "100vw", //translate on x by 700
    duration: 8,
    scrollTrigger: {
        trigger: ".square",
        start: "top 60%", //squre end meets view 60%
        end: "top 40%", //finish at
        markers: true,
        //toggleClass: "red", //change class

        // onEnter, onLeave, onEnterBack, onLeaveBack
        // play, restart, reverse, pause, resume, reset, complete, none
        toggleActions: "restart pause resume reset",
        scrub: 1, // bool = animate only when scrolling, int = seconds to animate after stop scroll
        pin: ".square2" // bool = keeps y pos of trigger || .class pins .class obj
    }
}) */

// ScrollTriegger.create vs {} => create can use event methods
/* const timeline = gsap.timeline(ScrollTrigger.create({
    trigger: ".square",
    markers: true,
    start: "top 80%",
    end: "top 3O%",
    scrub: 1,
    onEnter: () => console.log("onEnter"),
    onLeave: () => console.log("onLeave"),
    onEnterBack: () => console.log("onEnterBack"),
    onLeaveBack: () => console.log("onLeaveBack"),
    //onUpdate: (self) => console.log(self)
})); */


// use timeline when chaingin animations, so you dont have to sum the durations to get delay
// NOTE delays:
/* gsap.to(".box", { x: 500, duration: 2 });
gsap.to(".box", { y: 500, duration: 3, delay: 2 });
gsap.to(".box", { x: -100, duration: 3, delay: 5 }); */
// NOTE timeline:
/* timeline.to(".square", { x: 500, duration: 2 })
    .to(".square", { y: 200, duration: 3 })
    .to(".square", { x: 0, duration: 3 }); */


/* const timeline = gsap.timeline();
timeline.to("#area", {
    x: "15vw",
    opacity: 1,
    duration: 2,
    scrollTrigger: {
        trigger: "#areaTrigger",
        markers: true,
        start: "top center",
        end: "top top",
        scrub: 1,
        pin: "#area"
    }
}) */

/* gsap.to("#area", {
    opacity: 1,
    x: 300,
    scrollTrigger: {
        trigger: "#area",
        start: "top 60%",
        end: "top top",
        markers: true,
        //toggleClass: "red", //change class

        // onEnter, onLeave, onEnterBack, onLeaveBack
        // play, restart, reverse, pause, resume, reset, complete, none
        //toggleActions: "play none none none",
        scrub: 1, // bool = animate only when scrolling, int = seconds to animate after stop scroll
    }
}) */

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