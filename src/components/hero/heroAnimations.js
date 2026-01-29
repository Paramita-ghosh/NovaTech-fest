import gsap from "gsap"

export const heroIntro = el => {
  const children = el.children
  
  gsap.set(children, { opacity: 0, y: 50, filter: "blur(10px)" })

  const tl = gsap.timeline({ defaults: { ease: "expo.out" } })

  tl.to(children, {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    stagger: 0.15,
    duration: 2,
    delay: 0.5
  })
  .fromTo(el, 
    { scale: 0.9, rotateX: 10 }, 
    { scale: 1, rotateX: 0, duration: 2.5, ease: "elastic.out(1, 0.75)" }, 
    0
  )
}