/**
 * App JS
 */
console.log('Hello from App JS');

import { search } from '../js/search.js';


// @todo: move to better location within project
// remove jello class after a few seconds of hovering
// @todo: figure out performance
function removeJello() {

const elements = document.querySelectorAll(".interactive");

elements.forEach((item) => {
        item.addEventListener("mouseover", (event) => {

        setTimeout(() => {

            event.target.classList.remove("jello");

            console.log("Delayed for 3 second.");

            return;

        }, "3000");

            return;
        });

        return;
    });

    return;
}
  
// window.addEventListener("DOMContentLoaded", (event) => {
//     removeJello();
// });