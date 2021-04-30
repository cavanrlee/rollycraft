window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 200) {
        const navanimhide = gsap.timeline();
        navanimhide.to("#main-header", {yPercent: -100, ease:"bounce", duration: 0.5})
        navanimhide.to("#back-to-top", {opacity: 1,yPercent: 0, ease:"power1", duration: 0.5})
  } else {
        const navanimshow = gsap.timeline();
        navanimshow.to("#main-header", {yPercent: 0, ease:"bounce", duration: 0.5})
        navanimshow.to("#back-to-top", {opacity: 0, yPercent: 200, ease:"power1", duration: 0.5})
  }
}
  function navdropdown() {
    var dropdown = document.getElementById("main-header"); 
    var movnav = document.getElementById("mobile-navigation"); 
    var navanimation1 = document.getElementById("line-one"); 
    var navanimation2 = document.getElementById("line-two"); 
    var navanimation3 = document.getElementById("line-three"); 
    
    if (dropdown.style.height <= "100px" ) {
        dropdown.style.height = "305px";
        navanimation1.style.width = "100%";
        navanimation1.style.transformOrigin = "center left";
        navanimation1.style.transform = "rotate(45deg)";
        navanimation2.style.opacity = "0";
        navanimation3.style.width = "100%";
        navanimation1.style.transformOrigin = "center left";
        navanimation3.style.transform = "rotate(-45deg) translate(-8px ,0)";
        movnav.style.transformOrigin = "15px 15px";
        movnav.style.transform = "rotate(-90deg) translateX(5px)";
    }
    else {
        dropdown.style.height = "100px";
        navanimation1.style.transform = "rotate(0deg)";
        navanimation2.style.opacity = "1";
        navanimation3.style.width = "50%";
        navanimation3.style.transform = "rotate(0deg) translate(0,12px)";
        movnav.style.transform = "rotate(0deg) translateX(0)";
    }      
  }

  function HeaderTextAnimation() {
        const h1 = gsap.timeline();
        h1.from(".h-anim-1",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});

            ScrollTrigger.create({
              animation: h1,
              trigger: "h-anim-1",
              start: "top top",
              end: "+=500",
              scrub: 1,
        });
            const h2 = gsap.timeline();
        h2.from(".h-anim-2",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});
        h2.from(".div-anim1",{opacity: 0, yPercent: -100, ease:"power4", duration: 0.5});

            ScrollTrigger.create({
              animation: h2,
              trigger: ".h-anim-2",
              start: "top bottom",
              end: "+=500",
              scrub: 1,
        });
        const h3 = gsap.timeline();
        h3.from(".h-anim-3",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});
        h3.from(".div-anim2",{opacity: 0, yPercent: -100, ease:"power4", duration: 0.5});

            ScrollTrigger.create({
              animation: h3,
              trigger: ".h-anim-3",
              start: "top bottom",
              end: "+=500",
              scrub: 1,
        });
        const h4 = gsap.timeline();
        h4.from(".h-anim-4",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});


            ScrollTrigger.create({
              animation: h4,
              trigger: ".h-anim-4",
              start: "top bottom",
              end: "+=500",
              scrub: 1,
        });  

        const h5 = gsap.timeline();
        h5.from(".h-anim-5",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});
        h5.from(".div-anim3",{opacity: 0, yPercent: -100, ease:"power4", duration: 0.5});

            ScrollTrigger.create({
              animation: h5,
              trigger: ".h-anim-5",
              start: "top bottom",
              end: "+=500",
              scrub: 1,
        }); 
    }

