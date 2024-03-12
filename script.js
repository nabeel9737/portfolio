function anim() {
  var anim = document.querySelectorAll(".anim");
  anim.forEach((elem) => {
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.append(child);
    elem.innerHTML = "";
    elem.append(parent);
  });
}
function valuesetter() {
  // gsap.set("#nav a", {
  //   y: "-100px",
  //   opacity: 0,
  // });
  gsap.set("#home .anim .child", {
    y: "100%",
  });
  var character = document.querySelectorAll("#Visual>g").forEach((e) => {
    e.childNodes[1].childNodes[1].style.strokeDasharray =
      e.childNodes[1].childNodes[1].getTotalLength() + "px";
    e.childNodes[1].childNodes[1].style.strokeDashoffset =
      e.childNodes[1].childNodes[1].getTotalLength() + "px";
  });
}
function loaderanimation() {
  var tl = gsap.timeline();
  tl.from(".middle span", {
    x: 100,
    delay: 0.2,
    stagger: 0.1,
    duration: 0.5,
  });
  tl.to(".middle span,#loader .parent .child", {
    y: -100,
    duration: 1,
  });
  tl.to("#loader", {
    height: 0,
    duration: 1,
    ease: Expo.easeInOut,
  });
  tl.to("#loader-green", {
    height: "100vh",
    delay: -1.3,
    duration: 1,
    ease: Expo.easeInOut,
  });
  tl.to("#loader-green", {
    top: 0,
    height: 0,
    delay: -0.6,
    duration: 0.6,
    ease: Expo.Out,
    onComplete: () => {
      animateHomePage();
    },
  });
}
function animateHomePage() {
  var tl = gsap.timeline();
  // tl.to("#nav a", {
  //   y: "0px",
  //   opacity: 1,
  //   stagger: 0.1,
  //   duration: 1,
  // });
  tl.to("#home .anim .child", {
    y: 0,
    stagger: 0.2,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
  tl.to("#Visual>g>g>path,#Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 1.6,
  });
}

anim();
valuesetter();
loaderanimation();
