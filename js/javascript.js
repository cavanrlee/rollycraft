
// GSAP NAVIGATION HEADER ANIMATION

$(document).ready(function() {
      $("#navigation-header li a").click(function() {
            $("#navigation-header li").removeClass();
            $($(this).parent()).addClass(" active");
      });

      $("#icon-nav li a").click(function() {
            $("#icon-nav li").removeClass();
            $($(this).parent()).addClass(" active");
      });
});    
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 150) {
        const navhide = gsap.timeline();
        navhide.to("#main-header", {transform: "scale(0.90) translateY(10px)", backgroundColor: "#3f525dc2", ease:"power1", duration: 0.5})
        navhide.to("#back-to-top", {opacity: 1,yPercent: 0, ease:"slow", duration: 1});
  } else {
        const navshow = gsap.timeline();
        navshow.to("#main-header", {transform: "scale(1) translateY(0)",marginTop: "0",backgroundColor: "#3f525d", ease:"power1", duration: 0.5})
        navshow.to("#back-to-top", {opacity: 0, yPercent: 200, ease:"slow", duration: 1});
  }
}

// GSAP MODAL ANIMATION

function showmodal(img) {
            document.getElementById("image-show").src = img;
            const viewmodal = gsap.timeline();
            viewmodal.to("#web-modal-design", {display: "block",yPercent: -100, ease:"power4"})
            viewmodal.from("#image-view", {display: "block",opacity: 0, yPercent: 100, ease:"power4"},"-=0.8")    
            viewmodal.from(".share-btn-design", {opacity: 0,yPercent: 100, ease:"power4"},"-=0.5")    
}
function closemodal() {
            const closedmodal = gsap.timeline();
            closedmodal.to("#web-modal-design", {yPercent: 0,display: "none", ease:"expo"})
            viewmodal.from("#image-view", {display: "none",opacity: 0,yPercent: 0, ease:"power4"})    
            closedmodal.from(".share-btn-design", {opacity: 0, yPercent: 0, ease:"expo"})    
}

// GSAP HEADERS ANIMATION

function HeaderTextAnimation() {

            const h1 = gsap.timeline();
            h1.from(".h-anim-1",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});

                  ScrollTrigger.create({
                  animation: h1,
                  trigger: "h-anim-1",
                  start: "top top",
                  end: "+=500",
                  scrub: 1

            });
            const h2 = gsap.timeline();
            h2.from(".h-anim-2",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});
            h2.from(".div-anim11",{opacity: 0, yPercent: -100, ease:"power4", duration: 0.5});
            h2.from(".div-anim12",{opacity: 0, yPercent: 100, ease:"power4", duration: 0.5},"-=0.5");
            
            
                  ScrollTrigger.create({
                  animation: h2,
                  trigger: ".h-anim-2",
                  start: "top bottom",
                  end: "+=500",
                  scrub: 1

            });
            const h3 = gsap.timeline();
            h3.from(".h-anim-3",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});
            h3.from(".div-anim21",{opacity: 0, yPercent: -100, ease:"power4", duration: 0.5});
            h3.from(".div-anim22",{opacity: 0, yPercent: 100, ease:"power4", duration: 0.5},"-=0.5");

                  ScrollTrigger.create({
                  animation: h3,
                  trigger: ".h-anim-3",
                  start: "top bottom",
                  end: "+=500",
                  scrub: 1

            });
            const h4 = gsap.timeline();
            h4.from(".h-anim-4",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});


                  ScrollTrigger.create({
                  animation: h4,
                  trigger: ".h-anim-4",
                  start: "top bottom",
                  end: "+=500",
                  scrub: 1

            });  

            const h5 = gsap.timeline();
            h5.from(".h-anim-5",{opacity: 0, xPercent: -200, ease:"power4", duration: 0.5});
            h5.from(".div-anim31",{opacity: 0, yPercent: -100, ease:"power4", duration: 0.5});
            h5.from(".div-anim32",{opacity: 0, yPercent: 100, ease:"power4", duration: 0.5},"-=0.5");

                  ScrollTrigger.create({
                  animation: h5,
                  trigger: ".h-anim-5",
                  start: "top bottom",
                  end: "+=500",
                  scrub: 1

            }); 
}

