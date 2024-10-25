gsap.to('#page2 #main-img',{
  width: "100%",
  scrollTrigger:{
    trigger: '#page2',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -30%',
    scrub: 1,
    pin: true,
  }
})


gsap.to('#page2 h1',{
  opacity: "100%",

  scrollTrigger:{
    trigger: '#page2',
    scroller: 'body',
    markers: true,
    start: 'top 0%',
    end: 'top -30%',
    scrub: 1,
    // pin: true,
  }
}
)





