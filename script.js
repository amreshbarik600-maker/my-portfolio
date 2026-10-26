const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

function firstPageAnim(){
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: '-10',
    opacity:0,
    duration: 1.5,
    ease:Expo.easeInOut
  })
  .to(".boundinglem", {
    y: 0,
    ease:Expo.easeInOut,
    duration: 1.5,
    stagger: .2

  })
}



function circleMouseFollower() {
  const minicircle = document.querySelector("#minicircle");

  window.addEventListener("mousemove", function (dets) {
    minicircle.style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });

}

circleMouseFollower();
firstPageAnim();