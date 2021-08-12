gsap.registerPlugin(ScrollTrigger);

gsap.from('#container .anim',{
    scrollTrigger:{
        trigger:'.heading',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1,
    y:30,
    ease:'expo.easeInOut'

})

gsap.from('.heroPage .animate',{
    scrollTrigger:{
        trigger:'.right-up',
        toggleActions: "play pause resume reverse",
    },
    stagger:.5,
    opacity:0,
    duration:1,
    y:30,
    ease:'expo.easeInOut'

})