// GSAP SLIDERBOX ANIMATION //

// GSAP SLIDERBOX SKILL PERCENTAGES CONFIG ================================= //

var ps = 90;
var pr = 65;
var html = 85;
var css3 = 85;
var javascript = 75;
var js6 = 75;
var php = 50;
var jquery = 75;
var dotnet = 60;
var sql = 70;
var java = 45;
var autocad = 20;

// ======================================================================= //

var p = 1;
const skillanim1 = anime.timeline({duration: 1000});
skillanim1.add({targets: '#ps',strokeDashoffset: 630 - (630 * ps) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim1.add({targets: '#pr',strokeDashoffset: 630 - (630 * pr) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim1.add({targets: '#html',strokeDashoffset: 630 - (630 * html) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})

const skillanim2 = anime.timeline({duration: 1000});
skillanim2.add({targets: '#css3',strokeDashoffset: 630 - (630 * css3) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim2.add({targets: '#javascript',strokeDashoffset: 630 - (630 * javascript) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim2.add({targets: '#js6',strokeDashoffset: 630 - (630 * js6) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})

const skillanim3 = anime.timeline({duration: 1000});
skillanim3.add({targets: '#php',strokeDashoffset: 630 - (630 * php) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim3.add({targets: '#jquery',strokeDashoffset: 630 - (630 * jquery) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim3.add({targets: '#dotnet',strokeDashoffset: 630 - (630 * dotnet) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})

const skillanim4 = anime.timeline({duration: 1000});
skillanim4.add({targets: '#sql',strokeDashoffset: 630 - (630 * sql) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim4.add({targets: '#java',strokeDashoffset: 630 - (630 * java) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})
skillanim4.add({targets: '#autocad',strokeDashoffset: 630 - (630 * autocad) / 100, delay: function(el, i) { return i * 100; },loop: false,easing: 'easeOutCirc'})

const output1 = document.querySelector("#p-ps");
const progress1 = {prog: 0}   
anime({targets: progress1, prog: ps,easing: "easeOutCirc",round: 1,delay: 0,update: function() {output1.innerHTML = JSON.stringify(progress1).split(":")[1].split("}")[0] + "%";}});
const output2 = document.querySelector("#p-pr");      
const progress2 = {prog: 0}   
anime({targets: progress2, prog: pr ,easing: "easeOutCirc",round: 1,delay: 1000,update: function() {output2.innerHTML = JSON.stringify(progress2).split(":")[1].split("}")[0] + "%";}});
const output3 = document.querySelector("#p-html");
const progress3 = {prog: 0}   
anime({targets: progress3, prog: html ,easing: "easeOutCirc",round: 1,delay: 2000,update: function() {output3.innerHTML = JSON.stringify(progress3).split(":")[1].split("}")[0] + "%";}});

document.querySelector("#d1").onclick = skillanim1.restart;
document.querySelector("#d2").onclick = skillanim2.restart;
document.querySelector("#d3").onclick = skillanim3.restart;
document.querySelector("#d4").onclick = skillanim4.restart;


      $("#d1").click(function() {
            p = 1;
            const skillanim1 = gsap.timeline();
            skillanim1.to("#slider-box", {xPercent: 0, ease:"slow"})
            const output1 = document.querySelector("#p-ps");
            const progress1 = {prog: 0}   
            anime({targets: progress1, prog: ps,easing: "easeOutCirc",round: 1,delay: 0,update: function() {output1.innerHTML = JSON.stringify(progress1).split(":")[1].split("}")[0] + "%";}});
            const output2 = document.querySelector("#p-pr");      
            const progress2 = {prog: 0}   
            anime({targets: progress2, prog: pr ,easing: "easeOutCirc",round: 1,delay: 1000,update: function() {output2.innerHTML = JSON.stringify(progress2).split(":")[1].split("}")[0] + "%";}});
            const output3 = document.querySelector("#p-html");
            const progress3 = {prog: 0}   
            anime({targets: progress3, prog: html ,easing: "easeOutCirc",round: 1,delay: 2000,update: function() {output3.innerHTML = JSON.stringify(progress3).split(":")[1].split("}")[0] + "%";}});      
      });

      $("#d2").click(function() {
            p = 2;
            const skillanim2 = gsap.timeline();
            skillanim2.to("#slider-box", {xPercent: -100, ease:"slow"})
            const output1 = document.querySelector("#p-css3");
            const progress1 = {prog: 0}   
            anime({targets: progress1, prog: css3,easing: "easeOutCirc",round: 1,delay: 0,update: function() {output1.innerHTML = JSON.stringify(progress1).split(":")[1].split("}")[0] + "%";}});
            const output2 = document.querySelector("#p-javascript");      
            const progress2 = {prog: 0}   
            anime({targets: progress2, prog: javascript ,easing: "easeOutCirc",round: 1,delay: 1000,update: function() {output2.innerHTML = JSON.stringify(progress2).split(":")[1].split("}")[0] + "%";}});
            const output3 = document.querySelector("#p-js6");
            const progress3 = {prog: 0}   
            anime({targets: progress3, prog: js6 ,easing: "easeOutCirc",round: 1,delay: 2000,update: function() {output3.innerHTML = JSON.stringify(progress3).split(":")[1].split("}")[0] + "%";}}); 
      });


      $("#d3").click(function() {
            p = 3;
            const skillanim3 = gsap.timeline();
            skillanim3.to("#slider-box", {xPercent: -200, ease:"slow"})
            const output1 = document.querySelector("#p-php");
            const progress1 = {prog: 0}   
            anime({targets: progress1, prog: php,easing: "easeOutCirc",round: 1,delay: 0,update: function() {output1.innerHTML = JSON.stringify(progress1).split(":")[1].split("}")[0] + "%";}});
            const output2 = document.querySelector("#p-jquery");      
            const progress2 = {prog: 0}   
            anime({targets: progress2, prog: jquery ,easing: "easeOutCirc",round: 1,delay: 1000,update: function() {output2.innerHTML = JSON.stringify(progress2).split(":")[1].split("}")[0] + "%";}});
            const output3 = document.querySelector("#p-dotnet");
            const progress3 = {prog: 0}   
            anime({targets: progress3, prog: dotnet ,easing: "easeOutCirc",round: 1,delay: 2000,update: function() {output3.innerHTML = JSON.stringify(progress3).split(":")[1].split("}")[0] + "%";}});      
      });
      $("#d4").click(function() {
            p = 4;
            const skillanim4 = gsap.timeline();

            skillanim4.to("#slider-box", {xPercent: -300, ease:"slow"})
            const output1 = document.querySelector("#p-sql");
            const progress1 = {prog: 0}   
            anime({targets: progress1, prog: sql,easing: "easeOutCirc",round: 1,delay: 0,update: function() {output1.innerHTML = JSON.stringify(progress1).split(":")[1].split("}")[0] + "%";}});
            const output2 = document.querySelector("#p-java");      
            const progress2 = {prog: 0}   
            anime({targets: progress2, prog: java ,easing: "easeOutCirc",round: 1,delay: 1000,update: function() {output2.innerHTML = JSON.stringify(progress2).split(":")[1].split("}")[0] + "%";}});
            const output3 = document.querySelector("#p-autocad");
            const progress3 = {prog: 0}   
            anime({targets: progress3, prog: autocad ,easing: "easeOutCirc",round: 1,delay: 2000,update: function() {output3.innerHTML = JSON.stringify(progress3).split(":")[1].split("}")[0] + "%";}});
      });
      $("#next").click(function() {
            if (p < 4) {
                  p += 1;
                  if (p == 1) {
                        document.getElementById("dot1").checked = "true";
                        $("#d1").click();
                  }
                  else if(p == 2) {
                        document.getElementById("dot2").checked = "true";
                        $("#d2").click();
                  }
                  else if(p == 3) {
                        document.getElementById("dot3").checked = "true";
                        $("#d3").click();
                  }
                  else if(p == 4) {
                        document.getElementById("dot4").checked = "true";
                        $("#d4").click();
                  }
            }
      });
      $("#previous").click(function() {
            if (p <= 4 && p > 1) {
                  p -= 1;
                  if (p == 1) {
                        document.getElementById("dot1").checked = "true";
                        $("#d1").click();
                  }
                  else if(p == 2) {
                        document.getElementById("dot2").checked = "true";
                        $("#d2").click();
                  }
                  else if(p == 3) {
                        document.getElementById("dot3").checked = "true";
                        $("#d3").click();
                  }
                  else if(p == 4) {
                        document.getElementById("dot4").checked = "true";
                        $("#d4").click();
                  }
            }
      });

// GSAP BANNER ANIMATION  //

function BannerAmination() {
            var banneranim = new TimelineMax({paused:true});     
            banneranim.fromTo(".semi-colon", 1, {opacity: 0,transform: "scale(0.8)", yPercent: -200}, {transform: "scale(1)",opacity: 1, ease: "power4"}, 0.5); 
            banneranim.fromTo(".semi-colon .colon", 1, {top: "220px",opacity: 1}, {top: "0",opacity:0,ease: "power4"}, 1); 
            banneranim.fromTo("#profile-img", 1, {opacity: 0}, {opacity: 1,ease: "slow"}, 1);      
            banneranim.fromTo(".banner-divider", 1, {opacity: 0, yPercent: -100}, {opacity: 1,yPercent: 0,ease: "power4"}, 1);      
            banneranim.fromTo(".blinking", 0.5, {color: "transparent"}, {color: "#ffffff",repeat: 2 ,ease: SteppedEase.config(3)}, 2);    
            banneranim.fromTo(".anim-fadein", 1, {opacity: 0, yPercent: 100}, {opacity: 1,yPercent: 0, ease: "power4"}, 4);
            banneranim.fromTo(".banner-light", 1, {width: 0}, {width: "321px",ease: "power4"}, 4);    
            banneranim.fromTo(".banner-dark", 1, {width: 0}, {width: "79%",ease: "power4"}, 4.5);  
            banneranim.fromTo(".anim-typ­ewriter2", 3.5, {width: "0"}, {width: "345px",ease: SteppedEase.config(9)}, 5);
            banneranim.fromTo(".anim-typ­ewriter2", 0.5, {borderRightColor: "transparent"}, {borderRightColor: "#ffffff",repeat: -1,ease: SteppedEase.config(9)}, 5);
            banneranim.fromTo(".banner-qouets", 1, {opacity: 0, yPercent: 200}, {opacity: 1, yPercent: 0,ease: "slow"}, 10);      
            banneranim.play();
      
            const swing = gsap.timeline();
            swing.to(".arrow-anim", {yPercent: 70, ease:"power1",yoyo: true, repeat: -1, duration: 0.6});
}


// GSAP PROJECTS ANIMATION //

function ProjectAnimation() {
            const pranim1 = gsap.timeline();
            pranim1
            .from(".anim-prone", {opacity: 0,yPercent: 50, ease: "power4", duration: 1})
            .from(".anim-prtwo", {opacity: 0, yPercent: 50, ease: "power4", duration: 1})
            .from(".anim-prthree", {opacity: 0, yPercent: 50, ease: "power4", duration: 1})
            .from(".anim-prfour", {opacity: 0, yPercent: 50, ease: "power4", duration: 1})

                  ScrollTrigger.create({
                  animation: pranim1,
                  trigger: ".h-anim-2",
                  start: "top center",
                  end: "+=700",
                  scrub: 2
                  });

            const pranim2 = gsap.timeline();
            pranim2
            .from(".anim-prfive", {opacity: 0, transform: "scale(0)", ease: "power4", duration: 1})
            .from(".anim-prsix", {opacity: 0, transform: "scale(0)", ease: "power4", duration: 1})
            .from(".anim-prseven", {opacity: 0, transform: "scale(0)", ease: "power4", duration: 1})
            .from(".anim-preight", {opacity: 0, transform: "scale(0)", ease: "power4", duration: 1})

                  ScrollTrigger.create({
                  animation: pranim2,
                  trigger: ".h-anim-3",
                  start: "top center",
                  end: "+=700",
                  scrub: 2
                  });
}

// ANIMATION MAIN CONTROL //

BannerAmination();
HeaderTextAnimation();
ProjectAnimation();

let ScrollMaster = gsap.timeline().to("#scroll-progress", {width: "100%"})  
ScrollTrigger.create({
      animation: ScrollMaster,
      trigger: "#root",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
});
