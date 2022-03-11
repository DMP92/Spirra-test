import { gsap } from 'gsap';
import { SplitText } from "../../gsap/package/SplitText";
import { ScrollTrigger } from '../../gsap/package/ScrollTrigger'; 
import { DrawSVGPlugin } from "../../gsap/package/DrawSVGPlugin";
import Variables from './Variables';

/**
 * Variables
 */
const page = new Variables();
const menu = document.querySelector('.menuModal');

// Menu button 
const hamburger = document.querySelector('.hamburger');

// Get status of menu (closed/open)
const menuStatus = getComputedStyle(menu).display;
let menuClosed = true;

/**
 * On load events
 */
// Add menu interactions on page load
window.addEventListener('load', () => 
{
    setTimeout(() => 
    {
        if(menuClosed)
        {
            page.body.classList.remove('stop-scroll');
        }    
    }, 3000);
})

/**
 * On click events
 */
// Menu logic
hamburger.addEventListener('click', () => 
{
    // If menu closed - open, 
    // else - close
    if(menuClosed)
    {
        // Set menu to open
        menuClosed = false;

        // Prevent page scroll
        page.body.classList.add('stop-scroll')

        // Open menu
        menu.classList.add('visible');
        setTimeout(() => 
        {
            menu.classList.add('open');
        }, 500);

        setTimeout(() => 
        {
            showLinks();
        }, 830)
    }
    else 
    {
        // Set menu to closed
        menuClosed = true;

        // Close menu
        setTimeout(() => 
        {
            menu.classList.remove('open');
            console.log(menu)
        }, 500);

        setTimeout(() => {
            menu.classList.remove('visible');

            // Allow page scroll
            page.body.classList.remove('stop-scroll')

            // Hide menu links
            hideLinks();
        }, 1500)
    }
})

/**
 * Menu functions
 */

// Hide menu links
const hideLinks = () =>
{
    gsap.to('.menuLink', { opacity: 0, duration: 0, y: '100px' })
}

hideLinks();

// Show menu links
const showLinks = () => 
{
    gsap.to(
        '.menuLink', 
        { 
            opacity: 1, 
            duration: 1, 
            y: '0px', 
            ease: 'Elastic.easeOut'
        })
}