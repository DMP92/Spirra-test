import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";
import Variables from './Variables';

/**
 * Options
 */
gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVGPlugin);

// variables
const page = new Variables();

/**
 * Onload animations
 */
window.addEventListener('load', () => 
{
    // Force page to top on load
    window.scrollTo(0, 0);

    // Prevent page scroll
    page.body.classList.add('stop-scroll');

    // Header slide in
    gsap.fromTo(".section1", 
    {
        x: "-100%",
        
    },
    {
        x: "0%",
        duration: 1,
        ease: "power4.out",
    });

    // Header buttons fade in
    gsap.fromTo('.sect1CTAContainer',
    {
        opacity: "0%"
    },
    {
        opacity: "100%",
        delay: 2.35
    })

    // Hamburger slide in
    gsap.fromTo('.botLine', 
    {
        x: '-100px'
    },
    {
        x: "0%",
        delay: 2.55,
        ease: 'power4.out'
    })

    gsap.fromTo('.midLine', 
    {
        x: '-100px'
    },
    {
        x: "0%",
        delay: 2.75,
        ease: 'power4.out'
    })

    gsap.fromTo('.topLine', 
    {
        x: '-100px'
    },
    {
        x: "0%",
        delay: 3,
        ease: 'power4.out',
    })

    /**
     * Section 2
     */
    
})