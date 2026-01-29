import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const aboutReveal = (section) => {
  if (!section) return;

  ScrollTrigger.getAll().forEach(t => {
    if (t.trigger === section) t.kill();
  });

  const content = section.querySelectorAll('h2, p, .inline-flex, .flex');
  const card = section.querySelector('.group');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 85%", 
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    }
  });

  tl.from(content, {
    y: 50,
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.1,
    duration: 1,
    ease: "power3.out"
  })
  .from(card, {
    x: 50,
    opacity: 0,
    filter: "blur(15px)",
    duration: 1.2,
    ease: "expo.out"
  }, "-=0.8");

  ScrollTrigger.refresh();
};