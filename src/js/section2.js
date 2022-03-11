import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";
import Variables from './Variables';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section 2 animations
*/

// Split text set up
const sect1Header = gsap.timeline(),
mySplitText = new SplitText(".testPara", { type: "words, chars" }),
chars = mySplitText.chars;
gsap.set('.testPara', { perspective: 800 });
gsap.to('.testPara', { color: 'black', opacity: 1 })

// Create Section2 H2 animation
sect1Header.from(chars, {
    duration: 1,
    opacity: 0,
    scale: 1,
    y: 100,
    rotationX: 180,
    transformOrigin: "0%, 50% -30",
    ease: "back",
    stagger: .05,
})

// Stage H2 animation
ScrollTrigger.create({
    animation: sect1Header,
    trigger: ".testPara",
    pin: true,
    toggleActions: "play restart resume none",
    start: "top 15%",
    end: "+=8000",
    onEnter: () => console.log('1')
})

// Create body background-color change to #2a2a2e & Section2 H2 to white
const changeBackgroundToBlack = gsap.timeline();
changeBackgroundToBlack.to(document.body, {
    backgroundColor: '#2a2a2e',
    delay: 0.5
})
.fromTo('.testPara', 
{
    color: 'black',
},
{
    color: 'white',
})


// Stage body background-color change & Section2 H2 color change
ScrollTrigger.create({
    animation: changeBackgroundToBlack,
    trigger: '.section2',
    scrub: true,
    start: "top top",
    end: "+=1000",
    markers: true,
    onEnter: () => console.log('2')
});



// /**
//  * Section 2 onScroll animations
//  */

// Slide Section2 H2 out of view
gsap.fromTo('.testPara',
    {
        xPercent: 0,
        opacity: 1,
        display: 'inline-block'
    },
    {
        xPercent: -400,
        opacity: 0,
        display: 'none',
        scrollTrigger:
        {
            trigger: ".slide-container",
            start: "bottom bottom",
            pin: true,
            scrub: 1,
            end: `+=${document.querySelector(".section2").offsetWidth}`
        }
    })

// Create & stage each slide to move horizontally
const allSlides = gsap.utils.toArray('.slide');

gsap.to(allSlides,
    {
        xPercent: -100 * (allSlides.length - 1),
        ease: "none",
        scrollTrigger: 
        {
            trigger: ".slide-container",
            start: "bottom bottom",
            onUpdate: self => console.log("progress:", self.progress),
            pin: true,
            scrub: 1,
            snap: 1 / (allSlides.length - 1),
            anticipatePin: 1000,
            end: () => "+=" + document.querySelector(".section2").offsetWidth,
        }
    })
    
    

