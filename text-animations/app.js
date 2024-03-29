const tl = gsap.timeline({defaults: {duration: 0.75, ease:'Power3.easeOut'}});  

//image animation

tl.fromTo('.hero-img', {scale: 1.2, borderRadius:"0rem", color:"white"},{scale:1, borderRadius: "2rem", color:"rgb(33,33,33)", delay: 0.3, duration:2, ease: 'elastic.out(1.5,1)'})


//cta-section animation

tl.fromTo('.cta1', {x:110, opacity:0}, {x:0, opacity:1}, "<20%")
tl.fromTo('.cta2', {y:-110, opacity:0}, {y:0, opacity:1}, "<20%")
tl.fromTo('.cta3', {x:-110, opacity:0}, {x:0, opacity:1}, "<20%")


tl.fromTo('.cta4', {x:-110, opacity:0}, {x:0, opacity:1}, "<20%")
tl.fromTo('.cta5', {y:110, opacity:0}, {y:0, opacity:1}, "<20%")
tl.fromTo('.cta6', {x:110, opacity:0}, {x:0, opacity:1}, "<20%")


tl.fromTo('.cta-btn', {y: 20, opacity: 0}, {y: 0, opacity: 1}, "<50%");


//nav : split text animation
const logo = document.querySelector(".logo");
const letters = logo.textContent.split('');

logo.textContent = "";

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letter">' + letter + '</span>'
})

gsap.set('.letter', {display: "inline-block"});

gsap.fromTo('.letter', {y: -30}, {y: 0, delay: 1, stagger: 0.07, ease:'back.out(2)'})