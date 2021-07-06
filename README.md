# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: https://github.com/jiatian2300/Frontend-Mentor-loopstudios-landing-page-main
- Live Site URL: https://jiatian2300.github.io/Frontend-Mentor-loopstudios-landing-page-main/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS
- Javascript

### What I learned

Load image based on screen size
```html
<picture>
	<source srcset="./images/desktop/image-grid.jpg" media="(min-width: 800px)">
	<img src="./images/mobile/image-grid.jpg" alt="grid">
</picture>
```

Animated Hamburger menu toggle
```css
.nav-toggle {
        background: none;
        border: none;
        z-index: 1;
        width: 2em;
        height: 2em;
        cursor: pointer;

        .hamburger {
            position: relative;
            width: 100%;
            height: 2px;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hamburger::before,
        .hamburger::after {
            content: "";
            position: absolute;
            z-index: 1;
            top: -5.5px;
            width: 100%;
            height: 2px;
            background: inherit;
        }

        .hamburger::after {
            top: 6px;
        }
	transition: all 0.3s ease;
}

.nav-toggle-close {
  	transform: rotate(135deg);
	.hamburger::before,
        .hamburger::after {
            top: 0;
            transform: rotate(90deg);
	}
}
```

Underline hover animation
```css
a::before {
	content: "";
	position: absolute;
    	width: 50%;
	height: 2px;
  	bottom: 0;
	left: 25%;
    	background-color: #99438f;
     	visibility: hidden;
   	transform: scaleX(0);
   	transition: all 0.3s ease-in-out 0s;
}

a:hover::before {
       	visibility: visible;
  	transform: scaleX(1);
}
```

### Useful resources

- [Animated Hamburger Menu](https://www.youtube.com/watch?v=DZg6UfS5zYg&t=1525s)