//               SliderBox animation               //


  gsap.defaults({ease: "power4", duration: 1});

    const projectstimeline = gsap.timeline();
    projectstimeline.to("#ps",{strokeDashoffset: 630 - (630 * 90) / 100},"-=0.5")
    .to("#pr",{strokeDashoffset: 630 - (630 * 65) / 100},"-=0.5")
    .to("#html",{strokeDashoffset: 630 - (630 * 85) / 100 },"-=0.5")

      function movesone() {
            const projectstimeline1 = gsap.timeline();
            projectstimeline1.to("#slider-box", {xPercent: 0, ease:"slow"})
            .to("#ps",{strokeDashoffset: 630 - (630 * 90) / 100},"-=0.5")
            .to("#pr",{strokeDashoffset: 630 - (630 * 65) / 100},"-=0.5")
            .to("#html",{strokeDashoffset: 630 - (630 * 85) / 100 },"-=0.5")
      }
      function movestwo() {
            const projectstimeline2 = gsap.timeline();
            projectstimeline2.to("#slider-box", {xPercent: -100, ease:"slow"})
            .to("#css3",{strokeDashoffset: 630 - (630 * 85) / 100},"-=0.5")
            .to("#javascript",{strokeDashoffset: 630 - (630 * 75) / 100},"-=0.5")
            .to("#JS6",{strokeDashoffset: 630 - (630 * 75) / 100},"-=0.5")
      }
      function movesthree() {
            const projectstimeline3 = gsap.timeline();
            projectstimeline3.to("#slider-box", {xPercent: -200, ease:"slow"})
            .to("#PHP",{strokeDashoffset: 630 - (630 * 50) / 100 },"-=0.5")
            .to("#jQuery",{strokeDashoffset: 630 - (630 * 75) / 100},"-=0.5")
            .to("#dotNET",{strokeDashoffset: 630 - (630 * 60) / 100},"-=0.5")
      }
      function movesfour() {
            const projectstimeline4 = gsap.timeline();
            projectstimeline4.to("#slider-box", {xPercent: -300, ease:"slow"})
            .to("#SQL",{strokeDashoffset: 630 - (630 * 70) / 100},"-=0.5")
            .to("#java",{strokeDashoffset: 630 - (630 * 45) / 100 },"-=0.5")
            .to("#autocad",{strokeDashoffset: 630 - (630 * 20) / 100},"-=0.5")
      }


      function showmodal(img) {
            document.getElementById("image-show").src = img;
            const viewmodal = gsap.timeline();
            viewmodal.to("#web-modal-design", {yPercent: -100, ease:"power4"})
            viewmodal.from("#image-view", {yPercent: 100, ease:"power4"},"-=0.8")

            
      }
      function closemodal() {
            const closedmodal = gsap.timeline();
            closedmodal.to("#web-modal-design", {yPercent: 0, ease:"expo"})
      }
      function next() {
            document.getElementById("dot4").checked = "true";
            movesfour();
      }
      function previous() {
            document.getElementById("dot1").checked = "true";
            movesone(); 
      }

