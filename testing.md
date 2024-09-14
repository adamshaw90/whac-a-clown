# Testing

## Table Of Contents

1. [Code Validation](#code-validation)
1. [Site Responsiveness](#site-responsiveness)
1. [Manual Testing](#manual-testing)
1. [Browser Compatibility](#browser-compatibility)
1. [Performance](#performance)
1. [Bugs](#bugs)
1. [Unsolved Bugs](#unsolved-bugs)

# Code Validation

### HTML

### Home page:

- No errors or warnings to show.

![HomepageVal](documentation/Indexval.PNG)

### About page:

- No errors or warnings to show.

![AboutpageVal](documentation/aboutval.PNG)

### Hire page:

- No errors or warnings to show.

![HirepageVal](documentation/hireval.PNG)

### Gallery page:

- No errors or warnings to show.

![GallerypageVal](documentation/galleryval.PNG)

### Contact page:

- No errors or warnings to show.

![ContactpageVal](documentation/contactval.PNG)

### Submit page:

- No errors or warnings to show.

![SubmitpageVal](documentation/submitval.PNG)

### 404 page:

- No errors or warnings to show.

![404pageVal](documentation/404val.PNG)

### CSS

![CSSval](documentation/cssval.PNG)

# Site Responsiveness

The website has been tested on multiple devices to ensure responsiveness remains on whatever device the webisite is loaded to.

### Desktop

![Desktop](documentation/desktop.PNG)

### Iphone 14

![Iphone14](documentation/iphone14.PNG)

### Ipad

![Ipad](documentation/ipad.PNG)

### Kindle Fire

![Kindle](documentation/kindle.PNG)

### Samsung S20

![Samsungs20](documentation/samsungs20.PNG)


# Manual Testing

Manual testing was carried out on all elements of the site to ensure that everything worked as expected.

Testing also carried out by multiple people in addition to myself.

| ELEMENT | PROCESS | EXPECTED RESULT | OUTCOME |
| ------- | ------- | --------------- | ------- |
| Logo and website name | Click | Return to homepage | Successful |
| Navbar 'Home' button | Click | Return to homepage | Successful |
| Navbar 'About' button | Click | Navigate to About page | Successful |
| Navbar 'Hire' button | Click | Navigate to Hire page | Successful |
| Navbar 'Gallery' button | Click | Navigate to Gallery page | Successful |
| Navbar 'Contact' button | Click | Navigate to Contact page | Successful |
| Navbar buttons | Hover | Colours invert | Successful |
| Navbar buttons | Click | Current page underlined | Successful |
| 3 homepage link buttons | Hover | Colour fades | Successful |
| 3 homepage link buttons | Click | Navigate to corresponding page | Successful |
| Social media footer links | Click | Navigate to corresponding page in new tab | Successful |
| Hire page hyperlinks | Click | Navigate to corresponding page in new tab | Successful |
| Gallery images | Click | Open full image in new tab | Successful |
| Contact page map | Click and scroll | Move map / zoom  | Successful |
| Contact form | Enter text | No submit allowed unless name, correctly formatted email address and message are inputted | Successful |
| Contact form submit button | Click | Navigate to submit successful page | Successful |
| Broken link | Enter | Navigate to 404 page | Successful |
| Hamburger button | Click | Nav links dropdown | Successful |



# Browser Compatibility

This website has been tested across multiple browsers to ensure it can be transitioned smoothly.

### Google Chrome:

- No issues.

![Chromebrowsertest](documentation/chromeval.PNG)

### Mozilla Firefox:

- No issues.

![Firefoxbrowsertest](documentation/firefoxval.PNG)

### Microsoft Edge:

- No issues.

![Edgebrowsertest](documentation/edgeval.PNG)



# Performance

Lighthouse was used to verify that the web pages are performing well and are are well optimized.

### Home page:

![Homelighthouse](documentation/home-lighthouse.PNG)

### About page:

![Aboutlighthouse](documentation/about-lighthouse.PNG)

### Hire page:

![Hirelighthouse](documentation/hire-lighthouse.PNG)

### Gallery page:

![Gallerylighthouse](documentation/gallery-lighthouse.PNG)

### Contact page:

![Contactlighthouse](documentation/contact-lighthouse.PNG)

### Submit page:

![Submitlighthouse](documentation/submit-lighthouse.PNG)

### 404 page:

![404lighthouse](documentation/404-lighthouse.PNG)

# Solved Bugs

## Side scroll bar

- There was an issue with a side scroll bar being applied to the homepage (see below image).

![Scrollbug](documentation/scroll%20bug.PNG)

- To fix this issue, I had to change the margin-right value in the CSS .row from -15 to 0.

## Navbar menu items stuck on left

- The Navbar menu items were displaying on the left of the bar and I wanted them on the right (see below image).

![Navbarwrongside](documentation/navbar%20wrong%20side.PNG)

- To fix this issue I had to add another class of .navbar-collapse justify-content : flex-end.

## Hero image too big

- I had issues with the hero image being to big on the home page  (see below image).

![Heroimagesize](documentation/hero%20image%20too%20big.PNG)

- I resized the image using the code shown below.

![Herocode](documentation/herocode.PNG)

## Gallery images not loading

- When navigating to the gallery page, the images were taking a long time to load (see below image).

![Galleryissue](documentation/galleryloading.PNG)

- This loading issue was overcome by resizing the images with paint and then converting the images to the WEBP format.

## Contact page email issue

- The contact page form was allowing the form to be submitted without the correct email format.
- This was fixed by adding 'required' to the HTML on the email form element.

![Emailfix](documentation/emailfix.PNG)

## Contact form not responsive

- The contact page form was overlapping the map when viewed on a smaller device (see below).

![Contactbug](documentation/contactbug.PNG)

- This was solved by changing the CSS code on the iframe from the fixed width of 500px to 100%.

# Unsolved Bugs

- All bugs solved.