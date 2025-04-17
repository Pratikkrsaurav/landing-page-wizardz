function page1Animation(){

let tl = gsap.timeline()

tl.from('nav h1, nav h4, nav button',{
    y:-30,
    opacity:0,
    delay: 0.6,
    duration: 0.8,
    stagger: 0.13,
})

tl.from('.center-part1',{
    x: -200,
    opacity:0,
    duration: 0.4,
})

tl.from('.center-part1 button',{
    opacity:0,
    duration: 0.4,
})

tl.from('.center-part2 img',{
    opacity:0,
    duration: 0.4,
    x: 200,
}, '-=0.7')

tl.from('.section1bottom img', {
    y: 30,
    opacity:0,
    duration: 0.6,
    stagger: 0.15,
})
}

page1Animation()


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: 'body',
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
    }
})

tl2.from('.services ', {
    y: -30,
    opacity:0,
    duration: 0.5,
    })

    tl2.from('.elem.line1.left', {
        x: -300,
        opacity:0,
        duration: 1,

    },'anime1')

    tl2.from('.elem.line1.right', {
        x:300,
        opacity:0,
        duration: 1,

    },'anime1')

    
    tl2.from('.elem.line2.left', {
        x: -300,
        opacity:0,
        duration: 1,

    },'anime2')

    tl2.from('.elem.line2.right', {
        x:300,
        opacity:0,
        duration: 1, 
    },'anime2')