import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";

export default class Variables
{
    constructor()
    {
        this.body = document.body;
        

    }

    returnBody()
    {
        return this.body;
    }
}