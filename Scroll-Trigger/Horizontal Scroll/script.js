gsap.to('#page2 h1',{
  transform: 'translateX(-130%)',
  scrollTrigger:{
    trigger: '#page2 h1',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -100%',
    scrub: 4,
    pin: true,
  }
})

