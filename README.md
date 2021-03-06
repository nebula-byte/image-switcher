[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Image Switcher
![Image Switcher Screenshot](https://github.com/nebula-byte/nebula-byte-content/blob/main/image-switcher.gif)

Add image-switcher to toggle on action.

- No localStorage, only DOM

## Installation

```html
npm i image-switcher
```

## Usage

1. Load `image-switcher.min.js` at the foot of your page:

```html
<script src="image-switcher.js"></script>
```

2. Add ID to your image switch action:

```html
<a href="#" id="image-switcher-action">
    Switch image
</a>
```

3. Add image sources and class to your image tag to switch:

```html
<img class="image-switcher" src="images/1232.jpg" data-switch-src="images/1266.jpg">
```

3. Add animation on images from [animate.style](https://animate.style/):

```html
<a href="#" class="image-switch-animation" id="image-switcher-action">
    Switch image
</a>
<img class="image-switcher" src="images/1232.jpg" data-switch-src="images/1266.jpg" data-animation="bounce">
```