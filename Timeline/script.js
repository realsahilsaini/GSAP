var timline = gsap.timeline()


timline.to('#box1', {
  duration: 2,
  x: 1000,
  delay: 1,
  scale: 0.5,
  rotate: 360,
  backgroundColor: 'orange',
})

timline.to('#box2', {
  duration: 2,
  x: 1000,
  scale: 0.5,
  rotate: 360,
  backgroundColor: 'gray',
})

timline.to('#box3', {
  duration: 2,
  x: 1000,
  scale: 0.5,
  rotate: 360,
  backgroundColor: 'green',
})
