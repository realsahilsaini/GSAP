gsap.from('#page1 #circle',{
  scale:0,
  delay:1,
  duration:2.5,
  rotate:720,
  ease:'elastic',
})

gsap.from('#page2 #circle',{
  scale:0,
  duration:1,
  rotate:320,
  scrollTrigger:{
    trigger:'#page2 #circle',
    scroller: 'body',
    markers:true,
    start:'top 60%',
    end:'top 30%',
    scrub: 2,
    toggleActions:'restart none none none',
  },
})