function MyBannerAmination() {
          var typewritter = new TimelineMax({paused:true});
          
            typewritter.fromTo(".semi-colon", 0.5, {opacity: 0}, {opacity: 1,repeat: 2 ,ease: SteppedEase.config(3)}, 0); 
            typewritter.fromTo(".semi-colon .colon", 1, {top: "220px",opacity: 1}, {top: "0",opacity:0,ease: "power4"}, 1.5); 
            typewritter.fromTo("#profile-img", 0.5, {opacity: 0}, {opacity: 1,ease: "power4"}, 2);      
            typewritter.fromTo(".banner-divider", 1, {yPercent: -100}, {yPercent: 0,ease: "power4"}, 2);      
            typewritter.fromTo(".blinking", 0.5, {color: "transparent"}, {color: "#ffffff",repeat: 2 ,ease: SteppedEase.config(3)}, 2.5);    
            typewritter.fromTo(".anim-typ­ewriter1", 0.5, {opacity: 0}, {opacity: 1,ease: "power4"}, 4);
            typewritter.fromTo(".anim-typ­ewriter1", 5, {width: "0"}, {width: "345px",ease: SteppedEase.config(7)}, 4);
            typewritter.fromTo(".anim-typ­ewriter1", 0.5, {borderRightColor: "#ffffff"}, {borderRightColor: "transparent",repeat: 10,ease: SteppedEase.config(7)}, 4);
            typewritter.fromTo(".banner-light", 1, {width: 0}, {width: "321px",ease: "power4"}, 9);    
            typewritter.fromTo(".banner-dark", 1, {width: 0}, {width: "20%",ease: "power4"}, 9);  
            typewritter.fromTo(".anim-typ­ewriter2", 5, {width: "0"}, {width: "345px",ease: SteppedEase.config(9)}, 10);
            typewritter.fromTo(".anim-typ­ewriter2", 0.5, {borderRightColor: "transparent"}, {borderRightColor: "#ffffff",repeat: -1,ease: SteppedEase.config(9)}, 10);
            typewritter.fromTo(".banner-qouets", 1, {opacity: 0, yPercent: 200}, {opacity: 1, yPercent: 0,ease: "slow"}, 14);      

            typewritter.play();
            const swing = gsap.timeline();
            swing.to(".arrow-anim", {yPercent: 70, ease:"power1",yoyo: true, repeat: -1, duration: 1});
}


    
      let scrollMaster = gsap.timeline().to("#scroll-progress", {width: "100%"})  
      ScrollTrigger.create({
            animation: scrollMaster,
            trigger: "#root",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
      });
      


// MAIN CONTROL ANIMATION //

MyBannerAmination();
HeaderTextAnimation();














