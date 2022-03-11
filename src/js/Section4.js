import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";
import Variables from './Variables';

/**
 * Options
 */
 gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);


// Animate SVG path
const svg = gsap.timeline();
svg.fromTo('.cls-1', {drawSVG: "0%" }, {drawSVG: "100%" });

ScrollTrigger.create({
    animation: svg,
    trigger: '.cls-1',
    scrub: true,
    ease: "easeInOut",
    start: "top center",
    end: "+=2000px", 
})
