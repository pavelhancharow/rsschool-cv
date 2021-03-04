import carousel from "./modules/carousel.js";
import menu from "./modules/menu.js";
import progressBar from "./modules/progress-bar.js";
import scrolling from "./modules/scrolling.js";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  progressBar();
  scrolling('.pageup', '.header');
  carousel();
  menu('.btn-mobile', '.m-menu', '[data-close]');
});