/*

//               GSAP animation               //

gsap.registerPlugin(ScrollTrigger);


gsap.to("#header-main-logo", {
    scrollTrigger: {
      trigger: "#header-main-logo",
      start: "top top",
      scrub: 1
    } ,
    x: -150,
    rotation: -180
});


// back to top Arrow Animations 
gsap.to(".arrows-up-down img", {
    scrollTrigger: {
      trigger: ".arrows-up-down img",
      start: "center",
      scrub: 1,
      ease: "fast"
  } ,
  rotation: 180,
  duration: 3
});
gsap.to(".arrow", {
scrollTrigger: {
      trigger: ".arrow",
      start: "center",
      scrub: 1,
      ease: "fast"
} ,
      rotationX: 180,
      y:-25,
      opacity: 1
      });
gsap.to(".arrows-up-down", {
      scrollTrigger: {
        trigger: ".arrows-up-down",
        start: "top bottom",
        ease: "slow",
        scrub: 2
} ,
y:-30,
});



function bannerAnimation1() {

  //GSAP animation Banner
  gsap.defaults({ease: "ease", duration: 2});
  const bannertimeline1 = gsap.timeline();
  bannertimeline1
  .from(".sections-banner-container .vector:nth-child(7)", {yPercent: -5},"-=1")
  .from(".sections-banner-container .vector:nth-child(6)", {yPercent: -5},"-=1")
  .from(".sections-banner-container .vector:nth-child(5)", {yPercent: -5},"-=1")
  .from(".sections-banner-container .vector:nth-child(4)", {yPercent: -5},"-=1")
  .from(".sections-banner-container .vector:nth-child(3)", {yPercent: -5},"-=1")
  .from(".sections-banner-container .vector:nth-child(2)", {yPercent: -5},"-=1")

    ScrollTrigger.create({
          animation: bannertimeline1,
          trigger: ".sections-banner-container",
          start: "top top",
          end: "+=1000",
          scrub: 3,
    });

  }

  
function bannerAnimation2() {

//GSAP animation Banner
const bannertimeline2 = gsap.timeline();
bannertimeline2
.from(".banner-anim1", {opacity: 0,left: 0, width: 100, xPercent: 100})
.from(".ban-animtext1", {opacity: 0, xPercent: 100})
.from(".ban-animtext2", {opacity: 0, xPercent: 100})
.from(".ban-animtext3", {opacity: 0, xPercent: 100})
.from(".ban-animtext4", {opacity: 0, xPercent: 100})
.from(".ban-animtext4 .banner-dark", { opacity: 0, xPercent: 100, width: 100})
.from("#my-logo-img", {opacity: 0, xPercent: -100})
.from(".ban-animtext5", {opacity: 0, yPercent: -100})
.from(".ban-animtext6", {opacity: 0, yPercent: -100});



  ScrollTrigger.create({
        animation: bannertimeline2,
        trigger: ".sections-banner-container",
        start: "top top",
        end: "+=1000",
        scrub: 3,
        pin: true,
        anticipatePin: 1
  });

}



function projectAnimation() {

      //GSAP animation PROJECTS 

    const projectstimeline = gsap.timeline();
    projectstimeline.from(".prone", {opacity: 0,yPercent: 50})
    .from(".prtwo", {opacity: 0, yPercent: 50})
    .from(".prthree", {opacity: 0, yPercent: 50})
    .from(".prfour", {opacity: 0, yPercent: 50,})
    .from(".prfive", {opacity: 0, yPercent: 50})
    .from(".prsix", {opacity: 0, yPercent: 50})
    .from(".prseven", {opacity: 0, yPercent: 50})
    .from(".preight", {opacity: 0, yPercent: 50})

      ScrollTrigger.create({
        animation: projectstimeline,
        trigger: ".section-two",
        start: "top center",
        end: "+=1000",
        scrub: 3
      });


}


function sectionAnimation() {



//gsap.defaults({ease: "none", duration: 2});

const slidetimeline = new TimelineMax({duration: 2, ease: "ease"});
slidetimeline
.from(".animate1", {opacity: 0,right: 0, width: 100, xPercent: 100})
.from(".textanimate1", {opacity: 0,yPercent: 100})
.from(".animate2", {opacity: 0,right: 0, width: 100, xPercent: 100})
.from(".textanimate2", {opacity: 0,yPercent: 100})
.from(".resume-button", {opacity: 0,yPercent: 80})
.from(".p-one", {yPercent: 100},"+=2.5")
.to("#ps",1.5,{strokeDashoffset: 630 - (630 * 90) / 100},"-=0.5")
.to("#pr",1.5,{strokeDashoffset: 630 - (630 * 65) / 100},"-=0.5")
.to("#html",1.5,{strokeDashoffset: 630 - (630 * 85) / 100 },"-=0.5")
.from(".p-two", {yPercent: 100},"+=2.5")
.to("#css3",1.5,{strokeDashoffset: 630 - (630 * 85) / 100},"-=0.5")
.to("#javascript",1.5,{strokeDashoffset: 630 - (630 * 75) / 100},"-=0.5")
.to("#JS6",1.5,{strokeDashoffset: 630 - (630 * 75) / 100},"-=0.5")
.from(".p-three", {yPercent: 100},"+=2.5")
.to("#PHP",1.5,{strokeDashoffset: 630 - (630 * 50) / 100 },"-=0.5")
.to("#jQuery",1.5,{strokeDashoffset: 630 - (630 * 75) / 100},"-=0.5")
.to("#dotNET",1.5,{strokeDashoffset: 630 - (630 * 60) / 100},"-=0.5")
.from(".p-four", {yPercent: 100},"+=2.5")
.to("#SQL",1.5,{strokeDashoffset: 630 - (630 * 70) / 100},"-=0.5")
.to("#java",1.5,{strokeDashoffset: 630 - (630 * 45) / 100 },"-=0.5")
.to("#autocad",1.5,{strokeDashoffset: 630 - (630 * 20) / 100},"-=0.5")


  ScrollTrigger.create({
    animation: slidetimeline,
    trigger: ".section-three",
    start: "top top",
    end: "+=3000",
    pin: true,
    scrub: 3,
    anticipatePin: 1
  });



}


*/
