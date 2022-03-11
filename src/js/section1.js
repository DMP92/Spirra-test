import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";
import Variables from './Variables';

/**
 * Section 1 animations
 */

const section1 = document.querySelector('.canvas');
const sect = {
    ele: section1,
    win: window,
    doc: document,
};

// H1 animation
const h1 = document.querySelectorAll('h1');
gsap.set(h1, { perspective: 800 });

const h1TL = gsap.timeline(),
mySplitTexts = new SplitText(h1, { type: "words, chars" }),
charss = mySplitTexts.chars;

h1TL.from(charss, {
    delay: 1,
    duration: .3,
    opacity: 0,
    scale: 1,
    y: 80,
    transformOrigin: "0%, 50% -30",
    ease: Power4.easeOut,
    stagger: .02
})

window.addEventListener('resize', () =>
{
    console.log(window.innerWidth);
})

// Sub header animation
const h2 = document.querySelector('.header2');
const h2TL = gsap.fromTo('.header2',
{
    opacity: 0,
    x: '-50%',
}, 
{
    opacity: 1,
    x: '0%',
    delay: 2,
});

