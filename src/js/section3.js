import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";
import Variables from './Variables';

gsap.registerPlugin(ScrollTrigger);

gsap.to(document.body,
    {
        backgroundColor: 'white',
        ease: 'none',
        scrollTrigger: 
        {
            scrub: true,
            trigger: '.section3',
            start: "center center",
            end: "+=500"
        }
    })